import { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const Categories: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Categories</title>
        <meta name="description" content="Law Categories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
      </div>
      this is the categories page
    </div>
  )
}

export default Categories
