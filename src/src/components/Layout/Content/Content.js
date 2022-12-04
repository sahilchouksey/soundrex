import {memo} from "react";
import styles from "./Content.module.scss";

function Content({className, children, ...props}) {
  return (
    <main className={`${styles.content} ${className}`} {...props}>
      {children}
    </main>
  );
}

export default /*memo*/ Content;
