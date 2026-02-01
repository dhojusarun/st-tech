import React, { useState } from 'react'
import { MdNotificationsNone } from "react-icons/md";
import Riva from "../../../assets/Homeimage/Riva.png";
import dash from "../../../assets/Homeimage/dash.png";

function Dashprofile() {
  const [profileData] = useState(() => {
    const savedData = localStorage.getItem('userProfileData');
    return savedData ? JSON.parse(savedData) : {
      firstName: 'Riva',
      lastName: 'Shakya',
      username: 'Riva12',
      location: 'Kathmandu',
      email: 'Riva12@gmail.com',
      contact: '9800000000',
      skill: '-',
      biography: '-'
    };
  });
  return (
   <div className="bg-white p-6 roundedt--2xl w-full space-y-15">
      <div className="flex justify-between">
             <h1 className="text-2xl font-bold">My Profile</h1>
     
             <div className="flex gap-2 items-center">
               <MdNotificationsNone size={25} />
               <h1 className="font-bold">Riva Shakya</h1>
               <img
                 src={Riva}
                 alt=""
                 className="w-8 h-8 rounded-full object-cover"
               />
             </div>
           </div>

           <div className='space-y-4 -mt-10'>
             <img
                 src={Riva}
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
                       <span className="font-bold text-2xl">{profileData.firstName} {profileData.lastName}</span>
                     </h1>
                     <br />
                     <p className="text-white w-[700px]">
                       We’re excited to have you here. Dive into your learning journey and make progress toward your goals. Remember, every step counts! Check your tasks for today and continue where you left off. Let’s make this a productive session!
                     </p>
                   </div>
           
                   <div className="size-70 absolute left-195 bottom-12">
                     <img src={dash} alt="" />
                   </div>
                 </div>
<div className='space-y-6'>
                 <div className='flex gap-40'>
                  <h1>Registration Date</h1>
                  <p className='font-medium'>1/2/2025     4:30 pm</p>
                 </div>

                 <div className='flex gap-52'>
                  <h1>First Name</h1>
                  <p className='font-medium'>{profileData.firstName}</p>
                 </div>

                 <div className='flex gap-52'>
                  <h1>Last Name</h1>
                  <p className='font-medium'>{profileData.lastName}</p>
                 </div>

                 <div className='flex gap-52'>
                  <h1>Username</h1>
                  <p className='font-medium'>{profileData.username}</p>
                 </div>

                 <div className='flex gap-54'>
                  <h1>Location</h1>
                  <p className='font-medium'>{profileData.location}</p>
                 </div>

                 <div className='flex gap-60'>
                  <h1>Email</h1>
                  <p className='font-medium'>{profileData.email}</p>
                 </div>

                 <div className='flex gap-41'>
                  <h1>Contact Number</h1>
                  <p className='font-medium'>{profileData.contact}</p>
                 </div>

                 <div className='flex gap-42'>
                  <h1>Skill/Occupation</h1>
                  <p className='font-medium'>{profileData.skill || '-'}</p>
                 </div>

                 <div className='flex gap-53'>
                  <h1>Biography</h1>
                  <p className='font-medium'>{profileData.biography || '-'}</p>
                 </div>
                 </div>
    </div>
  )
}

export default Dashprofile