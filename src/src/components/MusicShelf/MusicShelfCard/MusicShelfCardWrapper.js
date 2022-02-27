import styles from "./MusicShelfCardWrapper.module.scss";

function MusicShelfCardWrapper(props) {
  return (
    <div className={`${styles["musicCardWrapper"]} flex-center`}>
      {props.children}
    </div>
  );
}

export default MusicShelfCardWrapper;
