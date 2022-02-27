function Icon({className, svg, alt, ...props}) {
  return (
    <img
      className={className}
      src={`../../../assets/svgs/${svg}.svg`}
      alt={alt}
      {...props}
    />
  );
}

export default Icon;
