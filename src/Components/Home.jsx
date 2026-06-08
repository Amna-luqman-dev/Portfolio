import React from 'react'
import img from "../assets/img.jpg";
export default function Home() {
  return (
    <>
      <div className='grid grid-cols-2 p-4  items-center bg-gray-900 w-full h-full '>
        {/* pic_left_side */}

        <div className="flex justify-center items-center min-h-screen ">
          <img
            src={img}
            alt="My Photo"
            className="w-64 h-65 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* description_right_side */}
        <div className="flex flex-col gap-4  text-center ">

          
            <h1 className='font-bold   p-4 text-white text-3xl'>
              Hello , Its me, AMNA and I m a web developer
            </h1>
            <p className='text-white text-lg'>
              I am a Web Developer with 1 year of experience in HTML, CSS,
              JavaScript, and React. I enjoy building responsive,
              user-friendly websites and continuously improving my
              skills to create better web experiences.
          </p>

        </div>

      </div>
    </>
  )
}
