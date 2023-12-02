import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Gallery = () => {
  
    const data=[
        {
           images:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
           heading:'Heading',
           text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorum a quaerat saepe cumque reprehenderit assumenda aliquam ipsa eius ex?',
        },
        {
          images:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
          heading:'Heading',
          text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorum a quaerat saepe cumque reprehenderit assumenda aliquam ipsa eius ex?',
       },
       {
        images:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
        heading:'Heading',
        text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorum a quaerat saepe cumque reprehenderit assumenda aliquam ipsa eius ex?',
     },
     {
      images:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
      heading:'Heading',
      text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorum a quaerat saepe cumque reprehenderit assumenda aliquam ipsa eius ex?',
   },
   {
     images:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
     heading:'Heading',
     text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorum a quaerat saepe cumque reprehenderit assumenda aliquam ipsa eius ex?',
  },
  {
   images:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
   heading:'Heading',
   text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorum a quaerat saepe cumque reprehenderit assumenda aliquam ipsa eius ex?',
},
  
{
  images:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
  heading:'Heading',
  text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorum a quaerat saepe cumque reprehenderit assumenda aliquam ipsa eius ex?',
},
{
 images:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
 heading:'Heading',
 text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorum a quaerat saepe cumque reprehenderit assumenda aliquam ipsa eius ex?',
},
{
images:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
heading:'Heading',
text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorum a quaerat saepe cumque reprehenderit assumenda aliquam ipsa eius ex?',
},
    ]

    const breakpoint = {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    };
  return (
    <div className="px-20">
    
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={breakpoint}
        className="mySwiper"
      >
{/* <div className="flex flex-wrap"> */}
    {
        data.map((val,Index)=>{
            return(
              <SwiperSlide key={Index}>

    <div key={Index} className=" w-full items-center text-center">
    
    <div className="flex items-center grid-cols-1 px-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      
            <div
                className="rounded shadow-lg  flex flex-wrap bg-white  duration-300 hover:-translate-y-1"
                >
                  <img className="mb-4"
                   src={val.images}/>                          
                    <div className="flex justify-center w-full">
                    <p className=" lg:text-lg text-sm  mb-4 font-bold dark:text-gray-300">
                               {val.heading}
                            </p>
                    </div>
                  {/* <p className="leading-5 mb-4 ml-5 text-gray-500 dark:text-gray-400">
                  {val.text}  
                  </p> */}
                        
                
            </div>
      
    </div>
</div>
</SwiperSlide>

)
})
}
{/* </div> */}
</Swiper>
    </div>

  )
}

export default Gallery