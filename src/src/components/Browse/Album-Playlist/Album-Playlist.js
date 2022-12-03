import {
  useState,
  Fragment,
  useEffect,
  useCallback,
  memo,
  useContext,
} from "react";
import {useQuery} from "react-query";
import {useHistory} from "react-router-dom";

import {fetcher, hasLoginError} from "../../../functions/requestFetcher";

import RowMusicShelfList from "../../RowMusicShelf/RowMusicShelfList/RowMusicShelfList";
import Image from "../../UI/Image/Image";
import Icon from "../../UI/Icon/Icon";
import ShowMoreButton from "../../UI/Button/ShowMoreButton/ShowMoreButton";
import PlayButton from "../../UI/Button/PlayButton/PlayButton";
import LikeButton from "../../UI/Button/LikeButton/LikeButton";
import Spinner from "../../UI/Loading/Spinner";

import MoreOptionaMenu from "../../UI/Menu/moreOptionsMenu/moreOptionsMenu";

import {
  getJsxFromArr,
  getTitleFromArr,
  getTextFromArr,
} from "../../../functions/getJsxFromArr";

import styles from "./Album_Playlist.module.scss";
import Context from "../../../context/context";
// import {toast} from "react-toastify";

// const toastOptions = {
//   theme: "dark",
// };

// const intial = {counter: 0};

