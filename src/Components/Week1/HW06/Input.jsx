import React from 'react'
import './Input.css'

const Input = ({ label, id, type, isRequired, placeHolder, value, event, children }) => {
  return (
    <>
      <div className='input-wrapper'>
        <div className='label-wrapper'>
          <label htmlFor={id}>{label}</label>
          {isRequired && (
            <>
              <span>필수</span>
              <span className='label-asterisk'>*</span>
            </>
          )}
        </div>
        <input className='login-form-input' 
          id={id}
          type={type} 
          placeholder={placeHolder} 
          required={isRequired} 
          value={value}
          onChange={event}
          autoComplete='on'/>
        {children}
      </div>
    </>
  )
}

export default Input