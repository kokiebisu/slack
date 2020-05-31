import Cookies from 'js-cookie';
import { navigate } from 'react';

export const isAuthenticated = () => {
  const qid = document.cookie('qid');
  console.log('isauthenticated', qid);
  if (!Cookies.get('qid')) {
    return false;
  }

  return true;
};
