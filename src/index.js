import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import store from "./redux/redux-store";
import reportWebVitals from './reportWebVitals';
import './normolize.css';
import './style.css';
import './fonts.css';
import './variables.css';
import App from './App';

ReactDOM.render(

        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
