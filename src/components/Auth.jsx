import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: 'TOGGLE_AUTH' });
  };
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  return (
    <div>
      <button onClick={handleClick} className='btn btn-outline-light'>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Auth;
