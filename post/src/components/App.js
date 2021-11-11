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
    <div>
      <header>
        <Header isLoggedIn={isLoggedIn} userObj={userObj}/>
      </header>
      
      <Routes>     
        <Route exact path="/"><Home isLoggedIn={isLoggedIn} userObj={userObj}/></Route>
        <Route path="/home"><Home isLoggedIn={isLoggedIn} userObj={userObj}/></Route>      
        <Route path="/read"><Read isLoggedIn={isLoggedIn} userObj={userObj}/></Route>
        <Route path="/write"><Write isLoggedIn={isLoggedIn} userObj={userObj}/></Route>
        <Route path="/login"><Login isLoggedIn={isLoggedIn} userObj={userObj}/></Route>
        <Route path="/signup"><Signup isLoggedIn={isLoggedIn} userObj={userObj}/></Route>
        <Route path="/profile">{<Profile userObj={userObj}/>}</Route>
        <Route path="/:id"><div>잘못들어옴</div></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;

