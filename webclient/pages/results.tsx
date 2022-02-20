import { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'

const Results: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Results</title>
        <meta name="description" content="Donate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
      </div>
      this is the results page
    </div>
  )
}

export default Results