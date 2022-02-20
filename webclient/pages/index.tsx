import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Igazeti</title>
        <meta name="description" content="Search Laws through Igazeti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <span className="bg-red">
          <Image src='/igazeti.svg' alt="Igazeti Logo" width={492} height={138.84} />
        </span>
        <SearchBar />
      </main>
      <Footer />
    </div>
  )
}

export default Home
