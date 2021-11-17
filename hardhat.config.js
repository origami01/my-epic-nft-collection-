require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: 'STAGING_ALCHEMY_KEY',
      accounts: ['PRIVATE_KEY'],

    },
  },
};
