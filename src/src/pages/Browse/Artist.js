import {Fragment, memo} from "react";
import {useQuery} from "react-query";
import {useParams, useLocation} from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

import {fetcher, hasLoginError} from "../../functions/requestFetcher";

import Loading from "../../components/UI/Loading/Loading";
import Spinner from "../../components/UI/Loading/Spinner";

import ArtistPage from "../../components/Browse/Artist/Artist";
import {deleteJunkCache} from "../../react-query-client";

function Artist({token, logout}) {
  const {browseId} = useParams();

  const location = useLocation();
  const params = new URLSearchParams(location.search).get("params");

  // const isAlbum = Boolean(browseId.startWith("MPREb"));
  // const isPlaylist = !isAlbum;

  const {data, error, isError, isSuccess, isFetching, isLoading} = useQuery(
    ["browse", browseId, params],
    () => {
      return fetcher(
        {
          url: `https://soundrex.onrender.com/api/v1/browse?id=${browseId}${
            params ? "&params=" + params : ""
          }`,
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

      // keepPreviousData: true,
      select: data => {
        deleteJunkCache("browse");

        return data;
      },
    }
  );

  let content;

  if (isFetching || isLoading) {
    content = (
      <Fragment>
        <div className="fixed-top flex-center">
          <Loading />
        </div>

        <div className="fixed-right">
          <Spinner thin />
        </div>

        <div>
          <div className="flex-align">
            <Skeleton
              className="skeleton skeleton-bg skeleton-circular"
              animation="wave"
              variant="circular"
            />

            <div className="flex-column full-hw mg-l-1">
              <Skeleton
                className="skeleton-bg"
                animation="wave"
                height={15}
                width="90%"
              />

              <Skeleton
                className="skeleton-bg mg-t-1"
                animation="wave"
                height={15}
                width="55%"
              />
            </div>
          </div>

          <div className="mg-t-2">
            <Skeleton className={"skeleton skeleton-bg"} />
            <Skeleton className={"skeleton skeleton-bg"} />
            <Skeleton animation="wave" className={"skeleton skeleton-bg"} />
            <Skeleton animation={false} className={"skeleton skeleton-bg"} />
          </div>
          {/* <Spinner /> */}
        </div>
      </Fragment>
    );
  }

  // if there is an error, immediately return it to Ui
  if (isError && error) {
    const hasLoginErr = hasLoginError(error);
    if (hasLoginErr) {
      logout();
    }
    content = <p className="centered capitalize text-medium">No data found.</p>;
  }

  if (isSuccess) {
    if (data?.contents || data?.header) {
      // let link = `${endpointType}/${el?.title?.navigate?.browseId}`;
      // if (typeof el?.title?.navigate === "string") link = el?.title?.navigate;

      content = <ArtistPage artistId={browseId} data={data} />;
    } else {
      content = (
        <p className="centered capitalize text-medium">No data found.</p>
      );
    }
  }

  return content;
}

export default /*memo*/ Artist;
