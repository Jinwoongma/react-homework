import React, { useState } from "react";
import styled from "styled-components";

const Form = () => {
  const [inputState, setInputState] = useState({
    value: "",
    isFocused: false,
    isWarning: false,
    isFirstFocused: true,
  });

  const handleFocus = () => {
    setInputState({
      ...inputState,
      isFocused: true,
    });
  };

  const handleBlur = () => {
    setInputState((prevState) => ({
      ...prevState,
      isFocused: false,
      isWarning: !inputState.value.trim().length,
    }));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputState((prevState) => ({
      ...prevState,
      value: value,
      isWarning: !value.trim().length,
      isFirstFocused: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("성공적으로 제출되었습니다.");
    setInputState({
      value: "",
      isFocused: false,
      isWarning: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">이름: </label>
      <Input
        value={inputState.value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
        $isFocused={inputState.isFocused}
        $isWarning={inputState.isWarning}
        $isFirstFocused={inputState.isFirstFocused}
      ></Input>
      <Button disabled={!inputState.value.length}>제출</Button>
      <Msg $isWarning={inputState.isWarning}>
        빈칸 또는 공백으로 제출하실 수 없습니다.
      </Msg>
    </form>
  );
};

const Input = styled.input`
  width: 200px;
  background: ${({ value, $isFocused, $isWarning, $isFirstFocused }) => {
    if ($isFocused) {
      if (!value.trim().length) {
        if ($isFirstFocused) return "#dee5ff"; // 파란색
        else return "#ffdf98"; // 주황색
      }
      return "#dee5ff"; // 파란색
    }
    if ($isWarning && !$isFocused) return "#ffc4c4"; // 빨간색
    return "transparent";
  }};
`;

const Button = styled.button`
  disabled: ${({ disabled }) => {
    return disabled;
  }};
`;

const Msg = styled.p`
  color: red;
  display: ${({ $isWarning }) => {
    if ($isWarning) return "block";
    else return "none";
  }};
`;

export default Form;
