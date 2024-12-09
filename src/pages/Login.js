import { Password } from "@mui/icons-material";
import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [loginInput, setLoginInput] = useState({
        useremail: '',
        userpassword: ''
    });
    const {useremail, userpassword} = loginInput;
    const handleInput = e => {
        const { name, value } = e.target;
        setLoginInput({ ...loginInput, [name]: value });
    };

    const LoginBtn = async (e) => {
        e.preventDefault();

        if (!useremail || !Password) {
            alert('모든 필드를 입력해야 합니다.');
            return;
        }

        try {
            const response = await fetch('http://192.168.0.248:8080/api/v1/feed/feedSelectAll', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                /*
                body: JSON.stringify({
                    // 더미 데이터
                    useremail,  // 이메일
                    userpassword,    // 비밀번호
                }),
                */
            });
    
            if (!response.ok) {
                const errorDetails = await response.json();
                console.error('Error details:', errorDetails);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            alert('로그인 성공');
            console.log('Response data:', data);
            navigate('/', {
                state: {
                  data: `${data}`,
                },
              });
        } catch (error) {
            console.error('Error during sign-up:', error);
            alert('로그인 중 오류가 발생하였습니다.');
        }
    };

    return (
        <div>
            <h1>로그인 페이지</h1>
            <form>
                <input
                    type="text"
                    name="useremail"
                    placeholder="이메일를 입력해주세요."
                    onChange={handleInput}
                />
                <input
                    type="password"
                    name="userpassword"
                    placeholder="비밀번호를 입력해주세요."
                    onChange={handleInput}
                />
                <button type="submit" onClick={LoginBtn}>로그인</button>
            </form>
        </div>
    )
}

export default Login