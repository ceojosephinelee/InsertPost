import '../style/profilefront.scss';
import {Link} from "react-router-dom";
import { authService } from '../fbase';
import { useHistory } from 'react-router';
import React, { useState } from "react";

export default function ProfileBox({isLoggedIn, userObj}) {
    const user = authService.currentUser;
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        alert("로그아웃 되었습니다")
        history.push("/");
    }

    return (
        <>
        {isLoggedIn ? 
            <>  
              <div className="afterloginbox">
                <a><span className="name">{user.displayName}</span>님 안녕하세요</a>
                <div className="afterbtns">
                  <button type="button" class="btn btn-primary"><Link to="/write"style={{textDecoration: 'none',color:'white'}} userObj={userObj}>글쓰기</Link></button>
                  <button type="button" class="btn btn-primary" onClick={onLogOutClick}>Log out</button>
                </div>
              </div>
            </>
            : 
            <>  
              <div className="beforeloginbox">
                <div className="loginrequired">로그인 후 이용하실 수 있습니다</div>
                  <div className="beforebtns">
                    <div className="signupbtn">
                        <Link to="/signup"style={{textDecoration: 'none'}}>
                            <button type="button" class="btn btn-primary">Sign up</button>
                        </Link>
                    </div>
                    <div className="loginbtn">
                        <Link to="/login"style={{textDecoration: 'none'}}>
                          <button type="button" class="btn btn-primary">Log in</button>
                        </Link>
                    </div>
                  </div>     
                  
  
                </div>
                
            </> 
        }
        </>
    )
}