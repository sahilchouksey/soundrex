import {memo, useContext, useEffect} from "react";

import audioPlayerContext from "../../context/context";

function SongPageRenderer({rootElementRef}) {
  const {setRenderSongPage, renderSongPage} = useContext(audioPlayerContext);

  useEffect(() => {
    if (!renderSongPage) {
      setRenderSongPage(true);
    }
  }, [renderSongPage]);

  useEffect(() => {
    rootElementRef?.current &&
      rootElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [rootElementRef]);

  useEffect(() => {
    document.body.classList.remove("mg-b-15");

    return () => {
      document.body.classList.add("mg-b-15");
    };
  }, []);
  return null;
}
export default /*memo*/ SongPageRenderer;
