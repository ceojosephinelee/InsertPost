import React, {useState, useEffect} from "react";
import { dbService } from '../fbase';
import { addDoc, collection, query, onSnapshot, orderBy } from "@firebase/firestore";

const Post = ({upload}) => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let q = query(collection(dbService, "posts"), orderBy("createdAt", "desc")); 
        onSnapshot(q, (QuerySnapshot) => {
            const postArr = QuerySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }) );
            setPosts(postArr);
        });
      }, [upload]);

    return (
        posts.map((post) =>( 
            <div key={post.id}>
                <p>---------</p>
                <p>{post.title}</p>
                <p>{post.content}</p>
                <p>{post.creatorId}</p>
            </div>
        ))
        
    );
};

export default Post;