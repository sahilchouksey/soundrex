import {useReducer, useCallback} from "react";
import axios from "axios";

const INITIAL_STATE = {
  isLoading: false,
  error: null,
};

const reducer = (action, state) => {
  const {type, val} = action;
  switch (type) {
    case "LOADING":
      // set Error to null if req is not loaded (currently loading)
      return {error: val ? null : state.error, isLoading: val};

    case "ERROR":
      // if request is failed || if there is an error set Isloading to false
      return {error: val, isLoading: val ? false : state.isLoading};

    default:
      return INITIAL_STATE;
  }
};

const useHttp = () => {
  const [reqState, dispatchReq] = useReducer(reducer, INITIAL_STATE);

  const sendRequest = useCallback(requestConfig => {
    dispatchReq({type: "LOADING", value: true});

    try {
      return axios(requestConfig)
        .then(response => response?.data)
        .catch(err => {
          dispatchReq({type: "ERROR", value: err});
        });
    } catch (error) {
      dispatchReq({type: "ERROR", value: error});
    }

    dispatchReq({type: "LOADING", value: false});
  }, []);

  return {
    ...reqState,
    sendRequest,
  };
};

export default useHttp;
