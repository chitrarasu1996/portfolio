import React from 'react'

const About = () => {
  return (

    <div
      name="about"
      style={{ paddingTop: "100px" }}
      className=" pt-10 px-32 sm:px-52 w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="py-52 max-w-screen-lg  flex flex-col w-full justify-center h-full">
        <div className=''>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-3">
            About
          </p>
        </div>

        <p className="text-xl py-3">
          <span className='font-bold text-2xl '>Education </span>

          <p className='flex flex-col'>
            <p className='mt-3 text-2xl'> College: </p>
            <p> UG - Bachelor Of Commerce,</p>
            <p> Annamalai University Chidambaram,
            </p>
            <p>June 2019 - March 2022,</p>
          </p>
        </p>
        <br />

        <p className="text-xl ">
          <p className='flex flex-col'>
            <p className='text-2xl'>School: </p>
            <p> 12th - Govt.Higher.Secondary.School,</p>
            Thirubuvanam,
            <p className='mt-1'><span className='text-2xl '>Email :</span> chitrarasumit@gmail.com,</p>
            <p className='mt-1 pb-4'><span className='text-2xl '>Mobile No :</span>8838929800</p>
          </p>

        </p>

      </div>
    </div>
  )
}

export default About