import React from 'react';
import './css/projects.css';
import Card from './Card';
import Typed from 'react-typed';

export default function Projects() {
	return (
		<div className="projects">
			<div className="project-title">
				{window.matchMedia('(min-width: 512px)').matches ? (
					<Typed strings={['Here are some of my projects']} typeSpeed={40} />
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
					title="MeowCache"
					body="ECommerce store for cat products"
					link="https://meowcache.com"
				/>
				{/* <Card
					title="Plannr"
					body="Personal task planner"
					link="https://github.com/kito0/plannr"
				/> */}
				<Card
					title="Raven (Unsupported)"
					body="Older rendition of Raven"
					link="https://ravenx.netlify.app"
				/>
			</div>
		</div>
	);
}
