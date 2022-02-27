import CircularProgress from "@mui/material/CircularProgress";
import {memo} from "react";
import FullScreenPopup from "../FullScreenPopup/FullScreenPopup";

import styles from "./Loading.module.scss";

function Spinner({className, thin, fullScreen, ...props}) {
  return fullScreen ? (
    <FullScreenPopup className={`${styles["spinner-fullscreen"]} `}>
      <CircularProgress
        className={`${className} ${styles["spinner-fullscreen-spinner"]} ${
          thin && "thin-spinner"
        } fixed-center`}
        style={{color: "#1976d2"}}
        disableShrink
        {...props}
      />
    </FullScreenPopup>
  ) : (
    <CircularProgress
      className={`${className} ${thin && "thin-spinner"}`}
      style={{color: "#1976d2"}}
      disableShrink
      {...props}
    />
  );
}

export default /*memo*/ Spinner;
