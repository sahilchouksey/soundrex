import {render} from "react-dom";
import Root from "./App";
import "./styles/index.scss";
import {QueryClientProvider} from "react-query";
// import {ReactQueryDevtools} from "react-query/devtools";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import client from "./react-query-client";
import {BrowserRouter} from "react-router-dom";

import AuthContextProvider from "./context/AuthContextProvider";

import "react-toastify/dist/ReactToastify.css";

const element = document.getElementById("root");
render(
  <QueryClientProvider client={client}>
    <AuthContextProvider>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </AuthContextProvider>
    {/* <ReactQueryDevtools /> */}
  </QueryClientProvider>,
  element
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
