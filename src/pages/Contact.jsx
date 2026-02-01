import React, { useState } from 'react'
import contact from "../assets/Homeimage/contact.png"
import { MdCall } from "react-icons/md";
import { IoIosMail,IoMdSend } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.category || !formData.message) {
      toast.error('Please fill in all fields', {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Show success message
    toast.success('Message sent successfully! We will contact you soon.', {
      position: "top-right",
      autoClose: 3000,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  return (
   <>
  <div> 
     <div
      className="h-screen bg-contain relative  bg-no-repeat"
      style={{ backgroundImage: `url(${contact})` }}
    >
    
   </div>
   <h1 className='text-4xl flex justify-center absolute bottom-[500px] border-yellow-500 border-b-2 left-[650px] font-medium text-white'>Contact Us</h1>
  </div>

     <div className="flex justify-center -mt-80 mb-20  text-center p-4 gap-20">
            <div className="bg-[#DADADA] text-black w-66 leading-8 h-40 p-4  rounded-tl-4xl rounded-br-4xl">
              <MdCall className="text-[#01295C] size-8 m-auto " />
              <p className="font-medium">Phone Number</p>
              <p>+977 9818007060</p>
              <p>+977 9810000000</p>
            </div>
  
            <div className="bg-[#DADADA] text-black w-66 pt-5 h-40 rounded-tl-4xl rounded-br-4xl">
              <IoIosMail className="text-[#01295C] size-8 m-auto" />
              <p className="font-medium">Email</p>
              <p>Sttech@gmail.com</p>
            </div>

            <div className="bg-[#DADADA] text-black w-66 pt-7 h-40 rounded-tl-4xl rounded-br-4xl">
              <FaLocationDot className="text-[#01295C] size-7 m-auto" />
              <p className="font-medium">Street Name</p>
              <p>Kathmandu</p>
            </div>
          </div>

           <div className="flex pl-50 pb-20 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14126.58289838124!2d85.29862364050516!3d27.728222735603214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191ed757779f%3A0xa3fb7fed922d73e8!2sSamakhusi%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1766598993886!5m2!1sen!2snp"
          width="600"
          height="520"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          className=" shadow-lg"
        ></iframe>

        <div className="w-[600px] h-[520px] bg-[#96949452]  flex items-center justify-center">
          <form className=' m-auto text-center space-y-6' onSubmit={handleSubmit}>
            <legend className='font-medium text-xl'>Send us a message</legend>
             <div className='flex justify-between gap-10 ' >
                    <div className='border-2 font-medium border-gray-300 p-2 rounded-lg w-65 text-gray-700 bg-white'>
                         <input 
                           type="text" 
                           className='outline-none'  
                           placeholder="Your Full Name"
                           name="name"
                           value={formData.name}
                           onChange={handleInputChange}
                         /><br/>
                    </div>
                    <div className='border-2 border-gray-300 p-2 rounded-lg w-65 font-medium text-gray-700 bg-white'>
                            <input 
                              type="email" 
                              className='outline-none'  
                              placeholder="Your Email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                            /><br/>
                    </div>
                </div>

             <div className='flex justify-between gap-10 ' >
                    <div className='border-2 font-medium border-gray-300 p-2 rounded-lg w-65 text-gray-700 bg-white'>
                         <input 
                           type="text" 
                           className='outline-none' 
                           placeholder="Phone Number"
                           name="phone"
                           value={formData.phone}
                           onChange={handleInputChange}
                         /><br/>
                    </div>
                    <div className='border-2 border-gray-300 p-2 rounded-lg w-65 font-medium text-gray-700 bg-white'>
                            <input 
                              type="text" 
                              className='outline-none'  
                              placeholder="Subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                            /><br/>
                    </div>
                </div>

                <div className='border-2 border-gray-300 p-2 rounded-lg w-full font-medium text-gray-700 bg-white'>
                  <select 
                    className='outline-none w-full bg-white' 
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Category</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Course Related">Course Related</option>
                    <option value="Technical Issue">Technical Issue</option>
                    <option value="Billing">Billing</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <textarea 
                  placeholder="Write A Message" 
                  className='shadow-2xl resize-none p-4 font-medium bg-white rounded-lg w-full h-40'  
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea><br/>
                <button 
                  type="submit"
                  className='flex items-center p-1 ml-55  gap-1.5 rounded-lg  bg-[#003372] text-white'
                >
                  Send Message <IoMdSend className="send" />
                </button>
          </form>
        </div>
      </div>
      <ToastContainer />
   </>
  )
}

export default Contact;