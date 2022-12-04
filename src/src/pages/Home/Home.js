import {Fragment, memo, useEffect} from "react";
import {useQuery} from "react-query";
import {Route, useRouteMatch} from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

import {fetcher, hasLoginError} from "../../functions/requestFetcher";

import Loading from "../../components/UI/Loading/Loading";
import Spinner from "../../components/UI/Loading/Spinner";

import MusicShelf from "../../components/MusicShelf/MusicShelf";

import {getTextFromArr, getTitleFromArr} from "../../functions/getJsxFromArr";
import {getKey} from "../../functions/uniqueSuffix";

// Sub route component
import NewReleases from "./New_releases";

// import client from "../../react-query-client";

// testing

const RENDERER = {counter: 0};

function Home({rootElementRef, token, logout}) {
  const routeMatch = useRouteMatch();
  // const history = useHistory();

  useEffect(() => {
    rootElementRef?.current &&
      rootElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [rootElementRef]);

  // console.log("Loggin query data", client.getQueryCache().findAll(["song"]));

  const {data, error, isError, isSuccess} = useQuery(
    ["home", "charts"],
    () => {
      return fetcher(
        {
          url: "https://soundrex.onrender.com/api/v1/home/browse/all",
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
        }
        // () => logout()
      );
    },
    {
      staleTime: 180000, // 3min
      keepPreviousData: true,
      select: data => {
        if (data?.home?.length <= 0) throw new Error("No data found.");
        for (let item of data.home) {
          const list = item?.hasAdditionalLists ? item?.list : [item];

          if (
            typeof item?.title === "string" &&
            item.title.toLowerCase().includes("genre")
          ) {
            list.forEach(i => {
              i.disableCarousel = true;
              i.underLine = true;
              i.hasMoreItems = false;
            });
          } else {
            list.forEach((element, i) => {
              if (RENDERER.counter === 0) {
                element.hasMoreItems = element.list.length > 10;
              }
              if (element?.title?.text?.toLowerCase()?.includes("artist")) {
                element.hasMoreItems = false;
              } else {
                // if current element is new_releases
                if (
                  !element?.title?.navigate &&
                  typeof item?.title === "string" &&
                  item.title.toLowerCase().includes("release")
                ) {
                  element.title = {
                    text: element?.title,
                    navigate: `${routeMatch.path}/new_releases`,
                  };
                }

                element.list.splice(10);
              }
            });
          }
        }

        RENDERER.counter++;
        return data;
      },
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

        <Skeleton
          animation="wave"
          className={"skeleton-grid-item skeleton-bg"}
        />
        <Skeleton
          animation={false}
          className={"skeleton-grid-item skeleton-bg"}
        />
      </div>

      <Skeleton className={"skeleton-title skeleton-bg mg-t-4"} />
      <div className="skeleton-grid-list">
        <Skeleton className={"skeleton-grid-item skeleton-bg"} />

        <Skeleton
          animation="wave"
          className={"skeleton-grid-item skeleton-bg"}
        />
        <Skeleton
          animation={false}
          className={"skeleton-grid-item skeleton-bg"}
        />
      </div>

      <Skeleton className={"skeleton-title skeleton-bg mg-t-4"} />
      <div className="skeleton-grid-list">
        <Skeleton className={"skeleton-grid-item skeleton-bg"} />

        <Skeleton
          animation="wave"
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
    if (data) {
      content = [];

      for (let item of data.home) {
        const list = item?.hasAdditionalLists ? item?.list : [item];
        const listTitle = item?.title;

        let endpointType = "/browse";
        if (
          typeof listTitle === "string" &&
          listTitle.toLowerCase().includes("genre")
        )
          endpointType = "/genres";

        let index = 0;
        for (let el of list) {
          const title = el?.title;

          let newTitle = title;
          if (title?.text) newTitle = title?.text;
          if (typeof title !== "string" && title?.length > 0)
            newTitle = getTitleFromArr(title);

          let link = `${endpointType}/${title?.navigate?.browseId}`;
          // if (typeof title?.navigate === "string")
          if (typeof title?.navigate === "string") link = title?.navigate;

          const strapline = el?.strapline && getTextFromArr(el.strapline);

          content.push(
            <MusicShelf
              key={getKey(title?.text + index + title?.navigate?.browseId)}
              endpointType={endpointType}
              isRectangleBox={el?.isRectangleBox}
              rectangleBoxClass={el?.isRectangleBox && "genre-box-p"}
              disableCarousel={el?.disableCarousel}
              underLine={el?.underLine}
              hasMoreItems={el?.hasMoreItems}
              list={el?.list}
              title={
                newTitle.includes("_")
                  ? newTitle.split("_").join(" ")
                  : newTitle
              }
              strapline={strapline}
              navigate={link}
            />
          );
          index++;
        }
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

      {/* /home/new_releases route */}
      <Route path={`${routeMatch.path}/new_releases`}>
        <NewReleases logout={logout} token={token} />
      </Route>
    </Fragment>
  );
}

export default /*memo*/ Home;
