import React, { useState } from 'react';
import { FaCalendar } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { RiProgress5Fill } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa6";
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';

const ap = [
  {
    id: 1,
    icon: <FaCalendar className='text-secondary size-5' />,
    name: 'Total Booked',
    num: 32,
    des: '+8 this week',
  },
  {
    id: 2,
    icon: <BsCheck2Circle className='text-green-500 size-5' />,
    name: 'Al Booked',
    num: 52,
    des: '82% off total',
  },
  {
    id: 3,
    icon: <RiProgress5Fill className='text-yellow-500 size-5' />,
    name: 'Pending',
    num: 2,
    des: 'Awaiting Configuration',
  },

]

const appointments = [
  {
    id: 1,
    name: 'Shahdat',
    phone: '01885374041',
    email: 'mdshahdat2504@gmail.com',
    device: 'Realme Master Edition',
    repair: 'Screen',
    date: '02/02/2035',
    slot: 1,
    time: '9:49',
  },
  {
    id: 2,
    name: 'Shahdat',
    phone: '01885374041',
    email: 'mdshahdat2504@gmail.com',
    device: 'Realme 10',
    repair: 'Screen',
    date: '02/02/2035',
    slot: 1,
    time: '9:49',
  },
  {
    id: 3,
    name: 'Shahdat',
    phone: '01885374041',
    email: 'mdshahdat2504@gmail.com',
    device: 'Master Edition',
    repair: 'Screen',
    date: '02/02/2035',
    slot: 1,
    time: '9:49',
  },
  {
    id: 4,
    name: 'Shahdat',
    phone: '01516577211',
    email: 'shahdat2504@gmail.com',
    device: 'Samsung Ultra S24',
    repair: 'Screen',
    date: '02/02/2035',
    slot: 1,
    time: '9:49',
  },
  {
    id: 5,
    name: 'Md Shahdat',
    phone: '01885374041',
    email: 'mdshahdat2504@gmail.com',
    device: 'Redme Note 10',
    repair: 'Battery',
    date: '02/02/2035',
    slot: 1,
    time: '9:49',
  },
  {
    id: 6,
    name: 'Shahdat',
    phone: '01885374041',
    email: 'mdshahdat2504@gmail.com',
    device: 'Realme Master Edition',
    repair: 'Screen',
    date: '02/02/2035',
    slot: 1,
    time: '9:49',
  },
  {
    id: 7,
    name: 'Shahdat',
    phone: '01885374041',
    email: 'mdshahdat2504@gmail.com',
    device: 'Iphone 11 Pro',
    repair: 'Screen',
    date: '02/02/2035',
    slot: 1,
    time: '9:49',
  },
  {
    id: 8,
    name: 'Shahdat',
    phone: '01885374041',
    email: 'mdshahdat2504@gmail.com',
    device: 'Realme Master Edition',
    repair: 'Screen',
    date: '02/02/2035',
    slot: 1,
    time: '9:49',
  },
  {
    id: 9,
    name: 'Shahdat',
    phone: '01885374041',
    email: 'mdshahdat2504@gmail.com',
    device: 'Iphone 17 Pro Max',
    repair: 'Screen',
    date: '02/02/2035',
    slot: 1,
    time: '9:49',
  },
  {
    id: 10,
    name: 'Shahdat',
    phone: '01516577211',
    email: 'shahdat2504@gmail.com',
    device: 'Vivo 9',
    repair: 'Screen',
    date: '02/02/2035',
    slot: 1,
    time: '9:49',
  },
  {
    id: 11,
    name: 'Md Shahdat',
    phone: '01885374041',
    email: 'mdshahdat2504@gmail.com',
    device: 'Realme Master Edition',
    repair: 'Battery',
    date: '02/02/2035',
    slot: 1,
    time: '9:49',
  },
  {
    id: 12,
    name: 'Shahdat',
    phone: '01885374041',
    email: 'mdshahdat2504@gmail.com',
    device: 'Realme Note 8 5G',
    repair: 'Screen',
    date: '02/02/2035',
    slot: 1,
    time: '9:49',
  },
];

