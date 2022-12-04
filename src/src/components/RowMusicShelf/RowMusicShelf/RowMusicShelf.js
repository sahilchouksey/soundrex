import {Fragment, memo, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from "./RowMusicShelf.module.scss";

import Image from "../../UI/Image/Image";
import Icon from "../../UI/Icon/Icon";
import {getJsxFromArr, getTitleFromArr} from "../../../functions/getJsxFromArr";
// import {style} from "@mui/system";
import Spinner from "../../UI/Loading/Spinner";
import Popup from "../../UI/Popup/Popup";
import Like from "../../UI/Icon/Icon";
import MoreOptionsMenu from "../../UI/Menu/moreOptionsMenu/moreOptionsMenu";
// import {ENOPROTOOPT} from "constants";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Button} from "@mui/material";

import PopupStyles from "../../UI/Popup/Popup.module.scss";

function RowMusicShelf({
  refetchLibrary,
  removeFromFavouritesHandler,
  rawData,
  isLibrary,
  changeSong,
  changeParam,
  isStaticList,
  selectedSong,
  data,
  type,
  github,
  linkedIn,
  url,
  // isNextSongsList = false,
  ...props
}) {
  // console.log(data);
  const title =
    (rawData && data?.title) ||
    (data?.title?.length > 0 && getTitleFromArr(data?.title));
  const subtitle =
    (rawData && data?.subtitle) ||
    (data?.subtitle?.length > 0 && getJsxFromArr(data.subtitle, `card-link `));
  const shortBylineText =
    data?.shortBylineText?.length > 0 &&
    getJsxFromArr(data.shortBylineText, "card-link");
  const lengthText =
    data?.lengthText?.length > 0 && getJsxFromArr(data.lengthText, "card-link");
  const thumbnail = rawData
    ? data?.thumbnail
    : data?.thumbnails?.length > 0 && data.thumbnails?.[0]?.url;

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

  if (data?.playlistId)
    endpoint += `${data?.videoId ? "&" : "?"}list=${data.playlistId}`;

  const [loading, setLoading] = useState(false);

  // let loading = false;

  let iconDef = isPlayable ? "play" : "new-window";

  const [icon, setIcon] = useState(iconDef);

  const selPlayerState = selectedSong?.playerState;

  const selPlayerVideoId = selectedSong?.videoId;

  useEffect(() => {
    setLoading(false);

    if (selectedSong) {
      if (selectedSong?.videoId === data?.videoId) {
        setIcon("volume");
        if (selectedSong?.playerState) {
          const state = selectedSong.playerState;
          switch (state) {
            case "playing":
              setLoading(false);
              setIcon("volume");
              break;
            case "loading":
              return setLoading(true);
              // loading = true;
              break;
            // case "paused":
            //   setIcon("play");
            //   break;
            case "error":
              setIcon("error");
              break;
            default:
              setIcon("volume");
              break;
          }
        }
      }
    }
  }, [selPlayerVideoId, selPlayerState]);

  // useEffect(() => {
  //   if (selPlayerState === "loading") {
  //     return setLoading(true);
  //   }

  //   setLoading(false);
  // }, [selPlayerState]);

  // console.log("RowMusicShelf ", selectedSong);

  // if (data?.params)
  //   endpoint += `${data?.videoId ? "&" : "?"}params=${data.params}`;

  const index = data?.index;
  const params = data?.params;
  const linkClickHandler = () => {
    if (isStaticList && index >= 0) changeSong(index);
    if (isStaticList && params) changeParam(params);
  };

  const id = data?.videoId || data?.browseId;

  const [isRemovingFromLibrary, setIsRemovingFromLibrary] = useState(false);

  // if (!endpoint && url) {
  //   endpoint = url;
  // }

  let iconComp = !loading ? (
    <Icon
      style={{width: "3rem", height: "3rem"}}
      className={`${styles["row-music-shelf-thumbnail-icon"]} `}
      svg={icon}
      alt={isPlayable ? "play song" : "open album"}
    />
  ) : (
    <Spinner
      style={
        isPlayable
          ? {width: "3rem", height: "3rem"}
          : {width: "2.5rem", height: "2.5rem"}
      }
      className={`${styles["row-music-shelf-thumbnail-icon"]} `}
    />
  );

  if (type === "contributor") {
    iconComp = (
      <InstagramIcon
        style={{width: "3rem", height: "3rem"}}
        className={`${styles["row-music-shelf-thumbnail-icon"]} `}
        title={title}
      />
    );
  }

  let content = (
    <li
      className={`relative ${styles["row-music-shelf"]} ${
        selectedSong?.videoId === data?.videoId && isStaticList
          ? styles["selected-song"]
          : ""
      }  ${isLibrary && "flex-center"}  ${
        type === "contributor" && "contributor"
      }`}>
      <Link
        onClick={() => {
          if (url && type === "contributor") {
            return window.location.replace(url);
          }
          linkClickHandler();
        }}
        to={endpoint}
        className={` full-hw absolute  z-index-2`}></Link>
      <div className={styles["row-music-shelf-thumbnail-container"]}>
        {iconComp}
        <Image
          src={thumbnail}
          className={styles["row-music-shelf-thumbnail-img"]}
          // circle={listTitle.toLowerCase().includes("artist")}
          alt="Thumbnail"
          // sources={data?.thumbnails}
          // pictureClassname={"full-hw"}
        />
      </div>
      <div className={` ${styles["row-music-shelf-content"]}`}>
        <p className={` link-medium white ${styles["row-music-shelf__title"]}`}>
          {title}
        </p>
        {!isLibrary && (
          <span
            className={`${!isStaticList && "z-index-3"} ${
              shortBylineText ? "link-x-small gray" : "text-x-small"
            } ${styles["row-music-shelf__subtitle"]} `}>
            {subtitle || shortBylineText}
          </span>
        )}
      </div>

      {menu && (
        <div
          className={`z-index-3 ${styles["row-music-shelf-length"]} ${styles["row-music-shelf-menu"]}`}>
          {menu}
        </div>
      )}
      {lengthText && !isLibrary && (
        <div className={styles["row-music-shelf-length"]}>
          <span
            className={`${styles["row-music-shelf__lengthText"]} link-small gray `}>
            {lengthText}
          </span>
        </div>
      )}
      {/* </Link> */}
      {isLibrary && (
        <div
          className={`${styles["library-button"]} ${styles["row-music-shelf-length"]} z-index-5`}>
          <Popup
            closedContent={
              <Like
                liked={true}
                svg={"heart"}
                alt="Like song"
                style={{minWidth: "2.4rem", minHeight: "2.4rem"}}
                className="z-index-5"
              />
            }
            title="Remove from Favourites?"
            content={<p className="text-medium">{title}</p>}
            onSavebutton="Remove"
            onSaveButtonLoading={isRemovingFromLibrary}
            onClick={async () => {
              if (id) {
                setIsRemovingFromLibrary(true);
                await removeFromFavouritesHandler(id);
                refetchLibrary();
                setIsRemovingFromLibrary(false);
              }
            }}
          />
        </div>
      )}

      {/* CONTRIBUTORS */}
      {type === "contributor" && (
        <div className={`flex-center contributor-icons`}>
          <div
            className={`${styles["library-button"]} ${styles["row-music-shelf-length"]} z-index-5`}>
            <Button className={PopupStyles["popup-click-btn"]} href={github}>
              <GitHubIcon
                title="Github"
                style={{minWidth: "2.4rem", minHeight: "2.4rem"}}
                className="z-index-5"
              />
            </Button>
          </div>
          <div
            className={`${styles["library-button"]} ${styles["row-music-shelf-length"]} z-index-5`}>
            <Button className={PopupStyles["popup-click-btn"]} href={linkedIn}>
              <LinkedInIcon
                title="LinkedIn"
                style={{minWidth: "2.4rem", minHeight: "2.4rem"}}
                className="z-index-5"
              />
            </Button>
          </div>
        </div>
      )}
    </li>
  );

  if (data?.menu?.length > 0) {
    content = (
      <MoreOptionsMenu
        isContextMenu
        menuOptions={data?.menu}
        serviceSuccessMsg={
          isPlayable ? "Song will play next" : "Playlist will play next"
        }>
        {content}
      </MoreOptionsMenu>
    );
  }

  return content;
}

export default /*memo*/ RowMusicShelf;
