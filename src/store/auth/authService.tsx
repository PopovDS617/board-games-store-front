import axios from 'axios';
import type { Credentials } from '../../types/auth';

const onLogin = () => {};

const onSignUp = async (input: Credentials) => {
  const postData = await axios({
    method: 'POST',
    url: 'http://localhost:8080/auth/signup',
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

const authService = { onSignUp };

export default authService;
