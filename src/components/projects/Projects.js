import React from 'react';
import './css/projects.css';
import Card from './Card';

export default function Projects() {
	return (
		<div className="projects">
			<div className="project-title">
				{window.matchMedia('(min-width: 420px)').matches ? (
					<h2>Here are some of my projects</h2>
				) : (
					<h2>Projects</h2>
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
