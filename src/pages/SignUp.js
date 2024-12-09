import React, { useState, useRef } from "react";
import "../styles/Contact.css";
import { Link } from 'react-router-dom';

function SignUp() {

    const [userInput, setUserInput] = useState({
        usernickname: '',
        useremail: '',
        userage: '',
        usergender: '',
        userid: ''
    });
    const {usernickname, useremail, userage, usergender, userid} = userInput;
    const handleInput = e => {
        const { name, value } = e.target;
        setUserInput({ ...userInput, [name]: value });
    };

    // 이메일 유효성 검사
    const isEmail = useremail => {
        const emailRegex = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
            return emailRegex.test(useremail);
        };
    const isEmailValid = isEmail(useremail);

    const checkSignUp = async (e) => {
        e.preventDefault();

        if (!usernickname || !useremail || !userage || !usergender || !userid) {
            alert('모든 필드를 입력해야 합니다.');
            return;
        }

        try {
            const response = await fetch('http://192.168.0.248:8080/api/v1/user/userentry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usernickname, // 닉네임
                    useremail,    // 이메일
                    userage,      // 나이
                    usergender,   // 성별
                    userid        // 사용자 ID
                }),
            });
    
            if (!response.ok) {
                const errorDetails = await response.json();
                console.error('Error details:', errorDetails);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            alert('회원가입 성공');
            console.log('Response data:', data);
        } catch (error) {
            console.error('Error during sign-up:', error);
            alert('회원가입 요청 중 오류가 발생했습니다.');
        }
    };

    

    return (
        <div className="contact">
            <div className="rightSide">
                <h1> SignUp Page </h1>

                <form id="loginForm" method="POST">
                    <label htmlFor="userid">ID</label>
                    <input 
                        name="userid" 
                        placeholder="아이디를 입력해주세요." 
                        type="text" 
                        onChange={handleInput}
                    />
                    <label htmlFor="usernickname">Nick Name</label>
                    <input 
                        name="usernickname" 
                        placeholder="닉네임을 입력해주세요." 
                        type="text" 
                        onChange={handleInput}
                    />
                    <label htmlFor="useremail">Email</label>
                    <input 
                        name="useremail" 
                        placeholder="이메일을 입력해주세요." 
                        type="email" 
                        onChange={handleInput}
                    />
                    <label htmlFor="userage">Age</label>
                    <input 
                        name="userage" 
                        placeholder="나이를 년도만 입력해주세요." 
                        type="text" 
                        onChange={handleInput}
                    />
                    
                    <label className="userMale label">
                        <input 
                            onChange={handleInput}
                            className="radio"
                            type="radio" 
                            name="usergender" 
                            value="male"
                        />
                        <span className="text">male</span>
                    </label>
                    <label className="userFemale label">
                        <input 
                            onChange={handleInput}
                            className="radio"
                            type="radio" 
                            name="usergender" 
                            value="female"
                        />
                        <span className="text">female</span>
                    </label>
                    
                    
                    <button type="submit" onClick={checkSignUp}> 가입하기</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp