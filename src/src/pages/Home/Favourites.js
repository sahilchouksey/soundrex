import {Fragment, memo, useEffect} from "react";
import {useQuery} from "react-query";
import Skeleton from "@mui/material/Skeleton";

import {fetcher, hasLoginError} from "../../functions/requestFetcher";

import Loading from "../../components/UI/Loading/Loading";
import Spinner from "../../components/UI/Loading/Spinner";
import MusicShelf from "../../components/MusicShelf/MusicShelf";

// testing

function Favourites({
  rootElementRef,
  token,
  initLibrary,
  // library,
  removeFromFavouritesHandler,
  logout,
}) {
  useEffect(() => {
    rootElementRef?.current &&
      rootElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [rootElementRef]);

  const {data, error, isError, isSuccess, refetch} = useQuery(
    ["soundrex", "favourites"],
    () => {
      return fetcher(
        {
          url: "https://soundrex.herokuapp.com/soundrex/favourites",
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
      // initialData: () => {
      //   return {
      //     data: {
      //       library,
      //     },
      //   };
      // },
      // staleTime: 120000,
      refetchOnMount: "always",
      keepPreviousData: true,
      // refetchOnWindowFocus: false,
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

      <div>
        {/* <Spinner /> */}
        <Skeleton className={"skeleton skeleton-bg"} />
        <Skeleton className={"skeleton skeleton-bg"} />
        <Skeleton animation="wave" className={"skeleton skeleton-bg"} />
        <Skeleton animation={false} className={"skeleton skeleton-bg"} />
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

  useEffect(() => {
    if (isSuccess) {
      if (data?.library) {
        initLibrary(data.library);
      }
    }
  }, [isSuccess, data, initLibrary]);

  if (isSuccess) {
    if (data?.library?.length > 0) {
      content = (
        <MusicShelf
          refetchLibrary={refetch}
          removeFromFavouritesHandler={removeFromFavouritesHandler}
          isLibrary={true}
          isRowMusicShelf={true}
          disableCarousel={true}
          list={data.library}
          title={<p className="mg-b-3 link-large">Your library</p>}
          isTitleComponent={<p className="mg-b-3 link-large">Your library</p>}
          rawData={true}
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

export default /*memo*/ Favourites;
