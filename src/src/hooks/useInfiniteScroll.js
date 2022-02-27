import {useState, useEffect} from "react";
import debounce from "lodash.debounce";

const fromBottom = 1000;

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsFetching(false);
      // if (
      //   window.innerHeight + document.documentElement.scrollTop !==
      //     document.documentElement.offsetHeight - fromBottom ||
      //   isFetching
      // )
      if (
        window.innerHeight + document.documentElement.scrollTop <
          document.documentElement.offsetHeight / 2 ||
        isFetching
      ) {
        // if (
        //   document.documentElement.scrollTop >=
        //     document.documentElement.offsetHeight - 500 ||
        //   isFetching
        // )
        return setIsFetching(true);
      }
    }
    window.addEventListener("scroll", debounce(handleScroll, 800));
    return () =>
      window.removeEventListener("scroll", debounce(handleScroll, 800));
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching, callback]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
