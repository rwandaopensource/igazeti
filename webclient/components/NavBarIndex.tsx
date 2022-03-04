import { NextComponentType } from 'next';
import Link from 'next/link';

const NavBarIndex: NextComponentType = () => {
  return (
    <div className='w-full'>
      <div className='text-right space-x-2 py-3 px-4 sm:py-2 sm:px-10 md:space-x-4 md:px-4 md:px-15 lg:space-x-6 lg:py-6 lg:px-20'>
        <Link href='/categories'>
          Categories
        </Link>
        <Link href='/about'>
          About
        </Link>
        <Link href='/donate'>
          Donate
        </Link>
      </div>
    </div>
  );
};

export default NavBarIndex;
