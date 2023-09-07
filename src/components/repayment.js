import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { totalBalance } from "../features/accountSlice";

function Repayment() {
    const accounts = useSelector((state) => state.account.initialBalance);
    const sum = useSelector((state) => state.account.sum);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [initialBalance,setInitialBalance] = useState(0);
    const [month, setMont] = useState(0);
    const dispatch = useDispatch();
    

    const calculateBalance = ()=>{
        const balance = accounts[accounts.length-1].balance;
        setInitialBalance(balance-monthlyPayment);
        setMont(accounts[accounts.length-1].month+1)
        const data = {
         initialBalance,
         month
        };
    dispatch(totalBalance(data));
    }

  return (
    <div className='p-4 w-full'>
      <div className='p-2'>
        <h1 className='text-2xl font-bold'>Initial Balance :{sum}</h1>
        <label>Monthly Payment</label>
          <input className="p-1 border ml-2" onChange={(e)=>setMonthlyPayment(e.target.value)}></input>
          <button className="p-2 bg-gray-600 rounded-md text-white ml-2 mt-2" onClick={calculateBalance}>
          Submit
        </button>
      </div>
      <hr></hr>
      <div>
        <h1>hello</h1>
      </div>
    </div>
  )
}

export default Repayment
