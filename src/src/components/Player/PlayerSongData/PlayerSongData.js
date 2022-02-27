// import Like from "../../UI/Icon/Icon";
import Image from "../../UI/Image/Image";
import {getJsxFromArr} from "../../../functions/getJsxFromArr";
import styles from "./PlayerSongData.module.scss";

function PlayerSongData({song, videoId, LikeBtn}) {
  const title =
    (song?.title || song?.title?.length > 0) && getJsxFromArr(song.title);

  const longBylineText =
    (song?.longBylineText || song?.longBylineText?.length > 0) &&
    getJsxFromArr(song.longBylineText, "card-link");

  const thumbnails = song?.thumbnails?.length > 0 && song.thumbnails;
  const showLikeBtn = Boolean(videoId);

  return (
    <div className={styles["player-song-data"]}>
      {thumbnails && (
        <div className={styles["player-song-thumbnail-container"]}>
          <Image
            // pictureClassname={styles["artist-header-picture"]}
            alt={""}
            className={styles["player-song-thumbnail"]}
            src={thumbnails[thumbnails.length - 1]?.url}
            sources={thumbnails}
          />
        </div>
      )}
      <div className={styles["player-song-text"]}>
        {title && (
          <div className={`white ${styles["player-song-title"]}`}>{title}</div>
        )}
        {longBylineText && (
          <div className={`gray ${styles["player-song-subtitle"]}`}>
            {longBylineText}
          </div>
        )}
      </div>
      {showLikeBtn && (
        <div id="like-song" className={styles["like"]}>
          {LikeBtn}
        </div>
      )}
    </div>
  );
}

export default PlayerSongData;
