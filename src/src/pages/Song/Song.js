import {Fragment, memo, useEffect, useState} from "react";
import {useMutation, useQuery} from "react-query";
import {useLocation, useHistory} from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

import {fetcher, hasLoginError} from "../../functions/requestFetcher";

import Loading from "../../components/UI/Loading/Loading";
import Spinner from "../../components/UI/Loading/Spinner";
import MyButton from "../../components/UI/Button/Button";

import SongPage from "../../components/Song/Song";
import {deleteJunkCache} from "../../react-query-client";

import styles from "../../components/Song/Song.module.scss";
// import {Button} from "@mui/material";

function Song({
  token,
  isPlayerPageOpen,
  changeCurrentSong,
  currentSongIndex,
  currentSongParam,
  setCurrentSongParam,

  setCurrentSongIndex,
  openPlayer,
  closePlayer,
  playerState,
  upNextSongs,
  setUpNextSongs,
  setIsAudioServerCrashed,

  addToEndOfNextSongs,
  addToNextOfNextSongs,

  nextListContinuation,
  setNextListContinuation,

  logout,
}) {
  // const [currentSongParam, setCurrentSongParam] = useState("");

  const history = useHistory();
  const location = useLocation();

  // fix re-rendering

  // const [prevAutomix, setPrevAutomix] = useState("");

  // search queries
  const id = new URLSearchParams(location.search).get("id");
  const list = new URLSearchParams(location.search).get("list");

  // const r =
  //   new URLSearchParams(location.search).get("r") === "false" ? false : true;

  const validlist = list || (!list && id && `RDAMVM${id}`);

  useEffect(() => {
    setIsAudioServerCrashed(false);
    const extractedVideoIdFromPlaylistId =
      list && list.replace("RDAMVM", "").trim();
    if (list && id === extractedVideoIdFromPlaylistId) {
      setCurrentSongIndex(0);
      setCurrentSongParam("");
      // closePlayer();
    }

    // RDAMPL, RDAO
    if (
      location.pathname.startsWith("/play") &&
      (list?.startsWith?.("RDAMPL") ||
        list?.startsWith?.("OLA") ||
        list?.startsWith?.("RDAO") ||
        list?.startsWith?.("RD"))
    ) {
      // if (currentSongIndex !== 0) setCurrentSongIndex(0);
      // if (currentSongParam) setCurrentSongParam("");
      // if (upNextSongs?.length > 0) {
      //   return setUpNextSongs([]);
      // }
      // if (upNextSongs?.length > 0) {
      //   setUpNextSongs([]);
      // }
      // if (currentSongIndex !== 0) setCurrentSongIndex(0);
      // if (currentSongParam) setCurrentSongParam("");
    }
  }, [list, setCurrentSongIndex, setCurrentSongParam, setIsAudioServerCrashed]);

  const {data, error, isError, isSuccess, isFetching, isLoading} = useQuery(
    ["song", id, validlist, currentSongParam],
    () => {
      return fetcher(
        {
          url: `https://soundrex.onrender.com/api/v1/audio/next${
            id ? `?id=${id}` : ""
          }${
            validlist
              ? `${!id ? "?" : "&"}playlistId=${validlist}${
                  currentSongParam
                    ? `${
                        !id && !validlist ? "?" : "&"
                      }params=${currentSongParam}`
                    : ""
                }${currentSongIndex >= 0 ? `&idx=${currentSongIndex}` : ""}`
              : ""
          }`,
          method: "GET",
          headers: {
            authorization: "Bearer " + token,
          },
        },
        false,
        false,
        true,
        "Opps! something went wrong.",
        {
          autoClose: 1000,
          theme: "dark",
        }
        // () => logout()
      );
    },
    {
      staleTime: Infinity, // 5min
      // staleTime: Infin`ity,
      // cacheTime: Infin`ity,
      // refetchOnWindowFocus: false,
      keepPreviousData: true,
      enabled: Boolean(id) || Boolean(list),
      select: data => {
        deleteJunkCache("song");

        return data;
      },
    }
  );

  const getAutomixList = useMutation(
    params => fetcher(params, false, false, false, null, null, () => logout()),
    {
      onSuccess: data => {
        if (data && Object.keys(data).length > 0) {
          const listIsntEmpty = data?.next_songs?.list?.list?.length > 0;
          const list = data?.next_songs?.list?.list;

          if (listIsntEmpty) {
            addToEndOfNextSongs(list, true);
          }
        }
      },
      onError: error => {
        const hasLoginErr = hasLoginError(error);
        if (hasLoginErr) {
          logout();
        }
        console.log(error);
      },
    }
  );

  const getNextContinuationList = useMutation(
    params => fetcher(params, false, false, false, null, null, () => logout()),
    {
      onSuccess: data => {
        if (data && Object.keys(data).length > 0) {
          const listIsntEmpty = data?.next_songs?.list?.list?.length > 0;
          const list = data?.next_songs?.list?.list;

          if (listIsntEmpty) {
            addToNextOfNextSongs(list, true);
          }
        }
      },
      onError: error => {
        const hasLoginErr = hasLoginError(error);
        if (hasLoginErr) {
          logout();
        }
        console.log(error);
      },
    }
  );

  let content = (
    <Fragment>
      <div className="fixed-top flex-center">
        <Loading />
      </div>

      {/* <div className="fixed-right"> */}
      <Spinner thin fullScreen />
      {/* </div> */}

      <div className="skeleton-song-page">
        <div className="flex-align skeleton-song-page-thumbnail">
          <Skeleton
            className="skeleton-bg skeleton-thumbnail-box"
            animation="wave"
            // variant="circular"
          />
        </div>

        <div className="mg-t-4 skeleton-song-page-tabs">
          <Skeleton className={"skeleton skeleton-bg"} />
          <Skeleton className={"skeleton skeleton-bg"} />
          <Skeleton className={"skeleton skeleton-bg"} />

          <Skeleton animation="wave" className={"skeleton skeleton-bg"} />
          <Skeleton animation="wave" className={"skeleton skeleton-bg"} />
          <Skeleton animation="wave" className={"skeleton skeleton-bg"} />
          <Skeleton animation={false} className={"skeleton skeleton-bg"} />
          <Skeleton animation={false} className={"skeleton skeleton-bg"} />

          <Skeleton animation={false} className={"skeleton skeleton-bg"} />
        </div>
        {/* <Spinner /> */}
      </div>
    </Fragment>
  );

  // if there is an error, immediately return it to Ui
  if (isError && error) {
    const hasLoginErr = hasLoginError(error);
    if (hasLoginErr) {
      logout();
    }
    content = (
      <p
        className={`centered capitalize text-medium ${styles["song"]} mg-t-1 ${
          isPlayerPageOpen
            ? styles["song-page-full"]
            : styles["song-page-close"]
        }`}>
        {error?.message ? error.message : "No data found."}
      </p>
    );
  }

  const currentPlaylist =
    data?.next_songs?.list?.playlistId ||
    data?.currentVideoEndpoint?.playlistId;

  useEffect(() => {
    if (isSuccess) {
      if (data && Object.keys(data).length > 0) {
        const lastSongId =
          upNextSongs?.length > 0 &&
          upNextSongs?.[upNextSongs.length - 1]?.videoId;

        if (upNextSongs?.length > 1 && lastSongId === id) {
          if (nextListContinuation) {
            getNextContinuationList.mutate({
              url: `https://soundrex.onrender.com/api/v1/audio/next${
                id ? `?id=${id}` : ""
              }${
                list
                  ? `${!id ? "?" : "&"}playlistId=${list}${
                      currentSongParam
                        ? `${
                            !id && !list ? "?" : "&"
                          }params=${currentSongParam}`
                        : ""
                    }`
                  : ""
              }${
                nextListContinuation
                  ? `&continuation=${nextListContinuation}`
                  : ""
              }`,
              method: "GET",
              headers: {
                authorization: "Bearer " + token,
              },
            });

            return setNextListContinuation(null);
          }
        }
      }
    }
  }, [currentSongIndex, token, id, nextListContinuation]);

  useEffect(() => {
    if (isSuccess) {
      if (data && Object.keys(data).length > 0) {
        const listIsntEmpty = data?.next_songs?.list?.list?.length > 0;
        const list = data?.next_songs?.list?.list;

        if (listIsntEmpty) {
          setUpNextSongs(list);
        }

        const hasNextList =
          data?.next_songs?.list?.next?.continuation?.length > 0;
        const continuation = data?.next_songs?.list?.next?.continuation;

        if ((hasNextList, continuation)) {
          setNextListContinuation(continuation);
        }

        const automixListEndpoint = data?.next_songs?.list?.playlist;

        if (automixListEndpoint && list?.length <= 5) {
          const videoId = automixListEndpoint?.videoId;
          const playlistId = automixListEndpoint?.playlistId;
          const params = automixListEndpoint?.params;

          // if (params) {
          //   setCurrentSongParam(params)
          // }

          return getAutomixList.mutate({
            url: `https://soundrex.onrender.com/api/v1/audio/next${
              videoId ? `?id=${videoId}` : ""
            }${
              playlistId
                ? `${!videoId ? "?" : "&"}playlistId=${playlistId}${
                    params
                      ? `${!videoId && !playlistId ? "?" : "&"}params=${params}`
                      : ""
                  }`
                : ""
            }`,
            method: "GET",
            headers: {
              authorization: "Bearer " + token,
            },
          });
        }
      }
    }
    // ! data is changin in every render do somthing
  }, [isSuccess, currentPlaylist, setUpNextSongs]);

  const selectedVideoId =
    data?.selectedSong?.videoId || data?.currentVideoEndpoint?.videoId;
  useEffect(() => {
    if (location.pathname.startsWith("/play")) {
      /*
      if (data) {
        const videoId = data?.currentVideoEndpoint?.videoId;

        const playlistId = data?.currentVideoEndpoint?.playlistId;

        if (videoId !== id || playlistId !== list) {
          return history.replace(
            `/play${videoId ? `?id=${videoId}` : ""}${
              (!videoId && playlistId ? "?" : "&") + `list=${playlistId}` || ""
            }`
          );
        }
      }
      */
      if (!list && id) {
        const videoId = id;
        const p = !videoId ? "?" : "&";
        let playlistId;
        // if (data) {
        playlistId = videoId && `RDAMVM${videoId}`;
        // data?.next_songs?.list?.playlist?.playlistId ||
        // data?.next_songs?.list?.playlistId ||
        // }
        // if (videoId && list)
        if (playlistId) {
          // setCurrentSongIndex(0);
          // setCurrentSongParam("");

          closePlayer();

          history.replace(
            `/play${videoId ? `?id=${videoId}` : ""}${
              (playlistId && p + `list=${playlistId}`) || ""
            }`
          );

          if (validlist !== currentPlaylist) {
            console.log("Cleaning queue", validlist, currentPlaylist);
            return setUpNextSongs([]);
          }
        }
      } else if (!id && list) {
        const extractedVideoIdFromPlaylistId =
          list && list.replace("RDAMVM", "").trim();
        const selectedSongVideoId = selectedVideoId;

        // if (list.startsWith("OLA") && selectedSongVideoId) {
        //   return history.replace(
        //     `/play?id=${selectedSongVideoId}&list=${list}`
        //   );
        // }

        // // RDAMPL
        // if (list.startsWith("RDAMPL") && selectedSongVideoId) {
        //   return history.replace(
        //     `/play?id=${selectedSongVideoId}&list=${list}`
        //   );
        // }

        // if (selectedSongVideoId !== id) {

        // }

        // console.log("IN !id && list");
        if (
          !selectedSongVideoId &&
          (list.startsWith("RDAMPL") ||
            list.startsWith("RDAO") ||
            list.startsWith("OLA") ||
            list.startsWith("PL") ||
            list.startsWith("RD"))
        ) {
          // console.log("IN !id && list 2");
          if (currentSongIndex !== 0) setCurrentSongIndex(0);

          if (upNextSongs?.length > 0) {
            setUpNextSongs([]);
          }
          if (currentSongParam) setCurrentSongParam("");
          return;
          // return closePlayer();
        }

        if (selectedSongVideoId) {
          // console.log("IN !id && list 1", selectedSongVideoId);

          return history.replace(
            `/play?id=${selectedSongVideoId}&list=${list}`
          );
        }

        if (
          extractedVideoIdFromPlaylistId
          // !list.startsWith("RDAMPL") &&
          // !list.startsWith("OLA")
        ) {
          // console.log("IN !id && list 3");

          return history.replace(
            `/play?id=${extractedVideoIdFromPlaylistId}&list=${list}`
          );
        }
      }
    }
  }, [
    id,
    list,
    location,
    selectedVideoId,
    setUpNextSongs,
    history,
    closePlayer,
  ]);

  if (isSuccess) {
    if (data && Object.keys(data).length > 0) {
      content = (
        <SongPage
          logout={logout}
          // http request response
          data={data}
          // url params
          VID_PARAM={id}
          PLAYLIST_PARAM={list}
          // fetching state
          isFetching={isFetching}
          // is PLAYER_SONG_PAGE_OPEN
          isPlayerPageOpen={isPlayerPageOpen}
          // current song data
          // currentSong={currentSong}
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
          // closePlayer={closePlayer}
          // // current song params
          // PARAMS={currentSongParam}
          // up next list
          upNextSongsList={upNextSongs}
        />
      );

      if (!upNextSongs?.length > 0 && !isLoading && !isFetching) {
        const nextSongsListEmpty = data?.message?.includes("list is empty");
        if (nextSongsListEmpty) {
          const extractedVideoIdFromPlaylistId =
            list && list.replace("RDAMVM", "").trim();

          content = (
            <div
              className={`${styles["song"]} mg-t-1 ${
                isPlayerPageOpen
                  ? styles["song-page-full"]
                  : styles["song-page-close"]
              }`}>
              <p className={`centered capitalize text-medium `}>
                Up next list is empty.
              </p>
              <div className={`flex-center full-hw `}>
                {id && extractedVideoIdFromPlaylistId !== id && (
                  <MyButton
                    className="fix-playlist-button "
                    link={`/play?id=${id}&list=RDAMVM${id}`}>
                    Fix list
                  </MyButton>
                )}
              </div>
            </div>
          );
        }
      }
    } else {
      content = (
        <p
          className={`centered capitalize text-medium ${
            styles["song"]
          } mg-t-1 ${
            isPlayerPageOpen
              ? styles["song-page-full"]
              : styles["song-page-close"]
          }`}>
          No data found.
        </p>
      );
    }
  }

  return (
    // <Spinner thin fullScreen />

    // <div className={(isPlayerPageOpen && "relative full-hw") || "hidden"}>
    content
    // </div>
  );
}

export default Song;

// useEffect(() => {
//   setCurrentSongIndex(0);
// }, []);

// window.localStorage
// useEffect(() => {
//   if (isSuccess && data && Object.keys(data).length > 0) {
//     window.window.localStorage.setItem("player-song", JSON.stringify(data));
//   }
// }, [isSuccess, id]);

// useEffect(() => {
//   window.window.localStorage.removeItem("player-song");
// }, [id]);

// const changeSong = useMutation(
//   params =>
//     ({
//       url: `https://soundrex.onrender.com/api/v1/audio/next${id ? `?id=${id}` : ""}${
//         list
//           ? `${!id ? "?" : "&"}playlistId=${list}${
//               params >= 0 ? `&idx=${params}` : ""
//             }`
//           : ""
//       }`,
//       method: "GET",
//     }),
//   {
//     onSuccess: data => {
//       if (data) {
//         setIsLoading(false);
//         setSuggestions(data);
//       }
//     },
//     onError: error => {
//       setIsLoading(false);

//       setSuggestions(null);

//     },
//   }
// );
