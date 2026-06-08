import React from 'react'

export default function Skills() {
  return (
    <>
      <div className="bg-gray-900">
        <h1 className='font-bold text-3xl p-5 text-center text-white'>Skills</h1>

        <div className='grid grid-cols-3 bg-gray-900 p-4 rounded'>
              <div className="bg-white-500  mx-auto p-4 rounded-lg my-4 w-1/2
              text-white text-center hover:transition-transform hover:scale-105 cursor-pointer ">
                HTML
                <p className="text-sm mt-2">
                  Strong understanding of HTML for structuring web pages
                  using semantic and accessible elements.
                </p>
              </div>

              <div className="bg-white-500  mx-auto p-4 rounded-lg my-4    w-1/2
              text-white text-center hover:transition-transform hover:scale-105 cursor-pointer text-bold">
                 Tailwindcss
                <p className="text-sm mt-2">
                 
                  Experienced in Tailwind CSS for building modern, responsive,
                  and utility-first UI designs with clean and reusable classes.
                </p>

              </div>

              <div className="bg-white-500  mx-auto p-4 rounded-lg my-4  w-1/2
              text-white text-center hover:transition-transform hover:scale-105 cursor-pointer text-bold">
                   Java Script
                <p className="text-sm mt-2">
               
                  Strong understanding of JavaScript for adding interactivity, logic,
                    and dynamic behavior to web applications.
                </p>
                
              </div>

        </div>

        <div className="grid grid-cols-3 bg-gray-900 p-4 rounded">
          <div className="  mx-auto p-4 rounded-lg my-4  w-1/2
                text-white text-center hover:transition-transform hover:scale-105 cursor-pointer text-bold">
                  React
                  <p className="text-sm mt-2">
                    Skilled in React for creating dynamic, component-based and responsive user interfaces.
                  </p>
                </div>

          <div className="bg-white-500  mx-auto p-4 rounded-lg my-4  w-1/2
                text-white text-center hover:transition-transform hover:scale-105 cursor-pointer text-bold">
                  Mongodb
                  <p className="text-sm mt-2">
                    Experience with MongoDB for storing and managing NoSQL databases in modern web applications.
                  </p>
                </div>

          <div className="bg-white-500  mx-auto p-4 rounded-lg my-4   w-1/2
                text-white text-center hover:transition-transform hover:scale-105 cursor-pointer text-bold">
                  Node js
                  <p className="text-sm mt-2">
                    Experience in building backend APIs using Node.js and Express for fast and scalable applications.
                  </p>
                </div>
        </div>

      </div>


    </>
  )
}
