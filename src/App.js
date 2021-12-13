import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Menu } from '@material-ui/core';
import ReactPageScroller from 'react-page-scroller';
import Home from './components/home/Home';
import Services from './components/services/Services';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './css/app.scss';
import logo from './images/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-particles-js';

function App() {
	const [currentPage, setCurrentPage] = useState(0);
	AOS.init();

	function handlePageChange(number) {
		setCurrentPage(number);
		AOS.refresh();
	}

	return (
		<div className="app">
			<Particles
				params={{
					particles: {
						number: {
							value: 20,
							density: { enable: true, value_area: 2000 },
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 5,
								color: '#422a2a',
							},
						},
						interactivity: {
							detect_on: 'window',
							events: {
								onhover: {
									enable: true,
									mode: 'grab',
								},
								onclick: {
									enable: true,
									mode: 'push',
								},
							},
							modes: {
								grab: {
									distance: 150,
									line_linked: {
										opacity: 1,
									},
								},
								push: {
									particles_nb: 4,
								},
							},
						},
						retina_detect: true,
					},
				}}
			/>
			<AppBar position="fixed">
				<Toolbar className="toolbar">
					<img src={logo} alt="" />
					{window.matchMedia('(min-width: 512px)').matches && (
						<Tabs
							value={currentPage}
							indicatorColor="secondary"
							textColor="inherit"
							variant="fullWidth"
							aria-label="tabs"
						>
							<Tab
								label="Home"
								onClick={() => handlePageChange(0)}
								className="tab"
							/>
							<Tab
								label="About"
								onClick={() => handlePageChange(1)}
								className="tab"
							/>
							<Tab
								label="Skills"
								onClick={() => handlePageChange(2)}
								className="tab"
							/>
							<Tab
								label="Projects"
								onClick={() => handlePageChange(3)}
								className="tab"
							/>
							<Tab
								label="Contact"
								onClick={() => handlePageChange(4)}
								className="tab"
							/>
						</Tabs>
					)}
					<div className="profile"></div>
				</Toolbar>
			</AppBar>
			<div className="screen">
				<ReactPageScroller
					pageOnChange={handlePageChange}
					customPageNumber={currentPage}
				>
					<Home setCurrentPage={setCurrentPage} />
					<About />
					<Services />
					<Projects />
					<Contact />
				</ReactPageScroller>
			</div>
		</div>
	);
}

export default App;
