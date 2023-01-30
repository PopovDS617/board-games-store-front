import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const SignUpPage = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  const router = useRouter();

  const onSignUpCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    setCredentials((oldState) => {
      return { ...oldState, [e.target.name]: text };
    });
  };

  const onSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const postData = await axios({
        method: 'POST',
        url: 'http://localhost:8080/products',
        data: {
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        },
      });
      router.replace('/');

      return postData;
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <form onSubmit={onSignUp}>
      <label htmlFor="name">Name</label>
      <input name="name" type="text" onChange={onSignUpCredentials} />
      <label htmlFor="email">E-mail</label>
      <input name="email" type="email" onChange={onSignUpCredentials} />
      <label htmlFor="password">Password</label>
      <input name="password" type="password" onChange={onSignUpCredentials} />
      <button>login</button>
    </form>
  );
};

export default SignUpPage;
