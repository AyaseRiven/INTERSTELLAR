/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
require('dotenv').config()

module.exports = {
  // images: {
  //   domains: [
  //     'images.unsplash.com',
  //   ]
  // },
  env: {
    API_URL: 'https://spu-strapi.apptr1.com',
  },
  
  images:{
    deviceSizes:[640,768,1024,1280,1600],
    ImageSizes:[16,32,48,64,96],
    domains:['spu-strapi.apptr1.com','images.unsplash.com'],
    loader:'default',

  
    // domains: [
    //       'images.unsplash.com',
    //     ]
  }
}
