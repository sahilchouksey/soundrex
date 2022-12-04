import {forwardRef} from "react";
import {Link} from "react-router-dom";

import styles from "./Button.module.scss";

const Button = forwardRef(
  (
    {
      type,
      link,
      onClick,
      className,
      primary,
      secondary,
      tertiary,
      standardAnimate,
      children,
      ...props
    },
    ref
  ) => {
    const classes = [styles["button"], className];

    if (primary) classes.push(styles["button-primary"]);
    if (secondary) classes.push(styles["button-secondary"]);
    if (tertiary) classes.push(styles["button-tertiary"]);
    if (standardAnimate) classes.push(styles["button-animate"]);

    return !link ? (
      <button
        ref={ref}
        {...props}
        className={classes.join(" ")}
        onClick={onClick}
        //   disabled={disabled || loading}
        type={type || "button"}>
        {/* {loading ? "Loading..." : children} */}
        {children}
      </button>
    ) : (
      <Link {...props} className={classes.join(" ")} to={link}>
        {children}
      </Link>
    );
  }
);

export default Button;
/* className={[
            'button',
            `button--${props.design}`,
            `button--${props.mode}`
          ].join(' ')} */
