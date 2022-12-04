import axios from "axios";
import Context from "./AuthContext";
import {useCallback, useReducer} from "react";

import {toast} from "react-toastify";

import {fetcher, hasLoginError} from "../functions/requestFetcher";
import {isError} from "react-query";
// import Popup from "../components/UI/Popup/Popup";
// import Spinner from "../components/UI/Loading/Spinner";

const INITIAL_STATE = {
  isAuth: false,
  token: null,
  authLoading: false,
  userId: null,
  library: [],
  username: null,
  topBoxMessage: null,
};

const AuthReducer = (state = {INITIAL_STATE}, action) => {
  const {type, value} = action;
  //   const {upNextSongs, currentSongIndex} = state;
  switch (type) {
    case "EDIT":
      return {...state, ...value};
    case "ISAUTH":
      return {...state, isAuth: value};
    case "TOKEN":
      return {...state, token: value};
    case "AUTHLOADING":
      return {...state, authLoading: value};
    case "USERID":
      return {...state, userId: value};

    case "LIBRARY":
      return {...state, library: value};

    case "PUSH_LIBRARY":
      const {id} = value;
      const library = [...state.library];
      const alreadyExists = library.find(s => s._id === id);
      if (!alreadyExists) {
        library.push(value);
      }
      return {...state, library: library};

    case "PULL_LIBRARY":
      const songId = value;
      const updatedLibrary = state.library.filter(s => s._id !== songId);
      return {...state, library: updatedLibrary};

    case "TOP_BOX_MSG":
      return {...state, topBoxMessage: value};

    default:
      return state;
  }
};

const toastOptions = {
  // theme: "dark",
  theme: "colored",
};

