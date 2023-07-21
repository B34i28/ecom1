import { heroimg } from '@/components/assets/page';
import Featured1 from "../../assets/images/Featured1.webp"
import Featured2 from "../../assets/images/Featured2.webp"
import Featured3 from "../../assets/images/Featured3.webp"
import Featured4 from "../../assets/images/Featured4.webp"
import Image from 'next/image';
import React from 'react';
import {BsCart} from "react-icons/bs"

export default function Hero() {
    const btnText = "Start\nShopping"
  return (
    <div className='py-6 flex justify-between items-center'>
        <div className='space-y-5 max-w-[19rem]'>
            <button
            aria-label='redirect the user to sale page' 
            className='rounded-md bg-blue-100 text-blue-700 font-medium py-1 px-3'>
                Sale 70%
            </button>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-800'>An Industrial Take on Streetwear</h1>
            <p className='text-gray-600'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            <button
            aria-label='redirect the user to sale page' 
            className='flex gap-3 items-center rounded-sm ring-1 ring-slate-800 bg-gray-900 font-bold text-white py-3 px-5'>
                <BsCart size={20}/>
                <p className='whitespace-pre leading-5'>
                   {btnText}
                </p>
            </button>
            <div className='flex gap-5'>
            <Image width={120} height={70} src={Featured1} alt='bazar' />
            <Image width={120} height={70} src={Featured2} alt='bustel' />
            <Image width={120} height={70} src={Featured3} alt='versace' />
            <Image width={120} height={70} src={Featured4} alt='InStyle' />
            </div>
        </div>
        <div className='md:flex hidden bg-primaryWhite rounded-full'>
            <Image src={heroimg} alt="HeroGirlImage" />
        </div>
    </div>
  )
}
