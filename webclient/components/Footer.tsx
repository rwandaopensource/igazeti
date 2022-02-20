import { NextComponentType } from 'next';
import Image from 'next/image';

const Footer: NextComponentType = () => {
  return (
    <div>
      <div className='flex flex-col p-8 lg:mx-32 md:flex-row md:space-x-52 lg:space-x-96'>
        <Image
          src='/igazeti.svg'
          alt='Igazeti Logo'
          width={143}
          height={40}
          className='bg-red-500 min-w-24'
        />
        <div className='pt-4 space-x-4 bg-red-500 min-w-24 text-center md:pt-0'>
          <a href='/' rel='noopener noreferrer'>
            Categories
          </a>
          <a href='/categories' rel='noopener noreferrer'>
            API
          </a>
          <a href='/about' rel='noopener noreferrer'>
            About
          </a>
        </div>
        <p className='pt-4 min-w-24 bg-red-500 text-center md:pt-0'>
          &copy; Rwanda Open Source, 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
