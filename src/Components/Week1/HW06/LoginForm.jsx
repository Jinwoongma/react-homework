import React, { useState, useEffect } from 'react'
import Input from './Input'
import "./LoginForm.css"
import Button from './Button'

const LoginForm = () => {
  
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    age: ''
  });

  const [passwordCheck, setPasswordCheck] = useState(true);

  useEffect(() => {
    setPasswordCheck(inputs.password === inputs.passwordConfirm)
  }, [inputs.password, inputs.passwordConfirm])

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [id]: value // name 키를 가진 값을 value 로 설정 (불변성 유지)
    });
  }

  const handleSubmit = (e) => {
    console.log(inputs);
    if (passwordCheck) {
      alert(`${inputs.name}님 환영합니다!`);
    } else {
      alert('비밀번호가 일치하지 않습니다.');
      e.preventDefault();
    }
  }

  return (
    <div className='login-layout'>
      <h1 className='login-layout-header'>회원가입</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <Input id="email"
          label="이메일"   
          type="email" 
          isRequired={true} 
          placeHolder="이메일을 입력하세요" 
          value={inputs.email}
          event={onInputChange}/>
        <Input id="password" 
          label="비밀번호" 
          type="password" 
          isRequired={true} 
          placeHolder="비밀번호를 입력하세요" 
          value={inputs.password} 
          event={onInputChange}/>
        <Input id="passwordConfirm" 
          label="비밀번호 재확인" 
          type="password" 
          isRequired={true} 
          placeHolder="비밀번호를 다시 입력하세요" 
          value={inputs.passwordConfirm} 
          event={onInputChange}
          >{!passwordCheck && 
              <span className='validateion-msg'>비밀번호가 일치하지 않습니다</span>
          }</Input>
        <Input id="name" 
          label="이름"   
          type="text" 
          isRequired={false} 
          placeHolder="이름을 입력하세요" 
          value={inputs.name} 
          event={onInputChange}/>
        <Input id="age" 
          label="나이" 
          type="number" 
          isRequired={false} 
          placeHolder="나이을 입력하세요" 
          value={inputs.age} 
          event={onInputChange}/>
        <Button/>
      </form>
    </div>
  )
}

export default LoginForm