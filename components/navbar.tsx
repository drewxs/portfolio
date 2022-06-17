import { ThemeChanger } from 'components';

export const Navbar = () => {
  return (
    <section className='nav'>
      <div className='container nav__container'>
        <div className='brand'>
          <h4>Navbar</h4>
        </div>
        <div className='nav__links'>
          <ThemeChanger />
        </div>
      </div>
    </section>
  );
};
