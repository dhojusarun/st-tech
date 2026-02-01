import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import Riva from "../../../assets/Homeimage/Riva.png";
import Nancy from "../../../assets/Homeimage/Nancy.png";
import message from "../../../assets/Homeimage/message.png";
import { FaSearch } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { TiPin } from "react-icons/ti";

function Dashmessages() {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Messages</h1>
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

      <div>
        <div className="flex gap-2 items-center">
        <div className="flex items-center bg-[#EAEAEA] rounded-full px-2 py-1 w-50 shadow-sm shadow-black">
                  <input
                    type="text"
                    className="border-none outline-none text-sm  h-8 rounded-full"
                  />
                  <FaSearch className="text-[#7A7A7A] size-4" />
         </div>
         <div>
          <IoAddCircle className=" text-[#d9d4d4] size-10"/>
         </div>
         </div>

 <div className="flex gap-30">
         <div className="mt-10 space-y-10 text-xl w-60">
          <h1 className="text-gray-400 flex items-center justify-between">Pinned <span><TiPin /></span></h1>
          <div className="flex items-center gap-2">
            <img src={Nancy} alt="" className="object-cover w-8 h-8 rounded-full" />
            <h1 className="font-medium">Nancy White</h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={Nancy} alt="" className="object-cover w-8 h-8 rounded-full" />
            <h1 className="font-medium">Nancy White</h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={Nancy} alt="" className="object-cover w-8 h-8 rounded-full" />
            <h1 className="font-medium">Nancy White</h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={Nancy} alt="" className="object-cover w-8 h-8 rounded-full" />
            <h1 className="font-medium">Nancy White</h1>
          </div>
         </div>

         <div className="bg-[#F4F4F4] text-[#666666] rounded-t-2xl w-full mt-8 h-[500px]">
            <img src={message} alt="" className=" m-auto mt-25 size-28 " />
            <h1 className="font-medium text-2xl text-center">Start Messaging</h1>
         </div>

         </div>

      </div>
    </div>
  );
}

export default Dashmessages;