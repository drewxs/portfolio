import React from 'react';
import './css/services.css';
import { Typography, Card } from '@material-ui/core';
import { Code, Web, CallMade } from '@material-ui/icons';

export default function Services() {
	return (
		<div className="services">
			<div className="text">
				{window.matchMedia('(min-width: 420px)').matches ? (
					<h2>Here are some of the skills and services I offer</h2>
				) : (
					<h2>Skills & Services</h2>
				)}
			</div>
			<div className="cards">
				<Card className="card">
					<Code color="secondary" className="cardicon" fontSize="large" />
					<div className="cardtext">
						<h4>Backend Development</h4>
						{window.matchMedia('(min-width: 540px)').matches && (
							<div>
								<br />
								<h5>
									I enjoy creating RESTful API's for interactive and secure data
									access
								</h5>
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
							PostgreSQL
						</h6>
					</div>
				</Card>
				<Card className="card">
					<Web color="secondary" className="cardicon" fontSize="large" />
					<div className="cardtext">
						<h4>Frontend Development</h4>
						{window.matchMedia('(min-width: 540px)').matches && (
							<div>
								<br />
								<h5>I like to design responsive and interactive websites</h5>
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
					<Card className="card">
						<CallMade color="secondary" className="cardicon" fontSize="large" />
						<div className="cardtext">
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
								Google Cloud <br />
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
