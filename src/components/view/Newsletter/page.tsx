import React from 'react'

function NewsLetter() {
  return (
    <div className='relative  h-[80vh] flex flex-col justify-center items-center text-gray-800 space-y-4'>
        <h6 className='absolute font-bold text-[8rem] text-gray-200 text-center mx-auto -z-50'>NewsLetter</h6>
        <h6 className='font-bold text-4xl'>Subscribe Our Newsletter</h6>
        <p className='lg:max-w-lg max-w-[16rem] font-medium tex-lg'>Get the latest information and promo offers directly</p>
        <div className='flex space-x-4'>
            <input type='text' className='border border-gray-700 lg:py-1 px-2 lg:px-4 flex flex-grow w-52 lg:w-80' placeholder='Input Your Email'/>
            <button className='text-white bg-gray-900 py-2 px-4 border border-gray-700'>Get Started</button>
        </div>
    </div>
  )
}

export default NewsLetter