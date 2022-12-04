import {Link} from "react-router-dom";

import styles from "./RowListSong.module.scss";

import Image from "../../UI/Image/Image";
import Icon from "../../UI/Icon/Icon";
import {getJsxFromArr, getTextFromArr} from "../../../functions/getJsxFromArr";
import {memo} from "react";
import MoreOptionsMenu from "../../UI/Menu/moreOptionsMenu/moreOptionsMenu";

function RowListSong({data, index, ...props}) {
  const title = data?.title?.length > 0 && getTextFromArr(data.title);

  const subtitle =
    data?.subtitle?.length > 0 && getJsxFromArr(data.subtitle, "card-link");

  const otherText =
    data?.otherText?.length > 0 && getJsxFromArr(data.otherText, "card-link");

  const fixedColumns =
    data?.fixedColumns?.length > 0 &&
    getJsxFromArr(data.fixedColumns, "card-link");

  const thumbnail = data?.thumbnails?.length > 0 && data.thumbnails?.[0]?.url;

  const isPlayable = data?.videoId;

  let endpoint = data?.browseId && `/browse/${data.browseId}`;
  if (data?.videoId) endpoint = `/play?id=${data.videoId}`;

  const menu = data?.menu?.length > 0 && (
    <MoreOptionsMenu
      fullSpace={true}
      menuOptions={data?.menu}
      serviceSuccessMsg={
        isPlayable ? "Song will play next" : "Playlist will play next"
      }
    />
  );

  let content = (
    <li
      className={`relative ${styles["rowListSong-link"]} ${
        !endpoint && styles["rowListSong-link-disabled"]
      }`}>
      <Link
        disabled={!endpoint}
        draggable="false"
        to={endpoint || "#"}
        className={`full-hw absolute z-index-2 `}></Link>
      <div className={styles["rowListSong-thumbnail-container"]}>
        {endpoint && thumbnail && (
          <Image
            src={thumbnail}
            className={styles["rowListSong-thumbnail-img"]}
            // circle={listTitle.toLowerCase().includes("artist")}
            alt="Thumbnail"
            // sources={data?.thumbnails}
            // pictureClassname={"full-hw"}
          />
        )}
        {!thumbnail && endpoint && index >= 0 && (
          <p className={` text-medium`}>{index + 1}</p>
        )}

        {!endpoint && (
          <Icon
            // circle={listTitle.toLowerCase().includes("artist")}
            svg="error"
            alt="Error"
          />
        )}

        <Icon
          className={styles["rowListSong-thumbnail-hover"]}
          // circle={listTitle.toLowerCase().includes("artist")}
          svg="play"
          alt="Play"
        />
      </div>
      <div className={styles["rowListSong-content"]}>
        <p className={` link-medium ${styles["rowListSong__title"]}`}>
          {title}
        </p>

        <p className={styles["rowListSong__subtitles_container"]}>
          {subtitle && (
            <span
              className={`z-index-3 text-medium ${styles["rowListSong__subtitle"]}`}>
              {subtitle}
            </span>
          )}

          {otherText && (
            <span
              className={`z-index-3 text-medium ${styles["rowListSong__otherText"]}`}>
              {otherText}
            </span>
          )}
        </p>
      </div>

      <div className={` ${styles["rowListSong-fixed"]}`}>
        {menu && <div className={` ${styles["rowListSong-menu"]}`}>{menu}</div>}
        <p className={`text-medium ${styles["rowListSong__fixed-text"]}`}>
          {fixedColumns}
        </p>
      </div>
      {/* </Link> */}
    </li>
  );

  if (data?.menu?.length > 0) {
    content = (
      <MoreOptionsMenu
        isContextMenu
        menuOptions={data.menu}
        serviceSuccessMsg={
          isPlayable ? "Song will play next" : "Playlist will play next"
        }>
        {content}
      </MoreOptionsMenu>
    );
  }

  return content;
}

function areEqual(prevProps, nextProps) {
  // data, underLine, type, rectangleBoxClass
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

  return prevDataRaw === nextDataRaw && prevProps?.index === nextProps?.index;
}

export default /*memo*/ RowListSong;
