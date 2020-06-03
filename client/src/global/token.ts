let token: string;

export const setAccessToken = (s: string) => {
  token = s;
};

export const getAccessToken = () => {
  return token;
};
