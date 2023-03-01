// import IgImg1 from '/public/ig-img-1.jpeg';
import Image from "next/image";
import lgZoom from "lightgallery/plugins/zoom";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Link from "next/Link";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

const Diary = () => {
  const [attractions, setAttractions] = useState([]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/diary?populate=images")
      .then((res) => res.json())
      .then((result) => setAttractions(result.data.attributes.images.data));

    fetch("http://localhost:1337/api/diary")
      .then((res) => res.json())
      .then((result) => setDescription(result.data.attributes));
  }, []);

  return (
    <div>
      <div className="max-w-[1240px] mx-auto py-12 text-center">
        <h5 className="font-bold text-4xl p-1">My Diary</h5>
      </div>
      {attractions.map((attraction) => (
        <div className="max-w-md mx-auto">
          <div className="bg-white shadow-xl rounded-lg py-1">
            <div className="photo-wrapper p-2 ">
              <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                {/* <h1>The value of customKey is: {process.env.API_URL}</h1> */}
                <a
                  className="gallery-item"
                  data-src={process.env.API_URL + attraction.attributes.url}
                  data-sub-html="<h4>Photo by - Nature</h4>"
                >
                  <Image
                    src={process.env.API_URL + attraction.attributes.url}
                    width={500}
                    height={100}
                    alt="/"
                    layout=" resposive"
                    className=" w-72 h-72 mx-auto rounded-full dark:bg-gray-500 aspect-squar"
                  />
                </a>
              </LightGallery>
            </div>
            <div className="p-2">
              <h3 className="text-center text-2xl text-gray-900 font-medium leading-8">
                {description.name}
              </h3>
              <div className="text-center text-gray-400 text-md font-semibold">
                <p>{description.class}</p>
              </div>
              <table className="text-md my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Address :
                    </td>
                    <td className="px-2 py-2">{description.address}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Phone :
                    </td>
                    <td className="px-2 py-2">+{description.Phone}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email :
                    </td>
                    <td className="px-2 py-2">{description.email}</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center my-3">
                <a
                  className="text-md text-indigo-500 italic hover:underline hover:text-indigo-400 font-medium"
                  href="#"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Diary;
