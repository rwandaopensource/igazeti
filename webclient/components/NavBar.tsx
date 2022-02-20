import { NextComponentType } from 'next';

const NavBar: NextComponentType = () => {
  return (
    <div className='w-full'>
      <div className='text-right space-x-2 py-3 px-4 sm:py-2 sm:px-10 md:space-x-4 md:px-4 md:px-15 lg:space-x-6 lg:py-6 lg:px-20'>
        <a href='/' rel='noopener noreferrer'>
          Home
        </a>
        <a href='/categories' rel='noopener noreferrer'>
          Categories
        </a>
        <a href='/about' rel='noopener noreferrer'>
          About
        </a>
        <a href='/donate' rel='noopener noreferrer'>
          Donate
        </a>
      </div>
    </div>
  );
};

export default NavBar;