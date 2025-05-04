const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",  // FIXED
      port: 7545,         // Matches Ganache RPC port
      network_id: "5777", // Matches Ganache network ID
    }
  },

  compilers: {
    solc: { 
      version: "0.8.21"
    }
  }
};