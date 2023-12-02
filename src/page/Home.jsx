import React from 'react'
import Slidebar from "../component/Slidebar";
import Gallery from "../component/Gallery";
import Card from "../component/Card";
import BoxContainer from "../component/BoxContainer";
import Testimonials from "../component/Testimonials";
import Footer from "../component/Footer";

export const Home = () => {
  return (
    <>
   <Slidebar/> 
   <div className='text-center my-10'>
        <h1 className=' p-10 text-3xl font-bold'>Our Gallery</h1>
        <h2 className=' text-xl font-bold'>Sub head</h2>
    </div>

   <Gallery/>
   <Card/>
   <BoxContainer/>
   <Testimonials/>
   <Footer/>
  </>
  )
}
