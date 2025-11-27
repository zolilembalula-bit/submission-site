import React from 'react';
import { Link, useLocation } from 'wouter';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar(){
  const [location] = useLocation();
  const { theme, toggle } = useTheme();
  return (
    <header className='nav'>
      <div className='nav-inner container'>
        <div className='brand'>
          <Link href='/'><a>Albert Z. Mbalula</a></Link>
        </div>
        <nav className='nav-links'>
          <Link href='/'><a className={location==='/'? 'active':''}>Home</a></Link>
          <Link href='/about'><a className={location==='/about'? 'active':''}>About</a></Link>
          <Link href='/projects'><a className={location==='/projects'? 'active':''}>Projects</a></Link>
          <Link href='/resources'><a className={location==='/resources'? 'active':''}>Resources</a></Link>
          <Link href='/timetable'><a className={location==='/timetable'? 'active':''}>Timetable</a></Link>
          <Link href='/dashboard'><a className={location==='/dashboard'? 'active':''}>Dashboard</a></Link>
          <Link href='/contact'><a className={location==='/contact'? 'active':''}>Contact</a></Link>
        </nav>
        <div className='nav-actions'>
          <button onClick={toggle} className='btn small'>Theme: {theme}</button>
        </div>
      </div>
    </header>
  );
}
