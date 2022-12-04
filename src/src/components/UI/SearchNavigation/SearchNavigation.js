import {useHistory} from "react-router-dom";
import {getKey} from "../../../functions/uniqueSuffix";
import Button from "../Button/Button";
import styles from "./SearchNavigation.module.scss";

function SearchNavigation({navItems}) {
  const history = useHistory();

  return (
    <ul className={styles["search-navigation-list"]}>
      {navItems.map((item, index) => {
        const buttonHandler = e => history.replace(item.navigate);

        let classes = [styles["search-navigation-link"], "text-small"].join(
          " "
        );
        if (item?.selected)
          classes = [
            classes,
            styles["search-navigation-link-active"],
            "link-small",
          ].join(" ");
        return (
          <li
            key={getKey(index + item.text)}
            className={styles["search-navigation-item"]}>
            <Button onClick={buttonHandler} className={classes}>
              {item.text}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchNavigation;