function ContextProvider({children}) {
  const [authState, dispatchAuth] = useReducer(AuthReducer, INITIAL_STATE);

  const {isAuth, token, authLoading, userId, library, username, topBoxMessage} =
    authState;
  // const [, setTopBoxMessage] = useState(null);

  const setTopBoxMessage = useCallback(
    msg => dispatchAuth({type: "TOP_BOX_MSG", value: msg}),
    [dispatchAuth]
  );

  const editAuthConf = useCallback(
    data => dispatchAuth({type: "EDIT", value: data}),
    [dispatchAuth]
  );

  const setIsAuth = useCallback(
    bool => {
      dispatchAuth({type: "ISAUTH", value: bool});
    },
    [dispatchAuth]
  );

  const setToken = useCallback(
    token => {
      dispatchAuth({type: "TOKEN", value: token});
    },
    [dispatchAuth]
  );

  const setAuthLoading = useCallback(
    bool => {
      dispatchAuth({type: "AUTHLOADING", value: bool});
    },
    [dispatchAuth]
  );

  const setUserId = useCallback(
    id => {
      dispatchAuth({type: "USERID", value: id});
    },
    [dispatchAuth]
  );

  const login = async () => {
    setTopBoxMessage(null);

    try {
      const token = window.localStorage.getItem("token");
      const expiryDate = window.localStorage.getItem("expiryDate");
      if (!token || !expiryDate) {
        console.log("Invalid Token OR Expiry date");
        throw new Error("Invalid Token OR Expiry date");
        // return;
      }
      if (new Date(expiryDate) <= new Date()) {
        logout();
        console.log("Token is not valid");

        throw new Error("Token is not valid");
        // return;
      }

      // id = toast.loading("Logging in...");
      const options = {
        method: "POST",
        url: "https://soundrex.onrender.com/auth/is-auth",
        headers: {
          authorization: "Bearer " + token,
        },
        // data: JSON.stringify(body),
      };

      const {data} = await toast.promise(axios(options), {
        // pending: {
        //   render() {
        //     return null;
        //     // "logging in";
        //   },
        //   // ...toastOptions,
        //   // isLoading: false,
        //   // icon: null,
        //   theme: "dark",
        //   className: "hide",
        //   bodyClassName: "hide",
        //   progressClassName: "hide",
        // },
        success: {
          render() {
            return "Successfully logged in";
          },
          autoClose: 1000,

          ...toastOptions,
        },
        error: {
          render() {
            return "Unable to login";
          },
          autoClose: 2000,
          ...toastOptions,
        },
      });

      const userId = window.localStorage.getItem("userId");
      const remainingMilliseconds =
        new Date(expiryDate).getTime() - new Date().getTime();
      editAuthConf({
        isAuth: true,
        token: token,
        userId: userId,
        username: data?.username,
      });
      setAutoLogout(remainingMilliseconds);

      // initLibrary(data.library);
      // toast.success({
      //   render: "Successfully logged in.",
      //   type: "success",
      //   isLoading: false,
      //   autoClose: 1000,
      //   ...toastOptions,
      // });

      // Promise.resolve("Successfully logged in.");
    } catch (error) {
      const resMsg = error?.response?.data?.message?.toLowerCase();
      const isInvalid =
        resMsg?.includes("invalid") ||
        resMsg?.includes("not valid") ||
        resMsg?.includes("expired") ||
        resMsg?.includes("authenticated");
      const errMsg = error?.message;
      const isErrorInvalid =
        errMsg?.includes("invalid") ||
        errMsg?.includes("not valid") ||
        errMsg?.includes("expired") ||
        errMsg?.includes("authenticated");

      const msg =
        (isInvalid || isErrorInvalid) &&
        "Your session has expired. Please log in again.";
      //   ||
      // "Oops! Something went wrong. Please log in again.";

      msg && setTopBoxMessage(msg);

      // logout();

      // toast.error({
      //   render: "Logged out.",
      //   type: "error",
      //   isLoading: false,
      //   autoClose: 1000,
      //   ...toastOptions,
      // });

      throw error;
      // Promise.reject("logout");
    }
  };

  const logout = useCallback(() => {
    editAuthConf({isAuth: false, token: null, username: null});
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("expiryDate");
    window.localStorage.removeItem("userId");
    toast.error("Logged out.", {
      type: "error",
      isLoading: false,
      autoClose: 3000,
      ...toastOptions,
    });

    setTimeout(() => {
      setTopBoxMessage("Your session has expired. Please log in again.");
    }, 2000);
  }, [editAuthConf]);

  const setAutoLogout = useCallback(
    milliseconds => {
      const timeout = setTimeout(() => {
        logout();
      }, milliseconds);

      return () => {
        clearTimeout(timeout);
      };
    },
    [logout]
  );

  const initLibrary = useCallback(
    lib => {
      dispatchAuth({type: "LIBRARY", value: lib});
    },
    [dispatchAuth]
  );

  const pushToLibrary = useCallback(
    song => {
      dispatchAuth({type: "PUSH_LIBRARY", value: song});
    },
    [dispatchAuth]
  );

  const removeFromLibrary = useCallback(
    id => {
      dispatchAuth({type: "PULL_LIBRARY", value: id});
    },
    [dispatchAuth]
  );

  const addToFavouritesHandler = useCallback(
    async (data, loadingCb, successcb, failurecb) => {
      try {
        loadingCb && loadingCb();
        await toast.promise(
          fetcher(
            {
              url: `https://soundrex.onrender.com/soundrex/like`,
              method: "POST",
              headers: {
                authorization: "Bearer " + token,
              },
              data: data,
            },
            false,
            false,
            false,
            null,
            null
            // () => logout()
          ),
          {
            pending: {
              render() {
                return "Adding to Favourites.";
              },
              // ...toastOptions,
              theme: "dark",
            },
            success: {
              render() {
                return "Added to Favourites.";
              },
              autoClose: 1500,
              ...toastOptions,
            },
            error: {
              render() {
                return "Favourites request failed.";
              },
              autoClose: 1500,
              ...toastOptions,
            },
          }
        );

        pushToLibrary(data);
        successcb && successcb();
      } catch (error) {
        const hasLoginErr = hasLoginError(error);
        if (hasLoginErr) {
          logout();
        }

        failurecb && failurecb();

        console.log(error);
        // toast.error(", {
        //   autoClose: 1500,
        //   ...toastOptions,
        // });
      }
    },
    [token, pushToLibrary]
  );

  const removeFromFavouritesHandler = useCallback(
    async (id, loadingCb, successcb, failurecb) => {
      try {
        const data = {
          id,
        };

        loadingCb && loadingCb();
        await toast.promise(
          fetcher(
            {
              url: `https://soundrex.onrender.com/soundrex/remove-like`,
              method: "POST",
              headers: {
                authorization: "Bearer " + token,
              },
              data: data,
            },
            false,
            false,
            false,
            null,
            null
            // () => logout()
          ),
          {
            pending: {
              render() {
                return "Removing from Favourites.";
              },
              theme: "dark",

              // ...toastOptions,
            },
            success: {
              render() {
                return "Removed from Favourites.";
              },
              autoClose: 1500,
              ...toastOptions,
            },
            error: {
              render() {
                return "Favourites request failed.";
              },
              autoClose: 1500,
              ...toastOptions,
            },
          }
        );

        removeFromLibrary(id);
        successcb && successcb();
      } catch (error) {
        const hasLoginErr = hasLoginError(error);
        if (hasLoginErr) {
          logout();
        }

        failurecb && failurecb();

        console.log(error);
        // toast.error(, {
        //   autoClose: 1500,
        //   ...toastOptions,
        // });
      }
    },
    [token, removeFromLibrary]
  );

  return (
    <Context.Provider
      value={{
        isAuth,
        token,
        authLoading,
        userId,
        library,
        username,

        login,
        logout,
        setAutoLogout,

        editAuthConf: editAuthConf,
        setIsAuth: setIsAuth,
        setToken: setToken,
        setIsAuthLoading: setAuthLoading,
        setUserId: setUserId,

        initLibrary,
        pushToLibrary,
        removeFromLibrary,

        addToFavouritesHandler,
        removeFromFavouritesHandler,

        topBoxMessage,
        setTopBoxMessage,
      }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
