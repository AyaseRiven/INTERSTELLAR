// import IgImg1 from '/public/ig-img-1.jpeg';
import Image from 'next/image';
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';



const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false
});

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';


const Instagram = () => {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    fetch("https://spu-strapi.apptr1.com/api/gallery?populate=image")
      .then(res => res.json())
      .then(result => setAttractions(result.data.attributes.image.data))
  }, []);

  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className=' text-2xl font-bold'>Follow Me on Instagram</p>
      <p className=' pb-4'>@Captur</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        {/* <LightGallery  mode="lg-fade" plugins={[lgZoom]}>
        <a className="gallery-item"
          data-src="/ig-img-1.jpeg"
          data-sub-html="<h4>Photo by - GGreviews</h4>"
        >
           <InstagramImg socialImg={IgImg1} />
        </a> 
      </LightGallery>

        {/* Image API  */}
        {attractions.map(attraction => (

          <LightGallery mode="lg-fade" plugins={[lgZoom]}>
            <a className="gallery-item"
              data-src={"https://spu-strapi.apptr1.com" + attraction.attributes.url}
              data-sub-html="<h4>Photo by - GGreviews</h4>"
            >
              <div className=' relative'>
                <Image src={"https://spu-strapi.apptr1.com" + attraction.attributes.url} width={300} height={100} alt='/' layout=' resposive' />
                {/* Overlay */}
                <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
                  <p className=' text-gray-300 hidden group-hover:block'>
                    <FaInstagram size={30} />
                  </p>
                </div>
              </div>
            </a>
          </LightGallery>
        ))}
      </div>
    </div>
  )
}

export default Instagram
