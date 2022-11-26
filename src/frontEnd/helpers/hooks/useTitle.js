import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
