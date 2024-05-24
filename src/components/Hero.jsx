import React from 'react'
import heroimage from '../assets/PhotoAurelien.png'
import cv from '../assets/CV_Aurelien_LUXEY.pdf'
import { TypeAnimation } from 'react-type-animation'

function Hero() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'> 
            <img src={heroimage} alt='hero'/> 
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span><br/>
                <TypeAnimation
                sequence={[
                    "Full stack Dev", 
                    1000, 
                    "App Dev", 
                    1000, 
                    "Programmer", 
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is Aurélien LUXEY, and I have been studying IT for the past three years. 
                As I near the completion of my Bachelor's degree, I am eager to pursue further studies in engineering. 
                I possess strong technical knowledge and am committed to continuous learning and discovering new advancements in the field every day.
            </p>

            <div className='my-8'>
                <a href={cv} className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from bg-orange-500 to-pink-500 text-white'>
                    Download my CV
                </a>
                <a href='#contact' className='px-6 py-3 w-full rounded-xl 
                                        border border-gray-400 
                                        background-color-black
                                        text-white  '>
                    Contact me
                </a>
            </div>
        </div>

    </div>
  )
}

export default Hero
