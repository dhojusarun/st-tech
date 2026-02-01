import React from "react";
import { MdNotificationsNone,  MdEventNote } from "react-icons/md";
import { LuBookOpenText } from "react-icons/lu";
import { GiGraduateCap } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";

import Nancy from "../../../assets/Homeimage/Nancy.png";
import dash from "../../../assets/Homeimage/dash.png";

function DashboardHome() {
  return (
    <div className="bg-white p-6 roundedt--2xl w-full space-y-15">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <div className="flex gap-2 items-center">
          <h1 className="font-medium">Instructor |</h1>
          <MdNotificationsNone size={25} />
          <h1 className="font-bold"> Nancy White</h1>
          <img
            src={Nancy}
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#003372] via-[#003372] to-[#E1BB50] h-60 rounded-2xl px-12 py-8 text-justify flex justify-between relative">
        <div>
          <h1 className="text-2xl text-white">
            Welcome back,
            <br />
            <span className="font-bold text-2xl">Nancy White</span>
          </h1>
          <br />
          <p className="text-white w-[700px]">
           Your courses are inspiring learners worldwide, and your dashboard is ready to help you manage, create, and connect with your students.
          </p>
        </div>

        <div className="size-70 absolute left-195 bottom-10">
          <img src={dash} alt="" />
        </div>
      </div>

     <div>
      <h1 className="font-medium text-2xl">Overview</h1>
      <div className="flex justify-between">
        <div  className="flex items-center justify-between border shadow-lg shadow-gray-400 p-4 mt-6 w-66 rounded-lg">
          <div>
            <h1 className="font-medium text-2xl">06</h1>
            <p className="text-[#666666]">Classes in Progress</p>
          </div>
          <div className="rounded-full p-2 bg-[#E0A2394D]">
            < LuBookOpenText className="size-7 text-[#E0A239]"/>
          </div>
        </div>

         <div  className="flex items-center justify-between border shadow-lg shadow-gray-400 p-4 mt-6 w-66 rounded-lg">
          <div>
            <h1 className="font-medium text-2xl">25</h1>
            <p className="text-[#666666]">Classes Completed</p>
          </div>
          <div className="rounded-full p-2 bg-[#22AE4C3D]">
            <GiGraduateCap className="size-7 text-[#22AE4C]"/>
          </div>
        </div>

        <div  className="flex items-center justify-between border shadow-lg shadow-gray-400 p-4 mt-6 w-66 rounded-lg">
          <div>
            <h1 className="font-medium text-2xl">40</h1>
            <p className="text-[#666666]">Students</p>
          </div>
          <div className="rounded-full p-2 bg-[#E0A2394D]">
            <FaPeopleGroup className="size-7 text-[#E0A239]"/>
          </div>
        </div>

      </div>
     </div>

     <div className="mt-10 bg-white border rounded-xl w-[700px] shadow-xl shadow-gray-400"> 
  <h2 className="text-xl font-semibold  p-4">
    Courses in Progress (6)
  </h2>

  {[
    { title: "UI/UX Design (Batch 8)", progress: 50 },
    { title: "Example", progress: 60 },
    { title: "Example", progress: 35 },
    { title: "Example", progress: 80 },
    { title: "Example", progress: 55 },
    { title: "Example", progress: 50 },
  ].map((course, index) => (
    <div
      key={index}
      className="flex items-center justify-between bg-[#F4F4F4] py-2 p-4 border-b "
    >
      <div className="flex items-center gap-4 w-[40%]">
        <div className="w-10 h-10 flex items-center justify-center  bg-white rounded-full">
          <MdEventNote  className="text-[#405E83] text-2xl" />
        </div>
        <div>
          <h3 className="font-medium">{course.title}</h3>
          <p className="text-sm text-gray-500">28 Lessons</p>
        </div>
      </div>

      <div className="flex items-center gap-4 w-[60%]">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-700 h-2 rounded-full"
            style={{ width: `${course.progress}%` }}
          />
        </div>
        <span className="text-sm font-medium text-blue-700">
          {course.progress}%
        </span>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default DashboardHome;