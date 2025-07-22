import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config()

const { PRIVATE_KEY,ETHERSCAN_KEY ,SEPOLIA_URL_KEY, CORE_URL_KEY } = process.env
const config: HardhatUserConfig = {
  solidity: "0.8.30",
  // ...rest of your config...
  networks: {
    sepolia: {
      url: SEPOLIA_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    coretestnet: {
      url: CORE_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey:  ETHERSCAN_KEY,
    
  },
};

export default config;