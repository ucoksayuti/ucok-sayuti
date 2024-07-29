import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/js.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import express from '../assets/express.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import php from '../assets/php.png'
import mongodb from '../assets/mongodb.png'
import mysql from '../assets/mysql.png'
import bootstrap from '../assets/bootstrap.png'

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: HTML,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: Javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: react,
            title: 'React Js',
            style: 'shadow-blue-500'
        },
        {
            id: 6,
            src: express,
            title: 'Express Js',
            style: 'shadow-gray-500'
        },
        {
            id: 7,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500'
        },
        {
            id: 8,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            src: php,
            title: 'PHP',
            style: 'shadow-blue-500'
        },
        {
            id: 10,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-blue-500'
        },
        {
            id: 11,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-blue-500'
        },
        {
            id: 12,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-blue-500'
        },
    ]

    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-96 sm:pt-0'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>My Skills</p>
                    <p className='py-6'>These are technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-3 sm:grid-cols-6 gap-x-6 gap-y-6 text-center py-8 px-12 sm:px-0'>

                    {
                        techs.map(({ id, src, title, style }) => (
                            
                        <div key={id} className='bg-gray-800 py-11 rounded-md grid grid-rows-2 gap-2 justify-center items-center'>
                            <img src={src} alt="" className={ ` hover:scale-110 duration-500 w-16 mx-auto` } />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                    }


                </div>

            </div>
        </div>
    )
}

export default Experience