import React, { useState } from "react";
import Header from "./Header";

import {BrowserRouter, Route, Switch ,Routes} from 'react-router-dom';
import '../style/app.scss';
import { authService } from "../fbase";
import Login from './Login';
import Signup from './Signup';
import Read from './Read';
import Write from './Write';
import Home from './Home';
import Profile from './Profile';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setuserObj] = useState("");
  return (
    <>
      <header>
        <Header isLoggedIn={isLoggedIn} userObj={userObj}/>
      </header>
      Home     
      <div className="categories">
        <a class="btn btn-primary" href="#" role="button">Link</a>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button class="dropdown-item" type="button">Action</button></li>
            <li><button class="dropdown-item" type="button">Another action</button></li>
            <li><button class="dropdown-item" type="button">Something else here</button></li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button class="dropdown-item" type="button">Action</button></li>
            <li><button class="dropdown-item" type="button">Another action</button></li>
            <li><button class="dropdown-item" type="button">Something else here</button></li>
          </ul>
        </div>
        
      </div>
      <div className="postsection">
        <div className="postbox">
          <div className="writer">
            <div className="writerimg"></div>
            <div className="writername"></div>
          </div>
          <div className="writtentime"></div>
          <div className="posttitle"></div>
          <div className="postpassage"></div>
          <div className="postimg"></div>
          <div className="likes"></div>
        </div>
        
      </div>
      
      <Routes>
        <Route path="/signup" component={Signup}></Route>
      <Routes/>
          
             
    </>
  );
}

export default App;

