import TabPanel from "../../UI/Tabs/TabPanel/TabPanel";

import RowMusicShelfList from "../../RowMusicShelf/RowMusicShelfList/RowMusicShelfList";
import {memo} from "react";

function NextSongsTab({
  selectedSong,
  list,
  isStaticList,
  setCurrentSongIndex,
  changeParam,
  index,
  value,
}) {
  return (
    <TabPanel value={value} index={index}>
      <RowMusicShelfList
        selectedSong={selectedSong}
        isStaticList={isStaticList}
        changeSong={setCurrentSongIndex}
        changeParam={changeParam}
        list={list}
      />
    </TabPanel>
  );
}

export default NextSongsTab;
