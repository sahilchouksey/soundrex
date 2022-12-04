import {Fragment, memo, useContext} from "react";
import MaterialButton from "@mui/material/Button";

import Menu from "../../UI/Menu/Menu";

import AuthContext from "../../../context/AuthContext";

import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

import Icon from "../../UI/Icon/Icon";
import PeopleIcon from "@mui/icons-material/People";

import styles from "./NavigationItem.module.scss";

import menuStyles from "../../UI/Menu/Menu.module.scss";
import Popup from "../../UI/Popup/Popup";
import RowMusicShelf from "../../RowMusicShelf/RowMusicShelf/RowMusicShelf";

const settingsMenuPaperProps = {
  elevation: 0,
  sx: {
    "overflow": "visible",
    "filter": "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    "mt": 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "& .MuiMenu-list": {
      bgcolor: "#212121 !important",
      color: "#fff !important",
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: "5px",
      width: 10,
      height: 10,
      bgcolor: "#212121",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

function SettingButton() {
  const AuthCtx = useContext(AuthContext);
  const {logout, username} = AuthCtx;

  const classes = `${styles["nav-btn"]} ${styles["nav-btn-settings"]}`;

  const content = (
    <MaterialButton
      color="inherit"
      title="settings"
      className={classes}
      // size="medium"
      // sx={{ml: 2}}
    >
      <Avatar sx={{width: 32, height: 32}}>
        {username?.split("")?.[0]?.toUpperCase() || "X"}
      </Avatar>
    </MaterialButton>
  );

  const contributors = (
    <Popup
      title="Contributors"
      // triggerContentClass={`text-small ${menuStyles["menu-item"]} ${menuStyles["menu-item-contributors"]}`}
      triggerContent={
        <MenuItem
          key="W"
          className={`text-small ${menuStyles["menu-item"]} ${menuStyles["menu-item-contributors"]}`}>
          <ListItemIcon>
            <PeopleIcon
              sx={{
                width: 32,
                height: 32,
                // bgcolor: "#fafafa80 !important",
                color: "#fafafa80 !important",
              }}
              className={menuStyles["menu-item-icon"]}
            />
          </ListItemIcon>
          <span style={{marginLeft: "12px"}}>Contributors</span>
        </MenuItem>
      }
      content={
        <Fragment>
          <RowMusicShelf
            rawData={true}
            type="contributor"
            data={{
              title: "Sahil Chouksey",
              thumbnail: "/assets/images/xix3r.jpg",
            }}
            github="https://github.com/sahilchouksey"
            linkedIn="https://www.linkedin.com/in/sahil-chouksey-5750581a2"
            url="https://www.instagram.com/xix3r"
          />
          <RowMusicShelf
            rawData={true}
            type="contributor"
            data={{
              title: "Adarsh Hegde",
              thumbnail: "/assets/images/adarsh-hegde.jpg",
            }}
            github="https://github.com/adarshhegde"
            linkedIn="https://www.linkedin.com/in/adhegde"
            url="https://www.instagram.com/__adarsh.hegde__"
          />
        </Fragment>
      }
    />
  );

  const menuItems = [
    <MenuItem key="X" className="link-small overflow-clip mg-r-1">
      <Avatar
        sx={{
          width: 32,
          height: 32,
          bgcolor: "#fafafa80 !important",
          color: "#000 !important",
        }}>
        {username?.split("")?.[0]?.toUpperCase() || "X"}
      </Avatar>
      <span className="mg-l-1 overflow-clip">{username}</span>
    </MenuItem>,

    contributors,

    <Divider key="Y" />,
    <MenuItem
      key="Z"
      onClick={logout}
      className={`text-small ${menuStyles["menu-item"]}`}>
      <ListItemIcon>
        <Icon svg="logout" alt="" className={menuStyles["menu-item-icon"]} />
      </ListItemIcon>
      <span>Logout</span>
    </MenuItem>,
  ];
  return (
    <Menu
      fullSpace
      contentContainerClassName="full-hw flex-align"
      className={styles["setting-menu"]}
      PaperProps={settingsMenuPaperProps}
      anchorOrigin={{vertical: "bottom", horizontal: "center"}}
      transformOrigin={{vertical: "top", horizontal: "center"}}
      triggerContent={content}
      menuItems={menuItems}
    />
  );
}

export default /*memo*/ SettingButton;
