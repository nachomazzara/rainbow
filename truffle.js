/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  networks: {
    livenet: {
      host: "localhost",
      port: 8545,
      gas: 70000000,
      network_id: "*" // Match any network id
    },
    development: {
      host: "localhost",
      port: 18545,
      gas: 100000000,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: "localhost",
      port: 18545,
      network_id: 3, // official id of the ropsten network
      gas: 30000000
    }
  }
};