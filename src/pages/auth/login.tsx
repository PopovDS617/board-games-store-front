import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const onLoginCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    setCredentials((oldState) => {
      return { ...oldState, [e.target.name]: text };
    });
  };

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const postData = await axios({
      method: 'POST',
      url: 'http://localhost:8080/products',
      data: {
        email: credentials.email,
        password: credentials.password,
      },
    });

    console.log(postData);
    return postData;
  };

  return (
    <form onSubmit={onLogin}>
      <label htmlFor="email">E-mail</label>
      <input name="email" type="email" onChange={onLoginCredentials} />
      <label htmlFor="password">Password</label>
      <input name="password" type="password" onChange={onLoginCredentials} />
      <button>login</button>
    </form>
  );
};

export default LoginPage;
