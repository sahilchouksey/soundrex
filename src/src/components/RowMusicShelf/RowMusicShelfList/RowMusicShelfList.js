import {Fragment} from "react";

import RowMusicShelf from "../RowMusicShelf/RowMusicShelf";
import RowListSong from "../RowListSong/RowListSong";
import DidYouMeanRenderer from "../../UI/didYouMeanRenderer/didYouMeanRenderer";
import MessageRenderer from "../../UI/messageRenderer/messageRenderer";
import ShowingResultsForRenderer from "../../UI/showingResultsForRenderer/showingResultsForRenderer";
import {getKey} from "../../../functions/uniqueSuffix";

import styles from "./RowMusicShelfList.module.scss";

function RowMusicShelfList({
  refetchLibrary,
  removeFromFavouritesHandler,
  rawData,
  list,
  endpointType,
  className,
  getUrl,
  isRawSongs,
  isStaticList,
  changeSong,
  changeParam,
  selectedSong,
  isLibrary,
}) {
  let rowListItems;
  if (isRawSongs) {
    rowListItems = list.map((item, i) => (
      <RowListSong
        data={item}
        index={i}
        key={getKey(
          item?.browseId + item?.playlistId + item?.videoId + item?.params + i
        )}
      />
    ));
  } else {
    rowListItems = list.map((item, i) => (
      <div
        key={getKey(
          item?.browseId + item?.playlistId + item?.videoId + item?.params + i
        )}>
        {item?.didYouMeanRenderer && (
          <DidYouMeanRenderer
            key={getKey(
              item?.browseId +
                item?.playlistId +
                item?.videoId +
                item?.params +
                i
            )}
            data={item}
            getUrl={getUrl}
          />
        )}
        {item?.messageRenderer && (
          <MessageRenderer
            key={getKey(
              item?.browseId +
                item?.playlistId +
                item?.videoId +
                item?.params +
                i
            )}
            msg={item}
          />
        )}

        {item?.showingResultsForRenderer && (
          <ShowingResultsForRenderer
            key={getKey(
              item?.browseId +
                item?.playlistId +
                item?.videoId +
                item?.params +
                i
            )}
            data={item}
            getUrl={getUrl}
          />
        )}
        {!item?.didYouMeanRenderer &&
          !item?.messageRenderer &&
          !item?.showingResultsForRenderer && (
            <RowMusicShelf
              refetchLibrary={refetchLibrary}
              removeFromFavouritesHandler={removeFromFavouritesHandler}
              rawData={rawData}
              isLibrary={isLibrary}
              changeSong={changeSong}
              changeParam={changeParam}
              isStaticList={isStaticList}
              selectedSong={selectedSong}
              key={getKey(
                item?.browseId +
                  item?.playlistId +
                  item?.videoId +
                  item?.params +
                  i
              )}
              data={item}
            />
          )}
      </div>
    ));
  }

  return (
    <ul
      className={[
        styles["row-music-shelf-list"],
        className,
        "row-shelf-list",
      ].join(" ")}>
      {rowListItems}
    </ul>
  );
}

export default RowMusicShelfList;
