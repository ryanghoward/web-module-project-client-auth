import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Components
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <h1>Friends Database</h1>
          <Link className='link' to='/login'>
            Login
          </Link>
          <Link className='link' to='/friends'>
            Friends List
          </Link>
          <Link className='link' to='/friends/add'>
            Add Friends
          </Link>
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
      </div>
    </Router>
  );
}

export default App;
