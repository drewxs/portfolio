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
							<div>
								<br />
								<h5 className="skill-card-description">
									RESTful APIs and database design
								</h5>
								<br />
								<br />
								<h5 className="skill-card-description">
									Languages/tools:
								</h5>
							</div>
						)}
						<h6 className="skill-card-list">
							Node.js <br />
							Express.js <br />
							Ruby on Rails <br />
							Flask <br />
							Django <br />
							Amazon S3 <br />
							MongoDB <br />
							Firebase <br />
							PostgreSQL <br />
							MySQL <br />
							OracleDB
						</h6>
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
							<div>
								<br />
								<h5 className="skill-card-description">
									Responsive and interactive user interfaces
								</h5>
								<br />
								<br />
								<h5 className="skill-card-description">
									Languages/tools:
								</h5>
							</div>
						)}
						<h6 className="skill-card-list">
							React.js <br />
							Next.js <br />
							Redux <br />
							HTML <br />
							CSS <br />
							Sass <br />
							Material-UI <br />
							Tailwind <br />
							Bootstrap <br />
							Socket.io <br />
							Pusher <br />
						</h6>
					</div>
				</Card>
				{window.matchMedia('(min-width: 512px)').matches && (
					<Card className="skill-card">
						<CallMade
							color="secondary"
							className="skill-card-icon"
							fontSize="large"
						/>
						<div className="skill-card-text">
							<h4 className="skill-card-title">DevOps</h4>
							{window.matchMedia('(min-width: 768px)')
								.matches && (
								<div>
									<br />
									<h5 className="skill-card-description">
										Integration, testing, scaling, and
										deploying
									</h5>
									<br />
									<br />
									<h5 className="skill-card-description">
										Tools:
									</h5>
								</div>
							)}
							<h6 className="skill-card-list">
								Git <br />
								CircleCI <br />
								Storybook <br />
								Jest <br />
								Mocha <br />
								AVA <br />
								Kubernetes <br />
								Docker <br />
								Netlify <br />
								Vercel <br />
								Heroku
							</h6>
						</div>
					</Card>
				)}
			</div>
		</div>
	);
}
