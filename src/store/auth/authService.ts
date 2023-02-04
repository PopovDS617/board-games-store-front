import axios from 'axios';
import type { Credentials } from '../../@types/auth';

const signupHandler = async (input: Credentials) => {
  const postData = await axios({
    method: 'POST',
    url: process.env.TEST_SERVER_URI + 'auth' + '/signup',
    data: {
      name: input.name,
      email: input.email,
      password: input.password,
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const result = postData.data;
  return result;
};

const loginHandler = async (input: Credentials) => {
  const postData = await axios({
    method: 'POST',
    url: process.env.TEST_SERVER_URI + 'auth' + '/login',
    data: {
      email: input.email,
      password: input.password,
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const result = postData.data;
  return result;
};

const logoutHandler = async (userId: string) => {
  const postData = await axios({
    method: 'POST',
    url: process.env.TEST_SERVER_URI + 'auth' + '/logout',
    data: {
      userId,
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const result = postData.data;
  return result;
};

const authService = { signupHandler, loginHandler, logoutHandler };

export default authService;
