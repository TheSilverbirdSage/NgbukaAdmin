import React from 'react'
import Image from "next/image";
import image from '@/images/Users icon.png'
import image2 from '@/images/Ban.png'
import image3 from '@/images/Ban.png'

const Page = () => {
    return (
        <div className='h-[1300px]'>
            <p className='text-[24px] font-[700] ml-6 mt-6'>Banned Users</p>
            <section className='ml-6 mt-6 flex'>
                <div className='w-[440px] h-[121px] bg-white'>
                    <div className='flex justify-between'>
                        <div className='ml-4 mt-6'>
                            <h1 className='text-[14px] text-[#ACACB2] font-[400]'>REGISTERED USERS</h1>
                            <p className='text-[24px] font-[700]'>1,200</p>
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


                <div className='w-[440px] h-[121px] ml-6 bg-white'>
                    <div className='flex justify-between'>
                        <div className='ml-4 mt-6'>
                            <h1 className='text-[14px] text-[#ACACB2] font-[400]'>BANNED CLIENTS</h1>
                            <p className='text-[24px] font-[700]'>80</p>
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

                <div className='w-[440px] h-[121px] ml-6 bg-white'>
                    <div className='flex justify-between'>
                        <div className='ml-4 mt-6'>
                            <h1 className='text-[14px] text-[#ACACB2] font-[400]'>BANNED USERS</h1>
                            <p className='text-[24px] font-[700]'>80</p>
                        </div>
                        <div className='mt-6 mr-3'>
                            <Image
                                src={image3}
                                alt="Image"// Adjust width and height
                                height={53}
                                width={53}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='ml-6 mt-6'>
                <div className='bg-white h-[904px] w-[1370px]'>
                    <div></div>
                </div>
            </section>
        </div>
    )
}

export default Page