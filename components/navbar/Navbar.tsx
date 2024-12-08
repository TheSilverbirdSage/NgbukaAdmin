import React from 'react'
import Image from 'next/image'
import image from '@/images/Notification.png'
import image2 from '@/images/Ellipse 1.png'
import image3 from '@/images/Vector.png'

const Navbar = () => {
  return (
    <div className='h-[118px] flex bg-white'>
      <div className='ml-[1080px] flex'>
        <div className='mt-[37.3px]'>
          <Image
            src={image}
            alt="Image"// Adjust width and height
            height={43.4}
            width={44}
          />
        </div>
        <section className='flex mt-[37.3px] ml-14'>
          <div>
            <Image
              src={image2}
              alt="Image"// Adjust width and height
              height={50}
              width={50}
            />
          </div>
          <p className='mt-3 ml-[10px] font-[600] text-[16px] text-[#1A1A7A]'>Moses Doe</p>
          <div className='ml-[17.76px] mt-[22px]'>
            <Image
              src={image3}
              alt="Image"// Adjust width and height
              height={5.66}
              width={8.49}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Navbar