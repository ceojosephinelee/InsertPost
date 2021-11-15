
import React, { useState } from "react";
import '../style/postfront.scss';
import {Link} from "react-router-dom";


export default function Postfront() {
  let [ 따봉, 따봉변경 ] = useState(0);
    return (
        <>
          <div className="postbox">
            
              <div class="card" >
                <div class="row g-0">
                  
                  <div class="col-md-8">
                    <div class="card-body">
                      <Link to="/read" style={{textDecoration: 'none'}}>
                        <h5 class="card-title">제목</h5></Link>
                      <Link to="/read" style={{textDecoration: 'none'}}>  
                      <p class="card-text">여기는 글 내용</p></Link>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      <p> 공감 <span onClick={ ()=>{ 따봉변경(따봉 + 1) } } >👍</span> { 따봉 }</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="사진"></img>
                  </div>
                </div>
              </div>
            

          </div>

            
        </>
    )
}