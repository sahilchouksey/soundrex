import {forwardRef, memo} from "react";
import {NavLink} from "react-router-dom";
import MaterialButton from "@mui/material/Button";
// import Button from "../../UI/Button/Button";
// import Tab from "@mui/material/Tab";

import Icon from "../../UI/Icon/Icon";
// import Tooltip from "@mui/material/Tooltip";
// import Button from "@mui/material/Button";
// import Avatar from "@mui/material/Avatar";

// import Button from "../../UI/Button/Button";

import styles from "./NavigationItem.module.scss";

const NavigationItem = forwardRef(
  ({endpoint, text, onClick, userSettings, ...props}, ref) => {
    let classNames = props?.className;
    // ? [props.className, styles["nav-link"]].join(" ")
    // : styles["nav-link"];

    if (props?.icon) {
      classNames = `${classNames} ${styles["nav-btn"]} ${
        userSettings && styles["nav-btn-settings"]
      } `;

      return (
        <div className={[styles["nav-item"], "text-large"].join(" ")}>
          {userSettings ? (
            {
              /* <Fragment>
              <Tooltip title="settings">
                <MaterialButton
                  ref={ref}
                  onClick={onClick}
                  className={classNames}
                  // size="medium"
                  // sx={{ml: 2}}
                >
                  <Avatar sx={{width: 32, height: 32}}>X</Avatar>
                </MaterialButton>
              </Tooltip>
            </Fragment> */
            }
          ) : (
            <MaterialButton
              title={text}
              variant="outlined"
              onClick={onClick}
              className={classNames}>
              <Icon className={styles["nav-link-icon"]} {...props.icon} />
              {text && (
                <span className={styles["nav-link-text"]}> {text} </span>
              )}
            </MaterialButton>
          )}
        </div>
      );
    }

    return (
      <div
        className={[styles["nav-item"], "link-large", "capitalize"].join(" ")}>
        {/* <Tab> */}
        <NavLink
          exact
          activeClassName={[
            styles["nav-link-active"],
            //  "link-large"
          ].join(" ")}
          to={endpoint || "/"}
          // location={["/home", "/"]}
          // href={endpoint || "/"}
          className={`${classNames} ${styles["nav-link"]}`}>
          <div className={styles["nav-link-icon"]}>
            {props?.textIcon && props.textIcon}
          </div>
          <span className={styles["nav-link-text"]}>{text}</span>
        </NavLink>
        {/* </Tab> */}
      </div>
    );
  }
);

export default /*memo*/ NavigationItem;
