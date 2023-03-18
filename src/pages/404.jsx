import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from '@/styles/NotFoundPage.module.css';
import { useRouter } from 'next/router';
function NotFounfPage() {
  const router = useRouter();
  const timeout = 3000;
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, timeout);
  }, [router]);

  return (
    <div className={styles.container}>
      <h1>Ups..</h1>
      <h2>Not found page</h2>
      <p>
        return on
        <Link className={styles.not_found} href="/">
          Home
        </Link>
      </p>
    </div>
  );
}

export default NotFounfPage;
