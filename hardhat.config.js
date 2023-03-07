require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.6",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      chainId: 5,
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.MAIN_GOERLI_ACCOUNT],
    },
    mumbai: {
      chainId: 80001,
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.MAIN_MUMBAI_ACCOUNT],
    },
  },
  gasReporter: {
    enabled: true,
    noColors: true,
    // token: "matic",
    currency: "USD",
    coinmarketcap: process.env.COINMARKETKAT_API8KEY,
    outputFile: "gasReporter.txt",
  },
  paths: {
    source: "./contracts",
    tests: "./test",
    artifacts: "./artifacts",
    caches: "./cache",
  },
};
