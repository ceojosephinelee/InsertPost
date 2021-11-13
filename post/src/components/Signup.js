import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { authService } from "../fbase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import '../style/signup.scss';

export default function Signup(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
      const {target: {id, value}} =e; //e에서 target의 name과 value를 가져온다
      if (id === "inputEmail3"){
          setEmail(value);
      } else if (id === "inputPassword3"){
          setPassword(value);
      } else if (id === "inputName3"){
        setName(value);
    }
  };

  const onSubmit = async(e) => { // async 비동기호출 (await는 async안에서 호출되어야한다)
    e.preventDefault();
    try{ 
      let data;
      data = await createUserWithEmailAndPassword(authService, email, password).then((userCredential) =>{
        const user = userCredential.user;
        updateProfile(user, {displayName: name})
        console.log(user);
        alert('가입 완료');
      }) //await 아래 동작은 이 문장 작업이 완료되기 전까지 실행되지 않는다
    } catch(error){
      alert(error.message);
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  
    return(
        
        <>
          <div className="signupbox">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">회원가입</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <Link to="/login">로그인</Link>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>  
            </nav>    
            <form onSubmit={onSubmit}>
              <div class="row mb-3">
                <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputName3" required value={name} onChange={onChange}></input>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" required value={email} onChange={onChange}></input>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword3" required value={password} onChange={onChange}></input>
                </div>
              </div>
              
              
           
              <button type="submit" class="btn btn-primary">Sign up</button>
            </form>
          </div>  
        </>
    );
}
      