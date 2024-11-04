import { useEffect } from "react";
import useHeader from "./header-context";

function useTransparentHeader(transparent: boolean) {
  const { setTransparent } = useHeader();
  useEffect(() => {
    setTransparent(transparent);
  });
}

export default useTransparentHeader;
