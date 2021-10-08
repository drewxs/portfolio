import React, { useState } from 'react';
import './contact.scss';
import emailjs from 'emailjs-com';
import { TextField, Button } from '@material-ui/core';
import Typed from 'react-typed';

export default function Contact() {
	const [name, setName] = useState('');
	const [contactInfo, setContactInfo] = useState('');
	const [text, setText] = useState('');
	const [confirmation, setConfirmation] = useState('');

	function onSubmit(e) {
		e.preventDefault();

		emailjs
			.send(
				'contact_service',
				'template_v2x6k3b',
				{ name, text, contactInfo },
				'user_sxBS1UDQ66E0hH4TmChOF'
			)
			.then(
				(res) => {
					console.log('Success', res.status, res.text);
					setConfirmation('Message sent successfully');
					setName('');
					setContactInfo('');
					setText('');
				},
				(err) => {
					console.log('Failed...', err);
				}
			);
	}

	return (
		<div className="contact">
			<div className="contact-title">
				{window.matchMedia('(min-width: 512px)').matches ? (
					<Typed
						strings={['Please fill in the form to contact me']}
						typeSpeed={40}
					/>
				) : (
					<Typed strings={['Contact Me']} typeSpeed={40} />
				)}
			</div>
			<form onSubmit={onSubmit}>
				<TextField
					label="Name"
					className="contact-input"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<TextField
					label="Email/Phone"
					className="contact-input"
					value={contactInfo}
					onChange={(e) => setContactInfo(e.target.value)}
				/>
				<TextField
					label="Message"
					className="contact-input"
					value={text}
					onChange={(e) => setText(e.target.value)}
					required
					multiline
					rows={6}
				/>
				<Button
					className="contact-btn"
					type="submit"
					disabled={name === '' || text === ''}
				>
					Send
				</Button>
				<p className="confirmation">{confirmation}</p>
			</form>
		</div>
	);
}
