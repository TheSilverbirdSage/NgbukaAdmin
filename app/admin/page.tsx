import React from 'react'
import Image from "next/image";
import image from '@/images/Users icon.png'
import image2 from '@/images/Client.png'
import image3 from '@/images/Transaction.png'

export default function Page() {
  return (
    <main className='h-[1300px] w-full'>
      <h1 className='text-[22px] mt-6 font-[700] ml-6'>Dashboard</h1>
      <section className='ml-6 mt-6 flex'>

        <div className=' bg-white w-[440px] h-[191px] relative'>
          <div className='flex justify-between'>
            <div className='ml-4 mt-4'>
              <h1 className='text-[14px] text-[#ACACB2] font-[400]'>REGISTERED USERS</h1>
              <p className='text-[24px] font-[700]'>1,200</p>
            </div>
            <div className='mt-4 mr-3'>
              <Image
                src={image}
                alt="Image"// Adjust width and height
                height={53}
                width={53}
              />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-[400px] h-[62px] bg-[#F8F8FF] flex justify-between absolute bottom-2 mx-auto'>
              <div className='ml-4'>
                <p className='font-[400] text-[12px] mt-2'>VENDORS</p>
                <h1 className='font-[600] text-[16px]'>600</h1>
              </div>
              <div className='mr-4'>
                <p className='font-[400] text-[12px] mt-2'>CLIENTS</p>
                <h1 className='font-[600] text-[16px]'>600</h1>
              </div>
            </div>
          </div>
        </div>

        {/*CLIENTS */}
        <div className=' bg-white w-[440px] h-[191px] relative ml-6'>
          <div className='flex justify-between'>
            <div className='ml-4 mt-4'>
              <h1 className='text-[14px] text-[#ACACB2] font-[400]'>CLIENTS</h1>
              <p className='text-[24px] font-[700]'>600</p>
            </div>
            <div className='mt-4 mr-3'>
              <Image
                src={image2}
                alt="Image"// Adjust width and height
                height={53}
                width={53}
              />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-[400px] h-[62px] bg-[#F8F8FF] flex justify-between absolute bottom-2 mx-auto'>
              <div className='ml-4'>
                <p className='font-[400] text-[12px] mt-2'>VERIFIED</p>
                <h1 className='font-[600] text-[16px]'>545</h1>
              </div>
              <div className='mr-4'>
                <p className='font-[400] text-[12px] mt-2'>UNVERIFIED</p>
                <h1 className='font-[600] text-[16px]'>55</h1>
              </div>
            </div>
          </div>
        </div>

        {/*TRANSACTIONS */}
        <div className=' bg-white w-[440px] h-[191px] relative ml-6'>
          <div className='flex justify-between'>
            <div className='ml-4 mt-4'>
              <h1 className='text-[14px] text-[#ACACB2] font-[400]'>TRANSACTIONS</h1>
              <p className='text-[24px] font-[700]'>1,200</p>
            </div>
            <div className='mt-4 mr-3'>
              <Image
                src={image3}
                alt="Image"// Adjust width and height
                height={53}
                width={53}
              />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-[400px] h-[62px] bg-[#F8F8FF] flex justify-between absolute bottom-2 mx-auto'>
              <div className='ml-4'>
                <p className='font-[400] text-[12px] mt-2'>COMPLETED</p>
                <h1 className='font-[600] text-[16px]'>800</h1>
              </div>
              <div className='ml-4'>
                <p className='font-[400] text-[12px] mt-2'>PENDING</p>
                <h1 className='font-[600] text-[16px]'>100</h1>
              </div>
              <div className='mr-4'>
                <p className='font-[400] text-[12px] mt-2'>CANCELLED</p>
                <h1 className='font-[600] text-[16px]'>200</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex'>
        <div className='w-[900px] h-[438px] bg-white ml-6 mt-6'>
        </div>
        <div className='w-[450px] h-[438px] bg-white ml-6 mt-6'>
          <div className='w-[420px] h-[76px] bg-[#F8F8FF] ml-3 mt-6'>
            <p className='ml-3 font-[600] text-[18px] my-auto'>Most engaged vendors</p>
          </div>
        </div>
      </section>
      <div className='w-[1380px] h-[500px] bg-white mt-6 ml-6'></div>
    </main>
  );
}