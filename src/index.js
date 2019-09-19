import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter,Switch, Redirect } from "react-router-dom";
// import './index.css';
import HomePage from './pages/HomePage/HomePage';
import * as serviceWorker from './serviceWorker';
// import { Provider } from "react-redux";

ReactDOM.render(
    <HashRouter>
        {/* <Provider store={store}>
           <HomePage />
        </Provider> */}
        <Route path="/" component={HomePage} />
    </HashRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
