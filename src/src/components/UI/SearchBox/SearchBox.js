import {
  useState,
  useRef,
  useEffect,
  Fragment,
  forwardRef,
  useContext,
  memo,
  useCallback,
} from "react";
import {useHistory, useLocation} from "react-router-dom";
import {useMutation} from "react-query";

import AuthContext from "../../../context/AuthContext";

import debounce from "lodash.debounce";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import useOnClickOutside from "../../../hooks/useOnClickOutside";

import {fetcher, hasLoginError} from "../../../functions/requestFetcher";
import Suggestions from "../Suggestions/Suggestions";
// import Icon from "../Icon/Icon";
import Spinner from "../Loading/Spinner";
import styles from "./SearchBox.module.scss";

import {ReactComponent as GoBackIcon} from "../../../assets/svgs/go-back.svg";
import {ReactComponent as CloseIcon} from "../../../assets/svgs/close.svg";

const SearchBox = forwardRef(({onClose, isOpen, logout}, ref) => {
  const inputRef = ref;
  const searchBoxRef = useRef();
  const history = useHistory();
  const location = useLocation();

  const {token} = useContext(AuthContext);

  const [isInputValid, setIsInputValid] = useState(false);
  const [suggestions, setSuggestions] = useState(null);
  const [preventSuggestions, setPreventSuggestions] = useState(false);

  // request
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => isOpen && inputRef?.current.focus(), [isOpen, inputRef]);

  useOnClickOutside(
    searchBoxRef,
    () => {
      setSuggestions(null);
      !isInputValid && isOpen && onClose();
    },
    !isInputValid || suggestions?.list?.length > 0
  );
  // !isInputValid
  // && !suggestions.list.length > 0

  useEffect(() => {
    if (
      isInputValid &&
      !location.pathname.startsWith("/play") &&
      !location.pathname.startsWith("/search")
    ) {
      onClose();
      if (inputRef?.current) inputRef.current.value = "";
    }
  }, [location, inputRef, onClose]);

  useEffect(() => {
    if (inputRef?.current)
      setIsInputValid(inputRef.current.value.trim().length > 0);

    if (!isOpen) setPreventSuggestions(true);
  }, [inputRef, isOpen]);

  const getSuggestions = useMutation(
    params => fetcher(params, false, false, false, null, null),
    {
      onSuccess: data => {
        if (data) {
          setIsLoading(false);
          if (!preventSuggestions) {
            setSuggestions(data);
          }
        }
      },
      onError: error => {
        const hasLoginErr = hasLoginError(error);
        if (hasLoginErr) {
          logout();
        }

        setIsLoading(false);

        setSuggestions(null);

        console.log(error);
      },
    }
  );

  const clearInput = () => {
    inputRef.current.value = null;
    setIsInputValid(false);
    setSuggestions(null);
  };

  const inputChangeHandler = useCallback(
    debounce(() => {
      const input = inputRef?.current?.value?.trim();
      const isInputValid = input?.trim()?.length > 0;
      setIsInputValid(isInputValid);

      if (isInputValid) {
        setPreventSuggestions(false);
        setIsLoading(true);

        getSuggestions.mutate({
          url: `https://soundrex.onrender.com/api/v1/search_suggestions?query=${input}`,
          method: "GET",
          headers: {
            authorization: "Bearer " + token,
          },
        });
      } else {
        setSuggestions(null);
      }
    }, 250),
    [
      inputRef,
      setIsInputValid,
      setPreventSuggestions,
      setIsLoading,
      setSuggestions,
      token,
    ]
  );

  const closeSuggestions = useCallback(() => {
    // setIsInputValid(false);

    setIsLoading(false);
    if (!preventSuggestions) setPreventSuggestions(true);
    setSuggestions(null);
  }, [setIsLoading, preventSuggestions, setPreventSuggestions, setSuggestions]);

  const inputSubmitHandler = useCallback(
    debounce(e => {
      // e.preventDefault();
      const input = inputRef?.current?.value?.trim();
      const isInputValid = input?.trim()?.length > 0;
      // setIsInputValid(isInputValid);

      if (isInputValid) {
        history.push(`/search/${input}/songs`);
      }
      closeSuggestions();

      // clearInput();
      // onClose();
    }, 300),
    [history, closeSuggestions, inputRef]
  );

  const hasSuggestions = suggestions && suggestions?.list?.length > 0;

  const boxRadius = hasSuggestions
    ? {borderRadius: "8px 8px 0 0"}
    : {borderRadius: "8px"};

  const inputVal = inputRef?.current?.value;
  useEffect(() => {
    if (inputVal) {
      setPreventSuggestions(false);
    }
  }, [inputVal]);

  const suggestionClickHandler = useCallback(
    input => {
      if (inputRef?.current) inputRef.current.value = input;

      setIsInputValid(true);
      setPreventSuggestions(false);
    },
    [inputRef, setIsInputValid, setPreventSuggestions]
  );

  return (
    <Fragment>
      <div
        className={
          isOpen
            ? styles["search-box-container"]
            : styles["search-box-container-closed"]
        }
        ref={searchBoxRef}>
        <div
          id="search-box"
          className={`${styles["search-box"]} ${
            isOpen ? styles["search-box-open"] : styles["search-box-closed"]
          } `}
          style={boxRadius}>
          <Button
            onClick={onClose}
            className={styles["search-box__btn-container"]}
            color="inherit">
            <GoBackIcon
              alt="Close"
              className={[
                styles["search-box__btn"],
                styles["search-box__btn-back"],
              ].join(" ")}
            />
          </Button>
          <form
            onSubmit={e => {
              e.preventDefault();
              inputSubmitHandler(e);
            }}>
            <input
              ref={inputRef}
              onChange={inputChangeHandler}
              aria-autocomplete="list"
              aria-owns="suggestion-list"
              dir="auto"
              role="combobox"
              className={[styles["search-box__input"], "link-large"].join(" ")}
              placeholder="Search"
              aria-expanded="true"
              aria-controls="search-box"
            />
          </form>

          {isLoading && (
            <div className={styles["search-box__loading-container"]}>
              <Spinner className={styles["search-box__loading"]} />
            </div>
          )}

          {isInputValid && !isLoading && (
            <IconButton
              size="small"
              //   edge="center"
              aria-label="Close button"
              onClick={clearInput}
              className={styles["search-box__btn-close-container"]}
              color="inherit">
              <CloseIcon
                alt="Remove"
                className={[
                  styles["search-box__btn"],
                  styles["search-box__btn-close"],
                ].join(" ")}
              />
            </IconButton>
          )}
        </div>
        {hasSuggestions && !preventSuggestions && (
          <Suggestions
            onClick={suggestionClickHandler}
            suggestions={suggestions?.list}
            closeSuggestions={closeSuggestions}
          />
        )}
      </div>
    </Fragment>
  );
});

export default /*memo*/ SearchBox;
