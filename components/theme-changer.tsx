import { useTheme } from 'next-themes';
import { ReactElement, useEffect, useState } from 'react';

export const ThemeChanger = (): ReactElement | null => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	const handleThemeToggle = () => {
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className={`theme-changer ${resolvedTheme}`} onClick={handleThemeToggle}>
			<div className='gear'></div>
			<div className='gear tooth'></div>
			<div className='gear tooth'></div>
			<div className='gear tooth'></div>
			<div className='gear tooth'></div>
			<div className='circle'></div>
			<div className='circle inner'></div>
		</div>
	);
};
