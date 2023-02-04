import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { loginThunk } from '../../store/auth/authSlice';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onLoginCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    setCredentials((oldState) => {
      return { ...oldState, [e.target.name]: text };
    });
  };

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginThunk(credentials));
    router.replace('/');
  };

  const enterTestCredentials = () => {
    setCredentials({ email: 'test@test.com', password: '11223344' });
  };

  return (
    <form
      onSubmit={onLogin}
      className="flex justify-center items-center flex-col"
    >
      <div>
        <button type="button" onClick={enterTestCredentials}>
          enter test credentrials
        </button>
        <label htmlFor="email">E-mail</label>
        <input
          value={credentials.email}
          name="email"
          type="email"
          onChange={onLoginCredentials}
          className="m-3"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          value={credentials.password}
          className="m-3 p3"
          name="password"
          type="password"
          onChange={onLoginCredentials}
        />
      </div>
      <button>login</button>
    </form>
  );
};

export default LoginPage;
