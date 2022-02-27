import React, {memo} from "react";

import {ReactComponent as EyeIcon} from "../../../assets/svgs/eye.svg";
import {ReactComponent as EyeSlashIcon} from "../../../assets/svgs/eye-slash.svg";

import styles from "./Input.module.scss";

const Input = React.forwardRef(
  (
    {
      label,
      id,
      placeholder,
      bottomText,
      isPassword,
      handleShowPassword,
      showPassword,
      emptyAndHasError,
      emptyAndHasErrorMessage,
      hasError,
      hasErrorMessage,
      ...input
    },
    ref
  ) => {
    return (
      <div className={styles["form__group"]}>
        <label className={`link-medium ${styles["form__label"]}`} htmlFor={id}>
          {label}
        </label>
        {isPassword ? (
          <div className="flex-align relative">
            <input
              className={`${styles["form__input"]} ${
                emptyAndHasError || hasError
                  ? styles["form__input-red-box"]
                  : ""
              }`}
              placeholder={placeholder}
              id={id}
              {...input}
              type={showPassword ? "text" : "password"}
              ref={ref}
            />
            {showPassword ? (
              <EyeSlashIcon
                className={styles["form__password-icon"]}
                onClick={handleShowPassword}
              />
            ) : (
              <EyeIcon
                className={styles["form__password-icon"]}
                onClick={handleShowPassword}
              />
            )}
          </div>
        ) : (
          <input
            className={`${styles["form__input"]} ${
              emptyAndHasError || hasError ? styles["form__input-red-box"] : ""
            }`}
            placeholder={placeholder}
            id={id}
            {...input}
            ref={ref}
          />
        )}

        <div className={styles["form__label-bottom-container"]}>
          {emptyAndHasError && (
            <label
              className={`${styles["form__label-bottom"]} ${styles["form__label-red"]}`}
              htmlFor={id}>
              {emptyAndHasErrorMessage}
            </label>
          )}

          {!emptyAndHasError && hasError && (
            <label
              className={`${styles["form__label-bottom"]} ${styles["form__label-red"]}`}
              htmlFor={id}>
              {hasErrorMessage}
            </label>
          )}

          {!emptyAndHasError && !hasError && bottomText && (
            <label className={styles["form__label-bottom"]} htmlFor={id}>
              {bottomText}
            </label>
          )}
        </div>
      </div>
    );
  }
);

export default /*memo*/ Input;
