import {useHistory} from "react-router-dom";
import Button from "../Button/Button";
import {getTextFromArr} from "../../../functions/getJsxFromArr";

import styles from "./didYouMeanRenderer.module.scss";

function DidYouMeanRenderer({data, getUrl}) {
  const history = useHistory();

  const didYouMean = data?.didYouMean?.length > 0 && (
    <p className="text-medium">{getTextFromArr(data.didYouMean)}</p>
  );
  // const correctedQuery = data?.correctedQuery?.length > 0 && <p>{getTitleFromArr(data.correctedQuery)}</p>
  const correctedQueryEndpoint = data?.correctedQueryEndpoint;

  const clickHandler = () =>
    correctedQueryEndpoint?.query &&
    history.replace(
      getUrl(correctedQueryEndpoint.query, correctedQueryEndpoint?.params)
    );

  return (
    <div className={`${styles["didYouMeanRenderer"]}  mg-b-3 mg-t-2`}>
      {didYouMean}
      {correctedQueryEndpoint?.query && (
        <Button className={`link-btn link-medium`} onClick={clickHandler}>
          {correctedQueryEndpoint.query}
        </Button>
      )}
    </div>
  );
}

export default DidYouMeanRenderer;
