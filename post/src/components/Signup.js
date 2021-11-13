import React from 'react'
import { Link } from "react-router-dom";
import '../style/signup.scss';

export default function Signup(){
    return(
        
        <>
          <div className="signupbox">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">회원가입</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <Link to="/login">로그인</Link>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>  
            </nav>    
            <form>
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3"></input>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3"></input>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword3"></input>
                </div>
              </div>
              
              
           
              <button type="submit" class="btn btn-primary">Sign up</button>
            </form>
  
          </div>
          
          
        </>
    );
}
      