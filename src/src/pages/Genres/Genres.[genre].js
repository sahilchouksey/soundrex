import {Fragment, memo} from "react";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

import {fetcher, hasLoginError} from "../../functions/requestFetcher";

import Loading from "../../components/UI/Loading/Loading";
import Spinner from "../../components/UI/Loading/Spinner";

import MusicShelf from "../../components/MusicShelf/MusicShelf";

import {getJsxFromArr, getTitleFromArr} from "../../functions/getJsxFromArr";
import {getKey} from "../../functions/uniqueSuffix";
import {deleteJunkCache} from "../../react-query-client";

function Genres({token, logout}) {
  const {browseId, params} = useParams();

  const {data, error, isError, isSuccess} = useQuery(
    ["genres", browseId, params],
    () => {
      return fetcher(
        {
          url: `https://soundrex.onrender.com/api/v1/genre/browse?id=${browseId}&params=${params}`,
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
      // staleTime: 180000, // 3min
      staleTime: 300000,

      keepPreviousData: true,
      select: data => {
        deleteJunkCache("genres", 3);

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
      </div>
      <Skeleton className={"skeleton-title skeleton-bg mg-t-5"} />
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
    if (data?.contents) {
      content = [];

      const endpointType = "/browse";

      const listHeader = data?.header;
      if (typeof listHeader?.title === "string") {
        content.push(
          <h1 key={getKey(Math.random())} className="display-large--bold">
            {listHeader.title}
          </h1>
        );
      }

      if (typeof listHeader?.title?.text === "string") {
        content.push(
          <h1 key={getKey(Math.random())} className="display-large--bold">
            {listHeader.title.text}
          </h1>
        );
      }

      if (listHeader?.title?.length > 0) {
        content.push(
          <h1 key={getKey(Math.random())} className="display-large--bold">
            {getTitleFromArr(listHeader.title)}
          </h1>
        );
      }

      for (let el of data.contents) {
        const title = el?.title;
        let index = 0;

        let newTitle;
        if (title) {
          newTitle = getJsxFromArr(title, "card-link", null, true, true, true);
        }

        // let link = `${endpointType}/${el?.title?.navigate?.browseId}`;
        // if (typeof el?.title?.navigate === "string") link = el?.title?.navigate;

        content.push(
          <MusicShelf
            key={getKey(index)}
            listClasssName={!el?.carouselRenderer && "non-carousel-grid-shelf"}
            endpointType={endpointType}
            isRectangleBox={false}
            disableCarousel={!el?.carouselRenderer}
            list={el?.list}
            title={newTitle}
            isTitleComponent={true}
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

  return content;
}

export default /*memo*/ Genres;
