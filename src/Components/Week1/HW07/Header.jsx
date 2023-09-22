import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header-wrapper'>
      <h1 className='header-text'>○ 나의 체질량지수(BMI)</h1>
      <a className='header-close-button' href="#">✖</a>   
    </header>
  )
}

export default Header