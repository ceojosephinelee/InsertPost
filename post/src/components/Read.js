import React, { useState } from "react";
import '../style/read.scss';

export default function Read() {
  let [ 따봉, 따봉변경 ] = useState(0);
    return (
        <>
          <div className="readbox">
            <div className="headerbar">
              <div className="readtitle">
                <h1>제목</h1>           
              </div>
              <div className="readwritter">글쓴이</div>
              <div className="readwrittentime">글쓴 시간</div>
              <div className="correctdelete">
                  <div className="correct">수정</div>
                  <div className="delete">삭제</div>
              </div>

            </div>
            <div className="readpostarea">
                <div className="readpostimg">post사진
                </div>
                <div className="readpostcontent">post글</div>
                <div className="likes"><p> 공감 <span onClick={ ()=>{ 따봉변경(따봉 + 1) } } >👍</span> { 따봉 }</p></div>
            </div>
  
          </div>
            
          <div className="otherpages">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><a class="page-link" href="#">이전 글</a></li>
                  <li class="page-item"><a class="page-link" href="#">다음 글</a></li>
                </ul>
              </nav>
          </div>
          
          





            
        </>
    )
}