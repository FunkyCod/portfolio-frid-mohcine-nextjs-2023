import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import Link from 'next/link';

import styles from '@/styles/Topbar.module.css';

const TopbarPortfolio = ({ activeNav, setActiveNav }) => {
  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? `${styles.active}` : ''}
      >
        <AiOutlineHome />
      </Link>
      <Link
        href="/#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? `${styles.active}` : ''}
      >
        <AiOutlineUser />
      </Link>
      <Link
        href="/#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? `${styles.active}` : ''}
      >
        <BiBook />
      </Link>
      <Link
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? `${styles.active}` : ''}
      >
        <RiServiceLine />
      </Link>
      <Link
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? `${styles.active}` : ''}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default TopbarPortfolio;
