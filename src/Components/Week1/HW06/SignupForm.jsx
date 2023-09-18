import React, { useState, useEffect } from "react";
import Input from "./Input";
import "./SignupForm.css";
import Button from "./Button";

const LoginForm = () => {
  const ID_FIELD = {
    EMAIL: "email",
    PASSWORD: "password",
    PASSWORD_CONFIRM: "passwordConfirm",
    NAME: "name",
    AGE: "age",
  };

  const LABEL_FIELD = {
    [ID_FIELD.EMAIL]: "이메일",
    [ID_FIELD.PASSWORD]: "비밀번호",
    [ID_FIELD.PASSWORD_CONFIRM]: "비밀번호 확인",
    [ID_FIELD.NAME]: "이름",
    [ID_FIELD.AGE]: "나이",
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    age: "",
  });

  const [passwordCheck, setPasswordCheck] = useState(true);
  const [isAllRequired, setIsAllRequired] = useState(false);

  useEffect(() => {
    setPasswordCheck(inputs.password === inputs.passwordConfirm);
  }, [inputs.password, inputs.passwordConfirm]);

  useEffect(() => {
    setIsAllRequired(
      inputs.email && inputs.password && inputs.passwordConfirm ? true : false
    );
  }, [inputs.email, inputs.password, inputs.passwordConfirm]);

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [id]: value, // name 키를 가진 값을 value 로 설정 (불변성 유지)
    });
  };

  const handleSubmit = (e) => {
    console.log(inputs);
    if (passwordCheck) {
      alert(`${inputs.name}님 환영합니다!`);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      e.preventDefault();
    }
  };

  const handleOnClickReset = () => {
    setInputs({
      ...inputs,
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      age: "",
    });
  };

  return (
    <div className="login-layout">
      <h1 className="login-layout-header">회원가입</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          id={ID_FIELD.EMAIL}
          label={LABEL_FIELD[ID_FIELD.EMAIL]}
          type="email"
          isRequired={true}
          placeHolder={`${LABEL_FIELD[ID_FIELD.EMAIL]}을 입력하세요`}
          value={inputs.email}
          event={onInputChange}
        />
        <Input
          id={ID_FIELD.PASSWORD}
          label={LABEL_FIELD[ID_FIELD.PASSWORD]}
          type="password"
          isRequired={true}
          placeHolder={`${LABEL_FIELD[ID_FIELD.PASSWORD]}를 입력하세요`}
          value={inputs.password}
          event={onInputChange}
        />
        <Input
          id={ID_FIELD.PASSWORD_CONFIRM}
          label={LABEL_FIELD[ID_FIELD.PASSWORD_CONFIRM]}
          type="password"
          isRequired={true}
          placeHolder={`${LABEL_FIELD[ID_FIELD.PASSWORD]}를 다시 입력하세요`}
          value={inputs.passwordConfirm}
          event={onInputChange}
        >
          {!passwordCheck && (
            <span className="validateion-msg">
              비밀번호가 일치하지 않습니다
            </span>
          )}
        </Input>
        <Input
          id={ID_FIELD.NAME}
          label={LABEL_FIELD[ID_FIELD.NAME]}
          type="text"
          isRequired={false}
          placeHolder={`${LABEL_FIELD[ID_FIELD.NAME]}을 다시 입력하세요`}
          value={inputs.name}
          event={onInputChange}
        />
        <Input
          id={ID_FIELD.AGE}
          label={LABEL_FIELD[ID_FIELD.AGE]}
          type="number"
          isRequired={false}
          placeHolder={`${LABEL_FIELD[ID_FIELD.AGE]}를 다시 입력하세요`}
          value={inputs.age}
          event={onInputChange}
        />
        <Button type="button" onClick={handleOnClickReset}>
          초기화
        </Button>
        <Button disabled={!isAllRequired} type="submit">
          가입하기
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
