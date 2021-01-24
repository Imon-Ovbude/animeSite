import React from 'react';
import './header.css';

function Header() {
  return (
    <header className='header'>
      <ul>
        {/* <li>
          <a href='#'>
            <div style={{ backgroundColor: 'black', width: '20px' }}></div>
            <div></div>
            <div></div>
          </a>
        </li> */}
        <li>
          <a href='#'>AnimeSite</a>
        </li>
        <li>
          <a href='#'>Browse</a>
        </li>
        <li>
          <a href='#'>Seasons</a>
        </li>
        <li>
          <a href='#'>Schedule</a>
        </li>
        <li>
          <a href='#'>Headlines</a>
        </li>
        <li>
          <a href='#'>Videos</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href='#'>search icon</a>
        </li>
        <li>
          <a href='#'>library icon</a>
        </li>
        <li>
          <a href='#'>Log In</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
