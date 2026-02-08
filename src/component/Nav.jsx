import React, { useState } from 'react';
import { MdNotificationsNone } from "react-icons/md";
import me from '/shahdat1.png';
import { IoMenu } from "react-icons/io5";
import Sidebar from './Sidebar';
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Nav = ({ title, setTitle }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='sticky right-0 top-0 z-50 bg-primary py-4 border-b border-secondary/15 text-white w-full'>
        <div className='flex items-center justify-between px-4'>
          <div className='flex items-center gap-4'>
            <div onClick={() => {
              setOpen(!open)
            }} className='sm:hidden border px-2 mt-0.5 py-1 rounded'>
              {
                open ? <RxCross2 className='size-5' /> : <IoMenu className='size-5' />
              }
            </div>
            <div>
              <p className='text-xl sm:text-2xl font-medium tracking-wide'>{title}</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <MdNotificationsNone className='size-7 stroke-0' />
            <Link to={'/setting'}>
              <img src={me} alt="profile" className='w-12 h-12 rounded-full object-cover' />
            </Link>
          </div>
        </div>

        <div onClick={() => setOpen(!open)}
          className={`fixed top-20 left-0 z-50 h-[89vh] bg-red-00 w-fit ${open ? 'translate-x-0' : '-translate-full'} sm:hidden`}>
          <Sidebar setTitle={setTitle} />
        </div>
      </div>
    </>
  );
};

export default Nav;