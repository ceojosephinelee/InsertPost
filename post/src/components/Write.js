import React, {useState, useEffect} from 'react'
import { authService, dbService } from '../fbase';
import { addDoc, collection} from "@firebase/firestore";
import { useHistory } from 'react-router';
import '../style/write.scss';
import EditorComponent from './EditorComponent';


function Write({userObj, upload}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();
  const [category, setCategory] = useState("Category");
  

  const onSubmit = async(e) => {
    e.preventDefault();
    const today = new Date();
    const date = today.toLocaleString();
    const name = authService.currentUser.displayName;
    
    try {
      if(name){
        const docRef = await addDoc(collection(dbService, "posts"), {
            title: title,
            content: content,
            createdAt: date,
            creatorId: name,
            category: category,
        });
        upload = !upload;
        alert("글이 게시되었습니다");
        history.push("/");}
      } catch (error) {
        console.log("Error adding document: ", error);
      }        
  };

  const onChange = (e) =>{
    const {target: {name, value}} = e;
    if (name === "bdTitle"){
      setTitle(value);
    } 

  };

  const onClickCategory= (e) => {
    const {target: {id}} = e;
    setCategory(id);
  }

  function onEditorChange(value) {
        setContent(value)
  }

  return (
      <> 
        <div className="writeboxbody"> 
          <div className="writebox">
            <form onSubmit={onSubmit} /*action="writerAction"*/ method="post">
              <div className="writedropdowns">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {category}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" id="All" href="#" onClick={onClickCategory}>ALL</a></li>
                    <li><a class="dropdown-item" id="Frontend" href="#" onClick={onClickCategory}>Frontend</a></li>
                    <li><a class="dropdown-item" id="Backend" href="#" onClick={onClickCategory}>Backend</a></li>
                  </ul>
                </div>
	            </div>
	            <input type="text" name="bdTitle" class="form-control mt-4 mb-2" onChange={onChange} value={title}
	            	placeholder="제목을 입력해주세요." required
	            ></input>
	            <div class="form-group">
                <div><EditorComponent onChange={onEditorChange} value={content} userObj={userObj}></EditorComponent></div>
	            	{/* <textarea class="form-control" rows="10" name="bdContent" onChange={onChange} value={content}
	            		placeholder="내용을 입력해주세요" required
	            	></textarea> */}
	            </div>
              <div className="submitbox">
                <button type="submit" class="btn btn-secondary">등록</button>
              </div>  	            
            </form>
          </div>  
        </div>   
      </>
    )
} 

export default Write;
