// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import Image from "../assets/aayaadi.png"

export const Header = () => {
  return (
    <div className='w-full h-full'>
      <div className=' w-full h-20 text-2xl pl-24 pr-24 text-center sm:text-left bg-red-100 flex items-center justify-between'>
      <img className=' h-20 w-20'
       src={Image} alt="" />
      <div className=' space-x-9'>
        <Link href="/">Home</Link>
        <Link href="">Home</Link>
        <Link href="">Home</Link>
        <Link href="">Home</Link>
        <Link href="/about">About</Link> 
        </div>
        <input className="placeholder:italic pl-2 placeholder:text-slate-400 block bg-white w-2/12 border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        <BsSearch/>
    </div>
   </div> 
  )
}