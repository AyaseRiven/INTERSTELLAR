// import IgImg1 from '/public/ig-img-1.jpeg';
import Image from "next/image";
import lgZoom from "lightgallery/plugins/zoom";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

const Story = () => {
  const [attractions, setAttractions] = useState([]);
  //   const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/stories?populate=image")
      .then((res) => res.json())
      .then((result) => setAttractions(result.data));

    // fetch("http://localhost:1337/api/stories")
    //   .then(res => res.json())
    //   .then(result => setDescriptions(result.data))
  }, []);

  return (
    <div>
      <div className="max-w-[1240px] mx-auto py-12 text-center">
        <h5 className="font-bold text-4xl pt-12">My Story</h5>
      </div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* <!--Card 1--> */}
          {attractions.map((attraction) => (
            <div className="rounded overflow-hidden shadow-lg">
              <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                <a
                  className="gallery-item"
                  data-src={
                    process.env.API_URL +
                    attraction.attributes.image.data.attributes.url
                  }
                  data-sub-html="<h4>Photo by - GGreviews</h4>"
                >
                  <Image
                    src={
                      process.env.API_URL +
                      attraction.attributes.image.data.attributes.url
                    }
                    width={500}
                    height={100}
                    alt="/"
                    layout=" resposive"
                  />
                </a>
              </LightGallery>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {attraction.attributes.name}
                </div>
                <p className="text-gray-700 text-base">
                  {attraction.attributes.discussion}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{attraction.attributes.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
