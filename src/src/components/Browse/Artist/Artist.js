import {memo, useContext, useState} from "react";
import {useHistory} from "react-router-dom";

import MusicShelf from "../../MusicShelf/MusicShelf";
// import MusicShelfCarouselList from "../../MusicShelf/MusicShelfList/MusicShelfCarouselList";
// import RowMusicShelfList from "../../RowMusicShelf/RowMusicShelfList/RowMusicShelfList";
import Image from "../../UI/Image/Image";
// import Icon from "../../UI/Icon/Icon";
import ShowMoreButton from "../../UI/Button/ShowMoreButton/ShowMoreButton";
import PlayButton from "../../UI/Button/PlayButton/PlayButton";
// import LikeButton from "../../UI/Button/LikeButton/LikeButton";

import {
  getJsxFromArr,
  getTitleFromArr,
  getTextFromArr,
} from "../../../functions/getJsxFromArr";

import styles from "./Artist.module.scss";
import {getKey} from "../../../functions/uniqueSuffix";
import Context from "../../../context/context";

// const CONFIG = {
//   cardWidth: 210,
//   cardGap: 15,
//   cardColumns: 5,
//   listHeight: 32,
//   cardRows: 1,
//   carousellMargin: 40,
// };

function Artist({data, artistId}) {
  const [isShowingMoreDescription, setIsShowingMoreDescription] =
    useState(false);

  // const [isLiked, setIsLiked] = useState(false);

  const {
    setCurrentSongIndex,
    setCurrentSongParam,
    closePlayer,
    // upNextSongs,
    setUpNextSongs,
    currentSong,
  } = useContext(Context);

  const history = useHistory();

  // header
  const header = data?.header;
  const title = header?.title?.length > 0 && (
    <h1 className={`display-large ${styles["artist-header-title"]}`}>
      {getTitleFromArr(header.title)}
    </h1>
  );
  // const subtitle =
  // header?.subtitle?.length > 0 && getJsxFromArr(header.subtitle, "card-link");
  const description =
    // "Shantanu Moitra is an Indian score composer, musician and pianist who has composed songs for the Hindi film industry, and is most known for his scores in the films Parineeta, Hazaaron Khwaishein Aisi, Lage Raho Munnabhai and 3 Idiots sa";
    header?.description?.length > 0 && getTextFromArr(header.description);
  // const secondSubtitle =
  // header?.secondSubtitle?.length > 0 && getJsxFromArr(header.secondSubtitle);

  const toggleButton = () => setIsShowingMoreDescription(prev => !prev);

  const artistDescriptionMaxLength = 149;
  const isDescriptionLengthy =
    description && description.trim().length > artistDescriptionMaxLength;

  // body
  let list = data?.contents;

  // actions
  // play btn
  const firstSongOfList =
    list?.[0]?.list?.length > 0 && list[0].list?.find(v => v?.videoId)?.videoId;

  const playButtonClickHandler = () => {
    history.push(`/play?id=${firstSongOfList}`);
  };

  let playButton = (
    <PlayButton
      onClick={playButtonClickHandler}
      className={styles["artist-header-actions-play"]}
      icon={{
        className: styles["artist-header-actions-play-icon"],
        svg: "play",
        alt: "Play song",
      }}
    />
  );

  if (header?.playButton) {
    const buttons = [header.playButton];
    if (buttons?.length) {
      for (const button of buttons) {
        // console.log("artist play", button);
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
                // if (endpoint) {
                //   if (currentSong?.playlistId !== button?.playlistId) {
                //     setUpNextSongs([]);
                //   }
                //   setCurrentSongIndex(0);
                //   setCurrentSongParam("");
                // }

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
              className={styles["artist-header-actions-play"]}
              icon={{
                className: styles["artist-header-actions-play-icon"],
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

  let contents;
  if (list?.length) {
    contents = list.map((item, i) => {
      const title =
        item?.title &&
        getJsxFromArr(
          item.title,
          `${styles["artist-content-title"]}`,
          artistId,
          true
        );
      const body = item?.list;
      const description = item?.description && getTextFromArr(item.description);
      const isCarouselShelf = item?.carouselRenderer;

      if (description) {
        const title = item?.title && getJsxFromArr(item.title);
        const subtitle = item?.subtitle && getJsxFromArr(item.subtitle);

        return (
          <div
            key={getKey(i).toString()}
            className={` ${styles["artist-content-footer"]} description-shelf-full-w`}>
            <div className={styles["artist-content-header"]}>
              <p
                className={`display-small white ${styles["artist-content-title"]}`}>
                {title}
              </p>

              {subtitle && (
                <p
                  className={`link-small mg-t-1 gray ${styles["artist-content-subtitle"]}`}>
                  {subtitle}
                </p>
              )}
            </div>

            <p className="white mg-t-3 text-medium">{description}</p>
          </div>
        );
      }

      return (
        <div key={getKey(i + title)} className={styles["artist-content"]}>
          <MusicShelf
            key={getKey(i + title)}
            isRowMusicShelf={!isCarouselShelf}
            disableCarousel={!isCarouselShelf}
            hasMoreItems={false}
            list={body}
            title={title}
            isTitleComponent={title}
            titleClasses={`display-small white ${styles["artist-content-header"]}`}
          />

          {/* <div
            className={`display-small white ${styles["artist-content-header"]}`}>
            {title}
          </div>

          <div className={styles["artist-content-list"]}>
            {isCarouselShelf && (
              <MusicShelfCarouselList list={body} {...CONFIG} />
            )}
            {!isCarouselShelf && (
              <RowMusicShelfList list={body} isRawSongs={true} />
            )}
          </div> */}
        </div>
      );
    });
  }

  return (
    <div className={styles["artist-wrapper"]}>
      {/* // head */}

      {header && (
        <div className={styles["artist-header"]}>
          <Image
            pictureClassname={styles["artist-header-picture"]}
            alt={""}
            // className={styles["artist-header__img"]}
            className={`${styles["artist-header-thumbnail"]}`}
            loadedClassName="opacity-1"
            src={
              header?.thumbnails?.length > 0
                ? header.thumbnails[header.thumbnails.length - 1]?.url
                : "/assets/images/thumbnail.png"
            }
            sources={header?.thumbnails}
          />

          {/* <div className={styles["artist-header-foregroundThumbnail"]}>
            <Image
              // src={header.thumbnails[header.thumbnails.length - 1]?.url}
              alt={""}
              referrerpolicy="no-referrer"
              // className={styles["artist-header__img"]}
              className={styles["artist-header-thumbnail"]}
              bgImg={
                header?.thumbnails?.length > 0 &&
                header.thumbnails[header.thumbnails.length - 1]?.url
              }
              sources={header?.thumbnails}
            />
          </div> */}

          <div className={styles["artist-header__content"]}>{title}</div>

          <div className={styles["artist-header-actions"]}>
            {(firstSongOfList || header?.buttons) && playButton}

            {/* <LikeButton
              liked={isLiked}
              className={styles["artist-header-actions-like"]}
            /> */}
          </div>
        </div>
      )}

      <div className="description-shelf">
        {description && (
          <div>
            <div
              className={
                isDescriptionLengthy
                  ? `description-shelf-${
                      isShowingMoreDescription ? "less" : "more"
                    }`
                  : `description-shelf-more`
              }>
              {description}
            </div>

            {isDescriptionLengthy && (
              <ShowMoreButton
                className="mg-t-1 text-x-small"
                onClick={toggleButton}
                isShowingMoreContent={isShowingMoreDescription}
              />
            )}
          </div>
        )}
      </div>

      {/* // body */}
      <div className={styles["artist-contents"]}>{contents}</div>
    </div>
  );
}

// function areEqual(prevProps, nextProps) {
//   // data, underLine, type, rectangleBoxClass
//   const prevData = [];

//   for (const [key, value] of Object.entries(prevProps?.data || {})) {
//     prevData.push(value);
//   }

//   const nextData = [];

//   for (const [key, value] of Object.entries(nextProps?.data || {})) {
//     nextData.push(value);
//   }

//   const prevDataRaw = prevData.join(" ");
//   const nextDataRaw = nextData.join(" ");

//   return (
//     prevDataRaw === nextDataRaw && prevProps?.artistId === nextProps?.artistId
//   );
// }

export default /*memo*/ Artist;
