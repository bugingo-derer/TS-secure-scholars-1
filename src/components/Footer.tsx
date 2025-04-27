import React from 'react'
import mortarboard from '../assets/mortarboard_4844590.png';

import fbIcon from '../assets/facebook.png'
import linkedInIcon from '../assets/linkedin.png'
import xIcon from '../assets/x.png'

const Footer = ():React.JSX.Element => {
  return (
    <div className='min-h-[20vh] bg-[#2C3D3D] text-white flex flex-col justify-center items-center gap-24 py-16'>
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-2 mt-10'>
          <div className='flex'>
            <img src={mortarboard} alt="" className='w-12' />
            <h1 className="text-2xl ml-2">Secure Scholars</h1>
          </div>
          <div className='text-xl ml-10 w-[73%] text-[#a7aaaa] text-bold'>
            Modernizing education across Rwanda and East Africa
          </div>
        </div>
        <div className='flex flex-col gap-9'>
          <h1 className='text-2xl font-bold mb-3'>Features</h1>
          <p className='text-xl text-[#a7aaaa] font-bold'>Profit calculator</p>
          <p className='text-xl text-[#a7aaaa] font-bold'>Tax Estimator</p>
          <p className='text-xl text-[#a7aaaa] font-bold'>Reports</p>
          <p className='text-xl text-[#a7aaaa] font-bold'>Analytics</p>
        </div>
        <div className='flex flex-col gap-9'>
          <h1 className='text-2xl font-bold mb-3'>Company</h1>
          <p className='text-xl text-[#a7aaaa] font-bold'>About</p>
          <p className='text-xl text-[#a7aaaa] font-bold'>Blog</p>
          <p className='text-xl text-[#a7aaaa] font-bold'>Careers</p>
          <p className='text-xl text-[#a7aaaa] font-bold'>Contact</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-bold mb-3 text-center'>Connect</h1>
          <div className='flex justify-evenly'>
            <img src={xIcon} className='w-12' />
            <img src={linkedInIcon} className='w-12' />
            <img src={fbIcon} className='w-12' />
          </div>
        </div>
      </div>
      <div className='text-xl text-bold text-[#a7aaaa]'>
        &copy; {new Date().getFullYear()} UNGUKA. All right reserved.
      </div>
    </div>
  )
}

export default Footer