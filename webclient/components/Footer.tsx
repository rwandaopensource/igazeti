import { NextComponentType } from 'next';
import Image from 'next/image';

const Footer: NextComponentType = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center md:space-x-40 py-28 md:flex-row'>
        <Image
          src='/igazeti.svg'
          alt='Igazeti Logo'
          width={143}
          height={40}
          className='min-w-24'
        />
        <div className='pt-4 space-x-8 min-w-24 text-center md:pt-0'>
          <a href='/categories' rel='noopener noreferrer' className='font-bold'>
            Categories
          </a>
          <a href='/categories' rel='noopener noreferrer' className='font-bold'>
            API
          </a>
          <a href='/about' rel='noopener noreferrer' className='font-bold'>
            About
          </a>
        </div>
        <p className='pt-4 min-w-24 text-center md:pt-0 text-sm text-slate-500'>
          &copy; Rwanda Open Source, 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
