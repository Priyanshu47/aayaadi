import React from 'react'
import image from '../assets/react.svg'

const BoxContainer = () => {
    const data=[
        {
            heading:'LOrema afaf',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptas. ',
            image:image,
        },
        {
            heading:'LOrema afaf',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptas. ',
            image:image,
        },
        {
            heading:'LOrema afaf',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptas. ',
            image:image,
        },
        {
            heading:'LOrema afaf',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptas. ',
            image:image,
        },
        {
            heading:'LOrema afaf',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptas. ',
            image:image,
        },
        {
            heading:'LOrema afaf',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptas. ',
            image:image,
        }
    ]
  return (
    <div className='text-center'>
    <h1 className='text-3xl font-bold mt-40 mb-16'>Heading</h1>
    <div className='flex flex-wrap -px-1 lg:-px-4 px-8'>
        {
            data.map((value,Index)=>{
                return(
                    <div className='my-1 mb-20 px-1 md:w-1/2 lg:my-4 lg:w-1/3 lg:px-20' key={Index}>
 <div className=" min-h-16 grid place-content-start">
<div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8  h-60 max-w-xs mx-auto">
  <h1 className="text-3xl mb-3">{value.heading}</h1>
  <p className="text-lg">{value.title}</p>
</div>
<div className="bg-white rounded-md shadow-lg transform bg-fixed sm:translate-x-32  sm:-translate-y-20 mx-auto -mt-10 md:w-2/6 lg:my-4 lg:px-4 lg:w-1/2">
                    <img className='h-32 w-32'  src={value.image} alt="" />
        </div>
                </div>
                        </div>
                )
            })
        }
    </div>
 
</div>
  )
}

export default BoxContainer