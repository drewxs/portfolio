import React from 'react';
import { Button } from '@material-ui/core';
import './css/home.css';

export default function Home() {
	return (
		<div className="home">
			<h2>Andrew Xavier Shah</h2>
			<h6>Full Stack Web Developer</h6>
			<div className="line" />
			<Button variant="contained" color="secondary">
				Contact Me
			</Button>
		</div>
	);
}
