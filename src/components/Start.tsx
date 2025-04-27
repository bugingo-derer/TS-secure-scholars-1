import React from 'react'

const Start = (): React.JSX.Element => {
  return (
    <div className='bg-[#D5E4E4] min-h-[25vh] py-16 flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold text-[#0b4137] mb-7'>
        Ready to Transform Your Institution?
      </h1>
      <p className=''>
        Join the leading education Institutions across East Africa in embracing secure and efficient digital learning
      </p>
      <div className='flex mt-20 gap-10'>
        <button className='bg-[#2C3D3D] hover:bg-[#1d2828] px-10 py-4 text-white rounded-md font-bold text-xl transition duration-300 ease-in-out'>
          Get Started
        </button>
        <button className='border border-[#2C3D3D] hover:bg-[#c0cece] px-10 py-4 rounded-md text-xl font-bold text-[#4e5d5d] transition duration-300 ease-in-out'>
          Watch Demo
        </button>
      </div>
    </div>
  )
}

export default Start