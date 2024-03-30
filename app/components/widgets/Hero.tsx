import Image from "next/image";
import Wrapper from "../share/Wrapper";
import Button from "../share/Button";

export default function Hero(){
    return(
          
        <section>
        <Wrapper>
         <div className=" flex flex-col lg:flex-row items-center flex-wrap justify-center">
            <div className="lg:flex-1">
               <h4 className="text-teal-700 font-semibold text-lg mt-4 ">Presidentisal initiative of Artificial intelligence...</h4>
               <h1 className="lg:text-5xl font-bold text-3xl sm:text-5xl max-w-screen-sm ">Certified web developer AI Course</h1>
               <p className="mt-4 text-lg text-slate-600 max-w-screen-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempore fugiat nostrum libero ullam nisi!</p>
              <div> <Button text="Enroll Now"/></div>
            </div >
            <div className="lg:flex-1 mt-4">
                <Image src={"/OIP.jpeg"} alt="metaverse course" width={688} height={591} />
            </div>
         </div>
        </Wrapper>
        </section>
    )
}