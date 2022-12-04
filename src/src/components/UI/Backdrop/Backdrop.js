import ReactDOM from "react-dom";
import styles from "./Backdrop.module.scss";

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={props.onClick}>
      {props?.children}
    </div>,
    document.getElementById("overlays")
  );
};

export default Backdrop;
