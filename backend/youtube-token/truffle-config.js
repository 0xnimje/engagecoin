const HDWalletProvider = require('@truffle/hdwallet-provider');
const alchemyKey = "n3n6wNBAfI1zQ1Eq23E2pP_O633Ya5yN";
const mnemonic = "behave must dilemma absorb interest ahead labor busy motor involve hawk gentle";

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`),
      network_id: 11155111,       // Sepolia's network id
      gas: 5500000,               // Gas limit
      confirmations: 2,           // Number of confirmations to wait between deployments
      timeoutBlocks: 200,         // Number of blocks before a deployment times out
      skipDryRun: true            // Skip dry run before migrations
    }
  },
  compilers: {
    solc: {
      version: "0.8.20",            // Fetch exact version from solc-bin
    }
  }
};
