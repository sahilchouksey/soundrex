import {forwardRef, memo} from "react";
import styles from "./Layout.module.scss";

const Layout = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      {props.children}
    </div>
  );
});

export default /*memo*/ Layout;
