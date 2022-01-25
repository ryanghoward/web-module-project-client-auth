import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Login from "./components/Login";

function App() {
  return (
    <div className='App'>
      <h2>Client Auth Project</h2>
      <Route exact path='/'>
        <Login />
      </Route>
    </div>
  );
}

export default App;
