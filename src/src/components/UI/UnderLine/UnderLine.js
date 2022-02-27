const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

function UnderLine({randomColor, className, ...props}) {
  return (
    <div
      {...props}
      style={randomColor && {backgroundColor: randColor()}}
      className={["underline", className].join(" ")}></div>
  );
}

export default UnderLine;
