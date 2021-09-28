import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/sidebar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import Feed from "./components/feed/Feed";
import Friends from "./components/friends/Friends";


function App(props) {

    return (
        <BrowserRouter>
            <div className="App wrapper">
                <Header/>
                <Sidebar/>
                <div className="page">
                    <Route
                        path="/profile"
                        render={() =>
                            <Profile store={props.store}/>
                        }
                    />
                    <Route path="/feed" component={Feed}/>
                    <Route
                        path="/dialogs"
                        render={() =>
                            <Dialogs
                                state={props.state.dialogs}
                                dispatch={props.dispatch}
                            />}
                    />
                    <Route path="/friends" component={Friends}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
