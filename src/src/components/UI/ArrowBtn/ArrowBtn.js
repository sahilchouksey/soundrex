import {ReactComponent as LeftArrow} from "../../../assets/svgs/left-arrow.svg";
import {ReactComponent as RightArrow} from "../../../assets/svgs/right-arrow.svg";

import styles from "./ArrowBtn.module.scss";

const ArrowBtn = ({type}) => {
  return (
    // <img
    //   id={styles[type]}
    //   src={`./assets/svgs/${type}-arrow.svg`}
    //   alt={type + " arrow"}
    //   title={type + " arrow"}
    // />

    type === "right" ? (
      <RightArrow
        id={styles[type]}
        alt={type + " Arrow"}
        title={type + " Arrow"}
      />
    ) : (
      <LeftArrow
        id={styles[type]}
        alt={type + " Arrow"}
        title={type + " Arrow"}
      />
    )
  );

  //   return null;
};

export default ArrowBtn;
