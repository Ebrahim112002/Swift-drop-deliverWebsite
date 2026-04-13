import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import authImage from '../assets/authImage.png';


const AuthLaout = () => {
  return (
    <div className='max-w-7xl mx-auto p-5 '>
      <div className='mb-5'>
        <Logo></Logo>
      </div>
      <div className='flex ' >
         <div className='flex-1'>
        <Outlet></Outlet>
      </div>
      <div className='flex-1'>
        <img src={authImage} alt="" />

      </div>
      </div>
     
    </div>
  );
};

export default AuthLaout;