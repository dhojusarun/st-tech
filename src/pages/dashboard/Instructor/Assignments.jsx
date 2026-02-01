
import React from 'react'
import { PiNotepadFill } from "react-icons/pi";

function Assignments() {
  return (
    <div className='space-y-6'>
        <div className='flex justify-between bg-[#E1E1E1] rounded-2xl p-3 items-center'>
           <div className='flex items-center gap-4'>
            <PiNotepadFill size={10} className='rounded-full p-1.5 text-[#405E83] w-10 h-10 bg-white flex items-center justify-center' />
            <h1 className='font-medium'>Example <br /> <span className='font-normal text-gray-600'>26 Nov 2024</span> </h1>
           </div>
           <div className='rounded-full bg-[#248942] w-35 h-8 p-1 text-white text-center'>
            <h1>Completed</h1>
           </div>
        </div>

        <div className='flex justify-between bg-[#E1E1E1] rounded-2xl p-3 items-center'>
           <div className='flex items-center gap-4'>
            <PiNotepadFill size={10} className='rounded-full p-1.5 text-[#405E83] w-10 h-10 bg-white flex items-center justify-center' />
            <h1 className='font-medium'>Example <br /> <span className='font-normal text-gray-600'>15 Dec 2024</span> </h1>
           </div>
           <div className='rounded-full bg-[#248942] w-35 h-8 p-1 text-white text-center'>
            <h1>Completed</h1>
           </div>
        </div>

        <div className='flex justify-between bg-[#E1E1E1] rounded-2xl p-3 items-center'>
           <div className='flex items-center gap-4'>
            <PiNotepadFill size={10} className='rounded-full p-1.5 text-[#405E83] w-10 h-10 bg-white flex items-center justify-center' />
            <h1 className='font-medium'>Example <br /> <span className='font-normal text-gray-600'>2 Jan 2025</span> </h1>
           </div>
           <div className='rounded-full bg-[#E8991B] w-35 h-8 p-1 text-white text-center'>
            <h1>In Progress</h1>
           </div>
        </div>

      




    </div>
  )
}

export default Assignments
