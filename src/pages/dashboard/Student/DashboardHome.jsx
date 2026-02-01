
import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { LuBookOpenText } from "react-icons/lu";
import { GiGraduateCap, GiLaurelsTrophy } from "react-icons/gi";
import Riva from "../../../assets/Homeimage/Riva.png";
import dash from "../../../assets/Homeimage/dash.png";

function DashboardHome() {
  return (
    <div className="bg-white p-6 roundedt--2xl w-full space-y-15">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>

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

      <div className="bg-gradient-to-r from-[#003372] via-[#003372] to-[#E1BB50] h-60 rounded-2xl px-12 py-8 text-justify flex justify-between relative">
        <div>
          <h1 className="text-2xl text-white">
            Welcome back,
            <br />
            <span className="font-bold text-2xl">Riva Shakya</span>
          </h1>
          <br />
          <p className="text-white w-[700px]">
            We’re excited to have you here. Dive into your learning journey
            and make progress toward your goals. Remember, every step counts!
            Check your tasks for today and continue where you left off. Let’s
            make this a productive session!
          </p>
        </div>

        <div className="size-70 absolute left-195 bottom-12">
          <img src={dash} alt="" />
        </div>
      </div>

      <div className="flex justify-around">
        <div className="border border-gray-400 space-y-4 p-4 rounded-lg shadow shadow-black">
          <LuBookOpenText className="rounded-full w-15 h-15 p-2 bg-[#405E8333] text-[#405E83] m-auto" />
          <br />
          <h1 className="text-center font-bold text-2xl">1</h1>
          <p className="text-xl">Enrolled Courses</p>
        </div>

        <div className="border border-gray-400 w-50 h-55 space-y-4 p-4 rounded-lg shadow shadow-black">
          <GiGraduateCap className="rounded-full w-15 h-15 p-2 bg-[#405E8333] text-[#405E83] m-auto" />
          <br />
          <h1 className="text-center font-bold text-2xl">1</h1>
          <p className="text-xl text-center">Active Courses</p>
        </div>

        <div className="border border-gray-400 space-y-4 p-4 rounded-lg shadow shadow-black">
          <GiLaurelsTrophy className="rounded-full w-15 h-15 p-2 bg-[#405E8333] text-[#405E83] m-auto" />
          <br />
          <h1 className="text-center font-bold text-2xl">0</h1>
          <p className="text-xl">Completed Courses</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;