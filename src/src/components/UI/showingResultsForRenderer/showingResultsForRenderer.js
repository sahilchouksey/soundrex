import {useHistory} from "react-router-dom";
import Button from "../Button/Button";
import {getTextFromArr} from "../../../functions/getJsxFromArr";

import styles from "./showingResultsForRenderer.module.scss";

function ShowingResultsForRenderer({data, getUrl}) {
  const history = useHistory();
  const clickHandler = key => history.replace(getUrl(key.query, key?.params));

  const showingResultsFor = data?.showingResultsFor?.length > 0 && (
    <p className="text-medium">{getTextFromArr(data.showingResultsFor)}</p>
  );

  const searchInsteadFor = data?.searchInsteadFor?.length > 0 && (
    <p className="text-medium">{getTextFromArr(data.searchInsteadFor)}</p>
  );
  // const correctedQuery = data?.correctedQuery?.length > 0 && <p>{getTitleFromArr(data.correctedQuery)}</p>
  const correctedQueryEndpoint = data?.correctedQueryEndpoint;
  const originalQueryEndpoint = data?.originalQueryEndpoint;

  return (
    <div className={`${styles["showingResultsForRenderer"]} mg-b-3 mg-t-2`}>
      {showingResultsFor}
      {correctedQueryEndpoint?.query && (
        <Button
          className={`link-btn link-medium`}
          onClick={clickHandler.bind(null, correctedQueryEndpoint)}>
          {correctedQueryEndpoint.query}
        </Button>
      )}

      {searchInsteadFor}
      {originalQueryEndpoint?.query && (
        <Button
          className={`link-btn link-medium`}
          onClick={clickHandler.bind(null, originalQueryEndpoint)}>
          {originalQueryEndpoint.query}
        </Button>
      )}
    </div>
  );
}

export default ShowingResultsForRenderer;
