import React from 'react';
import { useByeQuery } from '../generated/graphql';

export const Bye = () => {
  const { data, error } = useByeQuery();

  if (error) {
    return <div>error</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};
