
import '../style/home.scss';
import {Link} from "react-router-dom";
import React, { useState } from "react";
import Post from './Post';
export default function Home({upload}) {
    let [ likes, likes변경 ] = useState(0);
    return (
        <>
          
            
            <div class="container">
              <div class="row">
                <div class="col-2">
                  <div class="container">
                    <div class="col">
                      <div class="row-4">
                        <div className="sidebox1">
                          <div className="loginbox">로그인하면 프로필 박스로 바뀌게</div>
                          <div className="writebox"><Link to="/write">글쓰기</Link></div>
                        </div> 
                      </div>
                      <div class="row-4">
                        <div className="sidebox2">
                          <div className="all">전체 글</div>
                          <ul className="frontend">frontend
                            <ol className="html">html</ol>
                            <ol className="css">css</ol>
                            <ol className="js">js</ol>                         
                          </ul>
                          <ul className="backend">backend<ol className="firebase">firebase</ol></ul>
                        </div>
                      </div>
                    </div>    
                  </div>                     
                </div>
                <div class="col-10">
                    <div className="rightpostarea">
                      <div>
                          <Post upload={upload}/>
                      </div>
                      <div className="rightpostbox">
                            <div className="profilecircle"></div>
                            <div className="time"></div>
                            <div className="title"></div>
                            <div className="passage"></div>
                            <div className="postimg"></div>
                            <div className="likes"></div>   
                      </div>
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