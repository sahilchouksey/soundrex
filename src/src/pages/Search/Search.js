import {Fragment, useState, useEffect, memo} from "react";
import {
  // Route, useHistory,
  useParams,
  useLocation,
} from "react-router-dom";
import {useQuery, useMutation} from "react-query";
import client, {deleteJunkCache} from "../../react-query-client";

// import useInfiniteScroll from "../../hooks/useInfiniteScroll";

// import InfiniteScroll from "react-infinite-scroll-component";

import InfiniteScroll from "react-infinite-scroller";
import Skeleton from "@mui/material/Skeleton";

import {fetcher, hasLoginError} from "../../functions/requestFetcher";

import Loading from "../../components/UI/Loading/Loading";
import Spinner from "../../components/UI/Loading/Spinner";
import SearchNavigation from "../../components/UI/SearchNavigation/SearchNavigation";
import MusicShelf from "../../components/MusicShelf/MusicShelf";

import {getTitleFromArr} from "../../functions/getJsxFromArr";
import {getKey} from "../../functions/uniqueSuffix";
// import {INSPECT_MAX_BYTES} from "buffer";
// import {Button} from "@mui/material";

const SEARCH_NAVIGATION = [
  {text: "Songs"},
  {text: "Albums"},
  {text: "Playlists"},
  {text: "Artists"},
];

const searchQueryUrl = (searchQuery, searchTerm, rawParams) => {
  let url = `https://soundrex.onrender.com/api/v1/search?query=${searchQuery}`;
  if (searchTerm) {
    url = url + `&params=${searchTerm.toUpperCase()}`;
  }
  if (rawParams) {
    url = url + `&rawParams=${rawParams}`;
  }
  return url;
};
const nextResultsUrl = ({ctoken, continuation, itct}) =>
  `https://soundrex.onrender.com/api/v1/search_next?ctoken=${ctoken}&continuation=${continuation}&type=next&itct=${itct}`;

