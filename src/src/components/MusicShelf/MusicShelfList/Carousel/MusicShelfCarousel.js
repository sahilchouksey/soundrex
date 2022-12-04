import {useState, useRef, useEffect, useCallback, memo} from "react";
import Carousel from "react-grid-carousel";
import useWinResize from "../../../../hooks/useWinResize";

import MusicShelfBox from "../..//MusicShelfBox/MusicShelfBox";
import MusicShelfCard from "../../MusicShelfCard/MusicShelfCard";
import MusicShelfCardWrapper from "../../MusicShelfCard/MusicShelfCardWrapper";
import ArrowBtn from "../../../UI/ArrowBtn/ArrowBtn";

import {getKey} from "../../../../functions/uniqueSuffix";

import styles from "../MusicShelfList.module.scss";

function MusicShelfList({
  list,
  isRectangleBox,
  // disableCarousel,
  cardWidth: MusicShelfCard_width,
  cardGap: MusicShelfCard_gap,
  cardColumns: MusicShelfCards_columns,
  cardRows: MusicShelfCards_rows,
  carousellMargin,
  listHeight,
}) {
  const carouselItemRef = useRef(MusicShelfCard_width);
  const carouselRef = useRef();

  const [carouselColumns, setCarouselColumns] = useState(
    MusicShelfCards_columns
  );

  const [carouselGap, setCarouselGap] = useState(MusicShelfCard_gap);

  const columnChangeHandler = useCallback(
    (innerWidth, innerHeight) => {
      MusicShelfCard_width = carouselItemRef?.current?.offsetWidth;
      listHeight =
        MusicShelfCards_rows * carouselItemRef?.current?.offsetHeight;

      const carouselWidth = carouselRef?.current?.offsetWidth - carousellMargin;
      let cardTotalWidth = MusicShelfCard_width + MusicShelfCard_gap;

      let columns = carouselWidth / cardTotalWidth;
      let flooredVal = Math.floor(columns);
      let roundedVal = Math.round(columns);

      const remainingVal = (columns - flooredVal).toString().includes(".")
        ? (columns - flooredVal).toString().split(".")?.[1].substr(0, 2)
        : (columns - flooredVal).toString().substr(0, 2);

      const remainingGapBetweenCards = Math.round(
        (roundedVal * carouselGap - remainingVal) / roundedVal
      );

      // testing
      if (roundedVal * cardTotalWidth > carouselWidth) {
        setCarouselGap(15);
        let suitableCarouselColumns = roundedVal;
        for (let i = roundedVal; i > 0; i--) {
          if (!(i * cardTotalWidth > carouselWidth)) {
            suitableCarouselColumns = i;
            break;
          }
        }

        return setCarouselColumns(suitableCarouselColumns);
      }

      setCarouselGap(
        remainingGapBetweenCards > 5 ? remainingGapBetweenCards : 10
      );

      setCarouselColumns(roundedVal);
    },
    [
      carouselItemRef,
      carouselRef,
      listHeight,
      carouselGap,
      MusicShelfCard_gap,
      MusicShelfCard_width,
      carousellMargin,
    ]
  );

  const cleanup = useWinResize(columnChangeHandler);
  useEffect(() => {
    columnChangeHandler();
  }, []);

  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  /*
  const MusicShelfCards = [];

  // testing

  for (let i of list) {
    MusicShelfCards.push(
      <Carousel.Item
        key={getKey(i?.playlistId + i?.videoId + i?.browseId + Math.random())}
        containerStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "1.5rem",
        }}>
        <MusicShelfCardWrapper
          key={getKey(
            i?.playlistId + i?.videoId + i?.browseId + Math.random()
          )}>
          {isRectangleBox ? (
            <MusicShelfBox
              key={getKey(
                i?.playlistId + i?.videoId + i?.browseId + Math.random()
              )}
              ref={carouselItemRef}
              data={i}
              // styles={{
              //   width: `${MusicShelfCard_width / 10}rem`,
              // }}
            />
          ) : (
            <MusicShelfCard
              key={getKey(
                i?.playlistId + i?.videoId + i?.browseId + Math.random()
              )}
              ref={carouselItemRef}
              data={i}
              // styles={{
              //   width: `${MusicShelfCard_width / 10}rem`,
              // }}
            />
          )}
        </MusicShelfCardWrapper>
      </Carousel.Item>
    );
  }
*/

  return (
    <ul
      className={styles["music-card-carousel-list"]}
      ref={carouselRef}
      style={{height: listHeight + "rem"}}>
      <Carousel
        key={getKey(Math.random())}
        containerStyle={{
          width: "100%",
          position: "absolute",
          margin: "0 !important",
        }}
        // scrollSnap={true}
        containerClassName="remv-children-mg"
        cols={carouselColumns}
        rows={MusicShelfCards_rows || 1}
        gap={carouselGap}
        // scrollSnap={true}
        // mobileBreakpoint={650}
        // responsiveLayout={[
        //   {
        //     breakpoint: 650,
        //     cols: 2,
        //     rows: 1,
        //     gap: 0,
        //     // loop: true,
        //     // autoplay: 1000
        //   },
        // ]}
        mobileBreakpoint={400}
        arrowRight={<ArrowBtn type="right" />}
        arrowLeft={<ArrowBtn type="left" />}>
        {/* {MusicShelfCards} */}
        {list.map((i, index) => (
          <Carousel.Item
            key={getKey(
              index + i?.playlistId + i?.videoId + i?.browseId + Math.random()
            )}
            containerStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              rowGap: "1.5rem",
            }}>
            <MusicShelfCardWrapper
              key={getKey(
                i?.playlistId + i?.videoId + i?.browseId + Math.random()
              )}>
              {/* <p>{n}</p> */}
              {isRectangleBox ? (
                <MusicShelfBox
                  key={getKey(
                    i?.playlistId + i?.videoId + i?.browseId + Math.random()
                  )}
                  ref={carouselItemRef}
                  data={i}
                  // styles={{
                  //   width: `${MusicShelfCard_width / 10}rem`,
                  // }}
                />
              ) : (
                <MusicShelfCard
                  key={getKey(
                    i?.playlistId + i?.videoId + i?.browseId + Math.random()
                  )}
                  ref={carouselItemRef}
                  data={i}
                  // styles={{
                  //   width: `${MusicShelfCard_width / 10}rem`,
                  // }}
                />
              )}
            </MusicShelfCardWrapper>
          </Carousel.Item>
        ))}
      </Carousel>
    </ul>
  );
}

