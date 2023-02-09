export type Credentials = {
  email: string;
  name?: string;
  password: string;
};

export type RequestWithToken = {
  productId: string;
  token?: string;
};
