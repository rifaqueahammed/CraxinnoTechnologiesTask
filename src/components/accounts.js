import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAccount } from "../features/accountSlice";

function Accounts() {
  const accounts = useSelector((state) => state.account.accounts);
  const [balance, setBalance] = useState(null);
  const dispatch = useDispatch();

  const addUserAccount = () => {
    dispatch(addAccount(balance));
  };

  return (
    <div className="p-4 w-1/4 border h-screen flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Accounts</h1>
      <h1>Count :{accounts.length}</h1>
      <div className="">
        <div className="flex gap-2">
          <label>Balance</label>
          <input
            className="p-1 border"
            onChange={(e) => setBalance(e.target.value)}
          ></input>
        </div>
        <button
          className="p-2 bg-gray-600 rounded-md text-white ml-2 mt-2"
          onClick={addUserAccount}
        >
          Submit
        </button>
      </div>
      <div>
        {accounts.map((account, key) => (
          <h1 key={key}>
            Balance:<span className="text-gray-700 ml-2">{account}</span>
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Accounts;
