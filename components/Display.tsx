import Image from 'next/image'
import React from 'react'

const Display = () => {
  return (
    <div>
      <section className=' relative h-[78vh] w-[700px] align-middle mt-10 -ml-20 sm:overflow-x-auto'>
        <Image src={'/assets/fragment (1).gif'} width={250} height={200} alt='fragment1' className=' absolute top-[180px] left-[81px] rotate-6'/>
        <Image src={'/assets/fragment (3).gif'} width={400} height={200} alt='fragment1' className=' absolute top-[355px] left-0'/>
        <Image src={'/assets/fragment (2).gif'} width={170} height={200} alt='fragment1' className=' absolute top-[0px] left-[189px] rotate-12'/>
        <Image src={'/assets/fragment (4).gif'} width={220} height={200} alt='fragment1' className=' absolute top-[10px] left-[310px]'/>
        <Image src={'/assets/fragment (5).gif'} width={170} height={200} alt='fragment1' className=' absolute top-[25px] left-[495px] rotate-1'/>
        <Image src={'/assets/fragment (6).gif'} width={250} height={200} alt='fragment1' className=' absolute top-[200px] left-[475px] rotate-3'/>
        <Image src={'/assets/fragment (7).gif'} width={350} height={200} alt='fragment1' className=' absolute top-[385px] left-[410px] rotate-12'/>
        <Image src={'/assets/fragment (8).gif'} width={350} height={200} alt='fragment1' className=' absolute top-[180px] left-[235px]'/>
        <Image src={'/assets/img.png'} width={350} height={200} alt='fragment1' className=' absolute top-[180px] left-[235px]'/>
        <Image src={'/assets/footer.jpg'} width={350} height={200} alt='fragment1' className=' absolute top-[500px] left-[235px] rounded-xl'/>
      </section>        
    </div>
  )
}

export default Display