import {useState, useEffect, Fragment, useCallback} from "react";
import {useQuery} from "react-query";
// import axios from "axios";

import AudioPlayer, {RHAP_UI} from "../react-h1-audio-player/index";
import "../react-h1-audio-player/styles.css";
import {ReactComponent as PauseIcon} from "../../assets/svgs/pause.svg";
import {ReactComponent as PlayIcon} from "../../assets/svgs/play.svg";
import {ReactComponent as SkipNextIcon} from "../../assets/svgs/skip-next.svg";
import {ReactComponent as SkipPreviousIcon} from "../../assets/svgs/skip-previous.svg";
import {ReactComponent as ForwardIcon} from "../../assets/svgs/forward.svg";
import {ReactComponent as RewindIcon} from "../../assets/svgs/backward.svg";
import {ReactComponent as ErrorIcon} from "../../assets/svgs/error.svg";
import {ReactComponent as DownloadIcon} from "../../assets/svgs/download.svg";

import styles from "./Player.module.scss";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

import PlayerSongData from "./PlayerSongData/PlayerSongData";
import TogglePlayerPageButton from "./TogglePlayerPageButton/TogglePlayerPageButton";
import Spinner from "../UI/Loading/Spinner";
import {getTextFromArr, getTitleFromArr} from "../../functions/getJsxFromArr";
import {toast} from "react-toastify";
// import  Icon  from "@mui/material";

import {fetcher, hasLoginError} from "../../functions/requestFetcher";

import PlayerSongDataStyles from "./PlayerSongData/PlayerSongData.module.scss";
import Like from "../UI/Icon/Icon";

const audioUrl = videoId =>
  `https://soundrex.onrender.com/api/v1/audio?id=${videoId}`;

function ErrorText({text}) {
  return (
    <p className="white position-center link-large player-error-text">{text}</p>
  );
}
const toastOptions = {
  theme: "dark",
};
function Player({
  showQueueButtons,
  token,
  song,
  previousPage,
  changePlayerState,
  isPlayerPageOpen,
  togglePlayerPage,
  currentSongIndex,
  changeCurrentSong,
  // setCurrentSongIndex,
  upNextSongs = [],
  changeToNextSongIndex,
  changeToPreviousSongIndex,
  setIsAudioServerCrashed,
  setToastPosition,

  addToFavouritesHandler,
  removeFromFavouritesHandler,

  logout,

  // library,
}) {
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [audioError, setAudioError] = useState(false);

  const asVolume = window.localStorage.getItem("volume") || 0.65;

  const [volume, setVolume] = useState(asVolume);

  const [isLiked, setIsLiked] = useState(false);

  const videoId = song?.videoId;
  const playlistId = song?.playlistId;
  const audioSrc = audioUrl(videoId);

  useEffect(() => {
    setToastPosition("top-center");

    return () => {
      setToastPosition("bottom-center");
    };
  }, [setToastPosition]);

  const {
    data: isLikedData,
    error,
    isError,
    isSuccess,
  } = useQuery(
    ["soundrex", videoId],
    () => {
      return fetcher(
        {
          url: `https://soundrex.onrender.com/soundrex/is-liked`,
          method: "POST",
          headers: {
            authorization: "Bearer " + token,
          },
          data: {
            id: videoId,
          },
        },
        false,
        false,
        false,
        null,
        null
        // () => logout()
      );
    },
    {
      // staleTime: 300000, // 5min
    }
  );

  let LikeBtn = (
    <div className="flex-center">
      <Spinner />
    </div>
  );

  // if there is an error, immediately return it to Ui
  if (isError && error) {
    const hasLoginErr = hasLoginError(error);
    if (hasLoginErr) {
      logout();
    }
    LikeBtn = <span></span>;
  }
  const songTitle = song?.title?.length > 0 && getTitleFromArr(song?.title);
  const songThumbnail =
    (song?.thumbnails?.length > 0 && song?.thumbnails?.[0]?.url) ||
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const isLikedHandler = useCallback(
    () =>
      isLiked
        ? removeFromFavouritesHandler(
            videoId,
            () => setIsLiked("loading"),
            () => setIsLiked(false),
            () => setIsLiked(true)
          )
        : addToFavouritesHandler(
            {
              videoId,
              id: videoId,
              title: songTitle,
              thumbnail: songThumbnail,
            },
            () => setIsLiked("loading"),
            () => setIsLiked(true),
            () => setIsLiked(false)
          ),
    [
      isLiked,
      videoId,
      songTitle,
      songThumbnail,
      addToFavouritesHandler,
      removeFromFavouritesHandler,
    ]
  );

  useEffect(() => {
    if (isSuccess) {
      if (isLikedData) {
        // const alreadyLiked = library?.find(s => s._id === videoId);
        setIsLiked(isLikedData?.isLiked);
      }
    }
  }, [isSuccess, isLikedData, videoId]);

  if (isSuccess) {
    if (isLikedData) {
      LikeBtn =
        isLiked === "loading" ? (
          <Spinner />
        ) : (
          <Like
            liked={isLiked}
            onClick={isLikedHandler}
            svg={isLiked ? "heart" : "heart-outline"}
            alt="Like song"
            className={`${PlayerSongDataStyles["like-icon"]}`}
          />
        );
    } else {
      LikeBtn = <span></span>;
    }
  }

  const nonChangingIcons = {
    next: <SkipNextIcon title="next" />,
    previous: <SkipPreviousIcon title="previous" />,
    forward: <ForwardIcon title="forward" />,
    rewind: <RewindIcon title="rewind" />,
  };

  const [playerCustomIcons, setPlayerCustomIcons] = useState({
    play: <PlayIcon title="Play" />,
    pause: <PauseIcon title="Pause" />,
    ...nonChangingIcons,
  });

  useEffect(() => {
    if (audioError) {
      song["error"] = song.hasOwnProperty("error") ? song.error + 1 : 1;

      // toast.error(
      //   audioError?.message
      //     ? audioError.message
      //     : "ERROR: Unable to play audio track.",
      //   toastOptions
      // );

      setPlayerCustomIcons({
        play: <ErrorIcon title="Unable to play audio" />,
        pause: <ErrorIcon title="Unable to play audio" />,
        ...nonChangingIcons,
      });

      const totalErrors = upNextSongs.reduce((p, c) => {
        return p + c.error || 0;
      }, 0);

      const totalSongs = upNextSongs?.length;

      if (totalErrors / totalSongs >= 1) {
        setIsAudioServerCrashed(true);
      }
      return;
    }
    if (isAudioReady) {
      changePlayerState("playing");
      return setPlayerCustomIcons({
        play: <PlayIcon title="Play" />,
        pause: <PauseIcon title="Pause" />,
        ...nonChangingIcons,
      });
    }
    if (!isAudioReady && !audioError) {
      // changePlayerState("loading");

      setPlayerCustomIcons({
        play: (
          <Spinner
            title="Loading..."
            style={{
              color: "#909090",
              width: "min-content",
              height: "min-content",
              cursor: "progress",
            }}
          />
        ),
        pause: (
          <Spinner
            title="Loading..."
            style={{
              color: "#909090",
              width: "min-content",
              height: "min-content",
              cursor: "progress",
            }}
          />
        ),
        ...nonChangingIcons,
      });
    }
  }, [isAudioReady, audioError, setIsAudioServerCrashed, song, upNextSongs]);

  const nextButtonHandler = () => {
    changeToNextSongIndex();
    /*
    if (upNextSongs && upNextSongs.length > 0) {
      const nextIndexSongExists = upNextSongs.find(
        s => s?.index === currentSongIndex + 1
      );
      const zeroIndexSongExits = upNextSongs.find(s => s?.index === 0);
      console.log(
        "Next button clicked",
        upNextSongs,
        nextIndexSongExists,
        "currentSongIndex",
        currentSongIndex + 1
      );
      if (nextIndexSongExists) {
        setCurrentSongIndex(prevIndex => prevIndex + 1);
      } else if (zeroIndexSongExits) {
        setCurrentSongIndex(0);
      }
    }
    */
  };

  const previousButtonHandler = () => {
    changeToPreviousSongIndex();
    /*
    if (upNextSongs && upNextSongs.length > 0) {
      const previousIndexSongExists = upNextSongs.find(
        s => s?.index === currentSongIndex - 1
      );
      const lastIndexSongExits = upNextSongs.find(
        s => s?.index === upNextSongs.length - 1
      );
      console.log(
        "Previous button clicked",
        previousIndexSongExists,
        lastIndexSongExits
      );
      if (previousIndexSongExists) {
        setCurrentSongIndex(prevIndex => prevIndex - 1);
      } else if (lastIndexSongExits) {
        setCurrentSongIndex(upNextSongs.length - 1);
      }
    }
    */
  };

  useEffect(() => {
    const indexSong = upNextSongs.find(s => s?.index === currentSongIndex);
    if (indexSong != null) {
      changeCurrentSong(indexSong);
    } else {
      setIsAudioReady(false);
    }
  }, [currentSongIndex, changeCurrentSong, upNextSongs]);

  const currentSongPageUrl = `/play?id=${videoId}${`${
    playlistId && `${!videoId ? "?" : "&"}list=${playlistId}`
  }`}`;

  // const downloadAudio = () => {
  //   title &&
  //     videoId &&
  //     axios.get(
  //       `https://soundrex.onrender.com/api/v1/audio-download?id=${videoId}&title=${title
  //         ?.replace(/[^a-zA-Z ]/g, "")
  //         ?.replace(" ", "+")}`
  //     );
  // };

  /*
  // const downloadSong = async (id, url) => {
  //   try {
  //     const thumbURL = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  //     const [thumbnailBlob, songBlob] = await Promise.all([
  //       // fetchProxiedBlob(thumbURL),
  //       fetchProxiedBlob(url),
  //     ]);
  //     return "downloaded";
  //   } catch (error) {
  //     return error;
  //   }
  // };

  // function fetchProxiedBlob(url) {
  //   const URL = url;
  //   return new Promise(function (resolve, reject) {
  //     var xhr = new XMLHttpRequest();
  //     xhr.open("GET", URL);
  //     xhr.responseType = "blob";
  //     xhr.onload = function () {
  //       var status = xhr.status;
  //       if (status >= 200 && status < 300) {
  //         resolve(xhr.response);
  //       } else {
  //         reject({
  //           status: status,
  //           statusText: xhr.statusText,
  //         });
  //       }
  //     };
  //     xhr.send();
  //     setTimeout(() => {
  //       xhr.abort();
  //       xhr.open("GET", URL);

  //       xhr.send();
  //     }, 1000);
  //   });
  // }

  // function download(url, name) {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open("GET", url);
  //   xhr.responseType = "blob";
  //   xhr.onload = function () {
  //     // saveAs(xhr.response, name, opts);
  //     const a = document.createElement("a");
  //     a.href = xhr.response; // blob
  //     a.download = name;
  //     a.target = "_blank";
  //     setTimeout(function () {
  //       a.click();
  //     });
  //   };
  //   xhr.onerror = function () {
  //     console.error("could not download file");
  //   };
  //   xhr.send();
  // }

  // function download(url, fileName) {
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("GET", url, true);
  //   xhr.responseType = "blob";

  //   xhr.onprogress = function (event) {
  //     if (event.lengthComputable) {
  //       var percentComplete = (event.loaded / event.total) * 100;
  //       //yourShowProgressFunction(percentComplete);
  //     }
  //   };

  //   xhr.onload = function (event) {
  //     if (this.status == 200) {
  //       _saveBlob(this.response, fileName);
  //     } else {
  //       //yourErrorFunction()
  //     }
  //   };

  //   xhr.onerror = function (event) {
  //     //yourErrorFunction()
  //   };

  //   xhr.send();
  // }

  // function _saveBlob(response, fileName) {
  //   if (navigator.msSaveBlob) {
  //     //OK for IE10+
  //     navigator.msSaveBlob(response, fileName);
  //   } else {
  //     _html5Saver(response, fileName);
  //   }
  // }

  // function _html5Saver(blob, fileName) {
  //   var a = document.createElement("a");
  //   document.body.appendChild(a);
  //   a.style = "display: none";
  //   var url = window.URL.createObjectURL(blob);
  //   a.href = url;
  //   a.download = fileName;
  //   a.click();
  //   document.body.removeChild(a);
  // }

  // function download(url) {
  //   axios({
  //     url: url,
  //     method: "GET",
  //     responseType: "blob",
  //   }).then(response => {
  //     const url = window.URL.createObjectURL(new Blob([response.data]));
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.setAttribute("download", `${videoId}.webm`);
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   });
  // }
*/
  const title =
    (song?.title || song?.title?.length > 0) && getTextFromArr(song.title);

  return (
    <Fragment>
      <AudioPlayer
        volume={volume}
        showSkipControls={
          !Boolean(audioError) && Boolean(showQueueButtons)
          // ||
          // Boolean(upNextSongs?.length === 0) ||
          // Boolean(upNextSongs?.length === 1)
        }
        showJumpControls={!Boolean(audioError)}
        showFilledVolume={!Boolean(audioError)}
        showDownloadProgress={!Boolean(audioError)}
        showFilledProgress={!Boolean(audioError)}
        customIcons={playerCustomIcons}
        onClickNext={() => {
          setTimeout(() => {
            nextButtonHandler();
          }, 1500);
        }}
        onClickPrevious={() => {
          setTimeout(() => {
            previousButtonHandler();
          }, 1500);
        }}
        onLoadStart={e => {
          if (asVolume) {
            setVolume(Number(asVolume));
          }
          setIsAudioReady(false);
          setAudioError(false);
          changePlayerState("loading");
        }}
        onLoadedMetaData={e => {
          changePlayerState("playing");
          setIsAudioReady(true);
        }}
        onLoadedData={e => {
          changePlayerState("playing");
          setIsAudioReady(true);
        }}
        onVolumeChange={e => {
          const curVolume = e.target.volume;
          window.localStorage.setItem("volume", curVolume);
          setVolume(curVolume);
        }}
        onError={e => {
          setIsAudioReady(false);

          // setAudioError(true);
          setAudioError(e.target.error);

          setTimeout(() => {
            nextButtonHandler();
          }, 2500);

          changePlayerState("error");
        }}
        onPlayError={e => {
          // setIsAudioReady(false);
          // console.log("Error");
          // setAudioError(true);
          // changePlayerState("error");
        }}
        onEnded={e => nextButtonHandler()}
        onPlay={e => {
          console.log("onPlay");
          if (isAudioReady) changePlayerState("playing");
        }}
        // onLoadedData
        onPlaying={e => {
          console.log("onPlaying");
          // setIsAudioReady(true);

          if (isAudioReady) changePlayerState("playing");
        }}
        onPause={e => {
          // if (isAudioReady) changePlayerState("paused");
        }}
        className={`music-player ${
          audioError ? `disable-all ${styles["error-overlay"]}` : ""
        }`}
        autoPlay
        src={audioSrc}
        customProgressBarSection={
          // !audioError ?
          [RHAP_UI.PROGRESS_BAR]
          // : null
        }
        customControlsSection={
          // !audioError ?
          [
            // RHAP_UI.ADDITIONAL_CONTROLS,
            RHAP_UI.MAIN_CONTROLS,
            RHAP_UI.CURRENT_TIME,
            <div className="rhap_time rhap_time-divider">/</div>,
            RHAP_UI.DURATION,
            <PlayerSongData
              LikeBtn={LikeBtn}
              // isLikedHandler={isLikedHandler}
              // isLiked={isLiked}
              song={song}
              videoId={videoId}
            />,
            // <div className="player-linear-bg">
            <input type="checkbox" className="music-player-more-options" />,
            // </div>
            <a
              id="download-audio"
              // onClick={downloadAudio}
              // ac
              href={
                title &&
                videoId &&
                `https://soundrex.onrender.com/api/v1/audio-download?id=${videoId}&title=${title
                  ?.replace(/[^a-zA-Z ]/g, "")
                  ?.replace(" ", "+")}`
              }
              target="_blank"
              download
              rel="noreferrer">
              <DownloadIcon />
            </a>,
            <p className="music-player-more-options-like-button">{LikeBtn}</p>,
            RHAP_UI.VOLUME_CONTROLS,
            <TogglePlayerPageButton
              isPlayerPageOpen={isPlayerPageOpen}
              togglePlayerPage={togglePlayerPage}
              previousPage={previousPage}
              url={currentSongPageUrl}
            />,
            audioError && (
              <ErrorText
                text={
                  audioError?.message
                    ? audioError.message
                    : "ERROR: Unable to play audio track."
                }
              />
            ),
          ]
          // : null
        }

        // customVolumeControls={[RHAP_UI.VOLUME]}
        // layout="horizontal-reverse"
        // // other props here
      />
    </Fragment>
  );
}

export default Player;

// const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioCtx = new AudioContext();
// const source = audioCtx.createMediaElementSource(audioRef.current);
// source.connect(audioCtx.destination);
