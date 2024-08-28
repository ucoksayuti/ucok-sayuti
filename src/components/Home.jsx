import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
import Ucok1 from '../assets/img1.png';
import Ucok2 from '../assets/img2.png';
import Ucok3 from '../assets/img3.png';
import Ucok4 from '../assets/img4.png';
import { motion } from "framer-motion"

const Home = () => {

    const randomImg = [
        Ucok1,
        Ucok2,
        Ucok3,
        Ucok4,
    ]

    const [currentImgae, setCurrentImage] = useState(randomImg[0]);

    const handleImageClick = () => {
        const randomIndex = Math.floor(Math.random() * randomImg.length);
        setCurrentImage(randomImg[randomIndex]);
    }

    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-xl mx-auto flex flex-col gap-10 items-center justify-center h-full px-4 md:flex-row md:justify-between">
                <div className="flex flex-col justify-center md:w-1/2">
                    <motion.h2 initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a Full Stack Web Developer
                    </motion.h2>
                    <motion.p initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-gray-500 py-4 max-w-md">
                        I am a student majoring in IT. Currently, I love working on web applications using technologies like React, Tailwind, and Express Js.
                    </motion.p>
                    <motion.div initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.7 }}>
                        <Link to='portfolio' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-400 to-green-700 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </motion.div>
                </div>

                <motion.div initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                className="flex justify-center items-center md:w-1/2">
                    <img onClick={handleImageClick}
                        src={currentImgae}
                        alt="my profile"
                        className="rounded-2xl w-2/3 cursor-pointer shadow-2xl shadow-green-950/50"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Home;
