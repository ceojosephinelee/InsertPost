import '../style/profilefront.scss';
import {Link} from "react-router-dom";
import { authService } from '../fbase';
import React, { useState } from "react";

export default function ProfileBox({isLoggedIn}) {
    const user = authService.currentUser;
    return (
        <>
        {isLoggedIn ? 
            <>  
              <div className="afterloginbox">
                <a><span className="name">{user.displayName}</span>님 안녕하세요</a>
                <div className="afterbtns">
                  
                  <button type="button" class="btn btn-primary"><Link to="/write"style={{textDecoration: 'none',color:'white'}}>글쓰기</Link></button>
                  <button type="button" class="btn btn-primary">Log out</button>

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