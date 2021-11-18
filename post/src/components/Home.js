
import '../style/home.scss';
import {Link} from "react-router-dom";
import React, { useState } from "react";
import Postfront from './Postfront';
import { authService } from '../fbase';
import ProfileBox from './ProfileBox';

export default function Home({isLoggedIn, upload, userObj}) {
    let [ likes, likes변경 ] = useState(0);
    
    return (
        <>
            <div class="container">
              <div class="row">
                <div class="col-lg-3 ">
                      
                  
                  <div className="profilebox">{/*프로필 박스(login이나 회원가입하면 로그인이나 회원가입 컴포넌트에서 profilefront컴포넌트로 전환)*/}
                    <ProfileBox isLoggedIn={isLoggedIn} userObj={userObj}/>
                  </div>
                  
                  <div className="categorybox" id="categorysup">  
                    <span>Categories</span>
                    <p></p>
                    
                    <button type="button" class="btn btn-secondary">전체 글</button>
                    <p></p>
                    <div className="dropdowns">
                      <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Frontend
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" href="#">HTML</a></li>
                          <li><a class="dropdown-item" href="#">CSS</a></li>
                          <li><a class="dropdown-item" href="#">JS</a></li>
                        </ul>
                      </div>
                      <p></p>
                      <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Backend
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" href="#">Firebase</a></li>
                        </ul>
                      </div>

                    </div>
                    
                    
                  </div>                                       
                </div>
                <div class="col-lg-9">
                    <div className="rightpostarea">
                      <div>
                        <Postfront upload={upload} isLoggedin={isLoggedIn}/>
                      </div>
                      {/*<div className="rightpostbox">
                            <div className="profilecircle"></div>
                            <div className="time"></div>
                            <div className="title"></div>
                            <div className="passage"></div>
                            <div className="postimg"></div>
                            <div className="likes"></div>   
    </div>*/}
                        <div className="movepage">
                          <nav aria-label="Page navigation example">
                            <ul class="pagination">
                              <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                  <span aria-hidden="true">&laquo;</span>
                                  <span class="sr-only"></span>
                                </a>
                              </li>
                              <li class="page-item"><a class="page-link" href="#">1</a></li>
                              <li class="page-item"><a class="page-link" href="#">2</a></li>
                              <li class="page-item"><a class="page-link" href="#">3</a></li>
                              <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                  <span aria-hidden="true">&raquo;</span>
                                  <span class="sr-only"></span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                    </div>
                </div>
              </div>    
            </div>
                      
                      
                      
        </>          
    );
}