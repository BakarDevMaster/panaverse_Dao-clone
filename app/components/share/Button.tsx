import React, { FC } from 'react'
 const Button:FC<{text:string}>=({text})=> {
  return (
    <button className="bg-teal-700 py-3 px-3 mt-4 rounded-3xl  hover:shadow-xl text-white font-semibold hover:text-blue-700 hover:bg-teal-500 sm:hover:scale-110 duration-500 hover:scale-105">{text}</button>
  )
}
export default Button;
