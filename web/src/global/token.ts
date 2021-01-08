let token: string;

export const setAccessToken = (s: string) => {
  // token = s;
  localStorage.setItem('token', s);
};

export const getAccessToken = () => {
  return token;
};
