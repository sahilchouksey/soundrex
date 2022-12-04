// import styled, {css} from "styled-components";

// const Image = styled.img.attrs(({sources, src, ...props}) => ({
//   "aria-hidden": "false",
//   "draggable": "false",
//   "loading": "lazy",
//   "data-testid": "card-image",
//   "alt": props?.alt,
//   "className": props.className,
//   "referrerpolicy": "no-referrer",
// }))`

//   ${props => {
//     let width = 0;

//     return props?.sources?.reduce((p, thumb, i) => {
//       const prevWidth = width;

//       width = thumb?.width;

//       console.log("prev", p);
//       return (
//         p +
//         `
//       @media ${
//         prevWidth && i > 0 ? `(min-width: ${prevWidth + 1}px) and ` : ""
//       }(max-width:${thumb?.width}px) {
//          background-image: url("${thumb.url}")
//       }`
//       );
//     }, "");
//   }}

// background-image: ${props => props?.bgImg && css`url("${props.bgImg}")`}

// `;

import {useState} from "react";
import {getKey} from "../../../functions/uniqueSuffix";

function Image({
  className,
  alt,
  sources,
  pictureClassname,
  sourceClass,
  loadedClassName,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const changeIsLoaded = () => setIsLoaded(true);

  const img = (
    <img
      {...props}
      key={getKey(Math.random())}
      referrerPolicy="no-referrer"
      aria-hidden="false"
      draggable="false"
      loading="lazy"
      data-testid="card-image"
      alt={alt}
      className={`${className} ${isLoaded && loadedClassName}`}
      onLoad={changeIsLoaded}
    />
  );

  if (sources?.length > 0) {
    let width = 0;
    return (
      <picture className={pictureClassname}>
        {sources.map((thumb, i) => {
          const prevWidth = width;

          width = thumb?.width;
          return (
            <source
              key={getKey(thumb?.width + thumb?.height + i + thumb?.url)}
              className={sourceClass}
              media={`${
                prevWidth && i > 0 ? `(min-width: ${prevWidth + 1}px) and ` : ""
              }(max-width: ${thumb?.width}px)`}
              srcSet={thumb?.url}
            />
          );
        })}

        {img}
      </picture>
    );
  }

  return img;
}

export default Image;
