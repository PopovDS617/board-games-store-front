import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../store/hooks';
import { signupThunk } from '../../store/auth/authSlice';
import type { Credentials } from '../../@types/auth';

const SignUpPage = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    name: '',
    email: '',
    password: '',
  });

  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSignUpCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    setCredentials((oldState) => {
      return { ...oldState, [e.target.name]: text };
    });
  };

  const signupHandler = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(signupThunk(credentials));
    router.replace('/');
  };

  return (
    <form onSubmit={signupHandler}>
      <label htmlFor="name">Name</label>
      <input name="name" type="text" onChange={onSignUpCredentials} />
      <label htmlFor="email">E-mail</label>
      <input name="email" type="email" onChange={onSignUpCredentials} />
      <label htmlFor="password">Password</label>
      <input name="password" type="password" onChange={onSignUpCredentials} />
      <button>signup</button>
    </form>
  );
};

export default SignUpPage;
