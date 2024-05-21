// src/components/Projects.js
import React from 'react';

import leo from '../assets/leoBlue.png';
import movieApp from '../assets/movy.png';
import lowatem from '../assets/Lowatem.png';
import lib from '../assets/libReact.png';
import weatherApp from '../assets/weatherApp.png';

const projects = [
  {
    title: 'Weather Application',
    description: 'I built a weather app using JavaScript. This little project was for two reasons: to discover JavaScript and to learn how to use API information.',
    date: 'January 2024',
    link: 'https://example.com/project1',
    image: weatherApp, 
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"]
  },
  {
    title: 'LeoBlue',
    description: 'I built a weather app using JavaScript. This little project was for two reasons: to discover JavaScript and to learn how to use API information.',
    date: 'January 2024',
    link: 'https://example.com/project1',
    image: leo, 
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"]
  },
  {
    title: 'Lowatem',
    description: 'I created a movie library application to explore advanced PHP ans Symfony concepts and API integration. This project also have been the first were I included a real CI/CD aspect and it has been really important even for a small team project',
    date: 'February 2024',
    link: 'https://example.com/project2',
    image: lowatem, 
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"]
  },
  {
    title: 'Moovy',
    description: 'I created a movie library application to explore advanced JavaScript concepts and API integration.',
    date: 'February 2024',
    link: 'https://example.com/project2',
    image: movieApp, 
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg"]
  },
  {
    title: 'The library',
    description: 'In order to finish a uni project i created a simple but fast and accesible library online using some public API. This project has been a way for me to discover how to simplify and optimise my query in javascript but also to see differents way to reach a informations.',
    date: 'February 2024',
    link: 'https://example.com/project2',
    image: lib, 
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", 
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
        ]
  },
];

const Projects = () => { 

  return (
    
    <section className="p-4 max-w-[1600px] mx-auto" id='work'>
    <h2 className='text-4xl font-bold mb-4 primary-color'>My projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded shadow flex flex-col md:flex-row items-center">
                <img src={project.image} alt={project.title} className="w-48 h-48 object-cover rounded mb-4 md:mb-0 md:mr-4" />
                <div className="flex-1">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.date}</p>
                    <p className="mt-2">{project.description}</p>
                    <div className="mt-2 flex space-x-2">
                        {project.icons.map((icon, iconIndex) => (
                            <img key={iconIndex} src={icon} alt="technology icon" className="w-6 h-6" />
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </div> 
</section>
  );
}

export default Projects;
