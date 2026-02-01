import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import Nancy from "../../../assets/Homeimage/Nancy.png";
import { NavLink} from "react-router-dom";
import Uiux from "../../../assets/Homeimage/Uiux.png";
import Graphics from "../../../assets/Homeimage/Graphics.png";
import Digital from "../../../assets/Homeimage/Digital.png";

function Dashcourses() {
  return (
    <div className="bg-white p-4 roundedt--2xl w-full ">
      <div className="flex justify-between ">
        <h1 className="text-2xl font-bold">My Courses</h1>

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

      <div className="mt-20">
        <h1 className="text-xl font-medium text-center mb-14">
          Explore the courses I teach, designed to enhance your skills and
          knowledge step by step.
        </h1>

<div className="flex justify-around">
        {/* Card 1 */}
        <div className="bg-white rounded-xl w-[250px] shadow p-4">
          <img src={Uiux} className="w-full h-[140px] object-contain" />
          <div className="flex justify-between mt-2">
            <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
              Rs. 10,000
            </span>
            <span className="text-xs text-gray-400">REVIEWS</span>
          </div>
          <h3 className="font-semibold mt-4">
            UI/UX Design | <br /> 2.5 Months
          </h3>
          <p className="text-sm text-gray-500 flex mt-2 items-center gap-2">
            <img
              src={Nancy}
              alt=""
              className="rounded-full object-cover w-8 h-8"
            />
            By Nancy White
          </p>
          <br />
          <hr />
          <NavLink to="/nancycourse">
            <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded">
              View Course
            </button>
          </NavLink>
        </div>

        {/* Card 2 */}
        <div className="bg-white w-[250px] rounded-xl shadow p-4">
          <img src={Graphics} className="w-full h-[140px] object-contain" />
          <div className="flex justify-between mt-2">
            <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
              Rs. 10,000
            </span>
            <span className="text-xs text-gray-400">REVIEWS</span>
          </div>
          <h3 className="font-semibold mt-4">
            Graphic Design |<br /> 2.5 Months
          </h3>
          <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
            <img
              src={Nancy}
              alt=""
              className="rounded-full object-cover     w-8 h-8"
            />
            By Nancy White
          </p>
          <br />
          <hr />
          <NavLink to="/nancygraphic">
            <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded">
              View Course
            </button>
          </NavLink>
        </div>
        {/* Card 3*/}
        <div className="bg-white w-[250px] rounded-xl shadow p-4">
          <img src={Digital} className="w-full h-[140px] object-contain" />
          <div className="flex justify-between mt-2">
            <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
              Rs. 10,000
            </span>
            <span className="text-xs text-gray-400">REVIEWS</span>
          </div>
          <h3 className="font-semibold mt-4">
            Digital Marketing | <br />3 Months
          </h3>
          <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
            <img
              src={Nancy}
              alt=""
              className="rounded-full object-cover     w-8 h-8"
            />
            By Nancy White
          </p>
          <br />
          <hr />
          <NavLink to="/nancydigital">
            <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded">
              View Course
            </button>
          </NavLink>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Dashcourses;