function Album_Playlist({
  data,
  token,
  browseId,
  addToFavouritesHandler,
  removeFromFavouritesHandler,
  logout,

  // library,
}) {
  const history = useHistory();

  const [isShowingMoreDescription, setIsShowingMoreDescription] =
    useState(false);

  const [isLiked, setIsLiked] = useState(false);

  const {
    setCurrentSongIndex,
    setCurrentSongParam,
    closePlayer,
    // upNextSongs,
    setUpNextSongs,
    currentSong,
  } = useContext(Context);

  const {
    data: isLikedData,
    error,
    isError,
    isSuccess,
  } = useQuery(
    ["soundrex", browseId],
    () => {
      return fetcher(
        {
          url: `https://soundrex.onrender.com/soundrex/is-liked`,
          method: "POST",
          headers: {
            authorization: "Bearer " + token,
          },
          data: {
            id: browseId,
          },
        },
        false,
        false,
        false,
        null,
        null
      );
    },
    {
      // refetchOnWindowFocus: false,
      // staleTime: 180000, // 3min
      keepPreviousData: true,
    }
  );

  let LikeBtn = (
    <Fragment>
      <div className="flex-center">
        <Spinner />
      </div>
    </Fragment>
  );

  // if there is an error, immediately return it to Ui
  if (isError && error) {
    const hasLoginErr = hasLoginError(error);
    if (hasLoginErr) {
      logout();
    }
    LikeBtn = <span></span>;
  }

  // useEffect(() => {
  //   intial.counter = 0;
  //   console.log("ALbum-playlist Intialized");
  // }, []);

  useEffect(() => {
    if (isSuccess) {
      if (
        isLikedData?.isLiked !== null
        // && intial.counter === 0
      ) {
        // const alreadyLiked = library?.find(s => s.id === browseId);
        // intial.counter++;
        setIsLiked(isLikedData?.isLiked);
      }
    }
  }, [isSuccess, isLikedData, browseId]);

  const header = data?.header;
  const rawTitle = header?.title?.length > 0 && getTitleFromArr(header?.title);
  const currentThumbnail =
    header?.thumbnails?.[0]?.url ||
    `https://i.ytimg.com/vi/${browseId}/hqdefault.jpg`;

  const handlerData = {
    title: rawTitle,
    thumbnail: currentThumbnail,
    id: browseId,
    browseId,
  };

  const handler = useCallback(
    () =>
      isLiked && rawTitle
        ? removeFromFavouritesHandler(
            browseId,
            () => setIsLiked("loading"),
            () => setIsLiked(false),
            () => setIsLiked(true)
          )
        : addToFavouritesHandler(
            handlerData,
            () => setIsLiked("loading"),
            () => setIsLiked(true),
            () => setIsLiked(false)
          ),
    [
      isLiked,
      rawTitle,
      currentThumbnail,
      browseId,
      addToFavouritesHandler,
      removeFromFavouritesHandler,
    ]
  );

  if (isSuccess) {
    if (isLikedData) {
      LikeBtn = (
        <LikeButton
          liked={isLiked}
          onClick={handler}
          className={styles["album-playlist-header-actions-like"]}
        />
      );
    } else {
      LikeBtn = <span></span>;
    }
  }

  // header
  const title = header?.title?.length > 0 && (
    <h1 className={` ${styles["album-playlist-header__title"]} display-medium`}>
      {getTitleFromArr(header.title)}
    </h1>
  );

  const subtitle =
    header?.subtitle?.length > 0 && getJsxFromArr(header.subtitle, "card-link");
  const description =
    header?.description?.length > 0 && getTextFromArr(header.description);
  const secondSubtitle =
    header?.secondSubtitle?.length > 0 && getJsxFromArr(header.secondSubtitle);

  const menu = header?.menu?.length > 0 && (
    <MoreOptionaMenu
      menuOptions={header.menu}
      serviceSuccessMsg={
        Boolean(browseId.startsWith("MPREb"))
          ? "Album will play next"
          : "Playlist will play next"
      }
    />
  );

  const toggleButton = () => setIsShowingMoreDescription(prev => !prev);
  const isDescriptionLengthy = description && description.trim().length > 180;

  // body
  let list = data?.contents;
  if (list?.[0]?.list) list = list[0].list;

  // actions
  // play btn
  const firstSongOfList =
    list?.length > 0 && list?.find(v => v?.videoId)?.videoId;

  const playButtonClickHandler = () => {
    history.push(`/play?id=${firstSongOfList}`);
  };

  let playButton = (
    <PlayButton
      onClick={playButtonClickHandler}
      className={styles["album-playlist-header-actions-play"]}
      icon={{
        className: styles["album-playlist-header-actions-play-icon"],
        svg: "play",
        alt: "Play song",
      }}
    />
  );

  if (header?.buttons) {
    const buttons = header.buttons;
    if (buttons?.length) {
      for (const button of buttons) {
        const text = getTextFromArr(button?.text)?.toLowerCase();
        const hasNavigation =
          button?.params ||
          button?.videoId ||
          button?.browseId ||
          button?.playlistId;

        let endpoint = "";

        if (button?.browseId) endpoint = `/browse/${button.browseId}`;
        if (button?.videoId) endpoint = `/play?id=${button.videoId}`;

        if (button?.playlistId && !button?.videoId) {
          endpoint += `/play?list=${button.playlistId}`;
        } else if (button?.playlistId && !button?.browseId) {
          endpoint += `${button?.videoId ? "&" : "?"}list=${button.playlistId}`;
        }

        if (
          !button?.playlistId &&
          !button?.videoId &&
          button?.params &&
          button?.browseId
        ) {
          endpoint += `?params=${button.params}`;
        }

        if (
          hasNavigation &&
          (text?.includes("play") || text?.includes("shuffle"))
        ) {
          playButton = (
            <PlayButton
              onClick={() => {
                if (endpoint?.startsWith("/play")) {
                  if (currentSong?.playlistId !== button?.playlistId) {
                    setUpNextSongs([]);
                  }
                  closePlayer();
                  setCurrentSongParam("");
                }

                history.push(endpoint);
                if (endpoint?.startsWith("/play")) {
                  return setCurrentSongIndex(0);
                }
              }}
              className={styles["album-playlist-header-actions-play"]}
              icon={{
                className: styles["album-playlist-header-actions-play-icon"],
                svg: text?.includes("shuffle") ? "shuffle_play" : "play",
                alt: text,
                title: text,
              }}
            />
          );
        }
      }
    }
  }

  return (
    <div className={styles["album-playlist-wrapper"]}>
      {/* // head */}

      {header && (
        <div className={styles["album-playlist-header"]}>
          <div className={styles["album-playlist-header__img-wrapper"]}>
            {header?.thumbnails?.length > 0 && (
              <Image
                src={header.thumbnails[header.thumbnails.length - 1]?.url}
                alt={""}
                className={styles["album-playlist-header__img"]}
                sources={header.thumbnails}
                // pictureClassname={"full-hw"}
              />
            )}
          </div>
          <div className={styles["album-playlist-header__content"]}>
            {title}
            <div className={styles["album-playlist-header__subtitles"]}>
              <div
                className={styles["album-playlist-header__subtitles-subtitle"]}>
                {subtitle}
              </div>

              <div
                className={
                  styles["album-playlist-header__subtitles-secondSubtitle"]
                }>
                {secondSubtitle}
              </div>
            </div>
            {description && (
              <Fragment>
                <div
                  className={
                    styles[
                      isDescriptionLengthy
                        ? `album-playlist-header__description-${
                            isShowingMoreDescription ? "less" : "more"
                          }`
                        : `album-playlist-header__description-more`
                    ]
                  }>
                  {description}
                </div>

                {isDescriptionLengthy && (
                  <ShowMoreButton
                    className={`mg-t-1 text-x-small ${styles["album-playlist-header__description-btn"]}`}
                    onClick={toggleButton}
                    isShowingMoreContent={isShowingMoreDescription}
                  />
                )}
              </Fragment>
            )}
          </div>

          <div className={styles["album-playlist-header-actions"]}>
            {(firstSongOfList || header?.buttons) && playButton}
            {LikeBtn}
            {menu}
          </div>
        </div>
      )}

      {/* // body */}
      <div className={styles["album-playlist-contents"]}>
        <div className={styles["album-playlist-contents-header"]}>
          <p
            className={`text-large ${styles["album-playlist-contents-header-thumb"]}`}>
            #
          </p>
          <p
            className={`uppercase text-medium ${styles["album-playlist-contents-header-content"]}`}>
            title
          </p>
          <Icon
            className={`${styles["album-playlist-contents-header-fixed"]}`}
            alt="Duration"
            svg="clock"
          />
        </div>

        <div className={styles["album-playlist-contents-list"]}>
          <RowMusicShelfList list={list} isRawSongs={true} />
        </div>
      </div>
    </div>
  );
}

function areEqual(prevProps, nextProps) {
  // data,
  // token,
  // browseId,
  // addToFavouritesHandler,
  // removeFromFavouritesHandler,

  const prevData = [];

  for (const [key, value] of Object.entries(prevProps?.data || {})) {
    prevData.push(value);
  }

  const nextData = [];

  for (const [key, value] of Object.entries(nextProps?.data || {})) {
    nextData.push(value);
  }

  const prevDataRaw = prevData.join(" ");
  const nextDataRaw = nextData.join(" ");

  // console.log("render Album-Playlist", prevDataRaw, nextDataRaw);

  return (
    prevDataRaw === nextDataRaw &&
    prevProps?.token === nextProps?.token &&
    prevProps?.browseId === nextProps?.browseId &&
    prevProps?.addToFavouritesHandler === nextProps?.addToFavouritesHandler &&
    prevProps?.removeFromFavouritesHandler ===
      nextProps?.removeFromFavouritesHandler
  );
}

export default /*memo*/ Album_Playlist;
