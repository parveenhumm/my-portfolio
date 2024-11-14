import React from 'react'
import Link from 'next/link'
import { IoIosCloudDownload } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
     <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
      <span className="ml-3 text-xl">era</span>
      </a>
  
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
      <Link href={"#About"} className="mr-5 hover:text-blue-600">About</Link>
      <Link href={"#Skills"} className="mr-5 hover:text-blue-600">Skills</Link>
      <Link href={"#Project"} className="mr-5 hover:text-blue-600">Projects</Link>
     <Link href={"#Contact"} className="mr-5 hover:text-blue-600">Contacts</Link>
    </nav>
    <a href="/resume.pdf"><button className="inline-flex items-center bg-gray-100 border-0 py-1 w-55 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    Download CV<IoIosCloudDownload className='text-md ml-1'/>
    </button></a>
     </div>
     </header>
    </div>
  )
}
export default Navbar
