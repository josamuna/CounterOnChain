const { ethers } = require("hardhat");

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.deployed();

  console.log(`Contract Counter deployed successfully at: ${counter.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(`Something went wront, ${error}`);
    process.exit(1);
  });
