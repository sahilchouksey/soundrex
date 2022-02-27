import {Fragment} from "react";
import {Link} from "react-router-dom";
import {getKey} from "./uniqueSuffix";

import Button from "../components/UI/Button/Button";

import {keywords} from "./removeText";

// const YYTEXTDIVIDER = "•";

const getJsxFromArr = (
  k,
  linkClassName,
  disableLink = false,
  showShowAllButton = false,
  showParamsAsParam = false,
  isGenre = false
) => {
  if (k?.text) {
    k = [k];
  }
  const keywordsSet = new Set(keywords);

  // const data = k;

  let stopIteration = false;
  return k.map((c, i) => {
    if (stopIteration) return null;
    const text = c?.text;
    const nextNodeText = k?.[i + 1]?.text;

    const key = getKey(i + text + linkClassName);

    if (nextNodeText) {
      const nextNodeTextSplit = nextNodeText.split(" ");
      for (const nextNodeText of nextNodeTextSplit) {
        if (keywordsSet.has(nextNodeText.toLowerCase().trim())) {
          stopIteration = true;
          return null;
        }
      }
    }

    if (c?.navigate) {
      const browseId = c?.navigate?.browseId?.trim();
      const videoId = c?.navigate?.videoId;

      const params = c?.navigate?.params;

      if (disableLink && !showShowAllButton) {
      }
      if (disableLink && browseId === disableLink.trim()) {
        return (
          <span
            className={
              //   styles["music-card__link"]
              linkClassName
            }
            key={getKey(key)}>
            {text}
          </span>
        );
      }

      let endpoint = isGenre ? "genres" : "browse";

      let navigateTo = `/${endpoint}/${browseId}` || `/play/${videoId}`;

      if (!showParamsAsParam && params) navigateTo += "?params=" + params;
      else if (showParamsAsParam && params) navigateTo += "/" + params;
      return (
        <Fragment>
          <Link
            key={getKey(key)}
            to={navigateTo}
            className={
              //   styles["music-card__link"]
              linkClassName
            }>
            {text}
          </Link>

          {showShowAllButton && (
            <Button
              key={getKey(key)}
              link={navigateTo}
              tertiary="true"
              standardAnimate="true"
              type="button"
              className="music-shelf-button link-x-small">
              see all
            </Button>
          )}
        </Fragment>
      );
    }

    return <span key={getKey(key)}>{text}</span>;
  }, null);
};
const getTitleFromArr = k => {
  if (typeof k !== 'object') return k
  return k?.reduce((p, c) => {
    return p + c?.text;
  }, "");
};

const getTextFromArr = (k, ckey = "text") => {
  if (typeof k !== 'object') return k
  return k?.reduce((p, c) => {
    return p + c?.[ckey];
  }, "");
};

export {getJsxFromArr, getTitleFromArr, getTextFromArr};
