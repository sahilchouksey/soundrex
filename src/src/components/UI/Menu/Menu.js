/*
import {useContext} from "react";
import styles from "./Menu.module.scss";

import AuthContext from "../../../context/AuthContext";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
// import Settings from "@mui/icons-material/Settings";
// import ToggleButton from "../ToggleButton/Toggle";

import Icon from "../Icon/Icon";

function MenuComponent({isOpen, anchorEl, handleClose, className}) {
  const AuthCtx = useContext(AuthContext);
  const {logout, username} = AuthCtx;

  return (
    <Menu
      className={className}
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleClose}
      //   onClick={handleClose}
      PaperProps={{
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
      }}
      //   transformOrigin={{horizontal: "right", vertical: "top"}}
      //   anchorOrigin={{horizontal: "right", vertical: "bottom"}}>
      //   getContentAnchorEl={anchorEl}
      anchorOrigin={{vertical: "bottom", horizontal: "center"}}
      transformOrigin={{vertical: "top", horizontal: "center"}}>
      <MenuItem className="link-small overflow-clip mg-r-1">
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: "#fafafa80 !important",
            color: "#000 !important",
          }}>
          {username?.split("")?.[0]?.toUpperCase() || "X"}
        </Avatar>{" "}
        <span className="mg-l-1 overflow-clip">{username}</span>
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={logout}
        className={`text-small ${styles["menu-item"]}`}>
        <ListItemIcon>
          <Icon svg="logout" alt="" className={styles["menu-item-icon"]} />
        </ListItemIcon>
        <span>Logout</span>
      </MenuItem>
    </Menu>
  );
}

export default MenuComponent;
*/

import {useEffect, useState} from "react";
import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MenuPopup({
  ariaLabel,
  ariaControls,
  contentId,
  contentContainerClassName,
  triggerContent,
  menuItems,
  fullSpace,
  isClosed,
  ...props
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (isClosed) {
      handleClose();
    }
  }, [isClosed]);

  return (
    <div className={fullSpace ? "full-hw" : ""}>
      <div
        className={contentContainerClassName}
        aria-label={ariaLabel}
        id={contentId}
        aria-controls={ariaControls}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}>
        {triggerContent}
      </div>
      <Menu
        className={`dark-mode ${props?.className}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        {...props}>
        {menuItems}
      </Menu>
    </div>
  );
}
