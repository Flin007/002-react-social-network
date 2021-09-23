import reportWebVitals from './reportWebVitals';
import appState, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './normolize.css';
import './style.css';
import './fonts.css';
import './variables.css';
import App from './App';


let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={appState}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(appState);

subscribe(renderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
