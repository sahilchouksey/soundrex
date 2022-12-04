// import {useState} from "react";
// import {useHistory, useParams} from "react-router-dom";
import Icon from "../../UI/Icon/Icon";

import styles from "./TogglePlayerPageButton.module.scss";

function TogglePlayerPageButton({isPlayerPageOpen, togglePlayerPage, url}) {
  return (
    <div className={styles["toggle-player-page-button-container"]}>
      <div
        className={`${
          !isPlayerPageOpen && styles["toggle-player-page-button-rotate"]
        } ${styles["toggle-player-page-button"]}`}
        onClick={togglePlayerPage.bind(null, url)}>
        <Icon
          svg={"down-arrow-mini"}
          alt={isPlayerPageOpen ? "close player page" : "open player page"}
          className={styles["toggle-player-page-button-icon"]}
        />
      </div>
    </div>
  );
}

export default TogglePlayerPageButton;
