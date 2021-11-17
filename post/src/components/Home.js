
import '../style/home.scss';
import {Link} from "react-router-dom";
import React, { useState } from "react";
import Post from './Post';
import Postfront from './Postfront';
import { authService } from '../fbase';
import ProfileBox from './ProfileBox';

export default function Home({isLoggedIn, upload}) {
    let [ likes, likes변경 ] = useState(0); 
    return (
        <>
          
            
            <div class="container">
              <div class="row">
                <div class="col-lg-3 ">    
                  <div className="loginprofilebox">
                    <div className="profilebox">{/*프로필 박스(login이나 회원가입하면 로그인이나 회원가입 컴포넌트에서 profilefront컴포넌트로 전환)*/}
                      <ProfileBox isLoggedIn={isLoggedIn}/>
                      {/* <a><span className="name">{user.displayName}</span>님 안녕하세요</a> */}
                    </div>
                    {/* <div className="writebutton">
                        <Link to="/write"style={{textDecoration: 'none',color:'white'}}>글쓰기</Link>
                    </div> */}
                  </div>
                  <div className="categorybox">  
                    categories
                    
                    <div className="all">전체 글</div>
                    <ul className="frontend">frontend
                      <ol className="html">html</ol>
                      <ol className="css">css</ol>
                      <ol className="js">js</ol>                         
                    </ul>
                    <ul className="backend">backend<ol className="firebase">firebase</ol></ul>
                  </div>                                       
                </div>
                <div class="col-lg-9 col-md-12">
                    <div className="rightpostarea">
                      <div>
                        <Postfront upload={upload}/>
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