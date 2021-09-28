import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
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
            <App
                store={store}
                state={state}
                dispatch={store.dispatch}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    renderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
