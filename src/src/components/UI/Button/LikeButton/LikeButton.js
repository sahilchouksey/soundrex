import {Fragment} from "react";
import Button from "../Button";
// import Icon from "../../Icon/Icon";

import {ReactComponent as HeartIcon} from "../../../../assets/svgs/heart-outline.svg";

import styles from "./LikeButton.module.scss";
import Spinner from "../../Loading/Spinner";

function LikeButton({
  className,
  icon = {
    svg: "heart-outline",
    alt: "Play song",
  },
  liked,
  ...props
}) {
  return (
    <Fragment>
      <Button
        disabled={liked === "loading"}
        className={`${styles["like-button"]} ${className || ""}`}
        {...props}>
        {liked === "loading" ? (
          <Spinner className={styles["like-button-spinner"]} />
        ) : (
          <HeartIcon
            className={`${styles["like-icon"]} ${
              liked ? styles["like-icon-filled"] : ""
            }`}
          />
        )}

        {liked ? (
          <span>Remove from favorites</span>
        ) : (
          <span>Add to favorites</span>
        )}
      </Button>
    </Fragment>
  );
}

export default LikeButton;
