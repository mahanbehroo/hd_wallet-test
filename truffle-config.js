require('dotenv').config();


const HDWalletProvider = require('truffle-hdwallet-provider');


module.exports = {
netwoks: {
  ropsten: {
    provider: function() {
      return new HDWalletProvider(
        process.env.DEPLOYMENT_ACCOUNT_KEY,
        "https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}"
      )
    },
    gasPrice: 25000000000,
    network_id: "3"
  },

development: {
  host: "http://127.0.0.1",
  port: 7545,
  network_id: "*"
  }
},

  solc:{
    optimizer:{
      enabled: true,
      runs: 2
    }
  }
};
