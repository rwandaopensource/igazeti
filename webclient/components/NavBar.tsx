import { NextComponentType } from 'next';

const NavBar: NextComponentType = () => {
  return (
    <div className="flex">
      <div className="bg-black w-1/2">some</div>
      <div className="bg-neutral-600 z-50 border-b-red-600 w-1/2">
        <div className="space-x-2 w-24">
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
    </div>
  );
};

export default NavBar;
