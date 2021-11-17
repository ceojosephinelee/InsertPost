import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import { authService } from "../fbase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import '../style/signup.scss';

export default function Signup(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

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
      }) //await 아래 동작은 이 문장 작업이 완료되기 전까지 실행되지 않는다
    } catch(error){
      alert(error.message);
    }
    setName("");
    setEmail("");
    setPassword("");
    alert('가입 완료!'+{name}+'님 환영합니다!');
    history.push('/');
  };

  
    return(
        
        <>
          <div className="signupbox">
            <span>회원가입</span>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" style={{color:'black'}} aria-current="page" href="#" >회원가입</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <Link to="/login" style={{textDecoration:'none', color:'gray'}}>로그인</Link>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>  
            </nav>    
            <form onSubmit={onSubmit}>
              <div class="row mb-3 one">
                
                <div class="col-sm-10 w-100">
                  <input type="text" class="form-control" id="inputName3" placeholder="Name" required value={name} onChange={onChange}></input>
                </div>
              </div>
              <div class="row mb-3 two">
                
                <div class="col-sm-10 w-100">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email" required value={email} onChange={onChange}></input>
                </div>
              </div>
              <div class="row mb-3 three">
                
                <div class="col-sm-10 w-100">
                  <input type="password" class="form-control" id="inputPassword3" placeholder="Password" required value={password} onChange={onChange}></input>
                </div>
              </div>
              <div class="row mb-3 four">
                <div className="buttongroup">
                  <button type="submit" class="btn btn-primary">Sign up with Email</button>
                  <button type="submit" class="btn btn-primary">Log in with <img src="./img\googlelogin.png"></img></button>
                  <button type="submit" class="btn btn-primary">Log in with <img src="./img\githublogo.png"></img></button>

                </div>
                
                  
              </div>
              
            </form>
          </div>  
        </>
    );
}
      