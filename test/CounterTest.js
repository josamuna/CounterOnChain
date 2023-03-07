const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Counter contract", function () {
  let Counter;
  let counter;

  before(async function () {
    Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
  });

  it("Value should be incremented by 1", async function () {
    const value1 = await counter.currentValue();
    const currentValueBefore = await value1.toNumber();
    await counter.increment();
    const value2 = await counter.currentValue();
    const currentValueAfter = await value2.toNumber();

    expect(currentValueAfter).to.equal(currentValueBefore + 1);
  });

  it("Value should be decremented by 1", async function () {
    const value1 = await counter.currentValue();
    const currentValueBefore = await value1.toNumber(); // 1
    await counter.decrement();
    const value2 = await counter.currentValue();
    const currentValueAfter = await value2.toNumber(); // 0

    expect(currentValueAfter).to.equal(currentValueBefore - 1);
    // Once value is 0, decrement should always return 0
    await counter.decrement();
    const newCurrentValue = await counter.currentValue();
    expect(newCurrentValue).to.equal("0");
  });
});
