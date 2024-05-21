import React from 'react';

const Timeline = () => {
    const proEvents = [
        {
          date: "2019",
          title: "National Engineering Science Olympiad Final",
          description: "I took part in the Science de l'Ingénieur competition at departmental, regional and national level. We presented a personal innovation: a connected rugby helmet capable of measuring and analyzing impacts sustained during matches. This project showcased my engineering, programming and teamwork skills, and enabled me to develop an innovative technological solution to improve safety in sport..",
        },
        {
          date: "2022",
          title: "Mobile Development Internship at ENSEIRB MATMECA",
          description: "I did my internship in a laboratory at ENSEIRB MATMECA where I developed a mobile application using Flutter. This application connects information from satellites and alerts users to weather warnings. This project enabled me to strengthen my skills in mobile development, satellite data processing and real-time alert management.",
        },
        {
          date: "2023-2024",
          title: "DevOps internship at ManoMano",
          description: "Currently on a work-study program at ManoMano, I'm working as a DevOps developer. My responsibilities include managing cloud infrastructure, automating deployments and setting up CI/CD pipelines. This experience enables me to combine development and operations, improve the efficiency of software development processes and guarantee continuous, high-quality application delivery.",
        },
      ];

  const uniEvents = [
    {
      date: "2017-2020",
      title: "Bac Scientifique at Lycée Gustave Eiffel",
      description: "I obtained my baccalauréat with honors. I followed the classic curriculum at the Lycée Gustave Eiffel in Bordeaux. I've always had a passion for science, so I opted for a Bac Scientifique with a specialization in Engineering Sciences and NSI (Numérique et Sciences Informatiques). These years enabled me to develop a deep interest in computer science and group work, taking part in various collaborative projects and academic competitions.",
    },
    {
      date: "2021-2024",
      title: "IT Bachelor at Gradignan",
      description: "Enrolled at BUT Informatique in Gradignan, I strengthened my skills in software development and IT engineering. During this period, I completed a three-month internship at GHI where I worked on web development projects, including the creation of interactive web applications and database management systems. This work experience enabled me to apply my theoretical knowledge in a real-world environment and to acquire indispensable practical skills.",
    },
    {
      date: "2024-...",
      title: "EFREI Engineering School",
      description: "Currently a student at EFREI, a renowned engineering school.",
    },
  ];

  return (
    <div className="container mx-auto p-4 max-w-6xl">
        <h2 className='text-4xl font-bold mb-4 primary-color'>My evolution</h2> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Professional development</h3>
            <div className="relative border-l border-gray-200 dark:border-gray-700">
              {proEvents.map((event, index) => (
                <div key={index} className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
                  <div className="flex flex-col justify-start items-start">
                    <span className="text-sm font-medium text-blue-500">{event.date}</span>
                    <h3 className="text-white text-lg font-semibold">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-500">University development</h3>
            <div className="relative border-l border-gray-200 dark:border-gray-700">
              {uniEvents.map((event, index) => (
                <div key={index} className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
                  <div className="flex flex-col justify-start items-start">
                    <span className="text-sm font-medium text-green-500">{event.date}</span>
                    <h3 className="text-white text-lg font-semibold">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );    
};  

export default Timeline;
