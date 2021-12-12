import React from 'react';
import './services.scss';
import { Card } from '@material-ui/core';
import { Code, Web, CallMade } from '@material-ui/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'react-typed';

export default function Services() {
	AOS.init();

	return (
		<div className="services">
			<div className="services-title">
				{window.matchMedia('(min-width: 512px)').matches ? (
					<Typed
						strings={[
							'Here are some of the technologies I work with',
						]}
						typeSpeed={40}
					/>
				) : (
					<Typed strings={['Skills & Tech']} typeSpeed={40} />
				)}
			</div>
			<div className="skill-cards">
				<Card className="skill-card">
					<Code
						color="secondary"
						className="skill-card-icon"
						fontSize="large"
					/>
					<div className="skill-card-text">
						<h4 className="skill-card-title">Backend</h4>
						{window.matchMedia('(min-width: 768px)').matches && (
							<h5 className="skill-card-description">
								RESTful APIs and database design
							</h5>
						)}
						<div className="skill-card-list">
							<p>Node.js</p>
							<p>Express.js</p>
							<p>Ruby on Rails</p>
							<p>Flask</p>
							<p>Django</p>
							<p>Amazon S3</p>
							<p>MongoDB</p>
							<p>Firebase</p>
							<p>PostgreSQL</p>
							<p>MySQL</p>
							<p>OracleDB</p>
						</div>
					</div>
				</Card>
				<Card className="skill-card">
					<Web
						color="secondary"
						className="skill-card-icon"
						fontSize="large"
					/>
					<div className="skill-card-text">
						<h4 className="skill-card-title">Frontend</h4>
						{window.matchMedia('(min-width: 768px)').matches && (
							<h5 className="skill-card-description">
								Responsive and interactive user interfaces
							</h5>
						)}
						<div className="skill-card-list">
							<p>React.js</p>
							<p>Next.js</p>
							<p>Redux</p>
							<p>HTML</p>
							<p>CSS</p>
							<p>Sass</p>
							<p>Material-UI</p>
							<p>Tailwind</p>
							<p>Bootstrap</p>
							<p>Socket.io</p>
							<p>Pusher</p>
						</div>
					</div>
				</Card>
				<Card className="skill-card">
					<CallMade
						color="secondary"
						className="skill-card-icon"
						fontSize="large"
					/>
					<div className="skill-card-text">
						<h4 className="skill-card-title">DevOps</h4>
						{window.matchMedia('(min-width: 768px)').matches && (
							<h5 className="skill-card-description">
								Integration, testing, scaling, and deploying
							</h5>
						)}
						<div className="skill-card-list">
							<p>Git</p>
							<p>CircleCI</p>
							<p>Storybook</p>
							<p>Jest</p>
							<p>Mocha</p>
							<p>AVA</p>
							<p>Kubernetes</p>
							<p>Docker</p>
							<p>Netlify</p>
							<p>Vercel</p>
							<p>Heroku</p>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}
