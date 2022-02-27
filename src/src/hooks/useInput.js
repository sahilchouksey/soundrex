import {useCallback, useReducer} from "react";

const INITIAL_INPUT = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGED":
      return {value: action.value, isTouched: state.isTouched};
    case "BLUR":
      return {value: state.value, isTouched: true};
    case "RESET":
      return INITIAL_INPUT;
    default:
      return INITIAL_INPUT;
  }
};

const useInput = (validator, compareVal) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, INITIAL_INPUT);

  const isValid = validator(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const inputChangeHandler = useCallback(
    e => dispatchInput({type: "CHANGED", value: e.target.value}),
    [dispatchInput]
  );

  const inputBlurHandler = useCallback(
    e => dispatchInput({type: "BLUR"}),
    [dispatchInput]
  );

  const reset = useCallback(
    () => dispatchInput({type: "RESET"}),
    [dispatchInput]
  );

  return {
    value: inputState.value,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
    comparedValue: compareVal === String(inputState.value),
  };
};

export default useInput;
