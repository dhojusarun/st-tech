
import React from 'react'
import { MdNotificationsNone } from "react-icons/md";
import Riva from "../../../assets/Homeimage/Riva.png";
import feed from "../../../assets/Homeimage/feed.png";
function Dashfeedback() {
  return (
    <div>
            <div className="flex justify-between mb-4">
                    <h1 className="text-2xl font-bold">Feedback</h1>
            
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
                    <img src={feed} alt="" className='w-70 m-auto mt-25 object-cover'/>
                    <h1 className='font-medium text-2xl text-center mt-8'>No feedbacks yet</h1>
                  </div>
    </div>
  )
}

export default Dashfeedback
