import React from 'react';

import { Footer, Navbar } from 'components';

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};
