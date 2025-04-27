import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero = (): React.JSX.Element => {
  return (
    <div className="bgimage w-full min-h-[calc(100vh-4.375rem)] bg-black text-white py-[15%] px-[20%]">
      <motion.div
        initial={{
          marginLeft: '200px',
        }}
        animate={{
          marginLeft: '0px',
        }}
        transition={{
          duration: 1,
          delay: .1,
          type: 'inertia',
        }}
      >
        <h1 className="text-3xl font-extrabold w-2/4 mb-7">
          Secure Education Platform for
          <Typewriter options={{strings: ['Rwanda','East Africa','Africa'],autoStart: true,loop: true,}}/>
        </h1>
        <p className="w-3/5 font-bold">
          Revolutionizing education with your secure exams, smart study tools, and real-time attendance tracking.
        </p>
        <button className="font-bold mx-auto my-10 bg-[#2C3D3D] py-4 px-6 rounded-md">
          Start Free Trial
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;