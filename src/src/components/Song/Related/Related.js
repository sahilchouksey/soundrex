import TabPanel from "../../UI/Tabs/TabPanel/TabPanel";

import styles from "../Song.module.scss";

import Related from "../../UI/Related-song/Related";

function RelatedTab({hasRelated, browseId, index, value, ...props}) {
  return (
    <TabPanel
      className={(hasRelated && styles["tabs-related"]) || ""}
      value={value}
      index={index}>
      {hasRelated && browseId && <Related {...props} browseId={browseId} />}
    </TabPanel>
  );
}

export default RelatedTab;