const Appointment = () => {

  const [index, setIndex] = useState(0);
  const perPage = 5;
  const start = index * perPage;
  const end = start + perPage;
  const currentItems = appointments.slice(start, end);

  const totalPage = Math.ceil(appointments.length / perPage);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('https://techstore.com/book?id=store123');
      toast('Linked Copied!')
    } catch (err) {
      console.error('Faild Error!', err)
    }
  }

  const handleChange = (book) => {
    console.log(book.selected)
    setIndex(book.selected)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  return (
    <div className='bg-linear-to-tr from-primary to-bgPrimary w-full h-[89vh] overflow-y-auto overflow-x-hidden text-white px-4 py-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3'>
        {
          ap.map((apo) => (
            <div key={apo.id} className='p-3 bg-primary shadow-2xl border border-bgPrimary rounded-lg flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <p>{apo.icon}</p>
                <p className='text-[#90A1B9]'>{apo.name}</p>
              </div>
              <p className='text-[24px] font-medium'>{apo.num}</p>
              <p className='text-[#90A1B9]'>{apo.des}</p>
            </div>
          ))
        }
      </div>

      <div className='mt-6 px-3 py-5 bg-linear-to-b from-black/30 to-white/15 rounded'>
        <div className=' grid grid-cols-1 gap-2'>
          <label className=''>Booking Link</label>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
            <div className='col-span-2 border px-4 rounded-lg border-white/10 py-2  lg:text-[17px] outline-none bg-[#0A0A0F80]'>
              https://techstore.com/book?id=store123
            </div>

            <div onClick={() => handleCopy()} className=' cursor-pointer flex items-center justify-center gap-2 btn'>
              <FaRegCopy className='' />
              <div>Copy Link</div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 bg-primary/65 rounded-[16px] overflow-hidden'>
        <div className='w-full overflow-x-auto border border-[#162F61]'>
          <table className='table-auto min-w-[1100px] w-full'>
            <tbody className='text-[14px] lg:text-[16px] tracking-wide leading-tight'>
              <tr className=' border-b-[2px] border-[#162F61]'>
                <th className='text-center py-3.5 px-4'>No.</th>
                <th className='text-center py-3.5 px-4'>Client Name</th>
                <th className='text-center px-4'>Client Phone</th>
                <th className='text-center px-4'>Client Mail</th>
                <th className='text-center px-4'>Device</th>
                <th className='text-center px-4'>Repair Type</th>
                <th className='text-center px-4'>Date</th>
                <th className='text-center px-4'>Slot No</th>
                <th className='text-center px-4'>Start Time</th>
              </tr>
              {
                currentItems.map((appo) => (
                  <tr key={appo.id} className='border-b-2 text-[#CFCFCF] border-[#162F61]'>
                    <td className='text-center py-3.5 px-4 font-arimo text-secondary'>{appo.id}</td>
                    <td className='text-center py-3.5 px-4 font-arimo text-secondary'>{appo.name}</td>
                    <td className='text-center px-4'>{appo.phone}</td>
                    <td className='text-center px-4 text-white'>{appo.email}</td>
                    <td className='text-center px-4'>{appo.device}</td>
                    <td className='text-center px-4'>{appo.repair}</td>
                    <td className='text-center px-4'>{appo.date}</td>
                    <td className='text-center px-4'>{appo.slot}</td>
                    <td className='text-center px-4'>{appo.time}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <ReactPaginate
        previousLabel='< Pre'
        nextLabel='Next >'
        breakLabel='...'

        pageCount={totalPage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}

        onPageChange={handleChange}
        forcePage={index}

        containerClassName="mt-3 flex item-center justify-center gap-1 sm:gap-2 lg:gap-2 text-sm sm:text-sm lg:text-md font-medium"

        pageClassName=" px-2 sm:px-3 py-1 text-[#0F62FE] rounded "
        pageLinkClassName="cursor-pointer"

        previousClassName=" px-2 sm:px-3 py-1 rounded text-[#697077]"
        previousLinkClassName="cursor-pointer"

        nextClassName=" px-2 sm:px-3 py-1 rounded text-[#697077]"
        nextLinkClassName="cursor-pointer"

        breakClassName="px-3 py-1 text-[#0F62FE]"
        breakLinkClassName="cursor-pointer"

        activeClassName="bg-[#A6C8FF] text-[#001D6C]"
        disabledClassName='opacity-0 cursor-not-allowed'
      ></ReactPaginate>
    </div>
  );
};

export default Appointment;