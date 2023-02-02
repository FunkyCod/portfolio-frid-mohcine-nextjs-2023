import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <>
      <header>
        <div>
          <span>Logo</span>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blog/hello-world">Blog Post</Link>
            </li>
            <li>
              <Link href="/portfolio-projects">Portfolio Projects</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
