import React from 'react';
import './card.scss';

export default function Card({ title, body, link }) {
	return (
		<div
			className={`card ${title
				.toLowerCase()
				.replace(/\s/g, '')
				.replace(/[()]/g, '')}`}
		>
			<div className="card-content">
				<h2 className="card-title">{title}</h2>
				<p className="card-body">{body}</p>
				<a
					href={link}
					target="_blank"
					rel="noreferrer"
					className="button"
				>
					Learn More
				</a>
			</div>
		</div>
	);
}
