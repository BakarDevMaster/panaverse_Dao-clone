"use client"
import Image from 'next/image'
import Button from '../share/Button'
import Wrapper from '../share/Wrapper'
import logo from "/public/king.jpg"
import log from "/public/cat.jpeg"
import lo from "/public/horse.jpeg"
import logoo from "/public/engineer.jpeg"
import logooo from "/public/bear.jpeg"
import { useState } from 'react'






function SpecializedTracks() {
   
    //  Array of Five objects
  const programsData =[
    {
      slug:"wmd",
      header:"Web 3.0 and Metaverse technolgy",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:logooo,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:4
        },
        {
        
          title:"Quarter V",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:5
        }
      ]
    },
    {
      slug:"b",
      header:"Web 3.0 and python technolgy",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:lo,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:6
        },
        {
        
          title:"Quarter V",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:7
        }
      ]
    },
    {
      slug:"c",
      header:"Web 3.0 and software technolgy",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:logoo,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:8
        },
        {
         
          title:"Quarter V",
          description:"Lorem ipsum dolor sit amet consectetur m dolor sit amet cadipisicing elit. Ipsam, accusantium?",
          number:9
        }
      ]
    },
    {
      slug:"d",
      header:"Web 3.0 and example  technolgy",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:logo,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Loremlor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:10
        },
        {
        
          title:"Quarter V",
          description:"Lorem ipsuectetur adipisicing elit. Ipsam, accusantium?",
          number:11
        }
      ]
    },
    {
      slug:"b",
      header:"Web 3.0 and python technolgy",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:lo,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:6
        },
        {
        
          title:"Quarter V",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:7
        }
      ]
    },
    {
      slug:"c",
      header:"Web 3.0 and software technolgy",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:logoo,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:8
        },
        {
         
          title:"Quarter V",
          description:"Lorem ipsum dolor sit amet consectetur m dolor sit amet cadipisicing elit. Ipsam, accusantium?",
          number:9
        }
      ]
    },
    {
      slug:"d",
      header:"Web 3.0 and example  technolgy",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:logo,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Loremlor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:10
        },
        {
        
          title:"Quarter V",
          description:"Lorem ipsuectetur adipisicing elit. Ipsam, accusantium?",
          number:11
        }
      ]
    },
    {
      slug:"b",
      header:"Web 3.0 and python technolgy",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:lo,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:6
        },
        {
        
          title:"Quarter V",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:7
        }
      ]
    },
    {
      slug:"c",
      header:"Web 3.0 and software technolgy",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:logoo,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:8
        },
        {
         
          title:"Quarter V",
          description:"Lorem ipsum dolor sit amet consectetur m dolor sit amet cadipisicing elit. Ipsam, accusantium?",
          number:9
        }
      ]
    },
    {
      slug:"d",
      header:"Web 3.0 and example  technolgy",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:logo,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Loremlor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:10
        },
        {
        
          title:"Quarter V",
          description:"Lorem ipsuectetur adipisicing elit. Ipsam, accusantium?",
          number:11
        }
      ]
    },
    {
      slug:"b",
      header:"Web 3.0 and python technolgy",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:lo,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:6
        },
        {
        
          title:"Quarter V",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:7
        }
      ]
    },
    {
      slug:"c",
      header:"Web 3.0 and software technolgy",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:logoo,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium?sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:8
        },
        {
         
          title:"Quarter V",
          description:"Lorem ipsum dolor sit amet consectetur m dolor sit amet cadipisicing elit. Ipsam, accusantium?",
          number:9
        }
      ]
    },
    {
      slug:"d",
      header:"Web 3.0 and example  technolgy",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:logo,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Loremlor sit amet consectetur adipisicing elit. Ipsam, accusantium?",
          number:10
        },
        {
        
          title:"Quarter V",
          description:"Lorem ipsuectetur adipisicing elit. Ipsam, accusantium?",
          number:11
        }
      ]
    },
    {
      slug:"e",
      header:"Artificial Intelligence and OpenAI",
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti quae eligendi dolor facere quidem hic quaerat sunt natus fugit, cupiditate quam labore provident ',
      img:log,
      quarters:[
        {
        
          title:"Quarter IV",
          description:"Lorem ipsum dolor sit amet consect",
          number:12
        },
        {
        
          title:"Quarter V",
          description:"Lorem ipsum dolor sit amet conse elit. Ipsam, accusantium?",
          number:13
        }
      ]
    }
  ]

  const[item,setItem]=useState("wmd")

  const data = programsData.find((program) => {
    return (program.slug===item );
});
console.log(data)

 
  return (
<section>
    <Wrapper>

{/* Specialized tracks section */}
    <div className='mt-10'>
       <div className='max-w-screen-md'>
        <h1 className='text-3xl font-bold'>Specialize Tracks:</h1>
        <p className='text-gray-600 text-xl mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, qui!</p>
       </div>
       </div>
         
       
       {/* Data of programs when user click on image */}
       <div className=' flex md:flex-row  flex-col-reverse gap-x-4 gap-y-6'>
     <div className='mt-10 border rounded-lg p-6 self-start  sticky top-20 shadow-xl basis-8/12 border-slate-200 '>
        
        <div >
        <h4 className='text-xl font-semibold text-teal-800 '>Specialized Program</h4>
        <h3 className='text-3xl font-bold mt-2'>{data?.header}</h3>
        <p className='mt-4'>{data?.desc}</p>
     <Button text='Learn More'/>
       </div>


       {/* Data of programs quarters when user click on image */}

       <div  className='sm:flex space-y-4 max-w-screen-lg space-x-2  items-baseline mt-6'>
{data?.quarters.map((item,i)=>{
  return (
  
        <div key={i} className='   relative px-4 py-8 '>
         <h1 className='text-2xl font-semibold'>{item.title}</h1>
          <p className='text-gray-600 '>{item.description}</p>
          <div className='absolute top-3 right-10 text-9xl font-bold -z-10 text-gray-300  '>{item.number}</div>
        </div>
           
  )

})}
  </div>      
</div>


{/* Side images with Data */}
<div className=' space-x-2 space-y-4 basis-4/12  mt-10  '>
{programsData.map((item, i)=>(
  <div key={item.slug} onClick={()=>setItem(item.slug)} className='flex justify-center space-x-2 items-center cursor-pointer   '>
  <div className='flex-shrink-0 h-24 w-36'>
    <Image src={item.img}  alt='video' className='h-24  rounded-lg object-cover '/>
  </div>
  <div>
    <h1  className="text-teal-700 hover:text-teal-800  cursor-pointer font-semibold">Specialized Program</h1>
    <p className="text-lg fontbold">{item.header} </p>
  </div></div>
))}
  
</div>
</div>
    </Wrapper>
</section>

  )
}

export default SpecializedTracks
