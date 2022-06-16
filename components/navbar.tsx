import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    // setTheme('light');
    setTheme(theme === 'dark' ? 'light' : 'light');
    console.log(theme);
  };

  if (!mounted) return null;

  return (
    <section className='nav'>
      <div className='container nav__container'>
        <h4>Navbar</h4>
        <button onClick={toggleTheme}>Change theme</button>
        The current theme is: {theme}
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </section>
  );
};
