import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>THE WIND BLOWS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Image src={`/landing.jpg`} width="1500px" height="650px" layout="responsive" alt="landingImage" />
    </>
  )
}

export default Home