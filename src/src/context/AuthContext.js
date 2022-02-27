import {createContext} from "react";

const ctx = createContext({
  isAuth: false,
  token: null,
  authLoading: false,
  userId: null,
  library: [],
  username: null,

  login: () => {},
  logout: () => {},
  setAutoLogout: () => {},

  editAuthConf: () => {},
  setIsAuth: () => {},
  setToken: () => {},
  setIsAuthLoading: () => {},
  setUserId: () => {},

  initLibrary: () => {},
  pushToLibrary: () => {},
  removeFromLibrary: () => {},

  addToFavouritesHandler: () => {},
  removeFromFavouritesHandler: () => {},

  topBoxMessage: null,
  setTopBoxMessage: () => {},
});

export default ctx;
