// IMPORTS

// React
import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./App";

// Redux
import allReducers from "./redux/reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Google analytics
import ReactGA from "react-ga";

// Redux
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Google analytics
ReactGA.initialize("UA-217162169-1");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
