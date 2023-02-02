import React from 'react';
import Image from 'next/image';

import styles from '@/styles/Portfolio.module.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'React-Image-finder',
      img: '/assets/images/react-image-finder.png',
      description: 'Website with search Image app on the service (Pixabay).',
      technologies: 'React',
      link: 'https://frid-mohcine-react-image-finder.netlify.app/',
      github: 'https://github.com/FunkyCod/react-image-finder',
    },
    {
      id: 2,
      title: 'React-Phonebook',
      img: '/assets/images/react-phonebook.png',
      description: 'Website with edit Phonebook.',
      technologies: 'React',
      link: 'https://frid-mohcine-react-phonebook.netlify.app/',
      github: 'https://github.com/FunkyCod/react-phonebook',
    },
    {
      id: 3,
      title: 'JS Color Switcher',
      img: '/assets/images/js-color-switcher.png',
      description: 'Website with Color Switcher Background body.',
      technologies: 'HTML5 | CSS | JavaScript',
      link: 'https://funkycod.github.io/js-color-switcher/',
      github: 'https://github.com/FunkyCod/js-color-switcher',
    },
    {
      id: 4,
      title: 'JS Countdown Timer',
      img: '/assets/images/js-countdown-timer.png',
      description: 'Website with Countdown Timer.',
      technologies: 'HTML5 | CSS | JavaScript',
      link: 'https://funkycod.github.io/js-countdown-timer/',
      github: 'https://github.com/FunkyCod/js-countdown-timer',
    },
  ];

  return (
    <section id="portfolio" className={styles.section__portfolio}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${styles.portfolio__container}`}>
        {soloProjects.map((pro) => (
          <article className={styles.portfolio__item} key={pro.id}>
            <div className={styles.portfolio__itemImage}>
              <Image
                src={pro.img}
                alt={pro.title}
                width={370}
                height={370}
                priority
              />
            </div>
            <div className={styles.portfolio__itemContent}>
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className={styles.portfolio__itemCta}>
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
