import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* create a center footer with center text and top white line  */}
      <div className="flex flex-col gap-2 justify-center items-center h-16 bg-black text-white-200 w-[850px] border-t-[1px] border-white border-opacity-20 text-sm md:w-full">
        <p>Proudly Open sourced in <Link href={'https://github.com/kasun-m-rathnayaka/Department-of-IT-Torana'} className='font-bold'>github</Link></p>
        <p>© 2024 All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer