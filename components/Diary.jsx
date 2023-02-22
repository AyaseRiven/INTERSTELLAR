// import IgImg1 from '/public/ig-img-1.jpeg';
import Image from 'next/image';
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import Link from 'next/Link'

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false
});

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';


const Diary = () => {
  const [attractions, setAttractions] = useState([]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch("https://spu-strapi.apptr1.com/api/diary?populate=images")
      .then(res => res.json())
      .then(result => setAttractions(result.data.attributes.images.data))
     

    fetch("https://spu-strapi.apptr1.com/api/diary")
      .then(res => res.json())
      .then(result => setDescription(result.data.attributes))
  }, []);
  return (
    <div>     
            <div className='max-w-[1240px] mx-auto py-12 text-center'>
                <h5 class="font-bold text-4xl p-1">My Diary</h5>
            </div>
        {attractions.map(attraction => (
              <div class="container my-12 mx-auto px-4 md:px-12">
              <div class="flex flex-wrap -mx-1 lg:-mx-4">
      
                  {/* <!-- Column --> */}
                  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      
                      {/* <!-- Article --> */}
                      <article class="overflow-hidden rounded-lg shadow-lg">
      
                          <a href="#">
                              <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                                  {/* <h1>The value of customKey is: {process.env.API_URL}</h1> */}
                                  <a className="gallery-item"
                                  data-src={process.env.API_URL + attraction.attributes.url}
                                  data-sub-html="<h4>Photo by - GGreviews</h4>"
                                  >              
                                      <Image src={process.env.API_URL + attraction.attributes.url} width={500} height={100} alt='/' layout=' resposive' />
                                  </a>
                              </LightGallery>
                          </a>
      
                          <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                              <h1 class="text-lg">
                                  <a class="mb-2 text-2xl font-bold tracking-tight dark:text-black no-underline hover:underline text-black" href="#">
                                    {description.name}
                                  </a>
                              </h1>
                              <p class="text-grey-darker text-sm">
                                {description.date}
                              </p>
                          </header>
      
                          <footer class="flex items-center justify-between leading-none p-5 md:p-5">
                              <p class="mb-3 font-normal text-gray-400 dark:text-gray-600">{description.discussion}</p>
                          </footer>
      
                      </article>
                      {/* <!-- END Article --> */}
      
                  </div>
                  {/* <!-- END Column --> */}
      
                  {/* <!-- Column --> */}
                  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      
                      {/* <!-- Article --> */}
                      <article class="overflow-hidden rounded-lg shadow-lg">
      
                          <a href="#">
                              <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                                  {/* <h1>The value of customKey is: {process.env.API_URL}</h1> */}
                                  <a className="gallery-item"
                                  data-src={process.env.API_URL + attraction.attributes.url}
                                  data-sub-html="<h4>Photo by - GGreviews</h4>"
                                  >              
                                      <Image src={process.env.API_URL + attraction.attributes.url} width={500} height={100} alt='/' layout=' resposive' />
                                  </a>
                              </LightGallery>
                          </a>
      
                          <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                              <h1 class="text-lg">
                                  <a class="mb-2 text-2xl font-bold tracking-tight dark:text-black no-underline hover:underline text-black" href="#">
                                    {description.name}
                                  </a>
                              </h1>
                              <p class="text-grey-darker text-sm">
                                {description.date}
                              </p>
                          </header>
      
                          <footer class="flex items-center justify-between leading-none p-5 md:p-5">
                              <p class="mb-3 font-normal text-gray-400 dark:text-gray-600">{description.discussion}</p>
                          </footer>
      
                      </article>
                      {/* <!-- END Article --> */}
      
                  </div>
                  {/* <!-- END Column --> */}
      
                   {/* <!-- Column --> */}
                   <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      
                        {/* <!-- Article --> */}
                        <article class="overflow-hidden rounded-lg shadow-lg">

                            <a href="#">
                                <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                                    {/* <h1>The value of customKey is: {process.env.API_URL}</h1> */}
                                    <a className="gallery-item"
                                    data-src={process.env.API_URL + attraction.attributes.url}
                                    data-sub-html="<h4>Photo by - GGreviews</h4>"
                                    >              
                                        <Image src={process.env.API_URL + attraction.attributes.url} width={500} height={100} alt='/' layout=' resposive' />
                                    </a>
                                </LightGallery>
                            </a>

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="mb-2 text-2xl font-bold tracking-tight dark:text-black no-underline hover:underline text-black" href="#">
                                      {description.name}
                                    </a>
                                </h1>
                                <p class="text-grey-darker text-sm">
                                  {description.date}
                                </p>
                            </header>

                            <footer class="flex items-center justify-between leading-none p-5 md:p-5">
                                <p class="mb-3 font-normal text-gray-400 dark:text-gray-600">{description.discussion}</p>
                            </footer>

                        </article>
                        {/* <!-- END Article --> */}

                    </div>
                    {/* <!-- END Column --> */}
              </div>
          </div>
        ))}
    </div>
  )
}

export default Diary
