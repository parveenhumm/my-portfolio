'use client'

import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
const Hero = () => {
  return (
      <section className="text-black body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
       I am
        <br className="hidden lg:inline-block" />
        <Typewriter
           options={{
            strings: ['Web Developer', 'UI/UX Designer','IoT Developer', 'Telecommunication Engineer'],
            autoStart: true,
             loop: true,
          }}
         />
      </h1>
      <div className='w-[80px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed">
      I am a passionate web developer with a keen eye for detail and a love for creating beautiful and functional websites. I have a strong understanding of HTML, CSS, and JavaScript, and I am always eager to learn new technologies.
      </p>
      <div className="flex justify-center">
        <Link href="#Contact">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image  className="object-cover object-center rounded mx-auto w-[25rem]"
        alt="hero"
        width={720}
        height={600}
        src="../../../public/home.jpg"
        />
    </div>
  </div>
</section>
  )
}

export default Hero