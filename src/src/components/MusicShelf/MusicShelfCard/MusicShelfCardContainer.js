import styles from "./MusicShelfCard.module.scss";
import styled from "styled-components";

const MusicShelfCardContainer = styled.div.attrs(props => ({
  // we can define props
  className: [styles["music-card-container"], props?.className].join(" "),
}))`
    width: ${props => props?.style?.width};
  `;

// function MusicShelfCardContainer(props) {
//   return (
//     <div
//       {...props}
//       className={[styles["music-card-container"], props?.className].join(" ")}>
//       {props.children}
//     </div>
//   );
// }

export default MusicShelfCardContainer;
