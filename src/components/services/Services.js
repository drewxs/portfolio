import React from 'react';
import './css/services.css';
import { Card } from '@material-ui/core';
import { Code, Web, CallMade } from '@material-ui/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
	AOS.init();

	return (
		<div className="services">
			<div className="text">
				{window.matchMedia('(min-width: 420px)').matches ? (
					<h2>Here are some of the skills and services I offer</h2>
				) : (
					<h2>Skills & Services</h2>
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
						<h4>Backend Development</h4>
						{window.matchMedia('(min-width: 540px)').matches && (
							<div>
								<br />
								<h5>RESTful API's for interactive and secure data access</h5>
								<br />
								<br />
								<h5>Languages/tools:</h5>
							</div>
						)}
						<h6>
							Node.js <br />
							Express.js <br />
							Ruby on Rails <br />
							Django <br />
							MongoDB <br />
							Firebase <br />
							MySQL <br />
							PostgreSQL
						</h6>
					</div>
				</Card>
				<Card className="skill-card">
					<Web color="secondary" className="skill-card-icon" fontSize="large" />
					<div className="skill-card-text">
						<h4>Frontend Development</h4>
						{window.matchMedia('(min-width: 540px)').matches && (
							<div>
								<br />
								<h5>
									Responsive and interactive user-friendly websites and UIs
								</h5>
								<br />
								<br />
								<h5>Languages/tools:</h5>
							</div>
						)}
						<h6>
							React.js <br />
							Next.js <br />
							Redux <br />
							HTML <br />
							CSS <br />
							Sass <br />
							Material-UI <br />
							Tailwind <br />
							Bootstrap
						</h6>
					</div>
				</Card>
				{window.matchMedia('(min-width: 540px)').matches && (
					<Card className="skill-card">
						<CallMade
							color="secondary"
							className="skill-card-icon"
							fontSize="large"
						/>
						<div className="skill-card-text">
							<h4>DevOps</h4>
							{window.matchMedia('(min-width: 540px)').matches && (
								<div>
									<br />
									<h5>
										Integration, testing, scaling, optimizing, and deploying
									</h5>
									<br />
									<br />
									<h5>Tools:</h5>
								</div>
							)}
							<h6>
								Kubernetes <br />
								Docker <br />
								Git <br />
								OpenShift <br />
								CircleCI <br />
								AWS <br />
								Azure
							</h6>
						</div>
					</Card>
				)}
			</div>
		</div>
	);
}
