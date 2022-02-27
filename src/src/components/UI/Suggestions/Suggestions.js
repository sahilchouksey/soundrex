import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

import Icon from "../Icon/Icon";
import {getKey} from "../../../functions/uniqueSuffix";
import styles from "./Suggestions.module.scss";
import {memo} from "react";

const getEndpoint = query => `/search/${query}/songs`;

function Suggestions({
  onClick,
  suggestions,
  isHistoricalSuggestion,
  closeSuggestions,
  ...props
}) {
  const endpoint = query => query && getEndpoint(query);

  return (
    <ul className={styles["suggestions"]}>
      {suggestions.map((suggestion, i) => (
        <li
          key={getKey(suggestion?.query + i)}
          className={styles["suggestions-item"]}>
          <Link
            onClick={() => {
              onClick(suggestion?.query);
              closeSuggestions();
            }}
            to={endpoint.bind(null, suggestion?.query) || "/"}
            className={styles["suggestion"]}>
            <Button className={styles["suggestion-box"]} color="inherit">
              <div className={styles["suggestion-icon-container"]}>
                <Icon
                  svg={isHistoricalSuggestion ? "histroy" : "search"}
                  alt=""
                  className={[styles["suggestion-icon"]].join(" ")}
                />
              </div>
              <p
                className={[
                  styles["suggestion-text"],
                  "capitalize",
                  "text-small",
                ].join(" ")}>
                {suggestion?.query}
              </p>
            </Button>
            {isHistoricalSuggestion && (
              <Button
                onClick={props.onRemove}
                className={["capitalize", styles["suggestion-remove"]]}
                color="inherit">
                remove
              </Button>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function areEqual(prevProps, nextProps) {
  const prevSuggestionTexts = prevProps?.suggestions?.reduce(
    (p, c) => p + c?.query,
    ""
  );
  const nextSuggestionTexts = nextProps?.suggestions?.reduce(
    (p, c) => p + c?.query,
    ""
  );

  return (
    prevSuggestionTexts === nextSuggestionTexts &&
    prevProps.onClick === nextProps.onClick &&
    prevProps.closeSuggestions === nextProps.closeSuggestions
  );
}

export default /*memo*/ Suggestions;
