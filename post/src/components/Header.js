import React from "react";
import {Link, Switch} from "react-router-dom";
import '../style/header.scss';


const Header = ({isLoggedIn}) => (
        <div class="header">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <h1><Link to="/home">Insert Post</Link></h1></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                          
                </ul>
                <form className=" d-flex w-50">
                  <input className="form-control me-2" type="search" placeholder="입력하세요" aria-label="Search"></input>
                  <button className="btn btn-outline-success w-25" type="submit">Search</button>
                  <ul>
                    {isLoggedIn ? <Link to="/profile"style={{textDecoration: 'none'}}><button type="button" class="btn btn-primary">Log out</button></Link> : <Link to="/signup"style={{textDecoration: 'none'}}>
                      <button type="button" class="btn btn-primary">Log in</button>
                    </Link>}
                  </ul>
                  
                </form>              
                
              </div>
            </div>
          </nav>
      
          
        </div>
);
 
export default Header;
 