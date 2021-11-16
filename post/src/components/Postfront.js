
import React, { useState, useEffect } from "react";
import '../style/postfront.scss';
import {Link} from "react-router-dom";
import { dbService } from '../fbase';
import { collection, query, onSnapshot, orderBy } from "@firebase/firestore";


export default function Postfront({upload}) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let q = query(collection(dbService, "posts"), orderBy("createdAt", "desc")); 
    onSnapshot(q, (QuerySnapshot) => {
      const postArr = QuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }) );
      setPosts(postArr);
    });
  }, [upload]);

  const path = "";
  const unLoad = ({id}) => {
    path = "/read/"+ id;
  } 

  return (
      posts.map((post) =>( 
        <Link to={{
          pathname: `/read/${post.id}`,
            state: { key: post.id, }
        }}>
          <>
            <div className="postbox" key={post.id}> 
                <div class="card" >
                  <div class="row g-0">
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-writer">{post.creatorId}</h5>
                        <h5 class="card-title">{post.title}</h5>
                        <p class="card-text">{post.content}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <p> 공감 <span>👍</span> { post.thumb }</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <img src="..." class="img-fluid rounded-start " alt="사진"></img>
                    </div>
                  </div>
                </div>
            </div>
          </>
        </Link>
      ))
    )
}