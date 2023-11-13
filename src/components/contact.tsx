'use client';

import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';

import { Input, Socials } from '@/components';
import { contact } from '@/data';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [monster, setMonster] = useState('');
  const [spell, setSpell] = useState('');
  const [success, setSuccess] = useState(false);
  const [cardactivated, setCardactivated] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!name || !email || !message) return;
    if (monster || spell) return setCardactivated(true);

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({ name, email, message }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) return setSuccess(false);
    setSuccess(true);
  };

  return (
    <section className='home section contact'>
      <div className='container'>
        <h1 className='contact-title'>Contact</h1>
        <div className='contact-row'>
          <div className='contact-col content'>
            <div className='contact-col__row'>
              <h2 className='contact-heading h4'>{contact.heading}</h2>
              <p className='contact-message'>{contact.message}</p>
            </div>
            <div className='contact-col__row'>
              <div className='contact-block'>
                <Link href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                  <FontAwesomeIcon className='contact-block__icon' icon={faPhone} />
                </Link>
                <p className='contact-block__text'>{contact.phone}</p>
              </div>
              <div className='contact-block'>
                <Link href={`mailto:${contact.email}`}>
                  <FontAwesomeIcon className='contact-block__icon' icon={faEnvelope} />
                </Link>
                <p className='contact-block__text'>{contact.email}</p>
              </div>
              <div className='contact-block'>
                <FontAwesomeIcon className='contact-block__icon' icon={faLocationDot} />
                <p className='contact-block__text'>{contact.location}</p>
              </div>
            </div>
            <div className='contact-col__row'>
              <Socials />
            </div>
          </div>
          {!success && !cardactivated && (
            <form id='contact-form' className='contact-col contact-form' onSubmit={handleSubmit}>
              <Input
                type='text'
                name='name'
                label='Name'
                value={name}
                onInput={(e) => setName(e.currentTarget.value)}
                required
                fullwidth
              />
              <Input
                type='email'
                name='email'
                label='Email'
                value={email}
                onInput={(e) => setEmail(e.currentTarget.value)}
                required
                fullwidth
              />
              <Input
                type='text'
                name='message'
                label='Message'
                value={message}
                onInput={(e) => setMessage(e.currentTarget.value)}
                required
                fullwidth
                multiline
              />
              <div className='youveactivatedmycard'>
                <Input
                  type='text'
                  name='phone'
                  label='Phone'
                  value={monster}
                  onChange={(e) => setMonster(e.currentTarget.value)}
                  autoComplete='new-card'
                />
                <Input
                  type='text'
                  name='address'
                  label='Address'
                  value={spell}
                  onChange={(e) => setSpell(e.currentTarget.value)}
                  autoComplete='new-card'
                />
              </div>
              <button
                className='button g-recaptcha'
                disabled={!name || !email || !message}
                data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onClick={handleSubmit}
              >
                Send
              </button>
              <p className='disclaimer'>
                This site is protected by reCAPTCHA and the Google{' '}
                <a
                  className='disclaimer-link'
                  href='https://policies.google.com/privacy'
                  target='_blank'
                  rel='noreferrer'
                >
                  Privacy Policy&nbsp;
                </a>
                and&nbsp;
                <a
                  className='disclaimer-link'
                  href='https://policies.google.com/terms'
                  target='_blank'
                  rel='noreferrer'
                >
                  Terms of Service&nbsp;
                </a>
                apply.
              </p>
            </form>
          )}
          {success && !cardactivated && <div className='contact-col'>{contact.successMessage}</div>}
          {cardactivated && <div className='contact-col'>{contact.errorMessage}</div>}
        </div>
      </div>
    </section>
  );
};
