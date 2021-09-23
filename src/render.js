import React from 'react';
import ReactDOM from 'react-dom';
import './normolize.css';
import './style.css';
import './fonts.css';
import './variables.css';
import App from './App';


let renderEntireTree = (appState) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={appState}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default renderEntireTree;


