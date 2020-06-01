let accessToken = '';

export const setAccessToken = (string: string) => {
  accessToken = string;
};

export const getAccessToken = () => {
  return accessToken;
};
