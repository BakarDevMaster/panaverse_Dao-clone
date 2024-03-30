import React from 'react'
import Wrapper from '../share/Wrapper'

function CoreTracks() {

const Data=[
  {
    id:1,
    title:"Quarter I",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
    number:1
  },
  {
    id:2,
    title:"Quarter II",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
    number:2

  },
  {
    id:3,
    title:"Quarter III",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
    number:3
  },
  
]

  return (
    // Boxes section
    
    <section className='flex justify-center'>
    <Wrapper>
 <div  className='flex flex-col sm:flex-row flex-1 space-y-4 max-w-screen-lg space-x-2 items-baseline  mt-6   '>

      {Data.map((item,id)=>{
     return (
        <div key={id} className='flex flex-col  border-2  relative px-4 py-8 rounded-lg'>
         <h1 className='text-2xl font-semibold'>{item.title}</h1>
          <p className='text-gray-600 '>{item.description}</p>
          <div className='absolute top-3 right-10 text-9xl font-bold -z-10 text-gray-300  '>{item.number}</div>
        </div>
           )
     })}

</div>

    </Wrapper>
    </section>
   
  )
}

export default CoreTracks
