require("@nomicfoundation/hardhat-toolbox");

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "xJwr1pUBEIS2N1hJqw-gQ6_3jI10rFxo";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = "ca46a9eb514f59b9b7e69ac7c7cc9e976395ac9e222faef087fa898dbccb3939";
const PUPPYNET_PRIVATE_KEY = "b4963db0ad1d5920a24492d49f88f3501c5acc8de7c248911fc4eb1fc2a5d009";

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    },
    puppynet: {
      url: `https://puppynet.shibrpc.com`,
      accounts: [PUPPYNET_PRIVATE_KEY]
    }
  }
};

//0x071063F7EfAA6A0F537B43C1b65fA058DA681FFe


//https://sepolia.etherscan.io/address/[THIS_IS SEPOLIA_ADDRESS]
//https://sepolia.etherscan.io/address/0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
