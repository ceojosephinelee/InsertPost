import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import '../style/postfront.scss';
import {Link} from "react-router-dom";
import { dbService } from '../fbase';
import { collection, query, onSnapshot, orderBy, where, doc } from "@firebase/firestore";


export default function Postfront({isLoggedin, upload, category}) {
  let [posts, setPosts] = useState([]);
  let data = category;
  useEffect(() => {
    console.log(category);

    let q = query(collection(dbService, "posts"), where("category", "==", data+""), orderBy("createdAt", "desc"));
    onSnapshot(q, (QuerySnapshot) => {
      const postArr = QuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }) );
      setPosts(postArr);
    });
  }, [upload]);

const history = useHistory();



  return (
      posts.map((post) =>( 
          <>
            <div className="postbox" key={post.id} onClick={()=>{
                          if(isLoggedin){history.push({
                            pathname: `/read/${post.id}`,
                            state:{ postObj: post,} })}
                          else alert("로그인이 필요합니다")
                        }}> 
                <div class="card" >
                  <div class="row g-0">
                    <div class="col-md-9">
                      <div class="card-body">
                        <p class="card-text-cat"><small class="text-muted">{post.category}</small></p>
                        <p class="card-title" >{post.title}</p>
                        <p class="card-writer">{post.creatorId}</p>
                        <p class="card-text-time"><small class="text-muted">{post.createdAt}</small></p>
                        
                      </div>
                    </div>
                    <div class="col-md-3">
                      <img src=".\img\no-image.jpg" class="img-fluid rounded-start " alt="사진"></img>
                    </div>
                  </div>
                </div>
            </div>
          </>
        
      ))
    )
}