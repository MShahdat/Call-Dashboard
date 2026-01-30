import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { BiTransfer } from "react-icons/bi";
import { FaRegCalendar } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { FiClock } from "react-icons/fi";
import { SiAircall } from "react-icons/si";
import { BsCheck2Circle } from "react-icons/bs";
import { FaRegCirclePlay } from "react-icons/fa6";
import { LuNotebookText } from "react-icons/lu";


const callList = [
  {
    id: 1,
    phone: '+8801885374041',
    date: '2025-12-29',
    time: '08:49 AM',
    type: 'Al Resolved',
    typeBtn: 'border border-solved rounded-lg px-2 bg-linear-to-bl from-[#00C95033] to-[#00BC7D33] text-solved',
    alarm: '5:49',
    list: 'Quote Provided',
    issue: 'Screen',
  },
  {
    id: 2,
    phone: '+8801516577211',
    date: '2025-12-29',
    time: '06:09 AM',
    type: 'Warm Transfer',
    typeBtn: 'border border-transfer rounded-lg px-2 bg-linear-to-bl from-[#FF690033] to-[#FB2C3633] text-transfer',
    alarm: '5:49',
    list: 'Escalated to technician',
    issue: 'Software',
  },
  {
    id: 3,
    phone: '+8801885374041',
    date: '2025-12-29',
    time: '08:49 AM',
    type: 'Appoointment',
    typeBtn: 'border border-secondary rounded-lg px-2 bg-linear-to-bl from-[#2B7FFF33] to-[#00B8DB33] text-secondary',
    alarm: '5:49',
    list: 'Appointment Booked',
    issue: 'Battery',
  },
  {
    id: 4,
    phone: '+8801885374041',
    date: '2025-12-29',
    time: '08:49 AM',
    type: 'Droped',
    typeBtn: 'border border-dropped rounded-lg px-2 bg-linear-to-bl from-[#FF150033] to-[#FB2C3633] text-[#FF0404]',
    alarm: '5:49',
    list: 'Call Droperd',
    issue: 'Unknown',
  }, 
  {
    id: 5,
    phone: '+8801606191464',
    date: '2025-12-29',
    time: '08:49 AM',
    type: 'Al Resolved',
    typeBtn: 'border border-solved rounded-lg px-2 bg-linear-to-bl from-[#00C95033] to-[#00BC7D33] text-solved',
    alarm: '3:43',
    list: 'Quote Provided',
    issue: 'Screen',
  },
]

const type = [
  {
    id: 1,
    title: 'AI Assistant',
    titleColor: 'text-solved',
    des: 'Thank you for calling UBreakiFix! How can I help you today?',
  },
  {
    id: 2,
    title: 'Customer',
    titleColor: 'text-secondary',
    des: 'Hi, my iPhone 13 screen is cracked. How much would it cost to repair?',
  },
  {
    id: 3,
    title: 'AI Assistant',
    titleColor: 'text-solved',
    des: 'I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?',
  },
  {
    id: 4,
    title: 'Customer',
    titleColor: 'text-secondary',
    des: 'Yes, please! When are you available?',
  },
  {
    id: 5,
    title: 'AI Assistant',
    titleColor: 'text-solved',
    des: 'Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?',
  },

]


