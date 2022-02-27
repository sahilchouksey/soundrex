import {createContext} from "react";

const ctx = createContext({
  isPlayerOpen: false,
  isPlayerPageOpen: false,
  playerState: "loading",
  upNextSongs: [],
  nextListContinuation: null,
  currentSong: {},
  currentSongIndex: 0,
  currentSongParam: "",
  renderSongPage: false,

  openPlayer: () => {},
  closePlayer: () => {},
  changePlayerState: () => {},
  setUpNextSongs: () => {},
  setNextListContinuation: () => {},
  addToEndOfNextSongs: () => {},
  addToNextOfNextSongs: () => {},

  changeCurrentSong: () => {},
  setIsPlayerPageOpen: () => {},
  setCurrentSongIndex: () => {},
  setCurrentSongParam: () => {},
  setRenderSongPage: () => {},

  isAudioServerCrashed: false,
  setIsAudioServerCrashed: () => {},
});

export default ctx;
