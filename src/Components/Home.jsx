import React from 'react'
import img from "../assets/img.jpg";
export default function Home() {
  return (
    <>
      <div className='grid grid-cols-2 p-6 gap-4 items-center'>
        {/* pic_left_side */}
        <div className="flex justify-center items-center min-h-screen">
      <img
        src={img}
        alt="My Photo"
        className="w-64 h-64 rounded-full object-cover shadow-lg"
      />
    </div>

        {/* description_right_side */}
        <div >
          <h1>I 'm Amna .</h1>
          <h2>
            i am web developer with 1 years of experience in building
             and maintaining responsive websites. Proficient in HTML, CSS, 
             JavaScript, and React, I am passionate about creating user-friendly 
             interfaces and seamless user experiences. 
             I have a strong background in front-end development 
             and a keen eye for design, allowing me to bring creative
              ideas to life. I am dedicated to continuous learning and
               staying up-to-date with the latest industry trends to deliver
                high-quality web solutions.
          </h2>

        </div>

      </div>
    </>
  )
}
