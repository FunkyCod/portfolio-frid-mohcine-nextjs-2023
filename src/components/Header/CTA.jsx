import React from 'react';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';

const CTA = ({ setActiveNav }) => {
  return (
    <div className={styles.cta}>
      <Link
        href="/assets/pdf/MOHCINE_FRID_Resume.pdf"
        download
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </Link>
      <Link
        href="/contact"
        className="btn btn-primary"
        onClick={() => setActiveNav('#contact')}
      >
        Let`s talk
      </Link>
      <Link className="btn" href="/portfolio">
        Portfolio
      </Link>
    </div>
  );
};

export default CTA;
