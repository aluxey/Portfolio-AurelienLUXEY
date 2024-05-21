import React from 'react';
 

const TechStack = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-8">My Tech Stack</h2>

      <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg">
            <div className="bg-gradient-to-br from bg-orange-500 to-pink-500 p-4 rounded-t-lg">
                <p className="text-white font-bold text-lg text-center">FrontEnd</p>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt='' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt=''/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt=''/>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg">
            <div className="bg-gradient-to-br from bg-orange-500 to-pink-500 p-4 rounded-t-lg">
                <p className="text-white font-bold text-lg text-center">BackEnd</p>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt=''/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt=''/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt=''/> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt=''/>
            </div>
        </div>
    </div>
</div>

<div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg">
            <div className="bg-gradient-to-br from bg-orange-500 to-pink-500 p-4 rounded-t-lg">
                <p className="text-white font-bold text-lg text-center">DevOps</p>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt=''/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt=''/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" alt=''/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt=''/>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg">
            <div className="bg-gradient-to-br from bg-orange-500 to-pink-500 p-4 rounded-t-lg">
                <p className="text-white font-bold text-lg text-center">Other</p>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt=''/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt=''/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt=''/>
            </div>
        </div>
    </div>
</div>

      
    </div>
  );
};

export default TechStack;