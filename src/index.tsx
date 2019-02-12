import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import store, { sagaMiddleware } from "./store/configure-store";
import rootSaga from "./middleware/sagas";
import { Store } from "redux";
import Root from "./containers/Root";

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
