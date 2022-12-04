import axios from "axios";
import {Fragment, memo, useEffect, useState} from "react";
import {Link, Redirect} from "react-router-dom";

import styles from "./Signup.module.scss";

import {ReactComponent as Logo} from "../../assets/svgs/full-logo.svg";

import useInput from "../../hooks/useInput";
import Header from "../../components/Layout/Header/Header";
import Content from "../../components/Layout/Content/Content";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Loading from "../../components/UI/Loading/Spinner";

import {validateEmail} from "../../functions/auth";
import {validatePassword} from "../../functions/auth";
// import {validateProfileName} from "../../functions/auth";

import {toast} from "react-toastify";

const toastOptions = {
  // theme: "dark",
  theme: "colored",
};

const LoginPage = ({
  authLoading,
  editAuthConf,
  setAutoLogout,
  setAuthLoading,
  topBoxMessage,
  setTopBoxMessage,

  // initLibrary,
}) => {
  // const [topBoxMessage, setTopBoxMessage] = useState(null);

  const {
    value: emailValue,
    // isValid: isEmailValid,
    hasError: emailHasError,
    inputChangeHandler: emailInputChangeHanlder,
    inputBlurHandler: emailBlurChangeHandler,
    reset: resetEmailField,
  } = useInput(validateEmail);

  const {
    value: passwordValue,
    // isValid: isPasswordValid,
    hasError: passwordHasError,
    inputChangeHandler: passwordInputChangeHanlder,
    inputBlurHandler: passwordBlurChangeHandler,
    reset: resetPasswordField,
  } = useInput(validatePassword);

  const [showUserPassword, setShowUserPassword] = useState(false);
  const toggleShowPassword = () => setShowUserPassword(p => !p);
  const [formHasError, setFormHasError] = useState(false);
  const [loggedInSuccessfully, setLoggedInSuccessfully] = useState(false);
  const [timeoutFunc, setTimeoutFunc] = useState(null);
  // const [authLoading, setAuthLoading] = useState(false);
  // const [formSubmissionError, setFormSubmissionError] = useState(null);

  useEffect(() => {
    setTopBoxMessage(null);

    document.body.classList.add("mg-b-1");

    return () => {
      document.body.classList.remove("mg-b-1");
    };
  }, []);

  useEffect(() => {
    setFormHasError(false);
    const email = validateEmail(emailValue);

    const password = validatePassword(passwordValue);

    if (!email || !password) {
      setFormHasError(true);
    }

    if (email && password) {
      setFormHasError(false);
    }

    return () => {};
  }, [emailValue, passwordValue, setFormHasError]);

  useEffect(() => {
    return () => {
      if (typeof timeoutFunc === "function") {
        timeoutFunc();
      }
    };
  }, [timeoutFunc]);

  const loginFormSubmitHandler = async e => {
    e.preventDefault();
    setTopBoxMessage(null);

    try {
      if (!formHasError) {
        const formData = {
          email: emailValue,
          password: passwordValue,
        };

        resetEmailField();
        resetPasswordField();

        setAuthLoading(true);
        setLoggedInSuccessfully(false);
        // await toast.promise(
        const {data: loginData} = await axios.post(
          "https://soundrex.onrender.com/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            ...formData,
            // data: JSON.stringify(formData),
          }
        );
        // );

        if (!loginData.token) throw new Error("Login failed");

        setAuthLoading(false);

        // initLibrary(loginData.library);

        window.localStorage.setItem("token", loginData.token);
        window.localStorage.setItem("userId", loginData.userId);

        const remainingMiliseconds = 60 * 60 * 1000; // 60 * 60 * 1000

        const expiryDate = new Date(
          new Date().getTime() + remainingMiliseconds
        );

        window.localStorage.setItem("expiryDate", expiryDate.toString());

        setTimeoutFunc(setAutoLogout(remainingMiliseconds));

        setLoggedInSuccessfully(true);

        toast.success("Login successfully.", toastOptions);

        editAuthConf({
          isAuth: true,
          token: loginData.token,
          userId: loginData.userId,
          username: loginData.username,
        });
      }
    } catch (error) {
      setLoggedInSuccessfully(false);

      setAuthLoading(false);

      console.log(error);
      // toast.error(
      //   error?.message?.includes("Request failed with status code")
      //     ? "Oops! Something went wrong. Please try again"
      //     : error.message || "Oops! Something went wrong. Please try again",
      //   toastOptions
      // );

      editAuthConf({
        isAuth: false,
      });

      setTopBoxMessage(
        error?.response?.data?.message ||
          "Oops! Something went wrong. Please try again"
      );
    }
  };

  return (
    <Fragment>
      <Header style={{backgroundColor: "transparent"}}>
        <Logo className={styles.logo} />
      </Header>
      <Content className="flex-column flex-center">
        <p className=" text-large white">To continue, log in to Soundrex.</p>
        <form className="form mg-t-3" onSubmit={loginFormSubmitHandler}>
          {topBoxMessage && (
            <div className="error-msg-container mg-b-2">
              <p className="error-msg-text link-medium">{topBoxMessage}</p>
            </div>
          )}
          <Input
            required={true}
            id="email"
            label="Email address"
            placeholder="Email address"
            type="email"
            control="input"
            emptyAndHasError={emailValue?.length === 0 && emailHasError}
            emptyAndHasErrorMessage={"Please enter your Soundrex email address"}
            hasError={emailHasError}
            hasErrorMessage={"This email is invalid."}
            onChange={emailInputChangeHanlder}
            onBlur={emailBlurChangeHandler}
            value={emailValue}
            // valid={isEmailValid}
            // touched={this.state.signupForm["email"].touched}
          />

          <Input
            required={true}
            id="password"
            label="Password"
            placeholder="Password"
            type="password"
            control="input"
            emptyAndHasError={passwordValue?.length === 0 && passwordHasError}
            emptyAndHasErrorMessage={"Please enter your password."}
            hasError={passwordHasError}
            hasErrorMessage={"Your password is too short."}
            onChange={passwordInputChangeHanlder}
            onBlur={passwordBlurChangeHandler}
            value={passwordValue}
            // valid={isPasswordValid}
            isPassword={true}
            showPassword={showUserPassword}
            handleShowPassword={toggleShowPassword}
            // touched={this.state.signupForm["email"].touched}
          />

          <Button
            disabled={Boolean(formHasError) || authLoading}
            className={`link-medium ${styles["form__button"]} ${styles}`}
            id="submit"
            name="submit"
            type="submit">
            Login {authLoading && <Loading className="mg-l-1" />}
          </Button>
          <hr className={styles["signup_login-line"]} />
        </form>
        <p className={`link-medium ${styles["signup_login"]}`}>
          Don't have an account? .
        </p>
        <Link to="/signup" className={styles["signup_redirect-button-link"]}>
          <Button
            className={`${styles["form__button"]} ${styles["signup_redirect-button"]}`}>
            Sign up for soundrex
          </Button>
        </Link>
        {/* <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
      </Content>
      {/* <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}

      {loggedInSuccessfully && <Redirect to="/home" />}
    </Fragment>
  );
};

export default /*memo*/ LoginPage;
