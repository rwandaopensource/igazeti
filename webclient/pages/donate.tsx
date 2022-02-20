import Head from 'next/head'
import NavBar from '../components/NavBar'

const Donate = () => {
  return (
    <div>
      <Head>
        <title>Support our Work</title>
        <meta name="description" content="Donate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
      </div>
      this is the donate page
    </div>
  )
}

export default Donate
