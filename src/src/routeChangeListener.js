import {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import App from "./App";

const Root = () => {
  const history = useHistory();
  const location = useLocation();
  // const audioPlayerContext = useContext(PlayerContext);
  // const setPreviousPageUrl = audioPlayerContext.setPreviousPageUrl;

  const [previousPageUrl, setPreviousPageUrl] = useState(null);

  useEffect(() => {
    history.listen(location => {
      if (!location.pathname.startsWith("/play")) {
        setPreviousPageUrl(location.pathname + location.search);
      }
    });
  }, [history]);

  useEffect(() => {
    setPreviousPageUrl(location.pathname + location.search);
  }, []);

  return <App previousPageUrl={previousPageUrl} />;
};

export default Root;
