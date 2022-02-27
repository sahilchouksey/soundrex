import Spinner from "../Loading/Spinner";

export default function FullScreenPopup({
  className,
  transparent,
  children,
  loadingText,
  ...props
}) {
  return (
    <div
      className={`full-hw fixed-center ${
        transparent && "transparent-bg"
      }  ${className}`}
      {...props}>
      {loadingText && (
        <p thin className="fixed-center" style={{top: "45% !important"}}>
          Loading...
        </p>
      )}
      {children}
    </div>
  );
}
