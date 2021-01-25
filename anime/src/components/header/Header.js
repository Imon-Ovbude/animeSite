import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiArrowDownSFill } from 'react-icons/ri';
import './header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <ul className='header-ul'>
          <li>
            <a href='#'>
              <GiHamburgerMenu />
            </a>
          </li>
          <li>
            <a href='#' className='anime-site'>
              AnimeSite
            </a>
          </li>
          <li>
            <a href='#'>
              Browse <RiArrowDownSFill />
            </a>
          </li>
          <li>
            <a href='#'>
              Seasons <RiArrowDownSFill />
            </a>
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
        <ul className='header-ul'>
          <li>
            <a href='#'>
              <BiSearchAlt />
            </a>
          </li>
          <li>
            <a href='#'>
              <BsBookmark />
            </a>
          </li>
          <li>
            <a href='#'>Log In</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
