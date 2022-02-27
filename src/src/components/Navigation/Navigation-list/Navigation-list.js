import styles from "./Navigation-list.module.scss";

function NavigationList({center, end, isSearchFocused, ...props}) {
  return (
    <div className={styles["nav-list"]}>
      <div
        aria-label="Page Navigation"
        className={`${styles["nav-list-start"]} ${
          isSearchFocused && "absolute"
        }`}>
        {center}
      </div>
      <div className={styles["nav-list-end"]}>{end}</div>
    </div>
  );
}

export default NavigationList;
