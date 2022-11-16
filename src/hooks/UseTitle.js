import { useEffect } from "react";

// Changes the browser title
export function useTitle(title) {
  useEffect(() => {
    const docTitle = document.title;
    document.title = title;
    return () => {
      document.title = docTitle;
    }
  });
}