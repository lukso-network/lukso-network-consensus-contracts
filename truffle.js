module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 6600000,
      network_id: "*" // Match any network id
    },
    test: {
      host: "localhost",
      port: 8544,
      gas: 6600000,
      network_id: "*" // Match any network id
    },
    coverage: {
      host: "http://35.198.126.103",
      network_id: "*",
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    l14: {
      host: "localhost",
      port: 8545,
      gas: 6400000,
      network_id: "*" // Match any network id
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  mocha: {
    reporter: 'mochawesome',
    enableTimeouts: false
  }
};
