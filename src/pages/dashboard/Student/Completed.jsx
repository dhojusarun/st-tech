import React from 'react'
import comp from "../../../assets/Homeimage/comp.png"
function Completed() {
  return (
    <div className='mt-15 text-2xl font-medium text-center'>
      <img src={comp} alt="" />
      <p>No completed course yet</p>
    </div>
  )
}

export default Completed