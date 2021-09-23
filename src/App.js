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
                        render={() => <Profile appState={props.appState.profile}/>}/>
                    <Route path="/feed" component={Feed}/>
                    <Route
                        path="/dialogs"
                        render={() => <Dialogs appState={props.appState.dialogs} />}
                    />
                    <Route path="/friends" component={Friends}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
