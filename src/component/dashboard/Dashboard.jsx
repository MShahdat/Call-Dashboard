import React, { useMemo, useState } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { BiTransfer } from "react-icons/bi";
import { FaRegCalendar } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { FiClock } from "react-icons/fi";
import { SiAircall } from "react-icons/si";
import Chart from './Chart';


const das = [
  {
    id: 1,
    icon: <IoCallOutline className='size-5' />,
    iconBg: 'bg-linear-to-tr from-[#2B7FFF] to-[#00B8DB]',
    title: 'Total Calls Today',
    num: "123",
    des: '+12%',
    desColor: 'text-green-500',
  },
  {
    id: 2,
    icon: <SiAircall className='size-5' />,
    iconBg: 'bg-linear-to-tr from-[#AD46FF] to-[#F6339A]',
    title: 'AI-Handled Calls',
    num: "98",
    des: '+62%',
    desColor: 'text-green-500',
  },
  {
    id: 3,
    icon: <BiTransfer className='size-5' />,
    iconBg: 'bg-linear-to-tr from-[#FF6900] to-[#FB2C36]',
    title: 'Warm Transfer',
    num: "34",
    des: '+43%',
    desColor: 'text-green-500',
  },
  {
    id: 4,
    icon: <FaRegCalendar className='size-5' />,
    iconBg: 'bg-linear-to-tr from-[#00C950] to-[#00BC7D]',
    title: 'Appointment Booked',
    num: "65",
    des: '+8%',
    desColor: 'text-green-500',
  },
  {
    id: 5,
    icon: <RxCrossCircled className='size-5' />,
    iconBg: 'bg-linear-to-tr from-[#FB2C36] to-[#FF2056]',
    title: 'Missed/Failed Calls',
    num: "3",
    des: '-9%',
    desColor: 'text-red-500',
  },
  {
    id: 6,
    icon: <FiClock className='size-5' />,
    iconBg: 'bg-linear-to-tr from-[#615FFF] to-[#2B7FFF]',
    title: 'Avg Call Duration',
    num: '4:49',
    des: '+13%',
    desColor: 'text-green-500',
  },

]

const activity = [
  {
    id: 1,
    title: 'AI blocked appointment for iPhone 12 screen repair',
    color: 'bg-green-500',
    time: '9 min age',
  },
  {
    id: 2,
    title: 'Warm transfer to technician - Software issue',
    color: 'bg-yellow-500',
    time: '35 min age',
  },
  {
    id: 3,
    title: 'Quote provided for iPad battery replacement',
    color: 'bg-blue-500',
    time: '49 min age',
  },
  {
    id: 4,
    title: 'Call dropped after 12 seconds',
    color: 'bg-red-500',
    time: '57 min age',
  },

]

const repair = [
  {
    id: 1,
    title: 'Screen Repair',
    count: 34,
    fill: 'w-[66%]',
    color: 'bg-linear-to-l from-[#2B7FFF] to-[#00B8DB]',
  },
  {
    id: 2,
    title: 'Battery Replacement',
    count: 94,
    fill: 'w-[80%]',
    color: 'bg-linear-to-l from-[#2B7FFF] to-[#00B8DB]',
  },
  {
    id: 3,
    title: 'Back Glass Repair',
    count: 89,
    fill: 'w-[40%]',
    color: 'bg-linear-to-l from-[#2B7FFF] to-[#00B8DB]',
  },
  {
    id: 4,
    title: 'Software Issues',
    count: 37,
    fill: 'w-[60%]',
    color: 'bg-linear-to-l from-[#2B7FFF] to-[#00B8DB]',
  },

]

const dataWeek = [
  {
    name: 'Mon', call: 47,
  },
  {
    name: 'Tue', call: 55,
  },
  {
    name: 'Wed', call: 47,
  },
  {
    name: 'Thu', call: 60,
  },
  {
    name: 'Fri', call: 69,
  },
  {
    name: 'Sat', call: 75,
  },
  {
    name: 'Sun', call: 55,
  },
];

