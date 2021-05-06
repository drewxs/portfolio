import React from 'react';
import './css/about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
	AOS.init();

	return (
		<div className="about">
			<h2>About Me</h2>
			<h6>
				Hi, I like to code and make stuff. My favourite tech stack currently is:
				MongoDB, Express, React, Node, Redux. I like to constantly learn new
				technology and challenge myself. I also love to collaborate with people.
				Have a project idea and want to make something together? Hit me up!
			</h6>
		</div>
	);
}
