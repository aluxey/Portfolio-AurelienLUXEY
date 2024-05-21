import React from 'react'
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 ' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        
        <div className='mt-4 md:mt-0 text-left flex'>
            <div className='my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary-color'>About me</h2>
                <p className='text-base lg:text-lg'>
                My name is Aurélien Luxey, I am 20 years old, and I am passionate about programming. This passion led me to pursue studies in computer science. Throughout my academic journey and the numerous projects I've participated in, as well as my professional experiences, I have developed a strong work ethic and essential teamwork skills.
                <br/><br/>
                During my studies, I also learned about team collaboration techniques, such as Agile methodologies, which are widely used in the professional world.
                <br/><br/>
                Today, I wish to continue my studies at an engineering school to enhance my theoretical and scientific knowledge and to train to become an engineer equipped with all the necessary skills. I aim to be more than just a developer and be capable of handling more complex tasks while still maintaining my developer skills.
                </p>
            </div>
        </div>

        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} alt=''/>
      
      </div>
    </div>
  )
}

export default About
