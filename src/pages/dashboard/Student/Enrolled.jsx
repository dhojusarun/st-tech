import React from 'react'
import Uiux from "../../../assets/Homeimage/Uiux.png"
function Enrolled() {
  return (
    <div>
  <table className="w-full ">
    <thead>
      <tr className='shadow shadow-gray-400'>
        <th className="text-left p-2">Course Name</th>
        <th className="text-left p-2">Lessons</th>
        <th className="text-left p-2">Status</th>
        <th className="text-left p-2">Level</th>
        <th className="text-left p-2">Category</th>
      </tr>
    </thead>

    <tbody>
      <tr >
        <td className="flex items-center gap-2 p-2">
          <img src={Uiux} alt="UI/UX" className="w-4 h-4" />
          UI/UX Design
        </td>
        <td className="p-2">14/28</td>
        <td className="p-2">
          <span className="rounded-full bg-[#1877F2] text-white px-2 py-1 text-sm">
            Ongoing
          </span>
        </td>
        <td className="p-2 ">-</td>
        <td className="p-2">Design</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Enrolled