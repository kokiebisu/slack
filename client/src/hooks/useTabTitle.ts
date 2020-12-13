import { useEffect } from "react";

export const useTabTitle: (name: string) => void = (
  name = "Where work happens | Slack"
) => {
  useEffect(() => {
    document.title = name;
  }, []);
};
