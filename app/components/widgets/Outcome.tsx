import Image from 'next/image'
import img from "/public/tech.png"
import Wrapper from '../share/Wrapper'
import { BiCheckCircle } from "react-icons/bi";


function Outcome() {

const outcomepoints=["Freelancing","Video Editing","Web Development","AI-Engineering"]
  return (
    <section className=' mt-16'>
    <Wrapper>  

    <div className='md:flex gap-x-8 items-center'>

        {/* image portion */}
    <div className='md:flex-1 mb-6 md:-mt-10 -mt-14 rounded-lg'>
      <Image src={img} alt='tech' />
    </div>
 

        {/* programs heading,desc etc portion */}
    <div className='sm:flex-1'>
        

    <div>
       <h1 className='sm:text-5xl text-3xl font-bold md:mb-4 mb-2'>The Outcome of Participants of Program</h1>
       <p className='text-slate-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit iusto error non reprehenderit, harum voluptatum nulla alias perspiciatis inventore quaerat! voluptatum nulla alias perspiciatis inventore quaerat!voluptatum nulla alias perspiciatis inventore quaerat!</p>
    </div>

     
      <div className='mt-6 grid sm:grid-cols-2 sm:gap-x-4 gap-x-2 sm:gap-y-10 gap-y-6 '>
        {outcomepoints.map((item,i)=>(
            <div key={i} className='flex items-center gap-x-3 text-xl font-bold '>
                <BiCheckCircle className='text-3xl  text-teal-700 font-bold' />
                { item}
                </div>
           
            ) )}
      </div>
      


      </div>



      </div>
      </Wrapper>  
    </section>
  )
}

export default Outcome
