import React from 'react';
import styles from '@/styles/Header.module.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import Image from 'next/image';

const Header = ({ setActiveNav }) => {
  return (
    <header className={styles.header} id="home">
      <div className={`container ${styles.header__container}`}>
        <p>Hello I`m </p>
        <h1>Mohcine Frid</h1>

        <h4 className={`text-light ${styles.textContainer2}`}>Web Developer</h4>

        <CTA setActiveNav={setActiveNav} />
        <HeaderSocials />
        <div className={styles.me}>
          <Image
            src="/assets/images/header_600x700.png"
            alt="me"
            width={600}
            height={700}
            priority
          />
        </div>
        <a
          href="#contact"
          className={styles.scroll__down}
          onClick={() => setActiveNav('#contact')}
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
