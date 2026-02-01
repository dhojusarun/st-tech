import React from 'react'
import { MdNotificationsNone } from "react-icons/md";
import Riva from "../../../assets/Homeimage/Riva.png";
import { NavLink, Outlet } from "react-router-dom";
function Dashcourses() {
  const course = ({ isActive }) =>
    isActive
      ? "font-medium border-b-2 border-[#003372] pb-2"
      : "font-medium hover:border-b-2 hover:border-[#003372] pb-2";
  return (
    <div className="bg-white p-4 roundedt--2xl w-full ">
          <div className="flex justify-between ">
                 <h1 className="text-2xl font-bold">My Courses</h1>
         
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

               
                <div className='flex gap-15 border-b mt-15 mb-5'>
                  <NavLink to="enrolled" className={course}>
                       Enrolled Courses
                  </NavLink> 

                  <NavLink to="active" className={course}>
                       Active Courses
                  </NavLink> 

                  <NavLink to="completed" className={course}>
                       Completed Courses
                  </NavLink> 
                </div>

                <Outlet/>
              
    </div>
  )
}

export default Dashcourses