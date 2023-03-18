import FooterPortfolio from '@/components/Footer/FooterPortfolio';
import CTAPortfolio from '@/components/Header/CTAPortfolio';
import Portfolio from '@/components/Portfolio/Portfolio';
import TopbarPortfolio from '@/components/Topbar/TopbarPortfolio';
import Head from 'next/head';
import React, { useState } from 'react';

function ProjectOne() {
  const [activeNav, setActiveNav] = useState('#portfolio');
  return (
    <>
      <Head>
        <title>Portfolio | Frid Mohcine`s</title>
        <meta
          name="description"
          content="Presentation of Frid Mohcine portfolio page"
        />
        <meta property="og:title" content="Portfolio Frid Mohcine" />
        <meta
          property="og:description"
          content="Presentation of Frid Mohcine portfolio page"
        />
        <meta property="og:image" content="/assets/images/logo.png" />
      </Head>
      <CTAPortfolio setActiveNav={setActiveNav} />
      <TopbarPortfolio setActiveNav={setActiveNav} activeNav={activeNav} />
      <Portfolio setActiveNav={setActiveNav} />
      <FooterPortfolio setActiveNav={setActiveNav} />
    </>
  );
}

export default ProjectOne;
