import {Fragment, useContext} from "react";
import {useQuery} from "react-query";
import Skeleton from "@mui/material/Skeleton";

import AuthContext from "../../../context/AuthContext";

import {fetcher, hasLoginError} from "../../../functions/requestFetcher";

import styles from "./Related.module.scss";

import Image from "../Image/Image";
// import Spinner from "../Loading/Spinner";
import MusicShelf from "../../MusicShelf/MusicShelf";
// import MusicShelfCarouselList from "../../MusicShelf/MusicShelfList/MusicShelfCarouselList";
// import RowMusicShelfList from "../../RowMusicShelf/RowMusicShelfList/RowMusicShelfList";
import {getJsxFromArr, getTextFromArr} from "../../../functions/getJsxFromArr";
import {getKey} from "../../../functions/uniqueSuffix";
import {deleteJunkCache} from "../../../react-query-client";
// import {getKey} from "../../../functions/uniqueSuffix";
// import {title} from "process";

// const CONTAIN_DESCRIPTION = true;

const CARD_CONFIG = {
  cardWidth: 180,
  cardGap: 5,
  cardColumns: 5,
  listHeight: 32,
  cardRows: 1,
  carousellMargin: 20,
};

function Related({browseId, logout}) {
  const {token} = useContext(AuthContext);

  // const [isShowingMoreDescription, setIsShowingMoreDescription] =
  //   useState(false);

  const {data, error, isError, isSuccess} = useQuery(
    ["related", browseId],
    () => {
      return fetcher(
        {
          url: `https://soundrex.onrender.com/api/v1/browse?id=${browseId}`,
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
      // staleTime: 210000, // Ms = 3.5 min
      staleTime: 300000,

      select: data => {
        deleteJunkCache("related", 3);

        return data;
      },
    }
  );

  // const toggleDescriptionButton = () =>
  //   setIsShowingMoreDescription(prev => !prev);

  let content = (
    <Fragment>
      {/* <div className="fixed-right">
        <Spinner thin />
      </div> */}
      <Skeleton className={"skeleton-title skeleton-bg"} />
      <div className="skeleton-grid-list">
        <Skeleton className={"skeleton-grid-item skeleton-bg"} />

        <Skeleton
          animation="wave"
          className={"skeleton-grid-item skeleton-bg"}
        />
        <Skeleton
          animation={false}
          className={"skeleton-grid-item skeleton-bg"}
        />
      </div>

      <Skeleton className={"skeleton-title skeleton-bg mg-t-4"} />
      <div className="skeleton-grid-list">
        <Skeleton className={"skeleton-grid-item skeleton-bg"} />

        <Skeleton
          animation="wave"
          className={"skeleton-grid-item skeleton-bg"}
        />
        <Skeleton
          animation={false}
          className={"skeleton-grid-item skeleton-bg"}
        />
      </div>
    </Fragment>
  );

  // if there is an error, immediately return it to Ui
  if (isError && error) {
    const hasLoginErr = hasLoginError(error);
    if (hasLoginErr) {
      logout();
    }

    content = <p className="centered capitalize text-medium">No data found.</p>;
  }

  if (isSuccess) {
    if (
      data?.contents
      // || data?.message?.messageRenderer
    ) {
      //   const isMessageRenderer = data?.message?.messageRenderer;

      /*
      if (!isMessageRenderer) {
        // filter lyrics
        for (let item of data?.list) {
          if (item.hasLyrics) {
            const lyrics = item?.lyrics && getTextFromArr(item.lyrics);
            const footer = item?.footer && getTextFromArr(item.footer);
            content = <LyricsTab lyrics={lyrics} footer={footer} />;
          }
        }
      } else {
        // shoe message
        const message = data?.message;
        content = <MessageRenderer msg={message} />;
      }
      */
      content = [];
      for (let item of data.contents) {
        const titleWbtn =
          item?.title && getJsxFromArr(item.title, "card-link", null, true);
        const list = item?.list;

        const isDescription = item?.description;
        const isCarouselShelf = item?.carouselRenderer;

        if (isDescription) {
          const title = item?.title && getJsxFromArr(item.title);
          const subtitle = item?.subtitle && getJsxFromArr(item.subtitle);
          const description =
            item.description && getTextFromArr(item.description);
          content.push(
            <div
              key={getKey(Math.random())}
              className="description-shelf mg-t-3">
              <div className={styles["related-content-header"]}>
                <p
                  className={`display-small white ${styles["related-content-title"]}`}>
                  {title}
                </p>
                {subtitle && (
                  <p
                    className={`link-small mg-t-1 gray ${styles["related-content-subtitle"]}`}>
                    {subtitle}
                  </p>
                )}
              </div>
              <p className="white mg-t-3 text-medium">{description}</p>
            </div>
          );
        } else if (isCarouselShelf && list) {
          const oldTitle = titleWbtn;

          const strapline = item?.strapline && getTextFromArr(item.strapline);
          const thumbnail = item?.thumbnail && item.thumbnail[0];

          const title = strapline
            ? getJsxFromArr(item.title, "card-link")
            : oldTitle;

          let contentHeader = title;

          if (strapline && !thumbnail) {
            contentHeader = (
              <div className="flex-column">
                <p className="display-small gray">{strapline}</p>
                {title}
              </div>
            );
          }
          if (strapline && thumbnail) {
            contentHeader = (
              <div className="flex-align">
                <Image
                  className={styles["related-content-header-thumbnail"]}
                  src={thumbnail.url}
                  // sources={item.thumbnail}
                  // pictureClassname={"full-hw"}
                />
                <div className="flex-column">
                  <p className="gray">{strapline}</p>
                  {title}
                </div>
              </div>
            );
          }

          content.push(
            <div className={`mg-t-5 ${styles["related-content"]}`}>
              <MusicShelf
                {...CARD_CONFIG}
                isRowMusicShelf={!isCarouselShelf}
                disableCarousel={!isCarouselShelf}
                hasMoreItems={false}
                list={list}
                title={
                  <div
                    className={`link-large white ${styles["related-content-header"]} `}>
                    {contentHeader}
                  </div>
                }
                isTitleComponent={
                  <div
                    className={`link-large white ${styles["related-content-header"]} `}>
                    {contentHeader}
                  </div>
                }
                titleClasses={`display-small white ${styles["artist-content-header"]}`}
              />
            </div>
          );
        }
      }
    } else {
      content = (
        <p className="centered capitalize text-medium">No data found.</p>
      );
    }
  }

  return <div className={styles["related-container"]}>{content}</div>;
}

export default Related;
