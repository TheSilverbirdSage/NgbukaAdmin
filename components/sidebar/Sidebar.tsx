"use client";
import React, { FC, useState } from 'react';
import Image from 'next/image'
import image from '@/images/logo-side 128 2.png'
import Link from 'next/link'
import { Squares2X2Icon, UserIcon, WrenchScrewdriverIcon, CreditCardIcon, NoSymbolIcon } from '@heroicons/react/24/outline';


interface SidebarItemProps {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ icon: Icon, label }) => (
    <div className="flex items-center ml-8 space-x-4 p-2 hover:bg-[#1A1A7A] hover:text-white group ">
        <Icon className="h-6 w-6 text-gray-600 group-hover:text-white " />
        <span className="text-gray-800 group-hover:text-white text-[14px]">{label}</span>
    </div>
);

const Sidebar = () => {
    return (
        <div className=''>
            <div className='ml-[55px] mt-6'>
                <Image
                    src={image}
                    alt="Image"// Adjust width and height 
                    height={45}
                    width={200}
                />
            </div>
            <div>
                <nav className="space-y-7 mt-6 p-3">
                    <Link href={'/admin'} className=''>
                        <SidebarItem icon={Squares2X2Icon} label="Dashboard" />
                    </Link>
                    <Link href={'admin/clients'} className='mt-4'>
                        <SidebarItem icon={UserIcon} label="Clients" />
                    </Link>
                    <Link href={'admin/vendors'} className='mt-4'>
                        <SidebarItem icon={WrenchScrewdriverIcon} label="Vendors" />
                    </Link>
                    <Link href={'admin/transactions'} className='mt-4'>
                        <SidebarItem icon={CreditCardIcon} label="Transactions" />
                    </Link>
                    <Link href={'admin/bannedusers'} className='mt-4'>
                        <SidebarItem icon={NoSymbolIcon} label="Banned Users" />
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar