import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
        {/* project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            width={720}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src='/pro0.png'
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Login Form
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               Login 
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is the project for basic understanding of Login Form</p>
              <Link target="_blank" href="https://simple-login-page-omega.vercel.app/">
              <p className="leading-relaxed text-blue-500  hover:underline">
                View Project
              </p>
              </Link>
          </div>
        </div>
      </div>
      {/* project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            width={720}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src='/pro3.png'
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Editable Resume
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               Resume
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is the project for basic understanding of Login Form</p>
              <Link target="_blank" href="https://milestone-4-editable-resume-wine.vercel.app/">
              <p className="leading-relaxed text-blue-500  hover:underline">
                View Project
              </p>
              </Link>
          </div>
        </div>
      </div>
      {/* project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            width={720}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src='/pro1.png'
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Speech to text
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               Speech 
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is the project for basic understanding of speech to text recognization.</p>
              <Link target="_blank" href="https://speech-to-text-swart-nine.vercel.app/">
              <p className="leading-relaxed text-blue-500  hover:underline">
                View Project
              </p>
              </Link>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
