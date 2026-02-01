
import React from "react";
import Activeimage from "../../../assets/Homeimage/Activeimage.png";
import Nancy from "../../../assets/Homeimage/Nancy.png";
import oval from "../../../assets/Homeimage/oval.png";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { IoMdLock } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Active() {
  const percentage = 50;
  const size = 250;
  const strokeWidth = 30;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="space-y-10 ">
        <div className="flex gap-96">
         <div className="bg-white rounded-xl p-4 w-50 h-65 shadow shadow-gray-500">
        <img
          src={Activeimage}
          alt=""
          className="rounded-lg mb-3 object-cover"
        />

        <h3 className="font-semibold">UI/UX Design</h3>

        <p className="flex gap-2 text-sm text-gray-500 items-center">
          <img
            src={Nancy}
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
          By Nancy White
        </p>

        <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full mt-2">
          Ongoing
        </span>

        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full w-1/2"></div>
          </div>

          <p className="text-xs mt-2 text-gray-500 flex justify-between">
            Completed: 50% <span>14/28</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center font-sans space-y-4">
        <h1 className="font-medium ">Progress</h1> 
        <div
          className="relative bg-no-repeat bg-cover "
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundImage: `url(${oval})`,
          }}
        >
          <svg
            width={size}
            height={size}
            className="-rotate-90 absolute top-0 left-0"
          >
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="#8b5cf6"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="butt"
              className="transition-all duration-500 ease-in-out"
            />
          </svg>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold text-[#002a52] text-lg w-[60%]">
            UI/UX Design Course
          </div>
        </div>

        <div className="mt-8 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <span className="w-5 h-5 bg-purple-500 mr-2 "></span>
            {percentage}% Complete
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <span className="w-5 h-5 bg-gray-300 mr-2   "></span>
            {100 - percentage}% Remaining
          </div>
        </div>
      </div>    
         </div>

         <div className="lg:col-span-2 space-y-2  ">
                     <h1 className="ml-4 font-medium text-2xl">
                       Content
                     </h1>
                     <div className="bg-white rounded-xl w-1/2 shadow shadow-black">
                       <details open className="group border-b ">
                         <summary className="flex items-center justify-between px-6 py-3  cursor-pointer font-medium text-[#003372]">
                           <span className="flex items-center gap-2">
                             <IoChevronDown className="transition group-open:rotate-180" />
                             Introduction to UI/UX
                              <IoMdCheckmarkCircleOutline className="ml-70 size-6" />
                           </span>
                         </summary> 
         <hr />
                         <div className="px-6 pb-4 mt-4 space-y-3">
                           {[
                             "Definition of UI",
                             "Definition of UX",
                             "Importance of UI/UX",
                             "Overview of UI/UX Design Process",
                           ].map((item, i) => (
                             <div key={i} className="flex justify-between items-center text-gray-700">
                               <div className="flex items-center gap-2">
                                 <PiYoutubeLogoDuotone className="text-gray-500" />
                                {item}
                               </div>
                               
                               <div className="flex items-center gap-2 text-sm text-gray-400">
                                 <button className="bg-[#D1F7E1] text-[#22AE4C] rounded-full p-1">Completed</button>
                                 <span>00:00</span>
                                 <IoMdLock />
                               </div>
                             </div>
                           ))}
                         </div>
                       </details>
         
                       <details open className="group border-b">
                         <summary className="flex items-center justify-between px-6 py-3 cursor-pointer font-medium text-[#003372]">
                           <span className="flex items-center gap-2">
                             <IoChevronDown className="transition group-open:rotate-180" />
                             Design Tools
                              <IoMdCheckmarkCircleOutline className="ml-87 size-6" />
                           </span>
                         </summary>
         <hr />
                         <div className="px-6 pb-4 mt-4  space-y-3">
                           {[
                             "Overview of Popular Design Tools (E.g. Figma)",
                             "Hands-on Tools Usage",
                             "Collaborative Design Tools",
                           ].map((item, i) => (
                             <div key={i} className="flex justify-between items-center text-gray-700">
                               <div className="flex items-center gap-2">
                                 <PiYoutubeLogoDuotone className="text-gray-500" />
                                 {item}
                               </div>
                               <div className="flex items-center gap-2 text-sm text-gray-400">
                                 <button className="bg-[#D1F7E1] text-[#22AE4C] rounded-full p-1">Completed</button>
                                 <span>00:00</span>
                                 <IoMdLock />
                               </div>
                             </div>
                           ))}
                         </div>
                       </details>
         
                      
                       {[
                         "Figma Tools",
                         "Principles of UX Design",
                         "User Research and Analysis",
                         "Information Architecture",
                         "Prototyping and Testing",
                         "Color Theory",
                         "Wireframe Basic",
                       ].map((title, i) => (
                         <div
                           key={i}
                           className="flex items-center justify-between px-6 py-3 border-b font-medium"
                         >
                           <span className="flex items-center gap-2">
                             <IoChevronDown />
                             {title}
                           </span>
                         </div>
                       ))}
                     </div>
                     <button className="shadow shadow-gray-500 bg-[#666666] text-gray-300 rounded-2xl p-1 mt-4 ml-10">Get Certificate</button>
                   </div>
     
    </div>
  );
}

export default Active;
