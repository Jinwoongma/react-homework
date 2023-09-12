import React from 'react'
import './Input.css'

const Input = ({ label, type, isRequired, placeHolder }) => {
  return (
    <>
      <div className='input-wrapper'>
        <div className='label-wrapper'>
          <label>{label}</label>
          {isRequired && (
            <>
              <span>필수</span>
              <span className='label-asterisk'>*</span>
            </>
          )}
        </div>
        <input className='login-form-input' type={type} placeholder={placeHolder} required={isRequired}></input>
      </div>
    </>
  )
}

export default Input