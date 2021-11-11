import React, { useState } from "react";
import Header from "./Header";
import AppRouter from './Router';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../style/app.scss';
import { authService } from "../fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setuserObj] = useState("");
  return (
    <div>
      <header>
        <Header isLoggedIn={isLoggedIn} userObj={userObj}/>
      </header>
      <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}></AppRouter>
    </div>
  );
}

export default App;

