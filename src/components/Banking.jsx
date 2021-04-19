import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deposit,
  withdraw,
  collectInterest,
  deleteAccount,
  toggleAccount
} from '../actions/bankingActions';
const Banking = () => {
  const [amount, setAmount] = useState(0);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setAmount(e.target.value);
  };
  const handleDeposit = () => {
    dispatch(deposit(amount));
    setAmount(0);
  };
  const handleWithdraw = () => {
    dispatch(withdraw(amount));
    setAmount(0);
  };
  const handleCollectInterest = () => {
    dispatch(collectInterest());
    setAmount(0);
  };
  const handleChangeAccount = () => {
    dispatch(toggleAccount());
    setAmount(0);
  };
  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
    setAmount(0);
  };
  return (
    <div className='form-group'>
      <input
        placeholder='Amount'
        min='1'
        type='number'
        className='form-control'
        value={amount}
        disabled={!isLoggedIn}
        onChange={handleInput}
      />
      <button
        disabled={!isLoggedIn}
        onClick={handleDeposit}
        className='btn btn-outline-primary'
      >
        Deposit
      </button>
      <button
        disabled={!isLoggedIn}
        onClick={handleWithdraw}
        className='btn btn-outline-info'
      >
        Withdraw
      </button>
      <button
        disabled={!isLoggedIn}
        onClick={handleCollectInterest}
        className='btn btn-outline-success'
      >
        Collect Interest
      </button>
      <button
        disabled={!isLoggedIn}
        onClick={handleChangeAccount}
        className='btn btn-outline-warning'
      >
        Change Account
      </button>
      <button
        disabled={!isLoggedIn}
        onClick={handleDeleteAccount}
        className='btn btn-outline-danger'
      >
        Delete Account
      </button>
    </div>
  );
};

export default Banking;
