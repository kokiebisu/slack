import Cookies from 'js-cookie';
import { navigate } from 'react';

export const isAuthenticated = () => {
  if (!Cookies.get('qid')) {
    return false;
  }

  return true;
};
