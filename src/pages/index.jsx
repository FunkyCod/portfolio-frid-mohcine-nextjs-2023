import Experience from '@/components/Experience/Experience';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Intro from '@/components/Intro/Intro';
import Topbar from '@/components/Topbar/Topbar';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [activeNav, setActiveNav] = useState('#footer');
  return (
    <>
      <Head>
        <title>Home | Frid Mohcine`s</title>
        <meta name="description" content="Home page of Frid Mohcine." />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Home page of Frid Mohcine." />
        <meta property="og:image" content="/assets/images/logo.png" />
      </Head>
      <Header setActiveNav={setActiveNav} />
      <Topbar setActiveNav={setActiveNav} activeNav={activeNav} />
      <Intro setActiveNav={setActiveNav} />
      <Experience />
      <Footer setActiveNav={setActiveNav} />
    </>
  );
}
