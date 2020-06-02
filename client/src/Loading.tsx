import * as React from 'react';
import { useState, useEffect } from 'react';

import { Routes } from './routes';
import { setAccessToken } from './global/token';

export const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      const response = await fetch('http://localhost:4000/refresh_token', {
        mode: 'cors',
        method: 'POST',
        credentials: 'include',
      });
      const { accessToken } = await response.json();
      console.log(accessToken);
      setAccessToken(accessToken);
      setLoading(false);
    };

    fetchToken();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return <Routes />;
};
