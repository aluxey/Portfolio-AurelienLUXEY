import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });

    fetch("https://formcarry.com/s/_vIgRuI2xLT", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        alert("We received your submission, thank you!");
      }
      else if(response.code === 422){
        // Field validation failed
        setError(response.message)
      }
      else {
        // other error from formcarry
        setError(response.message)
      }
    })
    .catch(error => {
      // request related error.
      setError(error.message ? error.message : error);
    });

    // Reset the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    
    <form onSubmit={onSubmit} className="max-w-[1200px] mx-auto p-8 rounded-md shadow-md" id='contact'>
        <h2 className='text-4xl font-bold mb-4 primary-color text-center'>Contact me</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Your first and last name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Your Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="john@doe.com"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Your Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            placeholder="Enter your message..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>
      
        <div className="text-center">  
        <button
          type="submit"
          className="inline-flex items-center px-6 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
          <MdSend className="ml-2" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
