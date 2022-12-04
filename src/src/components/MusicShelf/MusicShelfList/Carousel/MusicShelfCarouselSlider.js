// import Carousel from "react-grid-carousel";
import {Scrollbars} from "react-custom-scrollbars";

import MusicShelfBox from "../../MusicShelfBox/MusicShelfBox";
import MusicShelfCard from "../../MusicShelfCard/MusicShelfCard";
// import MusicShelfCardWrapper from "../../MusicShelfCard/MusicShelfCardWrapper";

import {getKey} from "../../../../functions/uniqueSuffix";

import styles from "../MusicShelfList.module.scss";

function Slider({list, isRectangleBox, listHeight}) {
  const MusicShelfCards = [];

  // testing

  for (let i of list) {
    MusicShelfCards.push(
      <div
        key={getKey(i?.playlistId + i?.videoId + i?.browseId)}
        containerStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "1.5rem",
        }}>
        {/* <p>{n}</p> */}
        {isRectangleBox ? (
          <MusicShelfBox
            key={getKey(i?.playlistId + i?.videoId + i?.browseId)}
            data={i}
            // styles={{
            //   width: `${MusicShelfCard_width / 10}rem`,
            // }}
          />
        ) : (
          <MusicShelfCard
            key={getKey(i?.playlistId + i?.videoId + i?.browseId)}
            data={i}
            // styles={{
            //   width: `${MusicShelfCard_width / 10}rem`,
            // }}
          />
        )}
      </div>
    );
  }

  return (
    <Scrollbars className={isRectangleBox ? "slider-boxes" : "slider"}>
      <ul
        className={`${styles["slider"]}`}
        //   ref={carouselRef}
        // style={{height: listHeight + "rem"}}
      >
        {MusicShelfCards}
      </ul>
    </Scrollbars>
  );
}

export default Slider;
