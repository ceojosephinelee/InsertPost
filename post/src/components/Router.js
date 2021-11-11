/*import React from 'react'
import {HashRouter as Router, Routes, Link, Route, Switch} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Read from './Read';
import Write from './Write';
import Home from './Home';
import Profile from './Profile';
const AppRouter = ({isLoggedIn, userObj}) => {
    return (
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>      
        <Route path="/read" element={<Read/>}>read</Route>
        <Route path="/write" element={<Write/>}>write</Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/profile">{<Profile userObj={userObj}/>}</Route>
        <Route path="/:id"><div>잘못들어옴</div></Route>
      </Routes>
 
    );
};

export default AppRouter;