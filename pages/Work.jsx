import Head from 'next/head'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import React from 'react';
import Diary from '../components/Diary';
// import Link from 'next/Link'

const Work = () => {

  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading='My Work' message='This is some of my recent work traveling the world.' />
      <Portfolio />
      <Diary />
    </div>
  )
}

export default Work
