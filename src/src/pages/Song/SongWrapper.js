import {useContext, Fragment, useEffect, useCallback, memo} from "react";
import {useHistory, useLocation} from "react-router-dom";

import audioPlayerContext from "../../context/context";
import SongPage from "./Song";
import Player from "../../components/Player/Player";
import {toast} from "react-toastify";

function SongWrapper({
  previousPageUrl,
  token,
  setToastPosition,
  addToFavouritesHandler,
  removeFromFavouritesHandler,
  logout,
  // library,
}) {
  const audioPlayerCtx = useContext(audioPlayerContext);
  const history = useHistory();
  const location = useLocation();

  const {
    isPlayerOpen,
    isPlayerPageOpen,
    playerState,
    upNextSongs,
    currentSong,
    currentSongIndex,
    currentSongParam,
    renderSongPage,

    openPlayer,
    closePlayer,
    changePlayerState,
    setUpNextSongs,
    setIsPlayerPageOpen,
    changeCurrentSong,
    changeToNextSongIndex,
    changeToPreviousSongIndex,

    setCurrentSongIndex,
    setCurrentSongParam,
    // setRenderSongPage,

    isAudioServerCrashed,
    setIsAudioServerCrashed,
    addToEndOfNextSongs,
    addToNextOfNextSongs,
    nextListContinuation,
    setNextListContinuation,
  } = audioPlayerCtx;

  useEffect(() => {
    if (location.pathname.startsWith("/play")) {
      setIsPlayerPageOpen(true);
    } else {
      setIsPlayerPageOpen(false);
    }
  }, [location, setIsPlayerPageOpen]);

  const togglePlayerPage = useCallback(
    url => {
      const playerPageOpen = !isPlayerPageOpen;
      setIsPlayerPageOpen(playerPageOpen);

      if (playerPageOpen) {
        history.push(url);
      } else {
        const lastNonSongPage =
          previousPageUrl.startsWith("/play") || !previousPageUrl
            ? "/home"
            : previousPageUrl;
        history.push(lastNonSongPage);
      }
      return playerPageOpen;
    },
    [isPlayerPageOpen, setIsPlayerPageOpen, history, previousPageUrl]
  );

  if (isAudioServerCrashed) {
    toast.error("too many errors.", {theme: "dark"});
  }

  return (
    <Fragment>
      {renderSongPage && (
        <SongPage
          logout={logout}
          token={token}
          // is PLAYER_SONG_PAGE_OPEN
          isPlayerPageOpen={isPlayerPageOpen}
          // current song
          // currentSong={currentSong}
          changeCurrentSong={changeCurrentSong}
          // current song index
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          //
          currentSongParam={currentSongParam}
          setCurrentSongParam={setCurrentSongParam}
          // open PLAYER
          openPlayer={openPlayer}
          closePlayer={closePlayer}
          // player state
          playerState={playerState}
          // upnext songs
          upNextSongs={upNextSongs}
          // set upnext song
          setUpNextSongs={setUpNextSongs}
          setIsAudioServerCrashed={setIsAudioServerCrashed}
          addToEndOfNextSongs={addToEndOfNextSongs}
          addToNextOfNextSongs={addToNextOfNextSongs}
          nextListContinuation={nextListContinuation}
          setNextListContinuation={setNextListContinuation}
        />
      )}
      {isPlayerOpen && currentSong && !isAudioServerCrashed && (
        <Player
          logout={logout}
          showQueueButtons={upNextSongs?.length > 1}
          // library={library}
          token={token}
          changeToNextSongIndex={changeToNextSongIndex}
          changeToPreviousSongIndex={changeToPreviousSongIndex}
          song={currentSong}
          previousPage={previousPageUrl}
          changePlayerState={changePlayerState}
          isPlayerPageOpen={isPlayerPageOpen}
          togglePlayerPage={togglePlayerPage}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          changeCurrentSong={changeCurrentSong}
          upNextSongs={upNextSongs}
          setIsAudioServerCrashed={setIsAudioServerCrashed}
          setToastPosition={setToastPosition}
          addToFavouritesHandler={addToFavouritesHandler}
          removeFromFavouritesHandler={removeFromFavouritesHandler}
        />
      )}
    </Fragment>
  );
}
export default /*memo*/ SongWrapper;
