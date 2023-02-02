import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import styles from '@/styles/Experience.module.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className={`container ${styles.experience__container}`}>
        <div className={styles.experience__frontend}>
          <h3>Front-end Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience__detailsIcon}
              />
              <h4>HTML</h4>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience__detailsIcon}
              />
              <h4>CSS</h4>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience__detailsIcon}
              />
              <h4>JavaScript</h4>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience__detailsIcon}
              />
              <h4>React</h4>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience__detailsIcon}
              />
              <h4>NextJS</h4>
            </article>
          </div>
        </div>
        <div className={styles.experience__backend}>
          <h3>Back-end Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience__detailsIcon}
              />
              <h4>NodeJs</h4>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience__detailsIcon}
              />
              <h4>MongoDB</h4>
            </article>
            <article className={styles.experience__details}>
              <BsFillPatchCheckFill
                className={styles.experience__detailsIcon}
              />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
