"use client"
import { NavebarArray ,NavebarItemType } from '@/components/utils/NavebarArrayAndTypes'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import {BiSearch} from "react-icons/bi"
import {BsCart} from "react-icons/bs"
import {HiOutlineChevronDown} from 'react-icons/hi'
import DropDown from './subcomponents/dropDown'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import Expand from './subcomponents/Expand'
import { useRouter } from 'next/navigation'

export default function Navebar() {
    const router = useRouter();
    const [isNavebarOpen , setNavebarOpen] = useState<boolean>(false);
    const [cartItemNumber , setCartItemNumber] = useState<number>(0);
    const [searchQuery , setSearchQuery] = useState("");

    function handleSearchCalledFunc(e:any){
        console.log(e.key,e.keycode);
        if(e.key ==="Entre" && e.keycode === 13){
            router.push(`/search/${searchQuery}`)
        }
    }

  return (
    <div className='sticky top-0 backdrop:blur-lg bg-white z-50'>
        <div className='flex py-6 justify-between items-center space-x-12'>
            <Link href="/" className='w-36 flex-shrink-0'>
            <Image width={500} height={500} src={"/Logo.webp"} alt="Logo" />
            </Link>
            <div className='hidden lg:flex justify-center items-center w-full'>
                <ul className='flex space-x-4 font-medium text-lg'>
                    {NavebarArray.map((item:NavebarItemType, index:number)=>(
                        <li key={index} className='flex items-center relative rounded-md px-3 py-1 hover:bg-slate-300 cursor-pointer group'>
                            <Link  href={item.href}>{item.label}</Link>
                            {item.isDorpDown? <HiOutlineChevronDown className='mt-1 rotate-180 group-hover:rotate-0 duration-300' size={16} /> :""}
                            {item.isDorpDown && <div className={`invisible group-hover:visible absolute top-8 py-2 px-6 left-0 p-2 bg-gray-100 font-light`}>
                            <DropDown item={item} />
                            </div>}
                        </li>
                    ))}
                </ul>
                <div className='border flex items-center text-gray-600 px-3 rounded-md'>
                    <Link href={`/search/${searchQuery}`}><BiSearch/></Link>
                    <input
                        type='text'
                        value={searchQuery}
                        onKeyDown={handleSearchCalledFunc}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='pr-5 pl-1 py-1 w-80' 
                        placeholder='What you looking for'
                        />
                </div>
                <div className='relative flex-shrink-0 w-11 h-11 bg-gray-300 rounded-full items-center flex justify-center'>
                    <div className='absolute top-1 rounded-full w-4 h-4 flex justify-center items-center right-2 bg-red-500 text-xm font-light'>
                        {cartItemNumber}
                    </div>
                    <BsCart size={24}/>
                </div>
            </div>
            <div onClick={()=>setNavebarOpen(!isNavebarOpen)}>
            {isNavebarOpen?
                <div className='flex lg:hidden'>
                    <IoMdClose size={30} />
                </div>
                :
                <div className='flex lg:hidden'>
                    <GiHamburgerMenu size={30} />
                </div>
            }
            </div>            
        </div>
        {
            isNavebarOpen && <MobileNavebar  />
        }
    </div>
  )
}

const MobileNavebar = () => {
    return (
        <div className='w-full px-6 py-4 bg-gray-300'>
            {
                NavebarArray.map((item:NavebarItemType, index:number) =>{
                    return (
                        <Expand key={index} item={item} />
                    )
                })
            }
        </div>
       
    )
}
