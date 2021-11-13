
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AppRouter from "./Router";
import { authService } from "../fbase";
import '../style/app.scss';


function App() {
  const [init, setInit] = useState(false); //초기화여부 확인
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setuserObj] = useState("");
  const [upload, setUpload] = useState(true);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user){
        setIsLoggedIn(true);
        setuserObj(user.displayName);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <div>
     <header>
       <Header isLoggedIn={isLoggedIn} userObj={userObj}/>
     </header>
    { init ?
      <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} upload={upload}></AppRouter>
      : "Initialzing..."
    }
    </div>


  );
}

export default App;