const fetchSearchResults = (searchQuery, searchTerm, params, token) => {
  return fetcher(
    {
      url: searchQueryUrl(searchQuery, searchTerm, params),
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
};

const fetchNextSearchResults = (data, token) => {
  return fetcher(
    {
      url: nextResultsUrl(data),
      method: "GET",
      headers: {
        authorization: "Bearer " + token,
      },
    },
    false,
    false,
    false,
    null,
    null
    // () => logout()
  );
};

function Search({rootElementRef, token, logout}) {
  // useInfiniteScroll(() => {
  // });

  const location = useLocation();
  const params = new URLSearchParams(location.search).get("params");

  let {searchQuery, searchTerm} = useParams();
  searchTerm = searchTerm || "songs";

  searchQuery = decodeURIComponent(searchQuery.trim());

  // const LastShelfRef = useRef(null);
  // const ListParentRef = useRef(null);

  // setting current nav-active && setting navigate url
  SEARCH_NAVIGATION.forEach(e => {
    e.selected = false;
    if (e.text.toLowerCase() === searchTerm.toLowerCase()) {
      e.selected = true;
    }
    e.navigate = `/search/${searchQuery}/${e.text.toLowerCase()}`;
    // if (params) e.navigate += `?params=${params}`;
  });

  const getSearchPageUrl = (query, params) => {
    let url = `/search/${query}/${searchTerm}`;
    if (params) url += `?params=${params}`;
    return url;
  };

  // handle invalid search queries

  useEffect(() => {
    rootElementRef?.current &&
      rootElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [rootElementRef]);

  const {data, error, isError, isSuccess, isFetching, isLoading} = useQuery(
    ["search", searchQuery, searchTerm, params],
    fetchSearchResults.bind(null, searchQuery, searchTerm, params, token),
    {
      // staleTime: 180000, // 3min
      staleTime: 300000,

      // keepPreviousData: true,
      select: data => {
        deleteJunkCache("search");

        return data;
      },
    }
  );

  const nextSearchResultsMutation = useMutation(
    params => fetchNextSearchResults(params, token),
    {
      onSuccess: data => {
        client.setQueryData(
          ["search", searchQuery, searchTerm, params],
          oldData => {
            if (oldData?.list && data?.list) {
              // remove duplicates
              const lastPageIndex = oldData.list.length - 1;
              const lastPageList = oldData.list[lastPageIndex]?.list;
              if (lastPageList) {
                // * bad for UX
                // for (let i = 0; i < lastPageList.length; i++) {
                //   const lastPageListItem = lastPageList[i];
                //   const id = lastPageListItem?.videoId
                //     ? "videoId"
                //     : lastPageListItem?.browseId
                //     ? "browseId"
                //     : null;
                //   if (id) {
                //     for (let newDataListItem of data.list) {
                //       if (lastPageListItem[id] === newDataListItem[id]) {
                //         lastPageList.splice(i, 1);
                //       }
                //     }
                //   }
                // }

                // testing
                for (let i = 0; i < lastPageList.length; i++) {
                  const lastPageListItem = lastPageList[i];
                  const id = lastPageListItem?.videoId
                    ? "videoId"
                    : lastPageListItem?.browseId
                    ? "browseId"
                    : null;
                  if (id) {
                    // filtered list
                    data.list = data.list.filter((item, index) => {
                      return (
                        index ===
                        data.list.findIndex(i => {
                          return i[id] === item[id];
                        })
                      );
                    });

                    for (let j = 0; j < data.list.length; j++) {
                      let newDataListItem = data.list[j];

                      if (lastPageListItem[id] === newDataListItem[id]) {
                        data.list.splice(j, 1);
                      }
                    }
                  }
                }
              }

              oldData.list.push(data);
              return {
                ...oldData,
              };
            }
          }
        );
      },
      onError: err => {
        const hasLoginErr = hasLoginError(error);
        if (hasLoginErr) {
          logout();
        }
        console.log(err);
      },
    }
  );

  const nextResults = async () => {
    if (data?.list && data?.list?.length < 50 && !loadingNextResults) {
      const lastPage = data.list.length - 1;
      const hasNextPage = data.list[lastPage]?.next;

      if (hasNextPage) {
        // setIsFetchingNextPage(false);
        setLoadingNextResults(true);
        await nextSearchResultsMutation.mutateAsync(hasNextPage);
        setLoadingNextResults(false);
      }
    }
  };
  const [loadingNextResults, setLoadingNextResults] = useState(false);

  // const [isFetchingNextPage, setIsFetchingNextPage] =
  //   useInfiniteScroll(nextResults);

  let content;

  if (isFetching || isLoading) {
    content = (
      <div key={getKey(Math.random())}>
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
          <Skeleton className={"skeleton skeleton-bg"} />
          <Skeleton animation="wave" className={"skeleton skeleton-bg"} />
          <Skeleton animation="wave" className={"skeleton skeleton-bg"} />
          <Skeleton animation="wave" className={"skeleton skeleton-bg"} />
          <Skeleton animation="wave" className={"skeleton skeleton-bg"} />
          <Skeleton animation={false} className={"skeleton skeleton-bg"} />
          <Skeleton animation={false} className={"skeleton skeleton-bg"} />
          <Skeleton animation={false} className={"skeleton skeleton-bg"} />
        </div>
      </div>
    );
  }

  // if there is an error, immediately return it to Ui
  if (isError && error) {
    const hasLoginErr = hasLoginError(error);
    if (hasLoginErr) {
      logout();
    }
    content = (
      <p
        key={getKey(Math.random())}
        className="centered capitalize text-medium">
        No results found.
      </p>
    );
  }

  if (isSuccess) {
    if (data?.list) {
      let index = 0;
      content = [];
      for (let item of data?.list) {
        const title = item?.title;

        let newTitle = title;
        if (title?.text) newTitle = title?.text;
        if (typeof title !== "string" && title?.length > 0)
          newTitle = getTitleFromArr(title);

        // let link = `${endpointType}/${title?.navigate?.browseId}`;
        // if (typeof title?.navigate === "string")
        // if (typeof title?.navigate === "string") link = title?.navigate;

        // const lastPage = data.list.length - 1;
        // const hasNextPage = data.list[lastPage]?.next;

        content.push(
          <MusicShelf
            // ref={LastShelfRef}
            getUrl={getSearchPageUrl}
            isRowMusicShelf={item?.list}
            disableCarousel={true}
            list={item?.list}
            key={getKey(title?.text + index + title?.navigate?.browseId)}
            title={
              newTitle && newTitle.includes("_")
                ? newTitle.split("_").join(" ")
                : newTitle
            }
            // navigate={link}
          />
        );

        index++;
      }
    }
  }

  // const [sentryRef] = useInfiniteScroll({
  //   loading: loadingNextResults,
  //   hasNextPage: true,
  //   onLoadMore: nextResults,
  //   // When there is an error, we stop infinite loading.
  //   // It can be reactivated by setting "error" state as undefined.
  //   disabled: !!error,
  //   // `rootMargin` is passed to `IntersectionObserver`.
  //   // We can use it to trigger 'onLoadMore' when the sentry comes near to become
  //   // visible, instead of becoming fully visible on the screen.
  //   rootMargin: "0px 0px 400px 0px",
  // });

  return (
    <Fragment>
      <SearchNavigation navItems={SEARCH_NAVIGATION} />
      <div className="mg-t-2" id="search-content">
        {/* <InfiniteScroll
            dataLength={data?.list?.length?.length || 20}
            next={nextResults}
            hasMore={true}
            loader={<h4>Loading...</h4>}> */}
        <InfiniteScroll
          pageStart={0}
          threshold={100}
          loadMore={nextResults}
          hasMore={true || false}
          loader={
            <span></span>
            // <div className="w-100 flex-center mg-t-3">
            //   <Spinner />
            // </div>
          }
          // useWindow={false}
          // getScrollParent={() => ListParentRef.current}
        >
          {/* {items} // <-- This is the content you want to load */}
          {content}
        </InfiniteScroll>
        {/* <Button onClick={nextResults}>Fetch more</Button> */}
        {/* </InfiniteScroll> */}
      </div>

      {loadingNextResults && (
        <div className="w-100 flex-center mg-t-3">
          <Spinner />
        </div>
      )}
      {/* <button onClick={nextResults}>More</button> */}
    </Fragment>
  );
}

export default /*memo*/ Search;
