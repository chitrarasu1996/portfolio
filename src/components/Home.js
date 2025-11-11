import React from 'react'
import hero from "../images/myimg.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-scroll'

const Home = () => {

  return (
    <div
      name="home"

      className=" sm:px-52 px-32  md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" gap-5 mx-auto flex flex-col items-center justify-center h-full  md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 style={{ marginTop: "50px", paddingTop: "50px" }} className="text-4xl  sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            With 1.5 years of hands-on experience as a Full-Stack Developer, I have worked on building scalable, dynamic, and user-centric web applications. I have strong practical knowledge of <span className='highLight'> React, Angular, Node.js, NestJS, Express.js, MySql and MongoDB </span>. I’ve contributed to real-world products involving complex business logic, API integrations, role-based flows, form validations, and end-to-end full-stack development. I enjoy solving challenges, improving UI/UX, and delivering clean, efficient, and maintainable code.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img

            src={hero}
            alt="my profile"
            className="my-img  rounded-2xl   md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home