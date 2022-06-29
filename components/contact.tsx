import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement, SyntheticEvent, useState } from 'react';

import { Input, Link, Socials } from 'components';
import { contact } from 'data';

/**
 * Section for contacting me.
 */
export const Contact = (): ReactElement => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleValidation = () => {
    if (name && email && message) return true;
    return false;
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    let isValidForm = handleValidation();
    if (!isValidForm) return;

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({ name, email, message }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      setSuccess(false);
      return;
    }

    setSuccess(true);
    console.log(name, email, message);
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
                  <FontAwesomeIcon icon={faPhone} />
                </Link>
                <p className='contact-block__text'>{contact.phone}</p>
              </div>
              <div className='contact-block'>
                <Link href={`mailto:${contact.email}`}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
                <p className='contact-block__text'>{contact.email}</p>
              </div>
              <div className='contact-block'>
                <FontAwesomeIcon icon={faLocationDot} />
                <p className='contact-block__text'>{contact.location}</p>
              </div>
            </div>
            <div className='contact-col__row'>
              <Socials />
            </div>
          </div>
          {!success ? (
            <form className='contact-col contact-form' onSubmit={handleSubmit}>
              <Input type='text' name='name' label='Name' value={name} onChange={handleChangeName} required fullwidth />
              <Input
                type='email'
                name='email'
                label='Email'
                value={email}
                onChange={handleChangeEmail}
                required
                fullwidth
              />
              <Input
                type='text'
                name='message'
                label='Message'
                value={message}
                onChange={handleChangeMessage}
                required
                fullwidth
                multiline
              />
              <button className='button' type='submit' disabled={!name || !email || !message}>
                Send
              </button>
            </form>
          ) : (
            <div className='contact-col'>{contact.successMessage}</div>
          )}
        </div>
      </div>
    </section>
  );
};
