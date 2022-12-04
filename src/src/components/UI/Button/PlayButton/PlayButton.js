import {Fragment} from "react";
import Button from "../Button";
import Icon from "../../Icon/Icon";

import {ReactComponent as ShufflePlayIcon} from "../../../../assets/svgs/shuffle_play.svg";

import styles from "./PlayButton.module.scss";

function PlayButton({
  className,
  icon = {
    svg: "play",
    alt: "Play song",
  },
  ...props
}) {
  return (
    <Fragment>
      <Button
        className={[styles["play-button"], className].join(" ")}
        {...props}>
        {icon.svg === "shuffle_play" ? (
          <ShufflePlayIcon {...icon} style={{fill: "white"}} />
        ) : (
          <Icon {...icon} />
        )}
      </Button>
    </Fragment>
  );
}

export default PlayButton;
