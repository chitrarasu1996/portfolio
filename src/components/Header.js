import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

import { Link } from "react-scroll"
const Header = () => {
  const [nav, setNav] = useState(false)
  const links = [
    {
      id: 1,
      link: "home",

    },
    {
      id: 2,
      link: "about",

    },
    {
      id: 3,
      link: "projects",

    },
    {
      id: 4,
      link: "skills",

    },
    {
      id: 5,
      link: "contact",

    }
  ];

  return (
    <div className='flex px-5 fixed justify-between items-center h-20 w-full text-white bg-black'>
      <div className='text-5xl pl-5 font-signature ml-5'>
        <h2>chitrarasu</h2>
      </div>
      <ul className='hidden md:flex'>
        {links.map((link, i) => (
          <li key={i} className='px-4 
    cursor-pointer capitalize font-medium text-gray-500 duration-200 hover:scale-105'>
            <Link to={link.link} smooth duration={500} > {link.link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer text-gray-500 pr-2 z-10'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav &&
        <ul className='from-black to-gray-800 cursor-pointer flex flex-col justify-center top-0 left-0
   w-full items-center absolute h-screen bg-gradient-to-b'>
          {links.map(({ link, id }) => (
            <li key={id} className='px-4 py-5 text-4xl
    cursor-pointer capitalize font-medium text-gray-500 duration-200 hover:scale-105'>
              <Link onClick={() => setNav(false)} to={link} offset={100} smooth duration={500} > {link}</Link>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Header