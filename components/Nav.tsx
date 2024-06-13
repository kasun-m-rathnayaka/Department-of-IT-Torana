import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex flex-row justify-between mx-20 my-5'>
        <Link href={'https://mgt.sjp.ac.lk/itc/study/bis/'}>
            <Image src={'/icons/logo.png'} alt='logo' width={130} height={100}/>
        </Link>
        <Link href={'/'}>
            <button className='rounded-full border border-white bg-transparent py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black-100 text-center text-sm font-inter flex items-center justify-center'>More info</button>
        </Link>
    </nav>
  )
}

export default Nav