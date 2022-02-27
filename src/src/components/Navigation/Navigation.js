import {
  useState,
  Fragment,
  useEffect,
  useRef,
  useCallback,
  memo,
  useMemo,
} from "react";
import {useLocation} from "react-router-dom";

import Logo from "../UI/Logo/Logo";
import NavigationList from "./Navigation-list/Navigation-list";
import NavigationItem from "./NavigationItem/NavigationItem";
import SearchBox from "../UI/SearchBox/SearchBox";
import SettingButton from "./NavigationItem/SettingButton";

import styles from "./Navigation.module.scss";

import {ReactComponent as HomeIcon} from "../../assets/svgs/home.svg";
import {ReactComponent as LibraryIcon} from "../../assets/svgs/library.svg";

function Navigation({logout}) {
  const inputRef = useRef();

  const location = useLocation();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const isSettingsOpen = Boolean(anchorEl);
  // const settingButtonRef = createRef();

  const searchFocus = useCallback(
    () => setIsSearchFocused(true),
    [setIsSearchFocused]
  );
  const removeSearchFocus = useCallback(
    () => setIsSearchFocused(false),
    [setIsSearchFocused]
  );

  const inputRefCurrent = inputRef.current;
  useEffect(() => {
    if (location.pathname.startsWith("/search")) {
      if (inputRef?.current) {
        searchFocus();
        const [_, __, parsedSearchQueryFromUrl] = location.pathname.split("/");

        inputRef.current.value = parsedSearchQueryFromUrl;

        setTimeout(() => {
          inputRef.current.blur();
        }, 1000);
      }
    } else {
      // if (inputRef?.current) {
      //   inputRef.current.value = "";
      // }
    }
  }, [searchFocus, location, inputRefCurrent]);

  // const settingClickHandler = () => {
  //   console.log("settingButtonRef", settingButtonRef);
  //   console.log("settingButtonRef", settingButtonRef.current);
  //   setAnchorEl(settingButtonRef.current);
  // };
  // const closeSetting = () => {
  //   setAnchorEl(null);
  // };

  const HomeIconMemo = useMemo(() => <HomeIcon />, []);
  const LibraryIconMemo = useMemo(() => <LibraryIcon />, []);

  const searchIcon = useMemo(() => {
    return {
      svg: "search",
      alt: "Search music",
      className: ["nav-logo", "search-icon"].join(" "),
    };
  }, []);

  const centerItems = (
    <Fragment>
      {!isSearchFocused && (
        <Fragment>
          <NavigationItem
            textIcon={HomeIconMemo}
            endpoint="/home"
            text="home"
          />

          <NavigationItem
            textIcon={LibraryIconMemo}
            endpoint="/favourites"
            text="favourites"
          />
        </Fragment>
      )}
      <SearchBox
        logout={logout}
        isOpen={isSearchFocused}
        onClose={removeSearchFocus}
        ref={inputRef}
      />
    </Fragment>
  );

  const endItems = (
    <Fragment>
      {!isSearchFocused && (
        <NavigationItem
          text="search"
          className="search-link"
          icon={searchIcon}
          onClick={searchFocus}
        />
      )}

      <SettingButton />
    </Fragment>
  );

  return (
    <Fragment>
      <nav className={styles.navbar}>
        <Logo className="nav-logo" />
        <NavigationList
          isSearchFocused={isSearchFocused}
          center={centerItems}
          end={endItems}
        />
      </nav>
    </Fragment>
  );
}

export default /*memo*/ Navigation;
