import Image from 'next/image'
import React from 'react'
import Fdine from '../../../../public/Logo.webp'
import Link from 'next/link'

function Footer() {
  return (
    <div className='text-gray-800 body-font'>
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 space-y-8 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href={"/"}>
            <Image width={200} height={400} src={Fdine} alt='Footer dint' />
            </Link>
            <p className="mt-2 text-sm text-gray-500">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
            </div>


            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">Company</h2>
                <nav className="list-none mb-10">
                <li>
                    <a className="text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Terms of Use</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">How it Works</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
                </nav>
            </div>


            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">Support</h2>
                <nav className="list-none mb-10">
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Support Carrer</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">24h Service</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Quick Chat</a>
                </li>
                </nav>
            </div>

            
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">Contact</h2>
                <nav className="list-none mb-10">
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Whatsapp</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800 ">Support 24h</a>
                </li>
                </nav>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Footer