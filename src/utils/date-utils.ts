const remainingMilliseconds = 1000 * 60 * 60 * 24 * 30;
export const expiryDate = () => {
  return new Date(new Date().getTime() + remainingMilliseconds);
};
