import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png"
        />
      </Head>
      <Header />
      <Feed />
      <Modal />
    </div>
  )
}

export default Home
