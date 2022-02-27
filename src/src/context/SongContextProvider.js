import Context from "./SongContext";
import {useState, useReducer} from "react";

function ContextProvider({children}) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSongParam, setCurrentSongParam] = useState(0);

  const [isAudioServerCrashed, setIsAudioServerCrashed] = useState(false);

  return (
    <Context.Provider
      value={{
        isAudioServerCrashed,
        setIsAudioServerCrashed,
        songParam: currentSongParam,
        songIndex: currentSongIndex,
        changeParam: setCurrentSongParam,
        changeIndex: setCurrentSongIndex,
      }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
