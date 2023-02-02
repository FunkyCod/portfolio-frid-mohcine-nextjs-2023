import React from 'react';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa';
import styles from '@/styles/Footer.module.css';

const FooterPortfolio = ({ setActiveNav }) => {
  return (
    <>
      <footer className={styles.footer}>
        <Link href="/" className={styles.footer__logo}>
          Mohcine Frid
        </Link>
        <ul className={styles.permalinks}>
          <li>
            <Link href="/" onClick={() => setActiveNav('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" onClick={() => setActiveNav('#about')}>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#experience"
              onClick={() => setActiveNav('#experience')}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link href="/portfolio" onClick={() => setActiveNav('#portfolio')}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setActiveNav('#contact')}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.footer__socials}>
          <Link href="#" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </Link>
          <Link href="#" target="_blank" rel="noreferrer">
            <FaGithub />
          </Link>
          <Link href="#" target="_blank" rel="noreferrer">
            <FaAngellist />
          </Link>
        </div>
        <div className={styles.footer__socialsfooter__copyright}>
          <small>&copy; ET 2023. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
};

export default FooterPortfolio;
