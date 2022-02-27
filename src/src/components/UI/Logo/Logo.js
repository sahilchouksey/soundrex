import styles from "./Logo.module.scss";

import {Link} from "react-router-dom";

function Logo(props) {
  return (
    <Link className="logo-link" to="/home">
      <img
        id="logo"
        className={[styles["logo"], ...props?.className].join(" ")}
        src="../../../assets/svgs/soundrex.svg"
        alt="Logo"
        height="77"
        width="75"
        // {...props}
      />
    </Link>
  );
}

export default Logo;
