import {memo} from "react";
import styles from "./Header.module.scss";

function Header({children, ...props}) {
  return (
    <header className={styles.header} {...props}>
      {children}
    </header>
  );
}

export default /*memo*/ Header;
