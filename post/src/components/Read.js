import React, { useState, useEffect } from "react";
import '../style/read.scss';
import { useLocation } from "react-router";
import { dbService } from '../fbase';
import { doc, collection, query, where, getDoc, updateDoc} from "@firebase/firestore";
import { async } from "@firebase/util";


export default function Read() {
  const [init, setInit] = useState(false);

  const location = useLocation();
  const doc_key = location.state.key;
  console.log(doc_key);
  const postTitle = "";

  /*const getMyPosts = async() => {
    const docRef = collection(dbService, "posts");
    const q = query(docRef, where("key", "==", doc_key));
    const querySnapshot = await getDoc(q);
    querySnapshot= (doc) => {
      postTitle = doc.title;
      console.log(doc.id);
    }
  }

  useEffect(() => {
    setInit(true);
    getMyPosts();
  }, []);*/


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

  return (
    <div>
    {init ?
        <>
          <div className="readbox" >
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
                <div className="readpostimg">post사진</div>
                <div className="readpostcontent">post글</div>
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

        </> 
        : "Loading" } </div>
    )
}