import Button from "../Button";
import styles from "./ShowMoreButton.module.scss";

function ShowMoreButton({onClick, isShowingMoreContent, className, ...props}) {
  return (
    <Button
      onClick={onClick}
      className={[styles["show-more"], className].join(" ")}>
      {isShowingMoreContent ? "less" : "more"}
    </Button>
  );
}

export default ShowMoreButton;
