import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import styles from '@/styles/Intro.module.css';
import Image from 'next/image';

const Intro = ({ setActiveNav }) => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__me}>
          <div className={styles.about__meImage}>
            <Image
              src="/assets/images/intro_286x360.png"
              alt="me"
              width={286}
              height={360}
              priority
            />
          </div>
        </div>
        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icon} />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className={styles.about__card}>
              <VscFolderLibrary className={styles.about__icon} />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p className={styles.introText}>
            &nbsp;&nbsp;&nbsp;&nbsp;Welcome to my portfolio website, I am a
            highly motivated and skilled web developer with a passion for
            creating dynamic and user-friendly websites. With 2 years of
            experience in the industry, I have honed my expertise in various
            front-end and back-end technologies, including HTML, CSS,
            JavaScript, and React also Next.js. My goal is to build websites
            that not only look great, but also provide a seamless user
            experience. I strive to stay up to date with the latest trends and
            technologies to ensure that my clients receive the best possible
            solution. Look around my portfolio to see some of my past work and
            don`t hesitate to reach out if you have any questions or would like
            to work together.
          </p>

          <div className={styles.about__btnBox}>
            <a
              href="/contact"
              className="btn btn-primary"
              onClick={() => setActiveNav('#contact')}
            >
              Let`s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
