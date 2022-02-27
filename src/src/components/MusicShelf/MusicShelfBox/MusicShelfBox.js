import {forwardRef, memo} from "react";
// import Button from "@mui/material/Button";
// import Link from "@mui/material/Link";
import {Link} from "react-router-dom";
import {CardActionArea} from "@mui/material";

import Image from "../../UI/Image/Image";
import Underline from "../../UI/UnderLine/UnderLine";
import MusicShelfCardContainer from "../MusicShelfCard/MusicShelfCardContainer";
import {getJsxFromArr} from "../../../functions/getJsxFromArr";

import styles from "./MusicShelfBox.module.scss";

const MusicShelfBox = forwardRef(
  ({data, underLine, type, rectangleBoxClass, ...props}, ref) => {
    const title = data?.title?.length > 0 && getJsxFromArr(data.title);
    const thumbnail = data?.thumbnails?.length > 0 && data.thumbnails?.[0]?.url;

    type = type || "browse";
    let endpoint = `${type}/${data?.browseId}`;
    if (data?.params) endpoint = `${endpoint}/` + data.params;

    return (
      <MusicShelfCardContainer
        style={props?.styles}
        className={styles["music-card-box-container"]}>
        <CardActionArea>
          <Link
            draggable="false"
            to={endpoint}
            className={[styles["music-card-box"], "capitalize"].join(" ")}
            ref={ref}>
            {thumbnail && (
              <Image
                src={thumbnail}
                // circle={listTitle.toLowerCase().includes("artist")}
                alt={
                  data?.title?.length > 0 ? data?.title?.[0]?.text : "Not found"
                }
                className={styles["music-card-box__img"]}
                // sources={data?.thumbnails}
                // pictureClassname={"full-hw"}
              />
            )}

            <p
              draggable="false"
              className={[
                styles["music-card-box__title"],
                "text-medium",
                rectangleBoxClass,
              ].join(" ")}>
              {title}
            </p>
            {underLine && <Underline randomColor={true} />}
          </Link>
        </CardActionArea>
      </MusicShelfCardContainer>
    );
  }
);

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

  return (
    prevDataRaw === nextDataRaw &&
    prevProps?.underLine === nextProps?.underLine &&
    prevProps?.type === nextProps?.type &&
    prevProps?.rectangleBoxClass === nextProps?.rectangleBoxClass
  );
}

export default /*memo*/ MusicShelfBox;
