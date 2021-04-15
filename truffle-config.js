require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');


module.exports = {
networks: {
  ropsten: {
    provider: function() {
      return new HDWalletProvider(
        process.env.DEPLOYMENT_ACCOUNT_KEY,
        "https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}"
      )
    },
    gasPrice: 25000000000000,
    network_id: "3",
    networkCheckTimeout: 50000
  },

  kovan: {
	    provider: new HDWalletProvider(process.env.DEPLOYMENT_ACCOUNT_KEY, "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY),
	    network_id: 42,
	    gas: 5000000,
			gasPrice: 5000000000, // 5 Gwei
			skipDryRun: true
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
