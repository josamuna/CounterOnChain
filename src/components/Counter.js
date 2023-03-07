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
import "react-notifications/lib/notifications.css";

function Counter() {
  const [result, setResult] = useState(0);

  useEffect(() => {
    loadCurrentValue();
  }, []);

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
      <article className="flex flex-row justify-center">
        <article className="w-1/3 flex flex-col">
          <article>
            <input
              className="w-full border border-sky-500 p-4 rounded-lg"
              placeholder="Result"
              type="text"
              value={result}
              disabled
            />
          </article>
          <article>
            <article className="flex flex-row mt-4">
              <div className="w-1/2 flex justify-center">
                <button
                  className="w-3/4 bg-gradient-to-l from-green-600 to to-blue-600 p-4 m-4 ml-0 font-bold text-white rounded-lg shadow-lg hover:from-yellow-500 hover:to-pink-500"
                  onClick={increment}
                >
                  Increment
                </button>
              </div>
              <div className="w-1/2 justify-center">
                <button
                  className="w-3/4 bg-gradient-to-l from-blue-600 to to-green-600 p-4 m-4 mr-0 font-bold text-white rounded-lg shadow-lg hover:from-pink-500 hover:to-yellow-500"
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
