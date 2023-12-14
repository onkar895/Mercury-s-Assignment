/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { SlArrowRightCircle } from "react-icons/sl";

const HeroPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 h-screen flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-black">
            Discover the Future of Banking
          </h1>
          <p className="text-lg md:text-xl lg:text-xl mb-8 font-bold text-white">
            Revolutionizing finance with Mercury's cutting-edge solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.50 }}
            className="bg-black text-white font-bold text-lg md:text-xl lg:text-2xl py-3 px-8 rounded-full focus:outline-none transition-transform hover:shadow-2xl focus:ring focus:border-indigo-300 flex items-center gap-4 justify-center ml-52 hover:bg-white hover:text-black"
          >
            Get Started
            <SlArrowRightCircle />
          </motion.button>
          <p className="text-sm text-gray-100 mt-4 mr-6">
            Join us in shaping the future of finance!
          </p>
        </div>
      </section>
    </div>
  )
}

export default HeroPage
