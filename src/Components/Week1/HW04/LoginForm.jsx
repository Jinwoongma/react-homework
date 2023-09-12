import React from 'react'
import Input from './Input'
import SubminButton from './SubminButton'

const LoginForm = () => {
  return (
    <div>
      <h1>로그인 페이지</h1>
      <form>
        <Input label="Email" type="email"/>
        <Input label="Password" type="password"/>
        <SubminButton/>
      </form>
    </div>
  )
}

export default LoginForm