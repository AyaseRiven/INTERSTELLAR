import Image from 'next/image';
import React from 'react';
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';


const Portfolio = () => {

  const LightGallery = dynamic(() => import('lightgallery/react'), {
    ssr: false
  });

  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>

        {/* image-full */}
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <LightGallery mode="lg-fade" plugins={[lgZoom]}>
            <a className="gallery-item"
              data-src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              data-sub-html="<h4>Photo by - GGreviews</h4>"
            >
              <Image
                src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                alt='/'
                layout='responsive'
                width={677}
                height={451}
              />
            </a>
          </LightGallery>
        </div>
         {/* image-full end*/}

        {/* image col-1 */}
          <LightGallery mode="lg-fade" plugins={[lgZoom]}>
            <a className="gallery-item"
              data-src="https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
              data-sub-html="<h4>Photo by - GGreviews</h4>"
            >
                <Image
                  src= {'https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80'}
                  alt='/'
                  width={300}
                  height={400}
                  className=" h-full object-cover"
                />
            </a>
          </LightGallery>

        {/* image col-2 */}
          <LightGallery mode="lg-fade" plugins={[lgZoom]}>
            <a className="gallery-item"
              data-src="https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80"
              data-sub-html="<h4>Photo by - GGreviews</h4>"
            >
              <Image
                src='https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80'
                alt='/'
                width={300}
                height={400}
                className=" h-full object-cover"
              />
            </a>
          </LightGallery>

        {/* image col-3 */}
          <LightGallery mode="lg-fade" plugins={[lgZoom]}>
            <a className="gallery-item"
              data-src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              data-sub-html="<h4>Photo by - GGreviews</h4>"
            >
              <Image
                src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                alt='/'
                width={300}
                height={400}
                className=" h-full object-cover "
              />
            </a>
          </LightGallery>

        {/* image col-4 */}
          <LightGallery mode="lg-fade" plugins={[lgZoom]}>
            <a className="gallery-item"
              data-src="https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80"
              data-sub-html="<h4>Photo by - GGreviews</h4>"
            >
              <Image
                src='https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80'
                alt='/'
                width={300}
                height={400}
                className=" h-full object-cover "
              />
            </a>
          </LightGallery>
      </div>
    </div>
  );
};

export default Portfolio;