const CallLog = () => {

  return (
    <div className='bg-linear-to-tr from-primary to-bgPrimary h-[86.9vh] overflow-auto text-white px-4 py-6'>
      <div className='flex flex-col gap-1'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='w-full relative text-[#90A1B9] tracking-wide'>
            <CiSearch className='absolute left-4 top-3' />
            <input type="text" placeholder='Search by phone number, issue type...' className='border pl-10 w-full py-2 border-white/10 rounded-lg text-[14px] outline-none bg-[#0A0A0F80]' />
          </div>
          <div className='xl:pl-8 grid grid-cols-3 gap-2 lg:gap-4 xl:gap-12'>
            <div>
              <div className='bg-[#0A0A0F80] border border-bgPrimary rounded-lg px-1.5 py-1.5'>
                <select className='outline-none sm:px-2 w-full text-[14px]'>
                  <option className='text-white bg-bgPrimary' value="All Type">All Type </option>
                  <option className='text-white bg-bgPrimary' value="Type 1">Type 1 </option>
                  <option className='text-white bg-bgPrimary' value="Type 2">Type 2 </option>
                </select>
              </div>
            </div>
            <div>
              <div className='bg-[#0A0A0F80] border border-bgPrimary rounded-lg px-1.5 py-1.5'>
                <select className='outline-none sm:px-2 w-full text-[14px]'>
                  <option className='text-white bg-bgPrimary' value="All Issue">All Issue </option>
                  <option className='text-white bg-bgPrimary' value="Issue 1">Issue 1 </option>
                  <option className='text-white bg-bgPrimary' value="Issue 2">Issue 2 </option>
                </select>
              </div>
            </div>
            <div>
              <div className='bg-[#0A0A0F80] border border-bgPrimary rounded-lg px-1.5 py-1.5'>
                <select className='outline-none sm:px-2 w-full text-[14px]'>
                  <option className='text-white bg-bgPrimary' value="Today">Today </option>
                  <option className='text-white bg-bgPrimary' value="Yesterday">Yesterday </option>
                  <option className='text-white bg-bgPrimary' value="Last Week">Last Week </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 tracking-wide'>
          <div className='py-4 bg-primary border border-bgPrimary w-full h-fit rounded-lg font-inter'>
            <div className='px-4'>
              <h2 className='text-[20px]'>Call List</h2>
            </div>
            <div className='mt-2 border-t-2 border-borderPrimary/80'></div>
            <div className='flex flex-col gap-2'>
              {
                callList.map((call) => (
                  <div key={call.id} className='group'>
                    <div className='px-4 py-4 flex flex-col gap-6'>
                      <div className=' flex flex-col gap-2'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-3'>
                            <div className='bg-linear-to-tr from-[#2B7FFF] to-[#00B8DB] rounded-lg p-2'>
                              <IoCallOutline className='size-4 sm:size-5' />
                            </div>
                            <div className='flex flex-col'>
                              <p className='text-[18px]'>{call.phone}</p>
                              <div className='text-ternary flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2'>
                                <p>{call.date}</p>
                                <div className='hidden sm:block w-1 h-1 bg-ternary rounded-full'></div>
                                <p>{call.time}</p>
                              </div>
                            </div>
                          </div>
                          <div className={`${call.typeBtn} leading-tight`}>{call.type}</div>
                        </div>
                        <div className='text-ternary flex items-center gap-4'>
                          <div className='flex items-center gap-1'>
                            <FiClock />
                            <p>{call.alarm}</p>
                          </div>
                          <div className='flex items-center gap-1'>
                            <BsCheck2Circle className='shrink-0'/>
                            <p className='leading-tight'>{call.list}</p>
                          </div>
                          <div className='bg-borderPrimary px-3 rounded-lg text-secondary'>{call.issue}</div>
                        </div>
                      </div>
                    </div>
                    <div className='border-t-3 border-secondary/5 transition-all ease-in-out duration-300 group-hover:border-secondary/70 '></div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className='py-4 bg-primary border border-bgPrimary w-full rounded-lg font-arimo'>
            <div className='px-4'>
              <h2 className='text-[20px]'>Call Details</h2>
            </div>
            <div className='mt-2 border-t-2 border-borderPrimary/80'></div>
            <div className='p-4 flex flex-col gap-6'>
               <div className='grid grid-cols-2 gap-4'>
                  <div className='flex flex-col gap-1'>
                    <p className='text-ternary'>Phone Number</p>
                    <p className='text-[18px]'>+8801885374041</p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='text-ternary'>Duration</p>
                    <p className='text-[18px]'>3:49</p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='text-ternary'>Date & Time</p>
                    <p className='text-[18px]'>2025-12-31 01:34 AM</p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='text-ternary'>Issue Type</p>
                    <p className='text-[18px]'>Screen</p>
                  </div>
               </div>
               <div className='flex flex-col gap-1'>
                  <p className='text-ternary'>Call Type</p>
                  <p className='border border-solved rounded-lg px-2 bg-linear-to-bl from-[#00C95033] to-[#00BC7D33] text-solved w-fit'>AI Resolved</p>
               </div>
               <div className='flex flex-col gap-1'>
                <p className='text-ternary'>Outcome</p>
                <p className='text-[18px]'>Quote Provided</p>
               </div>

               <div className='flex items-center gap-2 bg-linear-to-l from-[#AD46FF33] to-[#F6339A33] border border-[#AD46FF4D]/30 justify-center py-2.5 text-[17px] text-[#C27AFF] rounded-2xl cursor-pointer'>
                <p>
                  <FaRegCirclePlay/>
                </p>
                <p>Play Audio Recoding</p>
               </div>

               <div className='flex items-center gap-2 text-[17px]'>
                <p>
                  <LuNotebookText className='text-secondary'/>
                </p>
                <p>Coversion Transcript</p>
               </div>

               <div className='bg-bgSecondary flex flex-col rounded-lg'>
                  {
                    type.map((ty) => (
                      <div key={ty.id} className='p-2'>
                        <p className={`${ty.titleColor}`}>{ty.title}</p>
                        <p>{ty.des}</p>
                        <div className='mt-3 w-full h-[1px] bg-ternary/5'></div>
                      </div>
                    ))
                  }
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallLog;