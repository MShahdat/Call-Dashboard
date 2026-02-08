import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import Nav from './component/Nav';
import { Outlet } from 'react-router-dom';
import {ToastContainer, Zoom} from 'react-toastify'

const App = () => {

  const [title, setTitle] = useState('')
  return (
    <div className='flex overflow-y-auto no-scrollbar'>
      <div className='hidden sm:block'>
        <Sidebar setTitle = {setTitle}/>
      </div>
      <div className='w-full'>
        <Nav title = {title} setTitle = {setTitle}/>
        <Outlet />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </div>
  );
};

export default App;