import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import ReactPageScroller from 'react-page-scroller';
import Home from './components/home/Home';
import Services from './components/services/Services';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './css/app.css';
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
						number: { value: 30, density: { enable: true, value_area: 2000 } },
						shape: {
							type: 'circle',
							stroke: {
								width: 6,
								color: '#422a2a',
							},
						},
					},
				}}
			/>
			<AppBar position="fixed">
				<Toolbar className="toolbar">
					<img src={logo} alt="" />
					<Tabs
						value={currentPage}
						indicatorColor="secondary"
						textColor="inherit"
						variant="fullWidth"
						aria-label="tabs"
					>
						<Tab label="Home" onClick={() => handlePageChange(0)} />
						<Tab label="About" onClick={() => handlePageChange(1)} />
						<Tab label="Skills" onClick={() => handlePageChange(2)} />
						<Tab label="Projects" onClick={() => handlePageChange(3)} />
						<Tab label="Contact" onClick={() => handlePageChange(4)} />
					</Tabs>
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
