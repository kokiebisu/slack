import React, { useEffect } from 'react';

export const useTabTitle = (section, group) => {
  useEffect(() => {
    document.title = `Slack | Threads | ${group}`;
  }, []);
};
