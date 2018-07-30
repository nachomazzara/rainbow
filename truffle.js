var HDWalletProvider = require('truffle-hdwallet-provider')
var infura_apikey = ' '
var mnemonic = ''

module.exports = {
  networks: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
    livenet: {
      host: 'localhost',
      port: 8545,
      gas: 70000000,
      network_id: '*' // Match any network id
    },
    development: {
      host: 'localhost',
      port: 18545,
      gas: 100000000,
      network_id: '*' // Match any network id
    }
    // ropsten: {
    //   provider: new HDWalletProvider(
    //     mnemonic,
    //     'https://ropsten.infura.io/' + infura_apikey
    //   ),
    //   network_id: 3,
    //   gas: 4698712
    // }
  }
}
