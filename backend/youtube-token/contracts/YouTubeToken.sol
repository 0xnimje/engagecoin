// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract YouTubeToken is ERC20, Ownable {
    mapping(string => address) public channelOwners;
    mapping(string => uint256) public channelTokens;

    constructor(address initialOwner) ERC20("YouTubeToken", "YTT") Ownable(initialOwner) {}

    function createChannelToken(string memory channelId, uint256 initialSupply) external onlyOwner {
        require(channelOwners[channelId] == address(0), "Channel token already exists");
        channelOwners[channelId] = msg.sender;
        _mint(msg.sender, initialSupply);
        channelTokens[channelId] = initialSupply;
    }

    function buyToken(string memory channelId, uint256 amount) external payable {
        require(channelOwners[channelId] != address(0), "Channel token does not exist");
        uint256 totalCost = amount * (1 ether); // Define your own token price logic
        require(msg.value >= totalCost, "Insufficient funds");

        address owner = channelOwners[channelId];
        _transfer(owner, msg.sender, amount);
        payable(owner).transfer(msg.value);
    }

    function sellToken(string memory channelId, uint256 amount) external {
        require(channelOwners[channelId] != address(0), "Channel token does not exist");
        uint256 totalCost = amount * (1 ether); // Define your own token price logic
        _transfer(msg.sender, channelOwners[channelId], amount);
        payable(msg.sender).transfer(totalCost);
    }

    function royaltyFee(address to, uint256 amount) external onlyOwner {
        _transfer(msg.sender, to, amount);
    }
}
