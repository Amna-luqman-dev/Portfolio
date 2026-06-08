import React from 'react'
import radixImg from "../assets/radix.jpg"
import  kitchenImg  from "../assets/kitchen.jpg"
export default function Project() {
  return (
    <>
      <h1 className='text-bold text-3xl text-center p-4'>Project</h1>
      <div className='grid grid-cols-2 gap-8'>
      {/* left */}
      <div>
        <img src={radixImg}
          alt="Project"
          className=' p-5 rounded' />
      </div>
      {/* right */}
      <div className='p-5 text-center m-4'>
        <h3 className='font-bold text-3xl'>Radix IT acedem</h3>
        <p className='p-3'>
          This is a brief description of the project.
        </p>
        <p className='font-bold text-center p-4 '>
          Radix ka IT Department modern technology solutions provide
          karta hai jo company ke digital systems ko smooth, secure aur efficient
          banata hai. Yeh team software development, network management, troubleshooting
          aur system maintenance jaise important tasks handle karti hai.

          Is department ka main focus innovation, reliability aur user-friendly IT services deliver
          karna hota hai taa ke business operations bina kisi rukawat ke chal saken.
        </p>
        <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-gray-900'>View Project

        </button>

        {/* 2nd project */}

        <div className='grid grid-cols-2 '>
          {/* left */}
          <div>
            <img src={kitchenImg}
              alt="kitchen"
              className=' p-5 rounded' />
          </div>
          {/* right */}
          <div className='p-5 text-center m-4'>
            <h3 className='font-bold text-3xl'>Kitchen Renovation</h3>
            <p className='p-3'>
              This is a brief description of the project.
            </p>
            <p className='font-bold text-center p-4 '>
              Radix ka IT Department modern technology solutions provide
              karta hai jo company ke digital systems ko smooth, secure aur efficient
              banata hai. Yeh team software development, network management, troubleshooting
              aur system maintenance jaise important tasks handle karti hai.

              Is department ka main focus innovation, reliability aur user-friendly IT services deliver
              karna hota hai taa ke business operations bina kisi rukawat ke chal saken.
            </p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-gray-900'>View Project

            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
