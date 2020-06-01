import React from 'react';
import { useByeQuery } from '../generated/graphql';

export const Bye = () => {
  const { data, error } = useByeQuery();

  if (error) {
    <div>error</div>;
  }

  return <div>{data}</div>;
};
