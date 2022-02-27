// import {useContext} from "react";
import axios from "axios";
// import {useToast} from "@chakra-ui/react";
import {toast} from "react-toastify";

// import authContext from "../context/AuthContext";

export const fetcher = (
  requestConfig,
  displayToast = true,
  displayToastSuccessOnly = false,
  displayToastErrorOnly = false,
  message,
  options
) => {
  // const {logout} = useContext(authContext);

  // const toast = useToast();

  if (displayToast) {
    return toast
      .promise(axios(requestConfig), {
        pending: {
          render() {
            return "Loading...";
          },
          theme: "dark",
        },
        success: {
          render() {
            return "Fetched";
          },
          theme: "colored",
          autoClose: 100,
        },
        error: {
          render({data}) {
            // When the promise reject, data will contains the error
            return data.message;
          },
          theme: "colored",
        },
      })
      .then(response => response?.data)
      .catch(err => {
        if (
          err?.response?.data?.message
            ?.toLowerCase()
            ?.include?.("jwt expire") ||
          err?.response?.data?.message?.toLowerCase()?.include?.("expired") ||
          err?.response?.data?.message?.toLowerCase()?.include?.("jwt") ||
          err?.response?.data?.message
            ?.toLowerCase()
            ?.include?.("not authenticated") ||
          err?.message?.toLowerCase()?.include?.("jwt expire") ||
          err?.message?.toLowerCase()?.include?.("expired") ||
          err?.message?.toLowerCase()?.include?.("jwt") ||
          err?.message?.toLowerCase()?.include?.("not authenticated")
        ) {
          console.log("Request failed");
          // cb();
          // logout();
        }
        throw err;
      });
  } else {
    return axios(requestConfig)
      .then(response => {
        displayToastSuccessOnly &&
          toast.success(message, {
            ...options,
          });
        return response?.data;
      })
      .catch(err => {
        if (
          err?.response?.data?.message
            ?.toLowerCase()
            ?.include?.("jwt expire") ||
          err?.response?.data?.message?.toLowerCase()?.include?.("expired") ||
          err?.response?.data?.message?.toLowerCase()?.include?.("jwt") ||
          err?.response?.data?.message
            ?.toLowerCase()
            ?.include?.("not authenticated") ||
          err?.message?.toLowerCase()?.include?.("jwt expire") ||
          err?.message?.toLowerCase()?.include?.("expired") ||
          err?.message?.toLowerCase()?.include?.("jwt") ||
          err?.message?.toLowerCase()?.include?.("not authenticated")
        ) {
          console.log("Request failed");

          // cb();
          // logout();
        }

        displayToastErrorOnly &&
          toast.error(err?.message || message, {
            ...options,
          });
        throw err;
      });
  }
};

export const hasLoginError = err => {
  const resMsg = err?.response?.data?.message;
  const errMsg = err?.message;

  const resBodyHasError =
    resMsg?.toLowerCase()?.include?.("jwt expire") ||
    resMsg?.toLowerCase()?.include?.("expired") ||
    resMsg?.toLowerCase()?.include?.("jwt") ||
    resMsg?.toLowerCase()?.include?.("not authenticated") ||
    resMsg?.includes("invalid") ||
    resMsg?.includes("not valid") ||
    resMsg?.includes("expired") ||
    resMsg?.includes("authenticated");

  const errBodyHasError =
    errMsg?.toLowerCase()?.include?.("jwt expire") ||
    errMsg?.toLowerCase()?.include?.("expired") ||
    errMsg?.toLowerCase()?.include?.("jwt") ||
    errMsg?.toLowerCase()?.include?.("not authenticated") ||
    errMsg?.includes("invalid") ||
    errMsg?.includes("not valid") ||
    errMsg?.includes("expired") ||
    errMsg?.includes("authenticated");

  if (resBodyHasError || errBodyHasError) {
    return resBodyHasError ? resMsg : errMsg;
  }

  return false;
};
/**
 * {
        render() {
          return null;
        },
        theme: "",
        // other options
        // icon: "🟢",
      }
 */
