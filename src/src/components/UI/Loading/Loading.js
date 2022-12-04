import {useEffect, useState} from "react";
import ReactDOM from "react-dom";

// function Loading(className) {
//   return (
//     <div className={[styles["loading"], className].join(" ")}>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//     </div>
//   );
// }

// export default Loading;

import LinearProgress from "@mui/material/LinearProgress";

export default function LinearDeterminate({proc = 10, createPortal = true}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        // if (oldProgress === 100) {
        //   return 0;
        // }
        if (oldProgress >= 90) {
          return 90;
        }

        const diff = Math.random() * proc;
        return Math.min(oldProgress + diff, 90);
      });
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, [proc]);

  if (createPortal) {
    return ReactDOM.createPortal(
      <div
        className="fixed-top"
        // style={{color: "rgb(91, 0, 252)"}}
      >
        <LinearProgress
          variant="determinate"
          value={progress}
          // color="inherit"
          style={{height: "6.5px"}}
        />
      </div>,
      // <div className="fixed-top" style={{color: "rgb(91, 0, 252)"}}>
      //   <LinearProgress
      //     color="inherit"
      //     style={{height: "9px", backgroundColor: "#ccc"}}
      //   />
      // </div>
      document.getElementById("overlays")
    );
  } else {
    return (
      <div
        className="fixed-top"
        // style={{color: "rgb(91, 0, 252)"}}
      >
        <LinearProgress
          variant="determinate"
          value={progress}
          // color="inherit"
          style={{height: "6.5px"}}
        />
      </div>
    );
  }
}
