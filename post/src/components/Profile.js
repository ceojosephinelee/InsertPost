import React from 'react'
import { useHistory } from 'react-router';
import { authService } from '../fbase';

export default function Profile() {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        alert("로그아웃 되었습니다")
        history.push("/");
    }
    return (
        <div>
        <button onClick={onLogOutClick}>Log Out</button>
        </div>
    )
}