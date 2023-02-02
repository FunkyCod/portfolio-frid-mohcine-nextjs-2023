import React, { useState } from 'react';
import Header from '../Header/Header';
import Topbar from '../Topbar/Topbar';
import Footer from '../Footer/Footer';

function Layout({ children, setActiveNav, activeNav }) {
  return (
    <div className="content">
      <Header setActiveNav={setActiveNav} />
      <Topbar setActiveNav={setActiveNav} activeNav={activeNav} />

      {children}
      <Footer setActiveNav={setActiveNav} />
    </div>
  );
}

export default Layout;
