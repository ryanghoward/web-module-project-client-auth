import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Components
import Login from "./components/Login";
import Logout from "./components/Logout";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <h1>Friends Database</h1>
          <Link className='link' to='/login'>
            Login
          </Link>
          <br />
          <Link className='link' to='/friends'>
            Friends List
          </Link>
          <br />
          <Link className='link' to='/friends/add'>
            Add Friends
          </Link>
          <br />
          <Link className='link' to='/logout'>
            Logout
          </Link>
        </header>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/friends'>
          <FriendsList />
        </Route>
        <Route exact path='/friends/add'>
          <AddFriends />
        </Route>

        <PrivateRoute exact path='/friends' component={FriendsList} />
        <PrivateRoute exact path='/friends/add' component={AddFriends} />
        <PrivateRoute exact path='/logout' component={Logout} />
      </div>
    </Router>
  );
}

export default App;