function areEqual(prevProps, nextProps) {
  const prevData =
    prevProps?.list?.length &&
    prevProps?.list.reduce((p, c) => {
      const id = (c?.videoId || "") + (c?.browseId || "");
      return p + id;
    }, "");

  const nextData =
    nextProps?.list?.length &&
    nextProps?.list.reduce((p, c) => {
      const id = (c?.videoId || "") + (c?.browseId || "");
      return p + id;
    }, "");

  // list
  // isRectangleBox,
  // cardWidth: MusicShelfCard_width,
  // cardGap: MusicShelfCard_gap,
  // cardColumns: MusicShelfCards_columns,
  // cardRows: MusicShelfCards_rows,
  // carousellMargin,
  // listHeight,

  return (
    prevData === nextData &&
    prevProps?.isRectangleBox === nextProps?.isRectangleBox &&
    prevProps?.cardWidth === nextProps?.cardWidth &&
    prevProps?.cardGap === nextProps?.cardGap &&
    prevProps?.cardColumns === nextProps?.cardColumns &&
    prevProps?.cardRows === nextProps?.cardRows &&
    prevProps?.carousellMargin === nextProps?.carousellMargin &&
    prevProps?.listHeight === nextProps?.listHeight
  );
}
export default memo(MusicShelfList, areEqual);
