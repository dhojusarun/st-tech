import React from "react";
import { MdNotificationsNone, MdEventNote } from "react-icons/md";
import { LuBookOpenText } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Admin from "../../../assets/Homeimage/Jameswhite.png";
import ManageButton from "../admin/ManageButton"

function DashboardHome() {
  const courses = [
    {
      name: "UI/UX Design",
      lessons: 28,
      duration: "3 Months",
      timing: "1 hr 30 mins",
      instructor: "Nancy White",
      classes: "5 Classes per day",
    },
    {
      name: "Data Science",
      lessons: 28,
      duration: "3 Months",
      timing: "1 hr 30 mins",
      instructor: "Nancy White",
      classes: "5 Classes per day",
    },
    {
      name: "MERN Stack",
      lessons: 28,
      duration: "3 Months",
      timing: "1 hr 30 mins",
      instructor: "Nancy White",
      classes: "5 Classes per day",
    },
    {
      name: "Graphics",
      lessons: 28,
      duration: "3 Months",
      timing: "1 hr 30 mins",
      instructor: "Nancy White",
      classes: "5 Classes per day",
    },
  ];

  return (
    <div className="bg-white p-6 w-full space-y-10">
      <div className="flex justify-between mb-2">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <div className="flex gap-2 items-center">
          <h1 className="font-medium">Admin |</h1>
          <MdNotificationsNone size={25} />
          <h1 className="font-bold">Admin</h1>
          <img
            src={Admin}
            alt="Admin"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center justify-between border shadow-lg p-4 w-66 rounded-lg">
          <div>
            <h1 className="font-medium text-2xl">15</h1>
            <p className="text-[#666666]">Total Courses</p>
          </div>
          <div className="rounded-full p-2 bg-[#E0A2394D]">
            <LuBookOpenText className="size-7 text-[#E0A239]" />
          </div>
        </div>

        <div className="flex items-center justify-between border shadow-lg p-4 w-66 rounded-lg">
          <div>
            <h1 className="font-medium text-2xl">10</h1>
            <p className="text-[#666666]">Total Instructors</p>
          </div>
          <div className="rounded-full p-2 bg-[#22AE4C3D]">
            <IoIosPeople className="size-7 text-[#22AE4C]" />
          </div>
        </div>

        <div className="flex items-center justify-between border shadow-lg p-4 w-66 rounded-lg">
          <div>
            <h1 className="font-medium text-2xl">100</h1>
            <p className="text-[#666666]">Total Students</p>
          </div>
          <div className="rounded-full p-2 bg-[#6A45BE3D]">
            <FaPeopleGroup className="size-7 text-[#6A45BE]" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xl shadow-gray-300 w-full">
        <h2 className="text-xl font-semibold px-6 py-4 border-b">
          Course Management
        </h2>

        <div className="grid grid-cols-7 px-6 py-3 text-center text-sm font-medium text-gray-600 bg-[#F8F8F8]">
          <span>Course Name</span>
          <span>Lessons</span>
          <span>Duration</span>
          <span>Timing</span>
          <span>Instructor</span>
          <span>Total Classes</span>
          <span></span>
        </div>

        {courses.map((course, index) => (
          <div
            key={index}
            className="grid grid-cols-7 items-center justify-between text-center  p-4 border-b bg-[#F4F4F4]"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full">
                <MdEventNote className="text-[#405E83] text-xl" />
              </div>
              <span className="font-medium ">{course.name}</span> 
            </div>

            <span>{course.lessons}</span>
            <span>{course.duration}</span>
            <span>{course.timing}</span>
            <span>{course.instructor}</span>
            <span>{course.classes}</span>

            <div>
              <ManageButton course={course} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardHome;