import {useState, useEffect, Fragment, useCallback, useMemo, memo} from "react";
import {useHistory} from "react-router-dom";
import {Scrollbars} from "react-custom-scrollbars";

// import useWinResize, {
//   windowWidth,
//   windowHeight,
// } from "../../hooks/useWinResize";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {a11yProps} from "../UI/Tabs/TabPanel/TabPanel";
import Skeleton from "@mui/material/Skeleton";

// import RowMusicShelfList from "../RowMusicShelf/RowMusicShelfList/RowMusicShelfList";
import Image from "../UI/Image/Image";
// import Icon from "../../UI/Icon/Icon";
// import PlayButton from "../../UI/Button/PlayButton/PlayButton";

// tab
import LyricsTab from "./Lyrics/Lyrics";
import RelatedTab from "./Related/Related";
import NextSongsTab from "./UpNextSongs/UpNextSongs";
import Loading from "../UI/Loading/Loading";

import styles from "./Song.module.scss";
// import {getKey} from "../../functions/uniqueSuffix";
import {toast} from "react-toastify";
import FullScreenPopup from "../UI/FullScreenPopup/FullScreenPopup";

// scrollbar
// import PropTypes from "prop-types";
// import SmoothScrollbar from "smooth-scrollbar";
// import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
// import Scrollbar from "react-smooth-scrollbar";

// SmoothScrollbar.use(OverscrollPlugin);
// function renderView({style, ...props}) {
//   const viewStyle = {
//     padding: 15,
//     backgroundColor: `#000`,
//     // color: `rgb(${Math.round(255 - (top * 255))}, ${Math.round(255 - (top * 255))}, ${Math.round(255 - (top * 255))})`
//   };
//   return <div className="box" style={{...style, ...viewStyle}} {...props} />;
// }

// function renderThumbHorizontal({style, ...props}) {
//   const thumbStyle = {
//     backgroundColor: `transparent`,
//   };
//   return <div style={{...style, ...thumbStyle}} {...props} />;
// }

function renderThumbVertical({style, ...props}) {
  const thumbStyle = {
    backgroundColor: `rgba(255,255,255, .7)`,
  };
  return <div style={{...style, ...thumbStyle}} {...props} />;
}

function renderTrackVertical({style, ...props}) {
  const viewStyle = {
    backgroundColor: `rgba(0,0,0, .4)`,
    position: "absolute",
    width: "6px",
    right: "0",
    bottom: "2px",
    top: "2px",
    borderRadius: "3px",
    // color: `rgb(${Math.round(255 - (top * 255))}, ${Math.round(255 - (top * 255))}, ${Math.round(255 - (top * 255))})`
  };
  return <div className="" style={{...style, ...viewStyle}} {...props} />;
}

