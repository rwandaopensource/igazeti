import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/NavBar';

interface AboutPageProps {
    data: {
        name: string
    }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const About: NextPage<AboutPageProps> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Igazeti</title>
        <meta name="description" content="Search Laws through Igazeti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
      </div>
      <div className="text-3xl font-bold underline">{data.name}</div>
    </div>
  );
};

export default About;