const dataMonth = [
  { name: 'January', call: 1590},
  { name: 'March', call: 1290},
  { name: 'May', call: 1990},
  { name: 'July', call: 2290},
  { name: 'September', call: 1820},
  { name: 'November', call: 1480},
];

const dataYear = [
  { name: '2020', call: 10490},
  { name: '2021', call: 15090},
  { name: '2022', call: 10090},
  { name: '2023', call: 14090},
  { name: '2024', call: 17020},
  { name: '2025', call: 22480},
];

const Dashboard = () => {

  const [range, setRange] = useState('week');

  const chartData = useMemo(() => {
    if (range === 'week') return dataWeek;
    if (range === 'month') return dataMonth;
    if (range === 'year') return dataYear;
    return dataWeek;
  }, [range]);

  const total = useMemo(() => {
    return chartData.reduce((acc, chart) => acc + chart.call, 0);
  }, [chartData]);

  return (
    <div className='bg-linear-to-tr from-primary to-bgPrimary h-[89vh] overflow-auto text-white px-4 py-6'>
      <div className='h-[86.9vh'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3'>
        {
          das.map((da) => (
            <div key={da.id} className='p-4 bg-primary shadow-2xl border border-bgPrimary rounded-lg flex items-start justify-between'>
              <div className='flex flex-col gap-1'>
                <p className='text-[#90A1B9] font-inter text-[18px]'>{da.title}</p>
                <p className='text-[24px] font-medium'>{da.num}</p>
                <p className={`${da.desColor}`}>{da.des}</p>
              </div>
              <div className={`p-2 rounded-xl ${da.iconBg}`}>
                {da.icon}
              </div>
            </div>
          ))
        }
      </div>

      <div className='mt-6 p-4 bg-primary border border-bgPrimary w-full rounded-lg'>
        <div className=' flex w-full flex-col items-start'>
          <div className=' flex flex-col items-start w-full'>
            <div className=' flex items-center justify-between w-full'>
              <p className='font-arimo text-[20px]'>Call Trends - This Week</p>
              <div className='bg-bgPrimary/50 border border-bgPrimary rounded-lg px-2 py-1'>
                <select value={range}
                  onChange={(e) => setRange(e.target.value)}
                className='outline-none w-fit'>
                  <option className='text-white bg-bgPrimary' value="week">Week </option>
                  <option className='text-white bg-bgPrimary' value="month">Month </option>
                  <option className='text-white bg-bgPrimary' value="year">Year </option>
                </select>
              </div>
            </div>
            <p className='text-[#90A1B9]'>total: {total} calls</p>
          </div>
          <div className='px-0 md:px-4 bg-red-00 w-full'>
            <Chart data = {chartData}/>
          </div>
        </div>
      </div>

      <div className='mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 tracking-wide'>
        <div className='p-4 bg-primary border border-bgPrimary w-full rounded-lg font-inter'>
          <h2 className='text-[20px]'>Recent Activity</h2>
          <div className='mt-4 w-full flex flex-col gap-1.5 items-start'>
            {
              activity.map((act) => (
                <div key={act.id} className='w-full bg-bgSecondary/50 rounded-lg p-2 border border-primary'>
                  <div className='flex items-start gap-2'>
                    <div className={`mt-2 w-2 h-2 rounded-full ${act.color}`}></div>
                    <div className=''>
                      <p className='text-[18px]'>{act.title}</p>
                      <p className='text-[14px] text-ternary'>{act.time}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className='p-4 bg-primary border border-bgPrimary w-full rounded-lg font-inter'>
          <h2 className='text-[20px]'>Top Repair Requests</h2>
          <div className='mt-4 flex flex-col gap-4'>
            {
              repair.map((re) => (
                <div key={re.id} className='mt-2 flex flex-col gap-1.5'>
                  <div className='flex items-center justify-between px-1 tracking-wider text-[18px]'>
                    <p >{re.title}</p>
                    <p>{re.count} request</p>
                  </div>
                  <div className='bg-white/20 w-full h-[10px] rounded-full relative'>
                    <div className={`bg-linear-to-l from-[#2B7FFF] to-[#00B8DB] ${re.fill} h-[10px] absolute left-0 top-0 rounded-full`}></div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;