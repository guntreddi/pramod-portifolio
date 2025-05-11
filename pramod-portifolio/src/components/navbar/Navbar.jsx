import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 100;
      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Pramod</div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a className={activeLink === 'about' ? 'active' : ''} href="#about">About</a></li>
        <li><a className={activeLink === 'skills' ? 'active' : ''} href="#skills">Skills</a></li>
        <li><a className={activeLink === 'projects' ? 'active' : ''} href="#projects">Projects</a></li>
        <li><a className={activeLink === 'certifications' ? 'active' : ''} href="#certifications">Certifications</a></li>
        <li><a className={activeLink === 'contact' ? 'active' : ''} href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
