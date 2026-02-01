import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import Riva from "../../../assets/Homeimage/Riva.png";
import { PiNotepadFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import NancyCourse from "../../NancyCourse";

function Dashresource() {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Resources</h1>

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

      <hr />

      {/* Resource 1 */}
      <div className="flex items-center justify-between bg-[#E6E6E6] rounded-2xl mt-10 p-3 w-full">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <PiNotepadFill size={20} className="text-[#405E83]" />
          </div>
          <div className="flex gap-40 items-center">
            <h1 className="font-medium text-[#0F172A]">UI/UX Design</h1>
            <span className="text-sm text-gray-500">example.pdf</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#E6B94C] text-[#0F172A] px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
            <NavLink to="/nancycourse">View</NavLink>
          </button>
          <a
            href="/example.pdf"
            download
            className="bg-[#0B3B75] text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Download
          </a>
        </div>
      </div>

      {/* Resource 2 */}
      <div className="flex items-center justify-between bg-[#E6E6E6] rounded-2xl mt-4 p-3 w-full">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <PiNotepadFill size={20} className="text-[#405E83]" />
          </div>
          <div className="flex gap-50 items-center">
            <h1 className="font-medium text-[#0F172A]">Example</h1>
            <span className="text-sm text-gray-500">example.zip</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#E6B94C] text-[#0F172A] px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
            <NavLink to="/nancycourse">View</NavLink>
          </button>
          <a
            href="/example.zip"
            download
            className="bg-[#0B3B75] text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Download
          </a>
        </div>
      </div>

      {/* Resource 3 */}
      <div className="flex items-center justify-between bg-[#E6E6E6] rounded-2xl mt-4 p-3 w-full">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <PiNotepadFill size={20} className="text-[#405E83]" />
          </div>
          <div className="flex gap-40 items-center">
            <h1 className="font-medium text-[#0F172A]">UI/UX Design</h1>
            <span className="text-sm text-gray-500">example.pdf</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#E6B94C] text-[#0F172A] px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
            <NavLink to="/nancycourse">View</NavLink>
          </button>
          <a
            href="/example.pdf"
            download
            className="bg-[#0B3B75] text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Download
          </a>
        </div>
      </div>

      {/* Resource 4 */}
      <div className="flex items-center justify-between bg-[#E6E6E6] rounded-2xl mt-4 p-3 w-full">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <PiNotepadFill size={20} className="text-[#405E83]" />
          </div>
          <div className="flex gap-50 items-center">
            <h1 className="font-medium text-[#0F172A]">Example</h1>
            <span className="text-sm text-gray-500">example.zip</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#E6B94C] text-[#0F172A] px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
            <NavLink to="/nancycourse">View</NavLink>
          </button>
          <a
            href="/example.zip"
            download
            className="bg-[#0B3B75] text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashresource;