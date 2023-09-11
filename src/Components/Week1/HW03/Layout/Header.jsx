import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header class="header">
      <h1 class="header__title">Welcome to My Web Page!</h1>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item"><a href="#" class="header__nav-link">Home</a></li>
          <li class="header__nav-item"><a href="#" class="header__nav-link">About</a></li>
          <li class="header__nav-item"><a href="#" class="header__nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header