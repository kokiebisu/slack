import * as React from 'react';
import { useState, useEffect } from 'react';
import { useMeQuery } from '../generated/graphql';

export const useCheckLoggedIn: () => boolean = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const data = useMeQuery();
  useEffect(() => {
    if (data) {
      setAuthenticated(true);
    }
  }, []);

  return authenticated;
};
