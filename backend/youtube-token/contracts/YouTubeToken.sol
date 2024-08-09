// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract YouTubeToken is ERC20, Ownable {
    struct ChannelData {
        address owner;
        uint256 tokenSupply;
        uint256 tokenPrice;
        string dataCID;
        uint256 liquidity; // Store liquidity for the channel
    }

    mapping(string => ChannelData) public channels;
    string[] public channelIds;

    uint256 public royaltyPercentage = 5;

    constructor(address initialOwner) ERC20("YouTubeToken", "YTT") Ownable(initialOwner) {}

    // Function to register a new YouTube channel with tokens
    function registerChannel(string memory channelId, uint256 initialSupply) external onlyOwner {
        require(channels[channelId].owner == address(0), "Channel already registered");
        channels[channelId] = ChannelData({
            owner: msg.sender,
            tokenSupply: initialSupply,
            tokenPrice: 1 ether, // Default token price, adjust as needed
            dataCID: "",
            liquidity: 0
        });
        channelIds.push(channelId);
        _mint(msg.sender, initialSupply);
    }

    // Function to update token price based on metrics
    function updateTokenPrice(string memory channelId, uint256 subscribers, uint256 views, uint256 likes, uint256 comments) public onlyOwner {
        require(channels[channelId].owner != address(0), "Channel not registered");
        // Example pricing algorithm based on engagement metrics
        channels[channelId].tokenPrice = (subscribers + views + likes + comments) / 1000;
    }

    // Function to update the CID of the latest engagement data
    function updateDataCID(string memory channelId, string memory _cid) public onlyOwner {
        require(channels[channelId].owner != address(0), "Channel not registered");
        channels[channelId].dataCID = _cid;
    }

    // Function to add liquidity to a channel
    function addLiquidity(string memory channelId, uint256 amount) public onlyOwner {
        require(channels[channelId].owner != address(0), "Channel not registered");
        require(balanceOf(msg.sender) >= amount, "Insufficient token balance");
        _transfer(msg.sender, address(this), amount);
        channels[channelId].liquidity += amount;
    }

    // Function to buy tokens
    function buyToken(string memory channelId, uint256 amount) external payable {
        require(channels[channelId].owner != address(0), "Channel not registered");
        uint256 totalCost = amount * channels[channelId].tokenPrice;
        require(msg.value >= totalCost, "Insufficient funds");
        require(channels[channelId].liquidity >= amount, "Insufficient liquidity");

        channels[channelId].liquidity -= amount;
        _transfer(address(this), msg.sender, amount);

        uint256 royaltyAmount = (msg.value * royaltyPercentage) / 100;
        uint256 ownerAmount = msg.value - royaltyAmount;
        payable(channels[channelId].owner).transfer(ownerAmount);
        payable(owner()).transfer(royaltyAmount); // Transfer royalty to contract owner
    }

    // Function to sell tokens
    function sellToken(string memory channelId, uint256 amount) external {
        require(channels[channelId].owner != address(0), "Channel not registered");
        uint256 totalCost = amount * channels[channelId].tokenPrice;
        require(address(this).balance >= totalCost, "Insufficient contract balance");

        channels[channelId].liquidity += amount;
        _transfer(msg.sender, address(this), amount);
        payable(msg.sender).transfer(totalCost);
    }

    // Function to set the royalty percentage
    function setRoyaltyPercentage(uint256 _percentage) public onlyOwner {
        require(_percentage <= 100, "Percentage cannot exceed 100");
        royaltyPercentage = _percentage;
    }

    // Function to mint new tokens
    function mint(string memory channelId, address to, uint256 amount) external onlyOwner {
        require(channels[channelId].owner != address(0), "Channel not registered");
        _mint(to, amount);
        channels[channelId].tokenSupply += amount;
    }

    // Function to get all channel data
    function getAllChannels() public view returns (string[] memory, ChannelData[] memory) {
        ChannelData[] memory allChannelData = new ChannelData[](channelIds.length);
        for (uint256 i = 0; i < channelIds.length; i++) {
            allChannelData[i] = channels[channelIds[i]];
        }
        return (channelIds, allChannelData);
    }

    // Function to get the latest CID for a channel
    function getLatestDataCID(string memory channelId) public view returns (string memory) {
        return channels[channelId].dataCID;
    }

    // Function to get the token price for a specific channel
    function getTokenPrice(string memory channelId) public view returns (uint256) {
        return channels[channelId].tokenPrice;
    }
}
