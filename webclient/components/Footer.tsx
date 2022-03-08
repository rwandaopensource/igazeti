import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Footer: NextComponentType = () => {
  let router = useRouter();

  // const { changeLang } = useActions();
  // const { lang } = useTypedSelector((state) => state.langs);

  // console.log(router.locale)
  const selectOption = (event: any) => {
    // changeLang(event.target.value)
    router.push(router.asPath, undefined, { locale: event.target.value })
  }

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
        <div className='flex flex-col md:flex-row text-center'>
          <Link href='/categories'>
            <p className='font-bold mx-4'>Categories</p>
          </Link>
          <Link href='/categories'>
            <p className='font-bold mx-4'>API</p>
          </Link>
          <Link href='/about'>
            <p className='font-bold mx-4'>About</p>
          </Link>
          <select className='px-1 mx-4 py-0.5 border border-black bg-inherit rounded-md uppercase selectoption relative' value={router.locale} id='' onChange={selectOption}>
            <option>en</option>
            <option>fr</option>
            <option>kin</option>
          </select>
        </div>
        <p className='pt-4 min-w-24 text-center md:pt-0 text-sm text-slate-500'>
          &copy; Rwanda Open Source, 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
