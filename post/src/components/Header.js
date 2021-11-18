import React from "react";
import { useHistory } from "react-router";
import { authService } from "../fbase";
import {Link, Switch} from "react-router-dom";
import '../style/header.scss';

function Header({isLoggedIn}) {

  const history = useHistory();
  const onLogOutClick = () => {
        authService.signOut();
        alert("로그아웃 되었습니다")
        history.push("/");
  }
        
  return(
          <div class="header">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <h1><Link to="/home">Insert Post</Link></h1></a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <form className=" d-flex w-50">
                  <input className="form-control me-2" type="search" placeholder="입력하세요" aria-label="Search"></input>
                  <button className="btn btn-outline-success w-25" type="submit">Search</button>
                </form>
                </div>
              <div class="responsivelogin">
                {isLoggedIn 
                  ? 
                  <button type="button" class="btn btn-primary" style={{textDecoration: 'none'}} >Log out</button> 
                  : 
                  <Link to="/signup"style={{textDecoration: 'none'}}>
                    <button type="button" class="btn btn-primary">Log in</button>
                  </Link>
                }
              </div>
            </div>
          </nav>
        </div>
  );
};
 
export default Header;
 