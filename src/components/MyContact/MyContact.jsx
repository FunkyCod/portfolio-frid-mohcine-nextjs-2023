import React, { useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import styles from '@/styles/Сontact.module.css';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const MyContact = () => {
  const [message, setMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const messages = {
    user_name: {
      required: 'Please enter your full name',
      pattern: 'Your name should contain only letters',
      minLength: 'Your name should be at least 3 characters long',
      maxLength: 'Your name should not exceed 40 characters',
    },
    user_email: {
      required: 'Please enter your email address',
      pattern: 'Please enter a valid email address',
    },
    message: {
      required: 'Please enter your message',
      minLength: 'Your message should be at least 10 characters long',
      maxLength: 'Your message should not exceed 5000 characters',
    },
  };

  const onSubmit = (data) => {
    setMessage(true);
    emailjs
      .send('service_lc2lf0e', 'template_i0rob8r', data, 'TaplYoSiWdPyN3t8N')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <section id="contact" className={styles.contact__section}>
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
            <h4>Phone number</h4>
            <h5>+4389286417</h5>
            <Link href="tel:+4389286417">Call or send message</Link>
          </article>
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="text"
              placeholder="Your Full Name"
              {...register('user_name', {
                required: true,
                pattern: /^[A-Za-z]+$/,
                minLength: 3,
                maxLength: 40,
              })}
            />
            {errors.user_name && (
              <span className={styles.error}>
                {messages.user_name[errors.user_name.type]}
              </span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="email"
              placeholder="Your Email"
              {...register('user_email', {
                required: true,
                pattern: {
                  value:
                    /^(?=.{1,64}@.{1,255}$)(?=.{6,64}$)(?=[^@]*[A-Za-z0-9])[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                },
              })}
            />
            {errors.user_email && (
              <span className={styles.error}>
                {messages.user_email[errors.user_email.type]}
              </span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <textarea
              className={styles.textarea}
              placeholder="Your message"
              rows="7"
              {...register('message', {
                required: true,
                minLength: 10,
                maxLength: 5000,
              })}
            ></textarea>
            {errors.message && (
              <span className={styles.error}>
                {messages.message[errors.message.type]}
              </span>
            )}
          </div>
          <div className={styles.submit}>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {message && (
              <span className={styles.accept}>Thanks, I`ll reply ASAP.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default MyContact;
