import type { NextPage } from 'next';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import NavBarIndex from '../components/NavBarIndex';
import { searchInput } from '../utility/searchInput';
import { searchLaws } from '../state/action-creators';
// import { SearchLaws } from '../utility/searchLaws';

const Home: NextPage = () => {
  // const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const SearchLaws = (e: any) => {
    // console.log(e.target.value)
    dispatch(searchLaws(e.target.value));
  }

  return (
    <div>
      <Head>
        <title>Igazeti - Search Rwandan Law</title>
        <meta name='description' content='Search Laws through Igazeti' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBarIndex />
      <main>
        <div className='flex flex-col py-52'>
          <Image
            src='/igazeti.svg'
            alt='Igazeti Logo'
            width={492}
            height={138.84}
          />
          <div className='flex flex-col'>
            <input placeholder='Search Laws...' className='border border-gray-400 p-4 mx-3 mt-4 rounded-full md:mx-40 lg:mx-60 xl:mx-80 2xl:mx-96' onChange={SearchLaws} />
            <button onClick={SearchLaws} className='mx-auto bg-gold rounded-md mt-4 py-2 px-24'>Search</button>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