// let SongRen derer = 0;
function Song({
  // http request response
  data,
  // url params
  VID_PARAM,
  PLAYLIST_PARAM,
  // fetching state
  isFetching,
  // is PLAYER_SONG_PAGE_OPEN
  isPlayerPageOpen,
  // current song data
  // currentSong,
  // change current song
  changeCurrentSong,
  // current song index
  currentSongIndex,
  // change song index
  setCurrentSongIndex,
  // change song param
  changeParam,
  // player state exp: loading, error, playing, paused
  playerState,
  // open player
  openPlayer,
  // close player
  // closePlayer,
  // // current song params
  // PARAMS,
  // up next list
  upNextSongsList,

  logout,

  /*
  isFetching,
  isPlayerPageOpen,
  currentSong,
  data,
  VID_PARAM,
  PLAYLIST_PARAM,
  PARAMS,
  playerState,
  changeCurrentSong,
  changeParam,
  openPlayer,
  setCurrentSongIndex,
  upNextSongsList,
  */
}) {
  const history = useHistory();

  const [currentTab, setCurrentTab] = useState(0);

  const [showSkeletonLoading, setSkeletonLoading] = useState(false);

  let {selectedSong} = data;
  let hasSelectedSong = Boolean(selectedSong);
  if (selectedSong && selectedSong.playerState !== playerState) {
    selectedSong.playerState = playerState;
  }

  if (!hasSelectedSong || !Object.keys(selectedSong)?.length > 0) {
    selectedSong =
      upNextSongsList?.length >= 0 &&
      upNextSongsList.find(v => v?.videoId === VID_PARAM);
  }

  // if (!selectedSong && data?.currentVideoEndpoint) {
  //   selectedSong = {
  //     ...data?.currentVideoEndpoint?.videoId,
  //   };
  // }

  const [selectedSongState, setSelectedSongState] = useState(selectedSong);
  hasSelectedSong = Boolean(selectedSongState);

  // basis on currentSong object
  // const currentSongIndex = currentSong?.index;

  const playlistId =
    data?.next_songs?.list?.playlistId ||
    data?.next_songs?.list?.playlist?.playlistId;

  // const selectedSong = selectedSong;
  const hasLyrics = Boolean(data?.hasLyrics);
  const hasRelated = Boolean(data?.hasRelated);
  // const related = data?.related;

  const tabHandleChange = (event, newTab) => {
    setCurrentTab(Number(newTab));
  };

  // const upNextSongsListRaw = useMemo(
  //   () => upNextSongsList.reduce((p, c) => p + c?.videoId, ""),
  //   [PLAYLIST_PARAM]
  // );

  // const upNextSongsListRaw = upNextSongsListIdsArr.join(" ");

  useEffect(() => {
    if (currentSongIndex != null) {
      const currentIndexSong = upNextSongsList.find(
        s => s?.index === currentSongIndex
      );
      if (currentIndexSong) {
        setSkeletonLoading(false);

        currentIndexSong.playerState = playerState;

        let endpoint =
          currentIndexSong?.browseId && `/browse/${currentIndexSong.browseId}`;
        if (currentIndexSong?.videoId)
          endpoint = `/play?id=${currentIndexSong.videoId}`;

        const playlistID = currentIndexSong?.playlistId || playlistId;
        if (playlistID)
          endpoint += `${
            currentIndexSong?.videoId ? "&" : "?"
          }list=${playlistID}`;

        setSelectedSongState(currentIndexSong);

        // changeCurrentSong(currentIndexSong);
        // setCurrentSongIndex(currentSongIndex);

        if (currentIndexSong?.params && currentSongIndex !== 0) {
          changeParam(currentIndexSong.params);
        }

        if (
          // !(PLAYLIST_PARAM?.startsWith?.("RDAMPL") ||
          //   PLAYLIST_PARAM?.startsWith?.("OLA")) &&
          endpoint &&
          isPlayerPageOpen // && currentIndexSong?.videoId !== VID_PARAM
        ) {
          history.replace(endpoint);
        }
      }
    }
  }, [
    currentSongIndex,
    playerState,
    ////////////////////////////////////////////////////////////////
    changeParam,
    history,
    // isPlayerPageOpen,
    // playlistId,
    // upNextSongsList,
  ]);

  // const selectedSongStateVideoId = selectedSong?.videoId;

  useEffect(() => {
    setCurrentTab(0);
    setSkeletonLoading(true);
  }, [PLAYLIST_PARAM]);

  useEffect(() => {
    // windowResizeHandler(windowWidth, windowHeight);
    if (selectedSong) {
      changeCurrentSong(selectedSong);
    }
    openPlayer();

    // if ((!PLAYLIST_PARAM || !PARAMS) && playlistId) {
    //   const p = !VID_PARAM ? "?" : "&";
    //   history.replace(
    //     `/play${VID_PARAM ? `?id=${VID_PARAM}` : ""}${p + `list=${playlistId}` || ""}`
    //   );
    // }
  }, [
    // windowResizeHandler,
    changeCurrentSong,
    openPlayer,
    VID_PARAM,
    playlistId,
    PLAYLIST_PARAM,
    /*  history, playlistId, */
    selectedSong,

    // isPlayerPageOpen,
  ]);
  // hasSelectedSong,

  // ! using window.document | window.localStorage

  // if (!hasSelectedSong && !selectedSongState) {
  //   // do error handling / unable to play the song
  //   toast.error("Unable to play audio track.", {
  //     autoClose: 800,
  //     theme: "dark",
  //   });
  // }

  // thumbnail
  const thumbnails = selectedSongState?.thumbnails;

  // tabs
  const next_songs = upNextSongsList;

  // const styleVal = isPlayerPageOpen ? "visible" : "hidden"
  const [isVisible, setIsVisible] = useState("visible");

  useEffect(() => {
    let timeout;
    if (isPlayerPageOpen) {
      setIsVisible("visible");
    } else {
      timeout = setTimeout(() => {
        setIsVisible("hidden");
      }, 1500);
    }

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [isPlayerPageOpen]);

  return (
    <Fragment>
      {isFetching && (
        <Fragment>
          {showSkeletonLoading && next_songs?.length <= 0 && (
            <FullScreenPopup transparent style={{zIndex: 999}} loadingText />
          )}
          <div
            className={`position-center mv-top flex-center ${styles["song-fetching"]}`}>
            <Loading createPortal={false} />
          </div>
        </Fragment>
      )}

      <div
        className={`${styles["song"]} ${
          isPlayerPageOpen
            ? styles["song-page-full"]
            : styles["song-page-close"]
        }`}
        style={{
          visibility: isVisible,
        }}>
        <div className={styles["song-thumbnail"]}>
          <Image
            // style={imageStyle}
            pictureClassname={styles["song-picture"]}
            alt={""}
            // className={styles["artist-header__img"]}
            className={styles["song-image"]}
            loadedClassName="opacity-1"
            src={
              thumbnails
                ? thumbnails[thumbnails.length - 1]?.url
                : "/assets/images/thumbnail.png"
            }
            sources={thumbnails}
          />
        </div>

        <div className={styles["song-tabs"]}>
          <Tabs
            textColor="inherit"
            // indicatorColor="secondary"
            className="tab-header"
            TabIndicatorProps={{className: "bg-white"}}
            value={Number(currentTab)}
            onChange={tabHandleChange}
            aria-label="tabs">
            <Tab
              className={`tab-button link-small ${
                (!hasSelectedSong && "light-gray") || "white"
              }`}
              label="Up next"
              {...a11yProps(0)}
            />
            <Tab
              className={`tab-button link-small ${
                ((!hasLyrics || isFetching) && "light-gray") || "white"
              }`}
              label={hasLyrics ? "Lyrics" : "Lyrics (NA)"}
              disabled={!hasLyrics || isFetching}
              {...a11yProps(1)}
            />
            <Tab
              className={`tab-button link-small ${
                ((!hasRelated || isFetching) && "light-gray") || "white"
              }`}
              label={"Related"}
              disabled={!hasRelated || isFetching}
              {...a11yProps(2)}
            />
          </Tabs>
          <Scrollbars
            className={styles["song-tabs-list"]} // renderView={renderView}
            autoHide={false}
            renderThumbVertical={renderThumbVertical}
            renderTrackVertical={renderTrackVertical}>
            <div className={`tab-content`}>
              {isFetching && showSkeletonLoading && next_songs?.length <= 0 ? (
                <div index={0} value={Number(currentTab)}>
                  <Skeleton className={"skeleton skeleton-bg"} />
                  <Skeleton className={"skeleton skeleton-bg"} />
                  <Skeleton className={"skeleton skeleton-bg"} />
                  <Skeleton
                    animation="wave"
                    className={"skeleton skeleton-bg"}
                  />
                  <Skeleton
                    animation="wave"
                    className={"skeleton skeleton-bg"}
                  />
                  <Skeleton
                    animation="wave"
                    className={"skeleton skeleton-bg"}
                  />
                  <Skeleton
                    animation="wave"
                    className={"skeleton skeleton-bg"}
                  />
                  <Skeleton
                    animation={false}
                    className={"skeleton skeleton-bg"}
                  />
                  <Skeleton
                    animation={false}
                    className={"skeleton skeleton-bg"}
                  />
                  <Skeleton
                    animation={false}
                    className={"skeleton skeleton-bg"}
                  />
                </div>
              ) : (
                <NextSongsTab
                  changeSelectedSong={setSelectedSongState}
                  selectedSong={selectedSongState}
                  list={next_songs}
                  isStaticList={true}
                  setCurrentSongIndex={setCurrentSongIndex}
                  changeParam={changeParam}
                  index={0}
                  value={Number(currentTab)}
                />
              )}

              <LyricsTab
                logout={logout}
                hasLyrics={hasLyrics}
                browseId={data?.lyrics?.browseId}
                index={1}
                value={Number(currentTab)}
              />
              <RelatedTab
                logout={logout}
                hasRelated={hasRelated}
                browseId={data?.related?.browseId}
                index={2}
                value={Number(currentTab)}
              />
            </div>
          </Scrollbars>
        </div>
      </div>
    </Fragment>
  );
}

const areEqual = (prevProps, nextProps) => {
  /*
  
  // http request response
  data={data}
  // url params
  VID_PARAM={id}
  PLAYLIST_PARAM={list}
  // fetching state
  isFetching={isFetching}
  // is PLAYER_SONG_PAGE_OPEN
  isPlayerPageOpen={isPlayerPageOpen}
  // change current song
  changeCurrentSong={changeCurrentSong}
  // current song index
  currentSongIndex={currentSongIndex}
  // change song index
  setCurrentSongIndex={setCurrentSongIndex}
  // change song param
  changeParam={setCurrentSongParam}
  // player state exp: loading, error, playing, paused
  playerState={playerState || "loading"}
  // open player
  openPlayer={openPlayer}
  // up next list
  upNextSongsList={upNextSongs}
  */

  const prevList = prevProps?.upNextSongsList
    ?.map(e => e.videoId || false)
    .join(" ");
  const nextList = nextProps?.upNextSongsList
    ?.map(e => e.videoId || false)
    .join(" ");

  // prevProps?.upNextSongsList === nextProps?.upNextSongsList &&

  return (
    prevList === nextList &&
    prevProps?.data?.selectedSong?.videoId ===
      nextProps?.data?.selectedSong?.videoId &&
    prevProps?.data?.currentVideoEndpoint?.videoId ===
      nextProps?.data?.currentVideoEndpoint?.videoId &&
    prevProps?.VID_PARAM === nextProps?.VID_PARAM &&
    prevProps?.PLAYLIST_PARAM === nextProps?.PLAYLIST_PARAM &&
    prevProps?.isFetching === nextProps?.isFetching &&
    prevProps?.isPlayerPageOpen === nextProps?.isPlayerPageOpen &&
    prevProps?.changeCurrentSong === nextProps?.changeCurrentSong &&
    prevProps?.currentSongIndex === nextProps?.currentSongIndex &&
    prevProps?.setCurrentSongIndex === nextProps?.setCurrentSongIndex &&
    prevProps?.changeParam === nextProps?.changeParam &&
    prevProps?.playerState === nextProps?.playerState &&
    prevProps?.openPlayer === nextProps?.openPlayer
  );
};

export default memo(Song, areEqual);
