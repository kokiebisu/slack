import * as React from 'react';
import { useState, useEffect } from 'react';

import { Routes } from './routes';
import { setAccessToken } from './global/token';

export const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('hello');
    const fetchToken = async () => {
      console.log('hello token');
      const response = await fetch('http://localhost:4000/refresh_token', {
        mode: 'cors',
        method: 'POST',
        credentials: 'include',
      });
      const { accessToken } = await response.json();
      console.log('accesstoken', accessToken);
      setAccessToken(accessToken);
      setLoading(false);
    };

    fetchToken();
  }, []);

  console.log('entered loading...');

  if (loading) {
    return <div>loading...</div>;
  }

  return <Routes />;
};