import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';
const Logo = () => {
  return (
    <NavLink to='/'>
      <div className='flex items-end' >
      <img src={logo} alt="Logo" /> 
      <h3 className='text-3xl font-bold -ms-2'>Swift Drop</h3>
    </div>
    </NavLink>
  );
};

export default Logo;