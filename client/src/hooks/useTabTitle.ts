import { useEffect } from 'react';

export const useTabTitle = (section: string, group: string) => {
  useEffect(() => {
    document.title = `Slack | Threads | ${group}`;
  }, []);
};
