import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/sidebar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import Feed from "./components/feed/Feed";
import Friends from "./components/friends/Friends";


function App() {
    return (
        <BrowserRouter>
            <div className="App wrapper">
                <Header/>
                <Sidebar/>
                <div className="page">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/feed" component={Feed}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/friends" component={Friends}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
