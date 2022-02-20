import { NextComponentType } from 'next';
import Image from 'next/image';

const Footer: NextComponentType = () => {
  return (
    <div>
      <Image src='/igazeti.svg' alt="Igazeti Logo" width={143} height={40} />
      <div>
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
      <p>&copy; Rwanda Open Source, 2022</p>
    </div>
  )
}

export default Footer;
