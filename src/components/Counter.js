import React from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useState, useEffect } from "react";

import CounterContract from "../abis/Counter.json";
import { counteraddress } from "../config";

function Counter() {
  const [result, setResult] = useState(0);
  loadCurrentValue();
  useEffect(() => {}, []);

  async function loadCurrentValue() {
    try {
      const provider = new ethers.providers.JsonRpcProvider();
      const contract = new ethers.Contract(
        counteraddress,
        CounterContract.abi,
        provider
      );
      const data = await contract.currentValue();
      setResult(data);
    } catch (error) {
      NotificationManager.warning(
        "Failed to load the current value",
        "Load current value",
        500
      );
      console.log(`loadCurrentValue => ${error}`);
    }
  }

  async function increment() {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        counteraddress,
        CounterContract.abi,
        signer
      );
      const transaction = await contract.increment();

      await transaction.wait();
      loadCurrentValue();
    } catch (error) {
      NotificationManager.warning(
        "Failed to increment value",
        "Increment value",
        5000
      );
      console.log(`increment => ${error}`);
    }
  }

  async function decrement() {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        counteraddress,
        CounterContract.abi,
        signer
      );
      const transaction = await contract.decrement();
      await transaction.wait();

      loadCurrentValue();
    } catch (error) {
      NotificationManager.warning(
        "Failed to decrement value",
        "Decrement value",
        5000
      );
      console.log(`decrement => ${error}`);
    }
  }
  return (
    <section>
      <article>
        <article className="flex flex-col">
          <article className="flex align-center">
            <input
              className="border border-blue-700 p-4"
              placeholder="Result"
              type="text"
              value={result}
              disabled
            />
          </article>
          <article className="flex align-center">
            <article className="flex flex-row">
              <div className="grow">
                <button
                  className="p-4 m-4 text-white rounded-lg shadow-lg :hover bg-gradiant-to-b from-blue-400 to to-green-600"
                  onClick={increment}
                >
                  Increment
                </button>
              </div>
              <div className="grow">
                <button
                  className="p-4 m-4 text-white rounded-lg shadow-lg :hover bg-gradient-to-t from-green-600 to to-blue-600"
                  onClick={decrement}
                >
                  Decrement
                </button>
              </div>
            </article>
          </article>
        </article>
      </article>
      <article>
        <NotificationContainer />
      </article>
    </section>
  );
}

export default Counter;
