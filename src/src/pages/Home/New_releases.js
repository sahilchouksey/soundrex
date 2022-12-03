import {Fragment, memo} from "react";
import {useQuery} from "react-query";
import Skeleton from "@mui/material/Skeleton";

import {fetcher, hasLoginError} from "../../functions/requestFetcher";

import Loading from "../../components/UI/Loading/Loading";
import Spinner from "../../components/UI/Loading/Spinner";

import MusicShelf from "../../components/MusicShelf/MusicShelf";

function New_releases({token, logout}) {
  const {data, error, isError, isSuccess} = useQuery(
    ["home", "new_releases"],
    () => {
      return fetcher(
        {
          url: "https://soundrex.onrender.com/api/v1/home/browse/new_releases",
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

      {/* <div className="flex-center mg-t-3">
        <Spinner />
      </div> */}
      <Skeleton className={"skeleton-title skeleton-bg"} />
      <div className="skeleton-grid-list">
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
    if (data && data?.list) {
      content = (
        <MusicShelf
          disableCarousel={true}
          listClasssName="non-carousel-grid-shelf"
          hasMoreItems={false}
          list={data?.list}
          title={
            data?.title.includes("_")
              ? data?.title.split("_").join(" ")
              : data?.title
          }
        />
      );
    } else {
      content = (
        <p className="centered capitalize text-medium">No data found.</p>
      );
    }
  }

  return content;
}

export default /*memo*/ New_releases;
