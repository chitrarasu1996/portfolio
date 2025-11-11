import React from 'react'
import htmlimg from "../techImages/html.ico"
import css from "../techImages/css.png"
import js from "../techImages/js.png"
import bootstap from "../techImages/bootstrap.jpeg"
import node from "../techImages/node.png"
import express from "../techImages/express.png"
import react from "../techImages/react.png"
import github from "../techImages/github.png"
import sql from "../techImages/sql.png"
import nosql from "../techImages/nosql.png"
import mongodb from "../techImages/mongodb.jpg"
import ts from "../techImages/ts.png"


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: htmlimg,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: js,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: bootstap,
            title: "Bootstrap",
            style: "shadow-blue-500"
        },
        {
            id: 5,
            src: react,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id: 6,
            src: node,
            title: "node",
            style: "shadow-green-500"
        },
        {
            id: 7,
            src: express,
            title: "Express",
            style: "shadow-green-700"
        },
        {
            id: 8,
            src: github,
            title: "Github",
            style: "shadow-gray-500"
        },
        {
            id: 9,
            src: sql,
            title: "sql",
            style: "shadow-sky-500"
        },
        {
            id: 10,
            src: nosql,
            title: "noSql",
            style: "shadow-sky-500"
        },
        {
            id: 11,
            src: mongodb,
            title: "MongoDb",
            style: "shadow-green-500"
        }, {
            id: 12,
            src: ts,
            title: "TypeScript",
            style: "shadow-green-500"
        }
    ]
    return (

        <div name="skills" style={{ height: "100%" }} className='text-white py-32  h-screen w-full bg-gradient-to-b from-gray-800 to-black'>
            <div className='pb-32 sm:px-52 px-20 max-w-screen w-full h-full flex flex-col justify-center  p-4 mx-auto'>
                <div >
                    <p className='border-b-4 inline font-bold text-4xl border-gray-500'>Skills</p>
                    <p className='py-6'>These Are the Technologies I've worked</p>
                </div>
                <div className='grid  grid-cols-2 py-6 px-15 sm:grid-cols-3 gap-8 text-center'>

                    {techs.map(({ id, src, title, style }) => (
                        <div style={{ width: "110px" }} key={id} className={'shadow-md hover:scale-105 duration-500 rounded-lg ' + style}>
                            <img className='tech-img  mx-auto mt-2  rounded-md' src={src} alt='tech-img' />
                            <p className='mt-3'>{title}</p>
                        </div>
                    ))}

                </div>

            </div>
        </div>

    )
}

export default Experience