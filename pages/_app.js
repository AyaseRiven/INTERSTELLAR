// // `pages/_app.js`
import Navbar from '../components/Navbar';
import '/styles/globals.css';
import {useState} from 'react';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
  );
}