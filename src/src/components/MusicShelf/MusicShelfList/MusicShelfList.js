import MusicShelfBox from "..//MusicShelfBox/MusicShelfBox";
import MusicShelfCard from "../MusicShelfCard/MusicShelfCard";
import MusicShelfCardWrapper from "../MusicShelfCard/MusicShelfCardWrapper";

import {getKey} from "../../../functions/uniqueSuffix";

import styles from "./MusicShelfList.module.scss";

function MusicShelfList({
  list,
  isRectangleBox,
  rectangleBoxClass,
  underLine,
  endpointType,
  className,
}) {
  const MusicShelfCards = [];
  for (let i of list) {
    MusicShelfCards.push(
      <MusicShelfCardWrapper key={getKey(i?.browseId + i?.params)}>
        {/* <p>{n}</p> */}
        {isRectangleBox ? (
          <MusicShelfBox
            underLine={underLine}
            data={i}
            type={endpointType}
            rectangleBoxClass={rectangleBoxClass}
          />
        ) : (
          <MusicShelfCard data={i} />
        )}
      </MusicShelfCardWrapper>
    );
  }

  return (
    <ul className={[styles["music-card-list"], className].join(" ")}>
      {MusicShelfCards}
    </ul>
  );
}

export default MusicShelfList;
