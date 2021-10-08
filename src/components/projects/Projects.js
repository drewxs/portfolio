import React from 'react';
import './projects.scss';
import Card from './Card';
import Typed from 'react-typed';

export default function Projects() {
	return (
		<div className="projects">
			<div className="project-title">
				{window.matchMedia('(min-width: 512px)').matches ? (
					<Typed
						strings={['Here are some of my projects']}
						typeSpeed={40}
					/>
				) : (
					<Typed strings={['Projects']} typeSpeed={40} />
				)}
			</div>
			<div className="project-list">
				<Card
					title="Raven"
					body="A social media platform"
					link="https://ravenx.vercel.app"
				/>
				<Card
					title="ZeroScript"
					body="Interpreted programming language"
					link="https://github.com/kito0/zeroscript"
				/>
				<Card
					title="Ciel"
					body="A ERC-20 standard cryptocurrency"
					link="https://github.com/kito0/ciel-token"
				/>
				<Card
					title="Echo UI"
					body="React UI library"
					link="https://github.com/kito0/echo-ui"
				/>
				<Card
					title="ECommerce API"
					body="E-Commerce REST API"
					link="https://github.com/kito0/ecommerce-api"
				/>
				<Card
					title="Digit Classification"
					body="ANN for digit classification"
					link="https://github.com/kito0/digit-classification"
				/>
				<Card
					title="Object Detection"
					body="Object detection with Tensorflow"
					link="https://github.com/kito0/object-detection"
				/>
				<Card
					title="Zapr"
					body="A blogging web app"
					link="https://zapr.netlify.app"
				/>
				<Card
					title="Raven (Unsupported)"
					body="Older rendition of Raven"
					link="https://ravenx.netlify.app"
				/>
			</div>
		</div>
	);
}
