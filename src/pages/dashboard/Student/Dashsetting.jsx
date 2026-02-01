
import React, { useState, useEffect } from 'react'
import { MdNotificationsNone } from "react-icons/md";
import Riva from "../../../assets/Homeimage/Riva.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashsetting() {
  const [formData, setFormData] = useState({
    firstName: 'Riva',
    lastName: 'Shakya',
    username: 'Riva12',
    password: '',
    location: 'Kathmandu',
    email: 'Riva12@gmail.com',
    contact: '9800000000',
    skill: '',
    biography: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('userProfileData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    localStorage.setItem('userProfileData', JSON.stringify(formData));
    toast.success('Changes saved successfully!', {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleCancel = () => {
    const savedData = localStorage.getItem('userProfileData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    } else {
      setFormData({
        firstName: 'Riva',
        lastName: 'Shakya',
        username: 'Riva12',
        password: '',
        location: 'Kathmandu',
        email: 'Riva12@gmail.com',
        contact: '9800000000',
        skill: '',
        biography: ''
      });
    }
  };
  return (
    <div>
          <div className="flex justify-between mb-4">
              <h1 className="text-2xl font-bold">Settings</h1>
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
            <div className='flex gap-4 justify-end border-b border-gray-500 p-2'>
              <button 
                onClick={handleCancel}
                className=' border-gray-400 border text-gray-500 w-25 p-1 rounded-lg'>
                Cancel
              </button>
              <button 
                onClick={handleSaveChanges}
                className=' rounded-lg bg-[#003372] w-30 text-white p-1 '>
                Save Changes
              </button>
            </div> 

          <div className='flex mt-10 gap-50'>
            <div>
              <label htmlFor="firstName">First Name</label> <br />
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
            <div>
               <label htmlFor="lastName">Last Name</label> <br />
              <input 
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
          </div>

          <div className='flex mt-10 gap-50'>
            <div>
              <label htmlFor="username">Username</label> <br />
              <input 
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
            <div>
               <label htmlFor="password">Password</label> <br />
              <input 
                type="text"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
          </div>

          <div className='flex mt-10 gap-50'>
            <div>
              <label htmlFor="location">Location</label> <br />
              <input 
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
            <div>
               <label htmlFor="email">Email</label> <br />
              <input 
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
          </div>

          <div className='flex mt-10 gap-50'>
            <div>
              <label htmlFor="contact">Contact Number</label> <br />
              <input 
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
            <div>
               <label htmlFor="skill">Skill/Occupation</label> <br />
              <input 
                type="text"
                name="skill"
                value={formData.skill}
                onChange={handleInputChange}
                className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
          </div>

          <div className='mt-10'>
            <label htmlFor="biography">Biography</label> <br />
            <textarea 
              name="biography"
              value={formData.biography}
              onChange={handleInputChange}
              className='border-gray-400 border-2 w-90 h-30 resize-none rounded-lg'>
            </textarea>
          </div>

      <ToastContainer />
    </div>
  )
}

export default Dashsetting
