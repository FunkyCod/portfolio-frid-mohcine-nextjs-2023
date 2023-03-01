import FooterPortfolio from '@/components/Footer/FooterPortfolio';
import CTAPortfolio from '@/components/Header/CTAPortfolio';
import Portfolio from '@/components/Portfolio/Portfolio';
import TopbarPortfolio from '@/components/Topbar/TopbarPortfolio';
import Head from 'next/head';
import React, { useState } from 'react';

function ProjectOne() {
  <Head>
    <title>Portfolio</title>
  </Head>;
  const [activeNav, setActiveNav] = useState('#portfolio');
  return (
    <>
      <CTAPortfolio setActiveNav={setActiveNav} />
      <TopbarPortfolio setActiveNav={setActiveNav} activeNav={activeNav} />
      <Portfolio setActiveNav={setActiveNav} />
      <FooterPortfolio setActiveNav={setActiveNav} />
    </>
  );
}

export default ProjectOne;
