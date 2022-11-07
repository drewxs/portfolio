'use client';

import { ReactElement, SyntheticEvent, useState } from 'react';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Input, Link, Socials } from 'components';
import { contact } from 'data';

/**
 * Section for contacting me.
 */
export const Contact = (): ReactElement => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [monster, setMonster] = useState('');
  const [spell, setSpell] = useState('');
  const [success, setSuccess] = useState(false);
  const [cardactivated, setCardactivated] = useState(false);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value);
  const handleChangeMonster = (e: React.ChangeEvent<HTMLInputElement>) => setMonster(e.target.value);
  const handleChangeSpell = (e: React.ChangeEvent<HTMLInputElement>) => setSpell(e.target.value);

  const handleValidation = () => {
    if (!name || !email || !message) return false;
    if (monster || spell) {
      setCardactivated(true);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const isValidForm = handleValidation();
    if (!isValidForm) return;

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({ name, email, message }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      setSuccess(false);
      return;
    }

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
              <Input type='text' name='name' label='Name' value={name} onInput={handleChangeName} required fullwidth />
              <Input
                type='email'
                name='email'
                label='Email'
                value={email}
                onInput={handleChangeEmail}
                required
                fullwidth
              />
              <Input
                type='text'
                name='message'
                label='Message'
                value={message}
                onInput={handleChangeMessage}
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
                  onChange={handleChangeMonster}
                  autoComplete='new-card'
                />
                <Input
                  type='text'
                  name='address'
                  label='Address'
                  value={spell}
                  onChange={handleChangeSpell}
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
                  Privacy Policy{' '}
                </a>{' '}
                and{' '}
                <a
                  className='disclaimer-link'
                  href='https://policies.google.com/terms'
                  target='_blank'
                  rel='noreferrer'
                >
                  {' '}
                  Terms of Service{' '}
                </a>{' '}
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
