import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';
import React from 'react';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading='Nature is the Best Artist' message='minerals,fossils & jewelry since 1987' />
      <Slider slides={SliderData} />
      <Instagram />
      <Footer />
    </div>
    
  )
}