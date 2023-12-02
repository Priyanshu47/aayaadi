import React from 'react'

const Card = () => {
  const data=[
    {
        heading:'Lorem ipsum',
        title:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora unde, at quam quod labore omnis, beatae eos, sit suscipit provident. Accusantium laudantium laboriosam quis! ',
        author:'Ram',
    },
    {
        heading:'Lorem ipsum',
        title:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora unde, at quam quod labore omnis, beatae eos, sit suscipit provident. Accusantium laudantium laboriosam quis! ',
        author:'Ram',
    },
    {
        heading:'Lorem ipsum',
        title:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora unde, at quam quod labore omnis, beatae eos, sit suscipit provident. Accusantium laudantium laboriosam quis! ',
        author:'Ram',
    }
    
  ]
    return(
    <div className='text-center mt-40 '>
            <h1 className='text-3xl font-bold'>Our Services</h1>
        <div className="container my-12 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap -mx-1 lg:-mx-4 px-8 ">

        {/* <!-- Column --> */}
       
            { 
                  data.map((value,Index)=>{
                        return(
                            <div key={Index} className=" my-1 mb-20 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            
                            {/* <!-- Article --> */}
                            <article className="overflow-hidden text-xl rounded-lg shadow-lg p-5">
                        

                            <h1 className='text-xl font-semibold m-2'>{value.heading}</h1>
                            <p className='text-lg p-2'>{value.title}</p>
                          <div className='items-end mt-2 text-right flex-row-reverse text-sm font-semibold hover:text-blue-600'>  
                            <button >Read More</button>
                            </div>
                
                            </article>  
 </div>
                            
                        )
                    })
                }
           
         </div>
     </div>
</div>
  )
}

export default Card