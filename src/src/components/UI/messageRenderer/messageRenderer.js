import {getTextFromArr} from "../../../functions/getJsxFromArr";
import {Fragment} from "react";
import Icon from "../Icon/Icon";

function MessageRenderer({msg}) {
  const text =
    msg?.text?.length > 0 &&
    (() => {
      const text = getTextFromArr(msg.text);

      return (
        <Fragment>
          {text.toLowerCase().includes("no result") && (
            <Icon
              className="mg-b-2"
              svg="search"
              style={{height: "9.6rem", width: "9.6rem"}}
            />
          )}
          <p className="link-large mg-b-1">{text}</p>
        </Fragment>
      );
    })();

  const subtext = msg?.subtext?.length > 0 && (
    <p>{getTextFromArr(msg.subtext)}</p>
  );

  return (
    <div className={`mg-b-3 mg-t-2 centered`}>
      {text}
      {subtext}
    </div>
  );
}

export default MessageRenderer;
