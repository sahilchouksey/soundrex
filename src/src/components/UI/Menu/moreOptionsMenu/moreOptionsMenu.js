import Menu from "../Menu";
import ContextMenu from "../ContextMenu";

// import Avatar from "@mui/material/Avatar";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Divider from "@mui/material/Divider";
import ServiceMenu from "../../../Song/Add_to_queue_Menu";

// import Icon from "../../UI/Icon/Icon";

import {ReactComponent as ShufflePlay} from "../../../../assets/svgs/shuffle_play.svg";
import {ReactComponent as StartRadio} from "../../../../assets/svgs/start_radio.svg";
import {ReactComponent as PlayNext} from "../../../../assets/svgs/play_next.svg";
import {ReactComponent as AddToQueue} from "../../../../assets/svgs/add_to_queue.svg";
import {ReactComponent as GoToAlbum} from "../../../../assets/svgs/go_to_album.svg";
import {ReactComponent as GoToArtist} from "../../../../assets/svgs/go_to_artist.svg";
import {getKey} from "../../../../functions/uniqueSuffix";
import {useContext, useState} from "react";
// import {Link} from "react-router-dom";
import Button from "../../Button/Button";
import {useHistory} from "react-router-dom";
import context from "../../../../context/context";

const ITEM_HEIGHT = 48;

const iconsForMenus = [
  {
    text: ["shuffle play", "play", "MUSIC_SHUFFLE"],
    standard: "Shuffle play",
    icon: <ShufflePlay />,
  },
  {
    text: ["start radio", "radio"],
    standard: "Start radio",

    icon: <StartRadio />,
  },
  {
    text: ["play next", "QUEUE_PLAY_NEXT", "next"],
    standard: "Play next",
    isService: true,
    insertion: "NEXT",
    icon: <PlayNext />,
  },
  {
    text: ["add to queue", "to queue", "ADD_TO_REMOTE_QUEUE"],
    standard: "Add to queue",
    isService: true,
    insertion: "END",

    icon: <AddToQueue />,
  },
  {
    text: ["go to album", "to album", "album"],
    standard: "Go to album",

    icon: <GoToAlbum />,
  },
  {
    text: ["go to artist", "to artist", "artist"],
    standard: "Go to artist",

    icon: <GoToArtist />,
  },
];

const moreOptionsMenuPaperProps = {
  style: {
    // maxHeight: ITEM_HEIGHT * 3,
    height: "max-content",

    width: "20ch",
  },
};

function MoreOptionaMenu({
  menuOptions,
  serviceSuccessMsg,
  fullSpace = false,
  className,
  isContextMenu,

  children,
  ...props
}) {
  const content = (
    <IconButton {...props} className={`more-options ${className}`}>
      <MoreVertIcon style={{color: "#fff"}} />
    </IconButton>
  );

  const [isClosed, setIsClosed] = useState(false);

  const {
    setCurrentSongIndex,
    setCurrentSongParam,
    closePlayer,
    upNextSongs,
    setUpNextSongs,
    currentSong,
    // isPlayerOpen,
    // isPlayerPageOpen,
  } = useContext(context);

  const history = useHistory();

  const menuItems = menuOptions.map((option, i) => {
    const menu = iconsForMenus.find(m => {
      return (
        m.text.find(mt =>
          mt.toLowerCase().includes(option?.text.toLowerCase())
        ) || false
      );
    });

    if (!menu) return null;

    if (
      menu?.isService &&
      !option?.service?.isVideo &&
      !option?.service?.isPlaylist
    ) {
      return null;
    }

    if (menu?.isService) {
      return (
        <ServiceMenu
          style={{
            height: ITEM_HEIGHT,
          }}
          key={getKey(menu.standard)}
          add_next={menu.insertion.toLowerCase().includes("next")}
          service={option.service}
          msg={serviceSuccessMsg}
          disabled={upNextSongs?.length <= 0}
          onClick={() => {
            setIsClosed(true);
          }}>
          <ListItemIcon style={{fill: "#ffffff"}}>{menu.icon}</ListItemIcon>
          <ListItemText className="menuList-typo">{menu.standard}</ListItemText>
        </ServiceMenu>
      );
    }

    const isSong = option?.navigate?.playlistId || option?.navigate?.videoId;
    const isBrowseable = option?.navigate?.browseId;

    const navigationParams = option?.navigate?.params;

    let endpoint;
    const playlistId = option?.navigate?.playlistId;
    const videoId = option?.navigate?.videoId;
    if (isSong) {
      // ||
      // ((playlistId?.startsWith?.("OLA") ||
      //   playlistId?.startsWith?.("RDAMPL")) &&
      //   option?.navigate?.playlistId);

      endpoint = `/play${videoId ? `?id=${videoId}` : ""}${
        playlistId
          ? `${playlistId && !videoId ? "?" : "&"}list=${playlistId}`
          : ""
      }`;
    }

    if (isBrowseable) {
      const browseId = option?.navigate?.browseId;
      endpoint = `/browse/${browseId}${
        navigationParams ? `?params=${navigationParams}` : ""
      }`;
    }

    if (!endpoint) return null;

    return (
      <a
        replace
        key={getKey(menu.standard)}
        className="link-btn"
        style={{marginLeft: "0", textDecoration: "none"}}
        onClick={() => {
          if (endpoint?.startsWith("/play")) {
            if (currentSong?.playlistId !== playlistId) {
              setUpNextSongs([]);
            }
            setCurrentSongParam("");
            closePlayer();
            // return setCurrentSongIndex(0);
          }

          history.push(endpoint);

          if (endpoint?.startsWith("/play")) {
            return setCurrentSongIndex(0);
          }
        }}
        to={endpoint}>
        <MenuItem
          style={{
            height: ITEM_HEIGHT,
          }}>
          <ListItemIcon style={{fill: "#ffffff"}}>{menu.icon}</ListItemIcon>
          <ListItemText className="menuList-typo">{menu.standard}</ListItemText>
        </MenuItem>
      </a>
    );
  });

  // console.log(menuItems);

  if (isContextMenu) {
    return (
      <ContextMenu
        isClosed={isClosed}
        triggerContent={children}
        menuItems={<MenuList>{menuItems}</MenuList>}
      />
    );
  }

  return (
    <Menu
      isClosed={isClosed}
      fullSpace={fullSpace}
      ariaLabel="more"
      // ariaControls={open ? "long-menu" : undefined}
      // ariaControls={open ? "lock-menu" : undefined}
      contentContainerClassName="full-hw flex-center"
      id="lock-menu"
      // contentId="lock-button"
      // className={styles["setting-menu"]}
      PaperProps={moreOptionsMenuPaperProps}
      MenuListProps={{
        "aria-labelledby": "lock-button",
        "role": "listbox",
        //   "aria-labelledby": "long-button",
      }}
      // ancho
      // anchorOrigin={{vertical: "bottom", horizontal: "center"}}
      // transformOrigin={{vertical: "top", horizontal: "center"}}
      triggerContent={content}
      menuItems={<MenuList>{menuItems}</MenuList>}
    />
  );
}

// function areEqual(prevProps, nextProps) {
//   const prevOptionTexts = prevProps?.menuOptions?.reduce(
//     (p, c) => p + c?.text,
//     ""
//   );
//   const nextOptionTexts = nextProps?.menuOptions?.reduce(
//     (p, c) => p + c?.text,
//     ""
//   );

//   console.log("render MoreOptionaMenu", prevOptionTexts, nextOptionTexts);

//   return prevOptionTexts === nextOptionTexts;
// }

export default /*memo*/ MoreOptionaMenu;
