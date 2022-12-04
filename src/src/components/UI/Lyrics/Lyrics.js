// https://soundrex.onrender.com/api/v1/lyrics/browse?id=MPLYt_pXdkrQjy7tN
import {Fragment, useContext} from "react";
import {useQuery} from "react-query";

import AuthContext from "../../../context/AuthContext";

import {fetcher, hasLoginError} from "../../../functions/requestFetcher";

import MessageRenderer from "../messageRenderer/messageRenderer";
import Spinner from "../Loading/Spinner";

import {getTextFromArr} from "../../../functions/getJsxFromArr";
import {deleteJunkCache} from "../../../react-query-client";

function LyricsTab({lyrics, footer}) {
  const formattedLyrics = lyrics && lyrics.replace(/\r?\n|\r/g, "<br>");
  const formattedFooter = footer && footer.replace(/\r?\n|\r/g, "<br>");
  return (
    <Fragment>
      {formattedLyrics && (
        <p
          className="lyrics text-small white "
          dangerouslySetInnerHTML={{
            __html: `${formattedLyrics}`,
          }}></p>
      )}

      {formattedFooter && <p className="mg-t-2">{formattedFooter}</p>}
    </Fragment>
  );
}

function Lyrics({browseId, logout}) {
  // useInfiniteScroll(() => {
  //   console.log("reached bottom");
  // });

  const {token} = useContext(AuthContext);

  const {data, error, isError, isSuccess} = useQuery(
    ["lyrics", browseId],
    () => {
      return fetcher(
        {
          url: `https://soundrex.onrender.com/api/v1/lyrics/browse?id=${browseId}`,
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
    },
    {
      // staleTime: 300000, // Ms = 5 min,
      staleTime: 300000,

      select: data => {
        deleteJunkCache("lyrics");

        return data;
      },
    }
  );

  let content = (
    <Fragment>
      <div className="flex-center mg-t-3">
        <Spinner />
      </div>
    </Fragment>
  );

  // if there is an error, immediately return it to Ui
  if (isError && error) {
    const hasLoginErr = hasLoginError(error);
    if (hasLoginErr) {
      logout();
    }

    content = (
      <p className="centered capitalize text-medium">No lyrics found.</p>
    );
  }

  if (isSuccess) {
    if (data?.list || data?.message?.messageRenderer) {
      const isMessageRenderer = data?.message?.messageRenderer;

      if (!isMessageRenderer) {
        // filter lyrics
        for (let item of data?.list) {
          if (item.hasLyrics) {
            const lyrics = item?.lyrics && getTextFromArr(item.lyrics);
            const footer = item?.footer && getTextFromArr(item.footer);
            content = <LyricsTab lyrics={lyrics} footer={footer} />;
          }
        }
      } else {
        // shoe message
        const message = data?.message;
        content = <MessageRenderer msg={message} />;
      }
    } else {
      content = (
        <p className="centered capitalize text-medium">No lyrics found.</p>
      );
    }
  }

  return <Fragment>{content}</Fragment>;
}

export default Lyrics;
