// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { FaInstagram } from 'react-icons/fa';

// const InstagramImg = () => {
//   const [attractions, setAttractions] = useState([]);

//     useEffect( () =>{
//       fetch("https://spu-strapi.apptr1.com/api/gallery?populate=image")
//         .then(res => res.json())
//         .then(result => setAttractions(result.data.attributes.image.data))
//     }, []);

//   return (
//     // {attractions.map(attraction => ( 
//         <div className=' relative'>  
//             <Image src={"https://spu-strapi.apptr1.com"+attraction.attributes.url}  width={100} height={100} alt='/' layout=' resposive' />
//             {/* Overlay */}
//             <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
//                 <p className=' text-gray-300 hidden group-hover:block'>
//                     <FaInstagram size={30} />
//                 </p>
//             </div>
//         </div>
//     // ))} 

//   );
// };


//    {/* {attractions.map(attraction => (
//             <div className=' relative hover:bg-black/50 group'>
//                     <LightGallery  mode="lg-fade" plugins={[lgZoom]}>
//                       <a className="gallery-item"
//                         data-src={"https://spu-strapi.apptr1.com"+attraction.attributes.url}
//                         data-sub-html="<h4>Photo by - GGreviews</h4>"
//                       >
//                         <Image src={"https://spu-strapi.apptr1.com"+attraction.attributes.url} width={500} height={500} />
//                       </a>
//                 </LightGallery>  
//            </div>
//           ))} */}
// export default InstagramImg;
// ไม่ได้ใช้้แล้ว
