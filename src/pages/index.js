import Contact from '@/components/Contact/Contact';
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
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setActiveNav={setActiveNav} />
      <Topbar setActiveNav={setActiveNav} activeNav={activeNav} />
      <Intro setActiveNav={setActiveNav} />
      <Experience />
      <Contact />
      <Footer setActiveNav={setActiveNav} />
    </>
  );
}
