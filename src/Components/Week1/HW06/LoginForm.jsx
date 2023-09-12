import React from 'react'
import Input from './Input'
import "./LoginForm.css"

const LoginForm = () => {
  return (
    <div className='login-form'>
      <h1 className='login-form-header'>회원가입</h1>
      <form action="">
        <Input label="이메일" type="email" isRequired={true} placeHolder="이메일을 입력하세요"/>
        <Input label="비밀번호" type="password" isRequired={true} placeHolder="비밀번호를 입력하세요"/>
        <Input label="비밀번호 재확인" type="password" isRequired={true} placeHolder="비밀번호를 다시 입력하세요"/>
        <Input label="이름" type="text" isRequired={false} placeHolder="이름을 입력하세요"/>
        <Input label="나이" type="number" isRequired={false} placeHolder="나이을 입력하세요"/>
        <button>가입하기</button>
      </form>
    </div>
  )
}

export default LoginForm