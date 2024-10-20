// src/components/Projects.js
import React from 'react';

import leo from '../assets/leoBlue.png';
import movieApp from '../assets/movy.png';
import lowatem from '../assets/Lowatem.png';
import lib from '../assets/libReact.png';
import weatherApp from '../assets/weatherApp.png';
import disco from '../assets/disco.png';

const projects = [
  {
    title: 'Weather Application',
    description: 'I created a weather app using JavaScript to explore the language and learn how to work with APIs.',
    date: 'January 2024',
    link: 'https://example.com/project1',
    image: weatherApp, 
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"]
  },
  {
    title: 'LeoBlue',
    description: 'During my internship, I developed a Flutter app for iOS that receives data from satellites and alerts users about potential weather hazards.',
    date: 'August 2023',
    link: 'https://example.com/project1',
    image: leo, 
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"]
  },
  {
    title: 'Lowatem',
    description: 'Lowatem, my first major IT project, is a Java-based game. We developed the game\'s logic as well as its AI.',
    date: 'November 2022',
    link: 'https://example.com/project2',
    image: lowatem, 
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"]
  },
  {
    title: 'Moovy',
    description: 'I created a movie library application to delve into advanced JavaScript concepts and API integration.',
    date: 'September 2023',
    link: 'https://example.com/project2',
    image: movieApp, 
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg"]
  },
  {
    title: 'The library',
    description: 'To complete a university project, I created a simple, fast, and accessible online library using public APIs. This project allowed me to discover how to simplify and optimize queries in JavaScript and explore different methods of retrieving information.',
    date: 'February 2024',
    link: 'https://example.com/project2',
    image: lib, 
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", 
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
        ]
  },
  {
    title: 'Discography',
    description: 'This C# .NET application allows users to catalog albums and manage their borrowing. Users can view borrowed albums, check return dates, and track overdue albums. The interface offers options to borrow albums, view recommendations, change passwords, and more. It provides a clean and simple way to keep track of all album loans.',
    date: 'Noevmber 2023',
    link: 'https://example.com/project2',
    image: disco, 
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"
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
