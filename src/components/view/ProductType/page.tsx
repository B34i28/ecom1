import Image from 'next/image';
import React from 'react';
import promoimg1 from "../../assets/images/promoimg1.webp";
import promoimg2 from "../../assets/images/promoimg2.webp";
import promoimg3 from "../../assets/images/promoimg3.webp";

export default function ProductType() {
  return (
    <div className='py-16 px-2 space-y-5'>
      <div className='text-center space-y-3'>
        <p className='text-blue-800 font-bold text-sm'>PROMOTIONS</p>
        <h3 className='text-3xl text-gray-800 font-bold'>Our Promotions Events</h3>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 text-gray-800'>

        <div className='w-full flex flex-col justify-between items-center sm:flex-row md:flex-row col-span-1 md:col-span-2 bg-cat1 px-12'>
          <div className='max-w-[13rem] py-8'>
            <h4 className="text-3xl font-extrabold">GET UP TO 60%</h4>
            <p className='text-xl'>For the summer season</p>
          </div>
          <div className='w-64'>
            <Image width={1000} height={1000} alt="Summer promo" src={promoimg1} />
          </div>
        </div>


        <div className='w-full row-span-1 md:row-span-2 h-full bg-cat3'>
          <div className='p-4'>
            <p className='text-lg'>Flex Sweatshirt</p>
            <p><del>$100.00</del><b> $75.00</b></p>
          </div>
          <div className='w-64'>
            <Image height={1000} width={1000} alt="SweatShirt" src={promoimg2} />
          </div>
        </div>


        <div className='w-full row-span-1 md:row-span-2 h-full bg-cat4'>
          <div className='p-4'>
            <p className='text-lg'>Flex Push Button Bomber</p>
            <p><del>$225.00</del> <b> $190.00</b></p>
          </div>
          <div className='w-64'>
            <Image height={1000} width={1000} alt="Button jack" src={promoimg3} />
          </div>
        </div>


        <div className='space-y-3 w-full col-auto md:col-span-2 py-10 text-white flex flex-col items-center justify-center bg-cat2'>
          <h3 className='font-extrabold text-4xl'>GET 30% Off</h3>
          <p>USE PROMO CODE</p>
          <button 
            aria-label='Redirect user to Dine Week End Sale'
            className='px-8 tracking-widest py-1 text-lg rounded-lg bg-gray-600'>
            DINEWEEKENDSALE
          </button>
        </div>
      </div>
    </div>
  )
}
