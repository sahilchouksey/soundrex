import {Fragment, memo, useEffect} from "react";
import {useQuery} from "react-query";
import {Route, useRouteMatch} from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

import {fetcher, hasLoginError} from "../../functions/requestFetcher";

import Loading from "../../components/UI/Loading/Loading";
import Spinner from "../../components/UI/Loading/Spinner";

import MusicShelf from "../../components/MusicShelf/MusicShelf";

import {getTitleFromArr} from "../../functions/getJsxFromArr";
import {getKey} from "../../functions/uniqueSuffix";

import Genre from "./Genres.[genre]";

function Genres({rootElementRef, token, logout}) {
  const routeMatch = useRouteMatch();

  useEffect(() => {
    rootElementRef?.current &&
      rootElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [rootElementRef]);

  const {data, error, isError, isSuccess} = useQuery(
    ["home", "genres"],
    () => {
      return fetcher(
        {
          url: "https://soundrex.onrender.com/api/v1/home/browse/genres",
          method: "GET",
          headers: {
            authorization: "Bearer " + token,
          },
        },
        false,
        false,
        true,
        "Opps! something went wrong.",
        {
          autoClose: 1000,
          theme: "dark",
        },
        () => logout()
      );
    },
    {
      staleTime: 180000, // 3min
      keepPreviousData: true,
    }
  );

  let content = (
    <Fragment>
      <div className="fixed-top flex-center">
        <Loading />
      </div>

      <div className="fixed-right">
        <Spinner thin />
      </div>

      <Skeleton className={"skeleton-title skeleton-bg"} />
      <div className="skeleton-grid-list">
        <Skeleton className={"skeleton-grid-item skeleton-bg"} />
        <Skeleton className={"skeleton-grid-item skeleton-bg"} />
        <Skeleton className={"skeleton-grid-item skeleton-bg"} />
        <Skeleton className={"skeleton-grid-item skeleton-bg"} />

        <Skeleton
          animation="wave"
          className={"skeleton-grid-item skeleton-bg"}
        />
        <Skeleton
          animation="wave"
          className={"skeleton-grid-item skeleton-bg"}
        />
        <Skeleton
          animation="wave"
          className={"skeleton-grid-item skeleton-bg"}
        />
        <Skeleton
          animation={false}
          className={"skeleton-grid-item skeleton-bg"}
        />
        <Skeleton
          animation={false}
          className={"skeleton-grid-item skeleton-bg"}
        />
        <Skeleton
          animation={false}
          className={"skeleton-grid-item skeleton-bg"}
        />
      </div>
      {/* <div className="flex-center mg-t-3">
        <Spinner />
      </div> */}
    </Fragment>
  );

  // if there is an error, immediately return it to Ui
  if (isError && error) {
    const hasLoginErr = hasLoginError(error);
    if (hasLoginErr) {
      logout();
    }
    content = <p className="centered capitalize text-medium">No data found.</p>;
  }

  if (isSuccess) {
    if (data?.list) {
      content = [];

      const endpointType = "/genres";
      for (let el of data?.list) {
        const title = el?.title;
        let index = 0;

        let newTitle = title;
        if (title?.text) newTitle = title?.text;
        if (typeof title !== "string" && title?.length > 0)
          newTitle = getTitleFromArr(title);

        // let link = `${endpointType}/${el?.title?.navigate?.browseId}`;
        // if (typeof el?.title?.navigate === "string") link = el?.title?.navigate;

        content.push(
          <MusicShelf
            key={getKey(
              el?.title?.text + index + el?.title?.navigate?.browseId
            )}
            endpointType={endpointType}
            isRectangleBox={true}
            rectangleBoxClass="genre-box-p"
            disableCarousel={true}
            underLine={true}
            list={el?.list}
            title={
              newTitle.includes("_") ? newTitle.split("_").join(" ") : newTitle
            }
            // navigate={link}
          />
        );
        index++;
      }
    } else {
      content = (
        <p className="centered capitalize text-medium">No data found.</p>
      );
    }
  }

  return (
    <Fragment>
      <Route path={routeMatch.path} exact>
        {content}
      </Route>
      <Route path={`${routeMatch.path}/:browseId/:params`} exact>
        <Genre logout={logout} token={token} />
      </Route>
    </Fragment>
  );
}

export default /*memo*/ Genres;
