import React from 'react'
import Image from "next/image";
import image from '@/images/Autoparts.png'
import image2 from '@/images/Automechanics.png'

const Page = () => {
  return (
    <div className='h-[1300px]'>
      <p className='text-[24px] font-[700] ml-6 mt-6'>Vendors</p>

      <section className='ml-6 mt-6 flex'>
        <div className='w-[544.5px] h-[121px] bg-white'>
          <div className='flex justify-between'>
            <div className='ml-4 mt-6'>
              <h1 className='text-[14px] text-[#ACACB2] font-[400]'>AUTO PARTS VENDORS</h1>
              <p className='text-[24px] font-[700]'>200</p>
            </div>
            <div className='mt-6 mr-3'>
              <Image
                src={image}
                alt="Image"// Adjust width and height
                height={53}
                width={53}
              />
            </div>
          </div>
        </div>


        <div className='w-[544.5px] h-[121px] ml-6 bg-white'>
          <div className='flex justify-between'>
            <div className='ml-4 mt-6'>
              <h1 className='text-[14px] text-[#ACACB2] font-[400]'>AUTO MECHANICS</h1>
              <p className='text-[24px] font-[700]'>400</p>
            </div>
            <div className='mt-6 mr-3'>
              <Image
                src={image2}
                alt="Image"// Adjust width and height
                height={53}
                width={53}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='ml-6 mt-6'>
        <div className='bg-white h-[904px] w-[1113px]'>
          <div></div>
        </div>
      </section>
    </div>
  )
}

export default Page