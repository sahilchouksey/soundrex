// import {windowWidth} from '../../hooks/useWinResize';

import MusicShelfCarouselList from "./MusicShelfList/MusicShelfCarouselList";
import RowMusicShelfList from "../RowMusicShelf/RowMusicShelfList/RowMusicShelfList";
import MusicShelfList from "./MusicShelfList/MusicShelfList";
import Button from "../UI/Button/Button";

import styles from "./MusicShelf.module.scss";
import {getKey} from "../../functions/uniqueSuffix";

const CARDS = {
  artistAndGenreCards: {
    cardWidth: 400,
    cardGap: 10,
    cardColumns: 5,
    cardRows: 3,
    listHeight: 12.5 * 3 + 5,
    carousellMargin: 0,
  },

  otherCards: {
    cardWidth: 210,
    cardGap: 15,
    cardColumns: 5,
    listHeight: 32,
    cardRows: 1,
    carousellMargin: 40,
  },
};

function MusicShelf({
  title,
  strapline,
  isTitleComponent,
  isRowMusicShelf,
  rawData,
  navigate,
  list,
  isRectangleBox,
  rectangleBoxClass,
  underLine,
  disableCarousel,
  hasMoreItems,
  listClasssName,
  getUrl,
  titleClasses,
  isLibrary,
  removeFromFavouritesHandler,
  refetchLibrary,
  libraryPlay,
  ...props
}) {
  let bodyClasses = `mg-t-2`;
  let shelfClasses = styles["music-shelf-mg"];
  let cardConfig = CARDS.otherCards;
  // let isArtist = false;
  if (!isTitleComponent && title && title?.toLowerCase()?.includes("artist")) {
    // isArtist = true;
    cardConfig = CARDS.artistAndGenreCards;
  }

  let musicShelf = (
    <MusicShelfCarouselList
      key={getKey(Math.random())}
      list={list}
      // isArtist={isArtist}
      isRectangleBox={isRectangleBox}
      {...cardConfig}
      {...props}
    />
  );

  if (disableCarousel) {
    musicShelf = (
      <MusicShelfList
        key={getKey(Math.random())}
        className={listClasssName}
        underLine={underLine}
        list={list}
        // isArtist={isArtist}
        isRectangleBox={isRectangleBox}
        rectangleBoxClass={rectangleBoxClass && rectangleBoxClass}
        {...props}
      />
    );
  }

  if (isRowMusicShelf) {
    bodyClasses = "";
    shelfClasses = "";
    musicShelf = (
      <RowMusicShelfList
        key={getKey(Math.random())}
        refetchLibrary={refetchLibrary}
        isLibrary={isLibrary}
        removeFromFavouritesHandler={removeFromFavouritesHandler}
        rawData={rawData}
        getUrl={getUrl}
        list={list}
        {...props}
      />
    );
  }

  return (
    <div className={`${styles["music-shelf"]} ${shelfClasses}`}>
      <div className={styles["music-shelf-header"]}>
        {!isTitleComponent && title && (
          <p
            className={`${styles["music-shelf-title"]} display-medium capitalize`}>
            {title}
          </p>
        )}

        {isTitleComponent && (
          <span
            className={`w-100 flex-space-between white display-medium capitalize ${titleClasses}`}>
            {title}
          </span>
        )}
        {hasMoreItems && (
          <Button
            link={navigate}
            tertiary={true}
            standardAnimate={true}
            type="button"
            className="music-shelf-button link-x-small">
            see all
          </Button>
        )}

        {libraryPlay && libraryPlay}
      </div>

      {strapline && (
        <p className="gray link-small mg-b-1 strapline">{strapline}</p>
      )}

      <div
        className={`${styles["music-shelf-body"]} music-shelf-body ${bodyClasses}`}>
        {musicShelf}
      </div>
    </div>
  );
}

export default MusicShelf;
