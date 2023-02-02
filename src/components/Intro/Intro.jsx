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
              src="/assets/images/intro_460x460.png"
              alt="me"
              width={460}
              height={460}
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

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;I`ve like working with HTML,CSS,JavaScript,
            creating everything from landing pages to APIs, creating an
            efficient, productive and fast site. Also I like difficult tasks and
            implementing new trends. I have liked robotics since childhood.
            I&nbsp;worked as a design engineer for more than 5 years in the
            product field. He gained a lot of experience for further development
            both in teamwork and in his own projects.
          </p>

          <div className={styles.about__btnBox}>
            <a
              href="#contact"
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
