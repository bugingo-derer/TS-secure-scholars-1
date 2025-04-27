import { JSX } from 'react';
import mortarboard from '../assets/mortarboard_4844590.png';

const NavBar = (): JSX.Element => {
  return (
    <div className="w-full bg-[#2C3D3D] flex items-center p-3">
      <div className="text-white flex items-center">
        <img src={mortarboard} alt="" className="w-12" />
        <h1 className="text-2xl ml-2">Secure Scholars</h1>
      </div>
      <div className="ml-auto">
        <ul className="flex text-white text-xl gap-4 items-center">
          <li>Home</li>
          <li>About Us</li>
          <li>Features</li>
          <li>Contacts</li>
          <div className="flex gap-2">
            <li>
              <button className="px-3 py-2 rounded-md bg-[#3E5656]">Login</button>
            </li>
            <li>
              <button className="bg-[#D5E4E4] text-[#2C3D3D] px-3 py-2 rounded-md">
                Sign Up
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;