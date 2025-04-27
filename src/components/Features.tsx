import React from 'react';

import lockIcon from '../assets/lock.png'
import brainStormIcon from '../assets/brainstorm.png'
import attendanceIcon from '../assets/attendance.png'

import addingUser from '../assets/addingUser.png'
import settings from '../assets/settings.png'
import invite from '../assets/invite.png'
import launch from '../assets/launch.png'
import User from './User';

const Features = (): React.JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-center mb-12">
        <h1 className="font-bold text-3xl mt-10">
          Core Features
        </h1>
        <p className="w-3/4 mx-auto text-gray-600 font-bold">
          Secure exams system, smart study assistant, real-time attendance tracking, and role-based access for students, teachers, and admins
        </p>
      </div>
      <div className='flex gap-10 p-10'>
        <div className='border-2 border-gray-500 rounded-lg p-6 w-1/3'>
          <img src={lockIcon} className='w-10 mx-2'/>
          <h1 className='text-2xl font-bold mb-4'>
            Secure 
          </h1>
          <p className='text-gray-600'>
            Role-based authentication and timed assessment for integrit
          </p>
        </div>
        <div className='border-2 border-gray-500 rounded-lg p-6 w-1/3'>
          <img src={brainStormIcon} className='w-10 mx-2'/>
          <h1 className='text-2xl font-bold mb-4'>
            Study Assistant
          </h1>
          <p className='text-gray-600'>
            Smart content search and personalized learning paths.
          </p>
        </div>
        <div className='border-2 border-gray-500 rounded-lg p-6 w-1/3'>
          <img src={attendanceIcon} className='w-10 mx-2'/>
          <h1 className='text-2xl font-bold mb-4'>
            Attendance System
          </h1>
          <p className='text-gray-600'>
            Real-time tracking and attendance analysis
          </p>
        </div>
      </div>
      <div className="text-center mb-12">
        <h1 className="font-bold text-3xl mt-10">
          How It Works
        </h1>
        <p className="w-3/4 mx-auto text-gray-600 font-bold">
          Simple and efficient process to work and give a profitable result to everyone
        </p>
      </div>
      <div className='flex gap-10 mb-10'>
        <div className='flex flex-col justify-center items-center'>
          <img src={addingUser} className='w-10 ' />
          <h1 className='text-xl font-bold'>Register</h1>
          <p className=''>
            Create your institutional account
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={settings} className='w-10 ' />
          <h1 className='text-xl font-bold'>Setup</h1>
          <p className=''>
            Configure your preferences
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={invite} className='w-10 ' />
          <h1 className='text-xl font-bold'>Invite</h1>
          <p className=''>
            Add teachers and students
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={launch} className='w-10 ' />
          <h1 className='text-xl font-bold'>Launch</h1>
          <p className=''>
            Start using the platform
          </p>
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className="font-bold text-3xl mt-10">
          What our users say
        </h1>
        <p className="w-3/4 mx-auto text-gray-600 font-bold">
          Trusted by leading institutions cross East Africa
        </p>
      </div>
      <div className='flex gap-10 justify-center mx-3 mb-7'>
        <User image='./images/person1.png' name='Dr James Karenzi' career='Professor at University of Rwanda' comment='SecureScholars has transformed how we conduct examinations. The platform is reliable and user-friendly' />
        <User image='./images/person2.png' name='Sarah Mutesi' career='Teacher, King Salamon Academy' comment='The attendence tracking system is excellent. It saves time and provides accurate reports' />
        <User image='./images/person3.png' name='Peter Mugisha' career='Student AUCA' comment='The study assistant feature helps me organize my learning material efficiently' />
      </div>
    </div>
  );
};

export default Features;