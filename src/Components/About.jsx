import React from 'react'
import img from "../assets/pic.png";
export default function About() {
  return (
    <>
      

      <div className='grid grid-cols-2 bg-gray-900 w-full h-130 items-center '>
        {/* left_side_pic */}
        <div className='m-4 p-4 '>
          <img src={img}
            alt="Profile Picture" 
            className='rounded'
            />

        </div>
        {/* right_side_description */}
        <div>
          <h1 className='text-3xl text-center py-6 font-bold text-white '>About Me</h1>
          <p className='text-center p-4 text-lg m-4 text-white flex justify-center items-center '>
          
I am Amna, a passionate Web Developer and Frontend Developer.
I have 1 year of experience in building responsive and user-friendly websites.
             I have strong skills in HTML, CSS,
            JavaScript, and React, and I love turning ideas into interactive web experiences.

            Although I have not completed my degree yet, I have focused on building my skills
            through practice and real-world projects. I believe in continuous learning and improving myself every day as a developer.

            My goal is to grow as a professional frontend developer and build high-quality
            web applications that provide great user experiences. I am always excited to learn new technologies and take on new challenges in web development.
          </p>
        </div>
      </div>
    </>
  )
}
