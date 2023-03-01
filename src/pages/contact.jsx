import CTAPortfolio from '@/components/Header/CTAPortfolio';
import Head from 'next/head';
import React, { useState } from 'react';
import MyContact from '@/components/MyContact/MyContact';
import TopbarContact from '@/components/Topbar/TopbarContact';
import FooterContact from '@/components/Footer/FooterContact';

function ContactPage() {
  <Head>
    <title>Contact</title>
  </Head>;
  const [activeNav, setActiveNav] = useState('#contact');
  return (
    <>
      <CTAPortfolio setActiveNav={setActiveNav} />
      <TopbarContact setActiveNav={setActiveNav} activeNav={activeNav} />
      <MyContact setActiveNav={setActiveNav} />
      <FooterContact setActiveNav={setActiveNav} />
    </>
  );
}

export default ContactPage;
