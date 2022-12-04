import TabPanel from "../../UI/Tabs/TabPanel/TabPanel";

import styles from "../Song.module.scss";

import Lyrics from "../../UI/Lyrics/Lyrics";

function LyricsTab({hasLyrics, browseId, index, value, ...props}) {
  return (
    <TabPanel
      className={styles["songs-tabs-lyrics"]}
      value={value}
      index={index}>
      {hasLyrics && browseId && <Lyrics {...props} browseId={browseId} />}
    </TabPanel>
  );
}

export default LyricsTab;
