/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  // images: {
  //   domains: [
  //     'images.unsplash.com',
  //   ]
  // },

  // rewrites: async () => nextI18NextRewrites(localeSubpaths),

  // env:{
  //   API_URL : process.env.API_URL,
  //   IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  // },
  // publicRuntimeConfig:{
  //   API_URL : process.env.API_URL,
  //   IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  // },

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
