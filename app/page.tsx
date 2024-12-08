import Image from "next/image";
import image from '@/images/Group.png'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex w-full">
      <div className="flex bg-[#1A1A7A] w-[700px]">
        <div className="ml-52 mt-[400px]">
          <Image
            src={image}
            alt="Image"// Adjust width and height
            height={64}
            width={230.58}
          />
        </div>
      </div>
      <div className="flex justify-center w-[1000px] h-[1024px]">
        <div className="w-[484px] h-[649px] mt-[190px] rounded-md shadow-md">
          <p className="text-[32px] font-[700] font-sans ml-11 mt-11">Hi, welcome</p>
          <h1 className="font-sans text-[18px] font-[400] ml-11">Sign in to your account</h1>
          <div className="mb-4 mt-14 ml-11">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="mt-1 block w-[395px] h-[62px] rounded-full border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#1A1A7A] focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 ml-11">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                placeholder="Enter password"
                className="mt-1 block w-[395px] h-[62px] rounded-full border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-[#1A1A7A] focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="mb-6 flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 rounded ml-11 border-gray-300 text-[#1A1A7A] focus:ring-[#1A1A7A]"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Keep me signed in
            </label>
          </div>

          {/* Sign In Button */}
          <Link href={'/admin'}>
            <button className="mb-4 ml-11 w-[396px] h-[62px] rounded-full bg-[#1A1A7A] px-4 py-2 text-white font-medium shadow hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
              Sign in
            </button>
          </Link>

          {/* Forgot Password */}
          <div className="text-center text-sm text-gray-600">
            Forgot password?{" "}
            <a href="#" className="text-orange-600 hover:underline">
              Recover it here
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
