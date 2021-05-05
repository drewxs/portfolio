import React from 'react';
import './css/card.css';

export default function Card() {
	return (
		<div className="card">
			<h2 className="card-title">project name</h2>
			<p className="card-body">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
				explicabo, dolore sapiente eum voluptatem corporis natus eaque
				consequuntur enim rem?
			</p>
			<a href="#" className="button">
				Learn More
			</a>
		</div>
	);
}
