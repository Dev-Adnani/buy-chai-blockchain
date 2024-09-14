import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ChaiModule = buildModule("ChaiModule", (m) => {
  // Deploy the Chai contract without sending ether
  const chai = m.contract("Chai", []);

  return { chai };
});

export default ChaiModule;
