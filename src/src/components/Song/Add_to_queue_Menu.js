import {useCallback, useContext, useEffect} from "react";
import {useMutation, useQuery} from "react-query";
import {fetcher} from "../../functions/requestFetcher";
import MenuItem from "@mui/material/MenuItem";

import context from "../../context/context";
import Spinner from "../UI/Loading/Spinner";
import {toast} from "react-toastify";
import PlayButton from "../UI/Button/PlayButton/PlayButton";

const Add_to_queue = ({
  add_next = true,
  service,
  children,
  msg,
  onClick,
  // token,
  playButton,
  onClickPlayButton,
  playButtonClass,
  playButtonIconClass,
  ...props
}) => {
  const {addToEndOfNextSongs, addToNextOfNextSongs} = useContext(context);

  const isVideo = service?.isVideo;
  const isPlaylist = service?.isPlaylist;

  const key = isVideo ? "videoId" : "playlistId";

  let reqBody = service?.queueTarget;
  const reqData = service?.queueTarget?.[key];

  if (isVideo) {
    reqBody = {
      videoIds: typeof reqData === "object" ? reqData : [reqData],
    };
  }

  // const params = service?.queueTarget?.params || "";
  /*
  const {data, error, isError, isSuccess, isFetching, isLoading, refetch} =
    useQuery(
      ["get_queue", `${reqData}`],
      () => {
        return fetcher(
          {
            url: "https://soundrex.onrender.com/api/v1/audio/get_queue",
            method: "POST",
            // headers: {
            //   // authorization: "Bearer " + token,
            // },
            data: reqBody,
          },
          false,
          false,
          true,
          "Oops, something went wrong...",
          {
            autoClose: 2000,
            theme: "colored",
          }
        );
      },
      {
        // staleTime: 300000, // 5min
        enabled: false,
      }
    );

  useEffect(() => {
    if (data?.queue && isSuccess) {
      if (add_next) {
        addToNextOfNextSongs(data.queue);
        toast(msg, {
          autoClose: 2000,
          type: "success",
          theme: "dark",
        });
      } else {
        addToEndOfNextSongs(data.queue);
        toast(msg, {
          autoClose: 2000,
          type: "success",
          theme: "dark",
        });
      }
    }
  }, [isSuccess, reqData, addToNextOfNextSongs, addToEndOfNextSongs]);

  */
  // const onServiceClick = async () => {
  //   refetch();
  // };

  const getQueue = useMutation(
    () =>
      fetcher(
        {
          url: "https://soundrex.onrender.com/api/v1/audio/get_queue",
          method: "POST",
          // headers: {
          //   // authorization: "Bearer " + token,
          // },
          data: reqBody,
        },
        false,
        false,
        true,
        "Oops, something went wrong...",
        {
          autoClose: 2000,
          theme: "colored",
        }
      ),
    {
      onSuccess: data => {
        if (data?.queue) {
          if (add_next) {
            addToNextOfNextSongs(data.queue);
            toast(msg, {
              autoClose: 2000,
              type: "success",
              theme: "dark",
              icon: false,
            });
          } else {
            addToEndOfNextSongs(data.queue);
            toast(`${msg.split(" ")[0]} added to queue`, {
              autoClose: 2000,
              type: "success",
              theme: "dark",
              icon: false,
            });
          }
        }
      },
      onError: error => {
        console.log(error);
      },
    }
  );

  const onMenuServiceClick = () => {
    getQueue.mutate();
  };

  // if (playButton) {
  //   return (
  //     <PlayButton
  //       onClick={() => {
  //         onClickPlayButton();
  //         onMenuServiceClick();
  //       }}
  //       // {...playButton}
  //       className={playButtonClass}
  //       icon={playButtonIconClass}
  //     />
  //   );
  // }

  return (
    <MenuItem
      {...props}
      onClick={() => {
        onClick && onClick();
        onMenuServiceClick();
      }}>
      {children}
    </MenuItem>
  );
};

export default Add_to_queue;
