import {createContext} from "react";

const ctx = createContext({
  songParam: null,
  songIndex: null,
  isAudioServerCrashed: false,
  setIsAudioServerCrashed: () => {},
  changeParam: () => {},
  changeIndex: () => {},
});

export default ctx;
