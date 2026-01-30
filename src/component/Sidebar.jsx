import React, { useEffect } from 'react';
import { TiFlashOutline } from "react-icons/ti";
import { IoMdHome, IoMdCall  } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import {Link, NavLink, useLocation} from 'react-router-dom';

const Sidebar = ({setTitle}) => {
  const location = useLocation();

  useEffect(() => {
    const pathTitle = {
      '/': 'Dashboard Overview',
      '/appointment': 'Appointment',
      '/call-logs': 'Call Logs',
      '/setting': 'Settings',
    };

    setTitle(pathTitle[location.pathname])
  }, [location.pathname])

  return (
    <div className='sticky left-0 z-50 top-0 bg-primary border-r border-white/7 text-white h-screen w-[241px]'>
      <div className='h-[85vh] sm:h-screen'>
        <div className='py-6 sm:py-12 h-full flex flex-col justify-between'>
        <div className='flex flex-col gap-8'>
          <div className='cursor-pointer mx-auto p-2 bg-linear-to-br from-[#00FF88] to-[#00D4FF] rounded-xl'>
            <TiFlashOutline className='text-3xl text-black'/>
          </div>
          <div className='px-2 flex flex-col gap-6'>
            <NavLink to={'/'} className={({isActive}) => `cursor-pointer flex rounded-2xl  w-full px-2 py-1 items-center gap-2 ${isActive? 'btn' : ''}`}>
              <IoMdHome className='size-6'/>
              <p className='mt-0.5'>Dashboard Overview</p>
            </NavLink>
            <NavLink to={'/appointment'} className={({isActive}) => `cursor-pointer flex rounded-2xl  w-full px-2 py-1 items-center gap-2 ${isActive? 'btn' : ''}`}>
              <FaCalendar className='size-4'/>
              <p>Appointment</p>
            </NavLink>
            <NavLink to={'/call-logs'} className={({isActive}) => `cursor-pointer flex rounded-2xl  w-full px-2 py-1 items-center gap-2 ${isActive? 'btn' : ''}`}>
              <IoMdCall className='size-5'/>
              <p>Call Logs</p>
            </NavLink>
            <NavLink to={'/setting'} className={({isActive}) => `cursor-pointer flex rounded-2xl  w-full px-2 py-1 items-center gap-2 ${isActive? 'btn' : ''}`}>
              <IoMdSettings className='icon'/>
              <p>Settings</p>
            </NavLink>
          </div>
        </div>
        <div className='flex rounded-2xl w-full px-2 py-1 items-center gap-2 cursor-pointer'>
          <IoLogOutOutline className='size-6'/>
          <p className='text-red-600'>Log Out</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;