import React from 'react';
import './css/projects.css';
import Card from './Card';
import Typed from 'react-typed';

export default function Projects() {
	return (
		<div className="projects">
			<div className="project-titles">
				{window.matchMedia('(min-width: 512px)').matches ? (
					<Typed
						className="project-title"
						strings={['Here are some of my projects']}
						typeSpeed={40}
					/>
				) : (
					<Typed
						className="project-title"
						strings={['Projects']}
						typeSpeed={40}
					/>
				)}
			</div>
			<div className="project-list">
				<Card
					title="Raven"
					body="A social media platform"
					link="https://ravenx.vercel.app"
				/>
				<Card
					title="Ciel"
					body="A ERC-20 Standard Cryptocurrency"
					link="https://github.com/kito0/ciel-token"
				/>
				<Card
					title="Digit Classification"
					body="ANN for digit classification"
					link="https://github.com/kito0/digit-classification"
				/>
				<Card
					title="Object Detection"
					body="Object Detection with Tensorflow"
					link="https://github.com/kito0/object-detection"
				/>
				<Card
					title="Zapr"
					body="A blogging web app"
					link="https://zapr.netlify.app"
				/>
				<Card
					title="Plannr"
					body="Personal Task Planner"
					link="https://github.com/kito0/plannr"
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
