import { NextComponentType } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const NavBar: NextComponentType = () => {
  return (
    <div className='border-b-2 border-gray-400 w-full flex flex-row items-center'>
      <div className='basis-1/4 pl-4 pt-2'>
        <a href='/'>
          <Image src='/igazeti.svg' width='140' height='55' />
        </a>
      </div>
      <div className='hidden basis-1/2 px-6 md:block flex items-center'>
        <input className='border p-1 px-6 rounded-full border-gray-400' />
        <button className='mx-1 px-3 py-1 rounded-md bg-gold'>
          <img src='/search.svg' width='15' className=''  />
        </button>
      </div>
      <div className='basis-1/2 text-right space-x-2 py-3 px-4 sm:px-10 md:space-x-4 md:px-4 md:px-15 lg:space-x-6 lg:px-20 md:basis-1/4'>
        <Link href='/'>
          Home
        </Link>
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

export default NavBar;
