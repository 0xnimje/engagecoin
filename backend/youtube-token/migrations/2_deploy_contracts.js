const YouTubeToken = artifacts.require("YouTubeToken");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(YouTubeToken, accounts[0]);
};
