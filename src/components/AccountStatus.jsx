import React from 'react';
import { useSelector } from 'react-redux';

const AccountStatus = () => {
  const isSavingAccount = useSelector((state) => state.banking.isSavingAccount);
  return <div>{isSavingAccount ? 'Savings Account' : 'Checking Account'}</div>;
};

export default AccountStatus;
