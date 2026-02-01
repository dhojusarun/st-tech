import React from 'react'
import { MdNotificationsNone } from "react-icons/md";
import Nancy from "../../../assets/Homeimage/Nancy.png";
import dash from "../../../assets/Homeimage/dash.png";
function Dashprofile() {
  return (
   <div className="bg-white p-6 roundedt--2xl w-full space-y-15">
      <div className="flex justify-between">
             <h1 className="text-2xl font-bold">My Profile</h1>
     
             <div className="flex gap-2 items-center">
                <h1 className="font-bold">Instructor | </h1> 
               <MdNotificationsNone size={25} />
               <h1 className="font-bold">Nancy White</h1>
               <img
                 src={Nancy}
                 alt=""
                 className="w-8 h-8 rounded-full object-cover"
               />
             </div>
           </div>

           <div className='space-y-4 -mt-10'>
             <img
                 src={Nancy}
                 alt=""
                 className="w-15 h-15 rounded-full object-cover ml-12"
               />
               <button className=' p-0.5 shadow shadow-gray-800'>Change Profile Picture</button>
           </div>

                 <div className="bg-gradient-to-r from-[#003372] via-[#003372] to-[#E1BB50] h-60 rounded-2xl px-10 py-8 text-justify flex justify-between relative">
                   <div>
                     <h1 className="text-2xl text-white">
                       Welcome back,
                       <br />
                       <span className="font-bold text-2xl">Nancy Shakya</span>
                     </h1>
                     <br />
                     <p className="text-white w-[700px]">
                       Your courses are inspiring learners worldwide, and your dashboard is ready to help you manage, create, and connect with your students.
                     </p>
                   </div>
           
                   <div className="size-70 absolute left-195 bottom-12">
                     <img src={dash} alt="" />
                   </div>
                 </div>
<div className='space-y-6'>
                 <div className='flex gap-45'>
                  <h1>Joining Date</h1>
                  <p className='font-medium'>4/4/2022    </p>
                 </div>

                 <div className='flex gap-48'>
                  <h1>First Name</h1>
                  <p className='font-medium'>Nancy</p>
                 </div>

                 <div className='flex gap-48'>
                  <h1>Last Name</h1>
                  <p className='font-medium'>White</p>
                 </div>

                 <div className='flex gap-49'>
                  <h1>Username</h1>
                  <p className='font-medium'>Nancy12</p>
                 </div>

                 <div className='flex gap-52'>
                  <h1>Location</h1>
                  <p className='font-medium'>Kathmandu</p>
                 </div>

                 <div className='flex gap-58'>
                  <h1>Email</h1>
                  <p className='font-medium'>Nancy12@gmail.com</p>
                 </div>

                 <div className='flex gap-38'>
                  <h1>Contact Number</h1>
                  <p className='font-medium'>9800000000</p>
                 </div>

                 <div className='flex gap-54'>
                  <h1>Courses</h1>
                  <p className='font-medium'>UI/UX Design</p>
                 </div>

                 <div className='flex gap-50'>
                  <h1>Biography</h1>
                  <p className='font-medium'>I am a professional UI/UX Designer and instructor dedicated to helping you master design principles and create impactful digital experiences.</p>
                 </div>
                 </div>
    </div>
  )
}

export default Dashprofile