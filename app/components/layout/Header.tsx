import Image from "next/image";
import Logo from "/public/R.png"
import Link from "next/link"
import Wrapper from "../share/Wrapper";
export default function Header() {
  return (<header className=" sticky top-0  bg-white z-10 ">
  <Wrapper> 
    <div className="flex justify-between  py-4  items-center">
    <div><Image src={Logo} alt="panaverse dao logo" width={90} height={45} className="" /></div>
    <ul className="flex  font-medium space-x-4 md:space-x-8">
      <li className="hover:text-gray-800">
        <Link href={"#"}>Home
        </Link> 
        </li>
        <li className="hover:text-gray-800">
        <Link href={"#"}>Courses
        </Link> 
        </li>
      
    </ul></div>
   </Wrapper></header>
  )
}
