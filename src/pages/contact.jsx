import CTAPortfolio from '@/components/Header/CTAPortfolio';
import Head from 'next/head';
import React, { useState } from 'react';
import MyContact from '@/components/MyContact/MyContact';
import TopbarContact from '@/components/Topbar/TopbarContact';
import FooterContact from '@/components/Footer/FooterContact';

function ContactPage() {
  const [activeNav, setActiveNav] = useState('#contact');
  return (
    <>
      <Head>
        <title>Contact | Frid Mohcine`s</title>
        <meta
          name="description"
          content="Presentation of Frid Mohcine`s contact page"
        />
        <meta property="og:title" content="Contact Frid Mohcine`s" />
        <meta
          property="og:description"
          content="Presentation of Frid Mohcine`s contact page"
        />
        <meta property="og:image" content="/assets/images/logo.png" />
      </Head>
      <CTAPortfolio setActiveNav={setActiveNav} />
      <TopbarContact setActiveNav={setActiveNav} activeNav={activeNav} />
      <MyContact setActiveNav={setActiveNav} />
      <FooterContact setActiveNav={setActiveNav} />
    </>
  );
}

export default ContactPage;
