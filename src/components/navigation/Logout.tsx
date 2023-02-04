import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { logoutThunk } from '../../store/auth/authSlice';

const Logout = (props) => {
  return (
    <div className="px-5">
      <button onClick={props.onLogout}>Logout</button>
    </div>
  );
};

export default Logout;
