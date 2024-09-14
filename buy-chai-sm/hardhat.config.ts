import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const SEPOLIAURL = process.env.SEPOLIAURL;
const MMPKEY = process.env.MMPKEY;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: { 
      url:SEPOLIAURL,
      accounts: [MMPKEY!]
    },
  }
};



export default config;

