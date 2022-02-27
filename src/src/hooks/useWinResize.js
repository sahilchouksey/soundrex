import {useCallback, useEffect} from "react";
import debounce from "lodash.debounce";

const useWinResize = (func, activate = true) => {
  const handleResize = debounce((innerWidth, innerHeight) => {
    activate && func(innerWidth, innerHeight);
  }, 800);

  const startResizeHandler = useCallback(() => {
    return window.addEventListener("resize", () =>
      handleResize(window.innerWidth, window.innerHeight)
    );
  }, [handleResize]);
  const removeResizeHandler = useCallback(() => {
    return window.removeEventListener("resize", () =>
      handleResize(window.innerWidth, window.innerHeight)
    );
  }, [handleResize]);

  useEffect(() => {
    activate && startResizeHandler();
    return () => {
      removeResizeHandler();
    };
  }, [handleResize, activate]);

  return removeResizeHandler;
};

export function windowWidth() {
  return window.innerWidth;
}
export function windowHeight() {
  return window.innerHeight;
}

export default useWinResize;
