import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import './NavBar3.css';
import { links } from './data';

const NavBar3 = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
          <h1 className='headerG'>GlobalTalk</h1>
        </div>

        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='social-icons'>
          <p className='char'>A</p>
          <h2 className='name'>Alex</h2>
          <button className='sign-outbtn'>Sign Out→</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar3;
