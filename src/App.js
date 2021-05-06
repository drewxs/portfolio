import React, { useState } from 'react';
import { AccountCircle } from '@material-ui/icons';
import { AppBar, Toolbar, IconButton, Tabs, Tab } from '@material-ui/core';
import ReactPageScroller from 'react-page-scroller';
import Home from './components/home/Home';
import Services from './components/services/Services';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import './css/app.css';
import logo from './images/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-particles-js';

function App() {
	const [currentPage, setCurrentPage] = useState(0);
	AOS.init();

	const handlePageChange = (number) => {
		setCurrentPage(number);
		AOS.refresh();
	};

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
					</Tabs>
					<div className="profile">
						<IconButton
							edge="end"
							aria-label="User Account"
							aria-haspopup="true"
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<div className="screen">
				<ReactPageScroller
					pageOnChange={handlePageChange}
					customPageNumber={currentPage}
				>
					<Home />
					<About />
					<Services />
					<Projects />
				</ReactPageScroller>
			</div>
		</div>
	);
}

export default App;
