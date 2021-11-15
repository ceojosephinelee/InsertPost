import React, {useEffect} from 'react'
import { collection, query, where, getDoc } from "@firebase/firestore";
import '../style/read.scss';
import { dbService } from '../fbase';

const postTitle = "";
export default function Read({key}) {
  const getMyPosts = async() => {
    const docRef = collection(dbService, "posts");
    const q = query(docRef, where("id", "==", {key}));
    const querySnapshot = await getDoc(q);
    querySnapshot= (doc) => {
      postTitle = doc.title;
    }
  }

  useEffect(() => {
    getMyPosts();
    console.log(postTitle);
  }, [])

    return (
        <>
          <div className="readbox">
            <div className="headerbar">
              <div className="readtitle">
                            
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
                <div className="likes">공감</div>
            </div>
  
          </div>
            
          <div className="otherpages">
              <div className="previouspage">이전 글</div>
              <div className="nextpage">다음 글</div>
          </div>
          
          





            
        </>
    )
}