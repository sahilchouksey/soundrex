import {forwardRef, memo} from "react";
import {Link} from "react-router-dom";
import {CardActionArea} from "@mui/material";
import styles from "./MusicShelfCard.module.scss";

// import Button from "../../UI/Button/Button";
import PlayButton from "../../UI/Button/PlayButton/PlayButton";
import Image from "../../UI/Image/Image";
// import Icon from "../../UI/Icon/Icon";
import MusicShelfCardContainer from "./MusicShelfCardContainer";
import {getJsxFromArr} from "../../../functions/getJsxFromArr";
import {getKey} from "../../../functions/uniqueSuffix";
import MoreOptionaMenu from "../../UI/Menu/moreOptionsMenu/moreOptionsMenu";

const MusicShelfCard = forwardRef(({data, ...props}, ref) => {
  const title =
    data?.title?.length > 0 && getJsxFromArr(data.title, "card-link");
  const subtitle =
    data?.subtitle?.length > 0 && getJsxFromArr(data.subtitle, "card-link");
  const thumbnail = data?.thumbnails?.length > 0 && data.thumbnails?.[0]?.url;

  const isPlayable = data?.videoId;

  const menu = data?.menu?.length > 0 && (
    <MoreOptionaMenu
      fullSpace
      className={styles["music-card__header-overlay-menu"]}
      menuOptions={data.menu}
      serviceSuccessMsg={
        data?.browseId ? "Playlist will play next" : "Song will play next"
      }
    />
  );

  let endpoint = data?.browseId && `/browse/${data.browseId}`;
  if (data?.videoId) endpoint = `/play?id=${data.videoId}`;

  let content = (
    <li key={getKey(Math.random())}>
      <MusicShelfCardContainer style={{...props?.styles}}>
        <CardActionArea component="div">
          {menu && (
            <div className={styles["music-card__header-overlay"]}>{menu}</div>
          )}
          <Link to={endpoint} className={styles["music-card"]} ref={ref}>
            <div className={styles["music-card__header"]}>
              <Image
                src={thumbnail}
                // circle={listTitle.toLowerCase().includes("artist")}
                alt={
                  data?.title?.length > 0 ? data?.title?.[0]?.text : "Not found"
                }
                className={styles["music-card__img"]}
                sources={data?.thumbnails}
                // pictureClassname={"full-hw"}
              />

              <div className={styles["music-card__header-button-wrapper"]}>
                <PlayButton
                  className={styles["music-card__header-button"]}
                  aria-label={isPlayable ? "play song" : "open album"}
                  data-testid="open-button"
                  icon={{
                    svg: isPlayable ? "play" : "new-window",
                    alt: isPlayable ? "play song" : "open album",
                  }}
                />
              </div>
            </div>

            <div className={styles["music-card__body"]}>
              <p className={`link-small ${styles["music-card__title"]}`}>
                {title}
              </p>
              <span
                className={`text-x-small ${styles["music-card__subtitle"]}`}>
                {/* <a href="/" className={'card-link'}>
            Mangli
          </a>
          • 9.3M views */}
                {subtitle}
              </span>
            </div>
          </Link>
        </CardActionArea>
      </MusicShelfCardContainer>
    </li>
  );

  if (data?.menu?.length > 0) {
    content = (
      <MoreOptionaMenu
        isContextMenu
        className={styles["music-card__header-overlay-menu"]}
        menuOptions={data.menu}
        serviceSuccessMsg={
          data?.browseId ? "Playlist will play next" : "Song will play next"
        }>
        {content}
      </MoreOptionaMenu>
    );
  }

  // isContextMenu
  return content;
});

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

//   console.log("render MusicShelfBox", prevDataRaw, nextDataRaw);

//   return (
//     prevDataRaw === nextDataRaw &&
//     prevProps?.underLine === nextProps?.underLine &&
//     prevProps?.type === nextProps?.type &&
//     prevProps?.rectangleBoxClass === nextProps?.rectangleBoxClass
//   );
// }

export default /*memo*/ MusicShelfCard;
