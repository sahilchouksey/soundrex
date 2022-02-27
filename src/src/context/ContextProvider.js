import Context from "./context";
import {useCallback, useReducer} from "react";

const INITIAL_STATE = {
  isPlayerPageOpen: false,
  isPlayerOpen: false,
  playerState: "loading",
  upNextSongs: [],
  renderSongPage: false,
  currentSongIndex: 0,
  currentSongParam: "",
  currentSong: {},
  isAudioServerCrashed: false,
  nextListContinuation: null,
};

const SongReducer = (state = {INITIAL_STATE}, action) => {
  const {type, value} = action;
  const {upNextSongs, currentSongIndex} = state;
  const addPlaylist = state?.addPlaylist;
  switch (type) {
    case "AUDIO_SERVER_CRASHED":
      return {...state, isAudioServerCrashed: value};
    case "PLAYER_OPEN":
      return {...state, isPlayerOpen: value};
    case "PLAYER_PAGE_OPEN":
      return {...state, isPlayerPageOpen: value};
    case "PLAYER_STATE":
      return {...state, playerState: value};
    case "SONG":
      return {...state, currentSong: value};
    case "RENDER_SONG_PAGE":
      return {...state, renderSongPage: value};
    case "SONG_INDEX":
      return {...state, currentSongIndex: value};

    case "SONG_PARAM":
      return {...state, currentSongParam: value};

    case "NEXT_SONG_INDEX":
      if (upNextSongs && upNextSongs.length > 0) {
        const nextSongIndex = currentSongIndex + 1;
        const nextIndexSongExists = upNextSongs.find(
          s => s?.index === nextSongIndex
        );

        const zeroIndexSongExits = upNextSongs.find(s => s?.index === 0);

        if (nextIndexSongExists) {
          const param = nextIndexSongExists?.params;
          return {
            ...state,
            currentSongIndex: nextSongIndex,
            currentSongParam: param,
          };
        } else if (zeroIndexSongExits) {
          const param = zeroIndexSongExits?.params;

          return {...state, currentSongIndex: 0, currentSongParam: param};
        }
      }
      return {...state};

    case "PREVIOUS_SONG_INDEX":
      // const {upNextSongs, currentSongIndex} = state;
      if (upNextSongs && upNextSongs.length > 0) {
        const previousSongIndex = currentSongIndex - 1;

        const previousIndexSongExists = upNextSongs.find(
          s => s?.index === previousSongIndex
        );

        const lastIndexSongExits = upNextSongs.find(
          s => s?.index === upNextSongs.length - 1
        );

        if (previousIndexSongExists) {
          const param = previousIndexSongExists?.params;

          return {
            ...state,
            currentSongIndex: previousSongIndex,
            currentSongParam: param,
          };
        } else if (lastIndexSongExits) {
          const param = lastIndexSongExits?.params;

          return {
            ...state,
            currentSongIndex: upNextSongs.length - 1,
            currentSongParam: param,
          };
        }
      }
      return {...state};

    case "INSERT_NEXT":
      if (upNextSongs && upNextSongs.length > 0) {
        const nextSongIndex = currentSongIndex + 1;

        let newNextSongs = [...upNextSongs];

        newNextSongs.splice(nextSongIndex, 0, ...value);

        // remove duplicate songs from nextSong array
        // using already seen as object keys
        const seenSongs = {};
        const sortedSongs = newNextSongs.filter(s => {
          const key = s?.videoId;
          return seenSongs.hasOwnProperty(key)
            ? false
            : (seenSongs[key] = true);
        });

        newNextSongs = sortedSongs;

        for (let i = 0; i < newNextSongs.length; i++) {
          // if (addPlaylist) {
          const oldPlaylist = newNextSongs[i].playlistId;
          newNextSongs[i].playlistId = state?.currentSong?.playlistId
            ? state.currentSong.playlistId
            : oldPlaylist;
          // }
          newNextSongs[i].index = i;
        }

        // console.log("upNextSongs newNextSongs", upNextSongs, newNextSongs);

        newNextSongs = newNextSongs.slice(0, 50);

        return {...state, upNextSongs: newNextSongs};
      }
      return {...state};

    case "INSERT_TO_END":
      if (upNextSongs && upNextSongs.length > 0) {
        let newNextSongs = [...upNextSongs];

        newNextSongs.splice(upNextSongs.length, 0, ...value);

        // remove duplicate songs from nextSong array
        // using already seen as object keys
        const seenSongs = {};
        const sortedSongs = newNextSongs.filter(s => {
          const key = s?.videoId;
          return seenSongs.hasOwnProperty(key)
            ? false
            : (seenSongs[key] = true);
        });

        newNextSongs = sortedSongs;

        for (let i = upNextSongs.length - 1; i < newNextSongs.length; i++) {
          // if (addPlaylist) {
          const oldPlaylist = newNextSongs[i].playlistId;
          newNextSongs[i].playlistId = state?.currentSong?.playlistId
            ? state.currentSong.playlistId
            : oldPlaylist;
          // }

          newNextSongs[i].index = i;
        }

        newNextSongs = newNextSongs.slice(0, 40);

        // console.log("INSERTED_AT_END", newNextSongs);

        return {...state, upNextSongs: newNextSongs};
      }
      return {...state};

    case "UP-NEXT_SONG":
      let list = value;
      list = list.slice(0, 40);

      return {...state, upNextSongs: list};

    case "UP-NEXT_CONTINUATION":
      const continuation = value;

      return {...state, nextListContinuation: continuation};

    default:
      return state;
  }
};

