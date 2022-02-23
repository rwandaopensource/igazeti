import { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Results: NextPage = () => {
  const { data, error, loading } = useTypedSelector((state) => state.laws);

  return (
    <div>
      <Head>
        <title>Results</title>
        <meta name='description' content='Donate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <main>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {data.length === 0 ? (
          <h3>No Results</h3>
        ) : (
          data.map((item) => <div key={item}>{item}</div>)
        )}
      </main>
    </div>
  );
};

export default Results;
