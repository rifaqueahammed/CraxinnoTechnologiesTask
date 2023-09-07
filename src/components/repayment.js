import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { accountsData } from "../features/accountSlice";
import Graph from './graph';

function Repayment() {
    const accounts = useSelector((state) => state.account.accounts);
    const  data = useSelector((state) => state.account.initialBalance);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [initialBalance,setInitialBalance] = useState(null);
    const [month, setMont] = useState(0);
    const dispatch = useDispatch();
    

    useEffect(()=>{
        const totalBalance = accounts.reduce((accumulator, currentValue)=>accumulator+parseInt(currentValue),0);
        setInitialBalance(totalBalance);
    }, [accounts]);

    const calculateBalance = ()=>{
        const newInitialBalance = initialBalance-monthlyPayment;
        const newMonth = data.length+1;
        setInitialBalance(newInitialBalance)
        setMont(newMonth);
        updateData();
    }
    const updateData = ()=>{
        const newData = {
            month:month,
            initialBalance:initialBalance
           };
       dispatch(accountsData(newData));
    }

  return (
    <div className='p-4 w-full'>
      <div className='p-2'>
        <h1 className='text-2xl font-bold'>Initial Balance :{initialBalance}</h1>
        <label>Monthly Payment</label>
          <input className="p-1 border ml-2" onChange={(e)=>setMonthlyPayment(e.target.value)}></input>
          <button className="p-2 bg-gray-600 rounded-md text-white ml-2 mt-2" onClick={calculateBalance}>
          Submit
        </button>
      </div>
      <hr></hr>
      <div className='mt-10 shadow-md'>
        <Graph />
      </div>
    </div>
  )
}

export default Repayment
