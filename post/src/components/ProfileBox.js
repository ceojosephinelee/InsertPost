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
                <a><span className="name">{user.displayName}</span>님 안녕하세요</a>
                <div className="writebutton">
                        <Link to="/write"style={{textDecoration: 'none',color:'white'}}>글쓰기</Link>
                </div>
                <button type="button" class="btn btn-primary">Log out</button>
                
            </>
            : 
            <> 
                <div>로그인 후 이용하실 수 있습니다</div>
                <div>
                    <Link to="/signup"style={{textDecoration: 'none'}}>
                        <button type="button" class="btn btn-primary">Sign up</button>
                    </Link>
                </div>
                <div>
                    <Link to="/login"style={{textDecoration: 'none'}}>
                      <button type="button" class="btn btn-primary">Log in</button>
                    </Link>
                </div>
            </> 
        }
        </>
    )
}