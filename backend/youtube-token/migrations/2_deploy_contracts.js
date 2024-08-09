const YoutubeToken = artifacts.require("YouTubeToken");

module.exports = function (deployer) {
  deployer.deploy(YoutubeToken);
};
