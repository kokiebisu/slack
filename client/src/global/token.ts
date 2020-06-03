let token: string | null | undefined;

export const setAccessToken = (s: string | null | undefined) => {
  token = s;
};

export const getAccessToken = () => {
  return token;
};
