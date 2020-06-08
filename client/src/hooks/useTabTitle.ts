import { useEffect } from 'react';

export const useTabTitle: (section: string, group: string) => void = (
  section,
  group
) => {
  useEffect(() => {
    document.title = `Slack | Threads | ${group}`;
  }, [group]);
};
