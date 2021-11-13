import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import { authService } from '../fbase';
import { signInWithEmailAndPassword } from '@firebase/auth';
import '../style/login.scss';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const {target: {id, value}} =e; //e에서 target의 name과 value를 가져온다
    if (id === "inputEmail3"){
        setEmail(value);
    } else if (id === "inputPassword3"){
        setPassword(value);
    }
  };
  
  const history = useHistory();
  const onSubmit = async(e) => { // async 비동기호출 (await는 async안에서 호출되어야한다)
    e.preventDefault();
    try{
      let data;
      data = await signInWithEmailAndPassword(authService, email, password); //v9로 변동된 부분
      const name = authService.currentUser.displayName;
      console.log(data);
      alert(name + "님 환영합니다");

      history.push('/');
    } catch(error){
        alert(error.message);
    }
    setEmail("");
    setPassword("");
  };

    return (
        <>
            <div className="loginbox">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <Link to="/signup">회원가입</Link>
                        </a>
                      </li>  
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">로그인</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>  
              </nav>    
              <form onSubmit={onSubmit}>
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
                
                
             
                <button type="submit" class="btn btn-primary">Log in</button>
              </form>
    
            </div>
        
        </>    
    )
}