import React from 'react'
import { FaGithub } from 'react-icons/fa'

import { BsFillPersonLinesFill } from 'react-icons/bs'
import {AiOutlineLinkedin} from "react-icons/ai"
import resume from "../details/chitrarasu-resume.pdf"
const SocialLinks = () => {
    const links = [
     
    {
        id: 1,
        child: (
            <> Github <FaGithub size={30} /></>
        ),
        href: "https://github.com/chitrarasu1996"
      
        }
        ,
        {
            id: 2,
            child:(  <> LinkedIn  <AiOutlineLinkedin size={30} /></>) ,
            href: "https://www.linkedin.com/in/chitrarasu-a-mern-stack-developer/"
            }, 
        {
            id: 3,
            child: (
                <> resume <BsFillPersonLinesFill size={30} /></>
             
            ),
            href:resume,
            style:"rounded-br-md",
        
            }
]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({style,id,child,download,href})=>(
 <li key={id} className={`ml-[-100px] hover:ml-[-8px] hover:rounded-md duration-300 bg-gray-500 flex justify-between items-center  w-40 h-14 px-4 ${style}`}>
                    
 <a 
 rel='noreferrer'
 target='_blank'
  href={href} className='flex text-white justify-between items-center w-full'>
     <>
      {child}
     </>
 </a>

</li>
                ))}
               
            </ul>
        </div>
    )
}

export default SocialLinks