import React, { useState, useEffect } from "react";
import '../style/read.scss';
import { useLocation } from "react-router";
import { authService, dbService } from '../fbase';
import { doc, collection, query, where, getDoc, updateDoc, onSnapshot, documentId, FieldPath} from "@firebase/firestore";
import { async } from "@firebase/util";


export default function Read() {

  const location = useLocation();
  const postTitle = location.state.title;
  const postContent = location.state.content;
  const postWriter = location.state.writer;

  const [ thumb, setThumb ] = useState(0);
  // const onThumbClick = () => {
  //   if(thumb == 0){
  //     setThumb(1);
  //   } else if(thumb == 1){
  //     setThumb(0);
  //   }
  // }

  // useEffect( async()=>{
  //   const docRef = doc(dbService, "posts");
  //   await updateDoc(docRef,{
  //     thumbs: thumbs+thumb
  //   })

  // },[thumb]);

  const [writer, setWriter] = useState(false);

  useEffect(()=> {
    if(authService.currentUser.displayName == postWriter){
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
                  <h1>{postTitle}</h1>           
                </div>
                <div className="readwritter">{postWriter}</div>
                <div className="readwrittentime">글쓴 시간</div>
                {writer ? 
                  <div className="correctdelete">
                    <div className="correct">수정</div>
                    <div className="delete">삭제</div>
                  </div>
                : 
                  <div></div>}
  
              </div>
              <div className="readpostarea">
                  <div className="readpostimg">post사진</div>
                  <div className="readpostcontent" dangerouslySetInnerHTML={{__html: postContent}}></div>
                  <div className="likes"><p> 공감 <span onClick={ ()=>{ setThumb(thumb + 1) } } >👍</span> { thumb }</p></div>
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

