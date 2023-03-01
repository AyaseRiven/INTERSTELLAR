/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
require('dotenv').config()

module.exports = {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    API_TOKEN: process.env.API_TOKEN,
},

  env: {
    API_URL: 'http://localhost:1337',
    API_TOKEN: '4f0d1201ebacef98a4ba05fc9f1fccb2d9e9396c4ab8e69f3530d0169708d1f311b129bb4e97b815f49fd86f6cf53acdafea822d8dac032689c28f5eb16fb6d5a250c10350ef098a3085e5e56e8f21febcf9141a728bef04ff33e2cff00682f3c9ff72d432e9a05913a6bec5ebab0b40dd23cf64ef736999d840090d18bffc2f'
  },
  
  images:{
    deviceSizes:[640,768,1024,1280,1600],
    ImageSizes:[16,32,48,64,96],
    domains:['localhost','images.unsplash.com'],
    loader:'default',
  }
}
