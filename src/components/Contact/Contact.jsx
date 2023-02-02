import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import styles from '@/styles/Сontact.module.css';
import Link from 'next/link';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    e.target.reset();
  };
  return (
    <section id="contact" className={styles.contact__section}>
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided.
      </h5>
      <h2>Contact Me</h2>
      <div className={`container ${styles.contact__container}`}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <MdOutlineEmail className={styles.contact__optionIcon} />
            <h4>Email</h4>
            <h5>mohcinefrid21@gmail.com</h5>
            <Link href="mailto:mohcinefrid21@gmail.com">Send a message</Link>
          </article>
          <article className={styles.contact__option}>
            <BsTelephone className={styles.contact__optionIcon} />
            <h4>Telefon</h4>
            <h5>+4389286417</h5>
            <Link href="tel:+4389286417">Call or send message</Link>
          </article>
        </div>
        <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            className={styles.textarea}
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I`ll reply ASAP.</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
