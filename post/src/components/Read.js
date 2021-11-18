import React, { useState, useEffect, Component } from "react";
import '../style/read.scss';
//import Heart from './img\heart.png'
//import EmptyHeart from '.img\empty_heart.png'
import { useLocation } from "react-router";
import { authService, dbService } from '../fbase';
import { doc, updateDoc, onSnapshot} from "@firebase/firestore";
import { async } from "@firebase/util";


export default function Read() {

  const location = useLocation();
  const post = location.state.postObj;

  const [writer, setWriter] = useState(false);

  useEffect(()=> {
    if(authService.currentUser.displayName == post.creatorId){
      setWriter(true);
    }
  },[])


  return (
    <div>
    
        <>
          <div className="readboxbody">        
            <div className="readbox" >
              <div className="headerbar">
                <div className="readtitle">
                  <h1>{post.title}</h1>           
                </div>
                <div className="readwritter">{post.creatorId}</div>
                <div className="readwrittentime">글쓴 시간</div>
                {writer? 
                  <div className="correctdelete">
                    <div className="correct">수정</div>
                    <div className="delete">삭제</div>
                  </div>
                : 
                  <div></div>}
  
              </div>
              <div className="readpostarea">
                  <div className="readpostimg">post사진</div>
                  <div className="readpostcontent" dangerouslySetInnerHTML={{__html: post.content}}></div>
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
          </div>
        </> 
        
    </div>
    );
  }

