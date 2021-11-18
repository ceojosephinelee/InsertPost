import React, { useState, useEffect, Component } from "react";
import '../style/read.scss';
import { useLocation } from "react-router";
import { useHistory } from 'react-router';
import { authService, dbService } from '../fbase';
import { doc, updateDoc, onSnapshot, deleteDoc} from "@firebase/firestore";
import { async } from "@firebase/util";


export default function Read() {

  const location = useLocation();
  const history = useHistory();
  const post = location.state.postObj;
  const key = String(post.id);

  const onEdit = () => {
    history.push({
      pathname: `/edit/${post.id}`,
      state:{ postObj: post,} })
  }
  
  const onDelete = async() => {
    await deleteDoc(doc(dbService, "posts", key));
    alert("글이 삭제되었습니다");
    history.push("/");
  }

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
                    <button className="correct" onClick={onEdit}>수정</button>
                    <button className="delete" onClick={onDelete}>삭제</button>
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