function ContextProvider({children}) {
  /*
  const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(true); // experiment
  // const [previousURL, setPreviousURL] = useState(null);
  const [upNextListSongs, setUpNextListSongs] = useState([]);
  const [playerState, setPlayerState] = useState(null);
  const [isSongPageRendered, setIsSongPageRendered] = useState(false);

  // const setPreviousPageUrl = url => {
  //   setPreviousURL(url);
  // };

  const [songData, setSongData] = useState(null);
  */

  const [songState, dispatchSong] = useReducer(SongReducer, INITIAL_STATE);

  const {
    isPlayerPageOpen,
    isPlayerOpen,
    playerState,
    upNextSongs,
    renderSongPage,
    currentSongIndex,
    currentSongParam,
    currentSong,
    isAudioServerCrashed,
    nextListContinuation,
  } = songState;

  const setUpNextSongs = useCallback(
    (list, addPlaylist = true) =>
      dispatchSong({type: "UP-NEXT_SONG", value: list, addPlaylist}),
    [dispatchSong]
  );

  const setNextListContinuation = useCallback(
    continuation =>
      dispatchSong({type: "UP-NEXT_CONTINUATION", value: continuation}),
    [dispatchSong]
  );

  const addToEndOfNextSongs = useCallback(
    (list, addPlaylist = true) => {
      return dispatchSong({type: "INSERT_TO_END", value: list, addPlaylist});
    },
    [dispatchSong]
  );

  const addToNextOfNextSongs = useCallback(
    list => {
      /**      if (upNextSongs?.length <= 0 && list?.length > 0) {
              const firstItem = list?.[0];
              const videoId = firstItem?.videoId;
              const playlistId = firstItem?.playlistId;
              return history.push(
                `/play?id=${videoId}${`${
                  playlistId && `${!videoId ? "?" : "&"}list=${playlistId}`
                }`}`
              );
            } */
      return dispatchSong({type: "INSERT_NEXT", value: list});
    },
    [dispatchSong]
  );

  const openMusicPlayer = useCallback(
    () => dispatchSong({type: "PLAYER_OPEN", value: true}),
    [dispatchSong]
  );

  const closeMusicPlayer = useCallback(() => {
    console.log("player closed");
    dispatchSong({type: "PLAYER_OPEN", value: false});
  }, [dispatchSong]);

  const changePlayerState = useCallback(
    state => {
      if (
        state !== playerState &&
        (state === "playing" ||
          state === "paused" ||
          state === "loading" ||
          state === "error")
      ) {
        dispatchSong({type: "PLAYER_STATE", value: state});
      }
    },
    [dispatchSong, playerState]
  );

  const currentSongChangeHandler = useCallback(
    data => dispatchSong({type: "SONG", value: data}),
    [dispatchSong]
  );

  const isPlayerPageOpenHandler = useCallback(
    bool => dispatchSong({type: "PLAYER_PAGE_OPEN", value: bool}),
    [dispatchSong]
  );

  const currentSongIndexChangeHandler = useCallback(
    index => dispatchSong({type: "SONG_INDEX", value: index}),
    [dispatchSong]
  );

  const currentSongParamsChangeHandler = useCallback(
    param => dispatchSong({type: "SONG_PARAM", value: param}),
    [dispatchSong]
  );

  const songPageRendererHandler = useCallback(
    bool => dispatchSong({type: "RENDER_SONG_PAGE", value: bool}),
    [dispatchSong]
  );

  const changeToNextSongIndex = useCallback(
    () => dispatchSong({type: "NEXT_SONG_INDEX"}),
    [dispatchSong]
  );
  const changeToPreviousSongIndex = useCallback(
    () => dispatchSong({type: "PREVIOUS_SONG_INDEX"}),
    [dispatchSong]
  );

  const setIsAudioServerCrashed = useCallback(
    bool => dispatchSong({type: "AUDIO_SERVER_CRASHED", value: bool}),
    [dispatchSong]
  );

  return (
    <Context.Provider
      value={{
        isPlayerOpen: isPlayerOpen,
        isPlayerPageOpen: isPlayerPageOpen,
        playerState: playerState,
        upNextSongs: upNextSongs,
        currentSong: currentSong,
        currentSongIndex: currentSongIndex,
        currentSongParam: currentSongParam,
        renderSongPage: renderSongPage,
        nextListContinuation: nextListContinuation,

        openPlayer: openMusicPlayer,
        closePlayer: closeMusicPlayer,
        changePlayerState: changePlayerState,
        setUpNextSongs: setUpNextSongs,
        setNextListContinuation: setNextListContinuation,
        addToEndOfNextSongs: addToEndOfNextSongs,
        addToNextOfNextSongs: addToNextOfNextSongs,
        setIsPlayerPageOpen: isPlayerPageOpenHandler,
        changeCurrentSong: currentSongChangeHandler,
        setCurrentSongIndex: currentSongIndexChangeHandler,
        setCurrentSongParam: currentSongParamsChangeHandler,

        setRenderSongPage: songPageRendererHandler,
        changeToNextSongIndex,
        changeToPreviousSongIndex,

        isAudioServerCrashed,
        setIsAudioServerCrashed,
      }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
