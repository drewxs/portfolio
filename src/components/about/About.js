import React from 'react';
import './about.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IconButton } from '@material-ui/core';
import { GitHub, Email, Call } from '@material-ui/icons';
import Typed from 'react-typed';

export default function About() {
	AOS.init();

	return (
		<div className="about">
			<div className="about-title">
				<Typed strings={['About Me']} typeSpeed={40} />
			</div>
			<h6 className="about-body">
				Hi, I like to code and make stuff I find interesting. I
				experiment with a range of topics from machine learning,
				programming languages, decentralized applications to full stack
				web development. I also love collaboration. Reach out to any of
				the following to collaborate or simply chat with me.
			</h6>
			<IconButton
				href="https://github.com/kito0"
				target="_blank"
				rel="noreferrer"
				color="secondary"
				className="about-btn"
			>
				<GitHub style={{ width: '5rem', height: '5rem' }} />
			</IconButton>
			<IconButton
				href={'mailto: drewshah0@gmail.com'}
				rel="noreferrer"
				color="secondary"
				className="about-btn"
			>
				<Email style={{ width: '5rem', height: '5rem' }} />
			</IconButton>
			<IconButton
				href={'tel: +15064610871'}
				rel="noreferrer"
				color="secondary"
				className="about-btn"
			>
				<Call style={{ width: '5rem', height: '5rem' }} />
			</IconButton>
		</div>
	);
}
