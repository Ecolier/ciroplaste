import { useEffect } from "react";

function useTitle(title: string) {
  useEffect(() => {
    document.title = `Ciroplaste | ${title}`;
  }, [title]);
}

export default useTitle;
