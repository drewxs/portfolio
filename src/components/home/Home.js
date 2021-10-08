import React from 'react';
import { Button } from '@material-ui/core';
import './home.scss';
import Typed from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home({ setCurrentPage }) {
	AOS.init();

	return (
		<div className="home">
			<div data-aos="fade" data-aos-duration="2000">
				<Typed
					className="typed-name"
					strings={['Andrew Xavier Shah']}
					typeSpeed={40}
				/>
			</div>
			<Typed
				className="typed-text"
				strings={[
					'Web Development',
					'REST APIs',
					'Machine Learning',
					'Database Design',
					'Testing / Debugging',
				]}
				typeSpeed={40}
				backSpeed={30}
				loop
			/>
			<div className="line" />
			<Button
				variant="contained"
				color="secondary"
				className="contact-button"
				onClick={() => setCurrentPage(4)}
			>
				Contact Me
			</Button>
		</div>
	);
}
