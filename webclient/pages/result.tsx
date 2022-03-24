import { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Scroll from '../components/Scroll';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Results: NextPage = () => {
  const { error, loading } = useTypedSelector((state) => state.laws);

  return (
    <div>
      <Head>
        <title>Results</title>
        <meta name='description' content='Donate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Scroll>
        <main className='lg:mx-36'>
          {/* <h1>this is a result page</h1> */}
          <div className='m-2 p-2 min-h-32 border border-2 rounded-lg border-black bg-light-gray'>
                <h2 className='text-4xl font-semibold py-2'>Heading</h2>
                <p>fdad</p>
                {/* <button className='text-sm mt-4 p-1.5 px-3 float-right bg-gold rounded-md'>Read More</button> */}
              </div>
          {/* {error && <h3>{error}</h3>}
          {loading && <h3>Loading...</h3>}
          {data.length === 0 ? (
            <h3>No Results</h3>
          ) : (
            data.map((item) => (
              <div className='m-2 p-2 min-h-32 border border-2 rounded-lg border-black bg-light-gray' key={item.id}>
                <span className='flex flex-wrap'>
                  <div className='text-white text-xs px-3 border border-2 border-black rounded-md bg-dark-blue mt-2'>{item.type}</div>
                  <div className='text-white text-xs mx-1 px-3 border border-2 border-black rounded-md bg-dark-gold mt-2'>{item.chapter}</div>
                  <div className='text-white text-xs mx-1 px-3 border border-2 border-black rounded-md bg-dark-green mt-2'>{item.article}</div>
                </span>
                <h2 className='text-4xl font-semibold py-2'>{item.heading}</h2>
                <p>{item.intro}</p>
                <button className='text-sm mt-4 p-1.5 px-3 float-right bg-gold rounded-md'>Read More</button>
              </div>
            ))
          )} */}
        </main>
      </Scroll>
    </div>
  );
};

export default Results;
