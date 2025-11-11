import React from 'react'
import flipkart from "../assets/flipkart.jpg"
import chatapp from "../assets/chatappimg.webp"
import gmail from "../assets/g-mailclone.jpg"
import webscrap from "../assets/webscraping.jpg"
import noteimg from "../images/noteimg.webp"
const Portfolio = () => {
  const projectImages = [

    {
      id: 1,
      alt: "e-commerce",
      tittle: "E-commerce Application",
      target: "_blank",
      src: flipkart,
      stack: " E-Commerce Platform with MERN Stack.",
      ref: "https://ecommerce-shop-123.netlify.app/",
      code: "https://github.com/chitrarasu1996/e-commerce.git"
    },
    {
      id: 2,
      tittle: "Realtime Chatapp",
      target: "_blank",
      alt: "realtime-chatapp",
      stack: "Real-Time Chat App with Socket.io and MERN Stack",
      src: chatapp,
      ref: "https://chattify-app.netlify.app",
      code: "https://github.com/chitrarasu1996/chat-app-frontend.git"
    },
    {
      id: 3,
      alt: "gmail-clone",
      tittle: "Gmail-clone",
      src: gmail,
      stack: "Gmail Clone with Node.js, Nodemailer, and MERN Stack",
      target: "_blank",
      ref: "https://gmail-colone.netlify.app",
      code: "https://github.com/chitrarasu1996/gmail-clone-frontend.git"
    }
    ,
    {
      id: 5,
      tittle: "note-taking-app",
      alt: "note-taking-app",
      style: "20px",
      src: noteimg,
      target: "_blank",
      stack: "Notes taking application Project with MERN Stack",
      ref: "https://notes-taking-application-frontend.netlify.app/",
      code: 'https://github.com/chitrarasu1996/notes-taking-application-frontend.git'
    },
    {
      id: 4,
      alt: "web-scraping",
      tittle: "web-scraping",
      src: webscrap,
      stack: "Web Scraping Project with MERN Stack, Axios, and Cheerio",
      target: "_blank",
      ref: "https://web-scraping-123.netlify.app/",
      code: "https://github.com/chitrarasu1996/frontend-webscraping.git"

    },


  ]
  return (
    <div name="projects" style={{ height: "100%" }} className='px-32 sm:px-52 py-32 h-full w-full
   bg-gradient-to-b from-black to-gray-800 text-white md:h-screen  '>
      <div className=' max-w-screen-lg  mx-auto flex flex-col justify-center h-full w-full'>
        <div>
          <p className='font-bold inline text-4xl border-b-4   border-gray-500'>
            Projects
          </p>
          <p className='py-9'>
            some of my work here
          </p>

        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0'>
          {projectImages.map(({ id, src, ref, code, tittle, alt, target, stack, style }) => (
            <div style={{ width: "210px" }} key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
              <img

                className='rounded-md duration-100 hover:scale-105 ' src={src} alt={alt} />
              <a href={ref} rel='noreferrer' target="_blank"> <p className='text-center mt-2 cursor-pointer duration-105 hover:scale-105 py-1 font-bold'>{tittle}</p></a>

              <div className='ms-1 ps-2 pe-1' style={{ maxHeight: "80px" }}><span className='font-semibold'>Tech Stack : </span> {stack}</div>
              <div className={`flex items-center justify-center ${id === 5 ? "p-3" : ""}`}>
                <a href={ref} target={target} ><button className='duration-105 hover:scale-105 w-1/2 px-4 py-6 mx-3'>Demo</button></a>
                <a href={code} target={target}> <button className='duration-105 hover:scale-105 w-1/2 px-4 py-6 mx-3'>Code</button> </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Portfolio