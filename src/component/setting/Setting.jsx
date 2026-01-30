import React, { useState } from 'react';
import me from '/shahdat1.png';
import { FiEdit } from "react-icons/fi";


const Setting = () => {
  const [active, setActive] = useState('profile');
  const [edit, setEdit] = useState(false);

  return (
    <div className='bg-linear-to-tr from-primary to-bgPrimary w-full h-[86.9vh] overflow-auto tracking-wider font-inter text-white'>
      <div className='px-4 py-4'>
        <div className='text-[18px] flex items-center gap-8'>
          <button
            onClick={() => setActive('profile')}
            className={`pb-1 transition-all duration-300 ${active === 'profile' ? 'border-b-2 border-white/70' : 'border-transparent'}`}
          >Profile</button>

          <button onClick={() => setActive('password')}
            className={`pb-1 transition-all duration-300 ${active === 'password' ? 'border-b-2 border-white/70' : 'border-transparent'}`}
          >Password Setting</button>
        </div>
        <div className='w-full h-[2px] bg-white/5'></div>

        {
          (active === 'profile' && !edit) && (
            <div className='mt-8 flex text-[17px] flex-col gap-8'>
              <div className='flex flex-col gap-4'>
                <p>profile Image</p>
                <div className='flex items-end gap-0'>
                  <img src={me} alt="profile" className='w-36 h-36 rounded-full object-cover' />
                  <button onClick={() => setEdit(true)} className='btn text-[16px]'>Edit Porile</button>
                </div>
              </div>
              <table className='border w-fit border-white/1'>
                <tbody className=''>
                  <tr className='border-b border-white/10'>
                    <td className='py-2'>Full Name:</td>
                    <td className='pl-6'>Shahdat Hossain</td>
                  </tr>
                  <tr className='border-b border-white/10'>
                    <td className='py-2'>Email: </td>
                    <td className='pl-6'>mdshahdat2504@gmail.com</td>
                  </tr>
                  <tr className='border-b border-white/10'>
                    <td className='py-2'>Store Name:</td>
                    <td className='pl-6'>Ubreakfix Store</td>
                  </tr>
                  <tr className='border-b border-white/10'>
                    <td className='py-2'>Store Address:</td>
                    <td className='pl-6'>123 Main Street, New York, NY 10001</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        }

        {
          edit && (
            <div className='mt-8 flex text-[17px] flex-col gap-8'>
              <div className='flex flex-col gap-4'>
                <p>profile Image</p>
                <div className='relative w-fit'>
                  <img src={me} alt="profile" className='w-36 h-36 rounded-full object-cover' />
                  <button className='absolute bottom-0 -right-2 bg-white/40 p-2 rounded-lg'>
                    <FiEdit className='size-5'/>
                  </button>
                </div>
              </div>
              <div className='border border-white/0 w-fit'>
                <form className='grid grid-cols-1 md:grid-cols-2 gap-8 space-x-8'>
                  <div className='w-full flex flex-col gap-1'>
                    <label className=''>Full Name</label>
                    <input type="text" placeholder='Shahdat Hossain' className='border px-4 rounded-lg border-white/10 py-1.5 text-[17px] outline-none bg-[#0A0A0F80]' />
                  </div>
                  <div className='w-full flex flex-col gap-1'>
                    <label className=''>Full Name</label>
                    <input type="email" placeholder='example@gmail.com' className='border px-4 rounded-lg border-white/10 py-1.5 text-[17px] outline-none bg-[#0A0A0F80]' />
                  </div>
                  <div className='w-full flex flex-col gap-1'>
                    <label className=''>Store Name</label>
                    <input type="text" placeholder='Ubreakfix Store' className='border px-4 rounded-lg border-white/10 py-1.5 text-[17px] outline-none bg-[#0A0A0F80]' />
                  </div>
                  <div className='w-full flex flex-col gap-1'>
                    <label className=''>Store Address</label>
                    <input type="text" placeholder='Adderss' className='border px-4 rounded-lg border-white/10 py-1.5 text-[17px] outline-none bg-[#0A0A0F80]' />
                  </div>
                  <div className='mt-4 col-span-2 w-1/2 mx-auto'>
                    <button className='w-full rounded-lg bg-green-500 active:bg-green-600 font-bold text-white px-2 py-1.5'>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Setting;