import React from 'react'
import Charlotte from "../assets/Homeimage/Charlotte.png";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin ,FaChevronCircleLeft ,FaChevronCircleRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useCartWishlist } from "../context/CartWishlistContext";
import Web from "../assets/Homeimage/Web.png"
import Brand from "../assets/Homeimage/Brand.png"
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import Jamessmith from "../assets/Homeimage/Jamessmith.png";
import Jameswhite from "../assets/Homeimage/Jameswhite.png";
import Nancysmith from "../assets/Homeimage/Nancysmith.png";
import Stars from "../assets/Homeimage/Stars.png";

function Charlotteinstructor() {
  const { addToCart, addToWishlist, wishlist, removeFromWishlist } = useCartWishlist();
  const isWish = (id) => wishlist.some((i) => i.id === id);
  return (
    <>
      {/* PROFILE */}
      <div className="bg-[#e1e1e1] flex justify-between p-[50px]">
        <div className="leading-[1.8]">
          <p>Hey I am,</p>
          <h2 className="text-[#003372] text-2xl font-semibold">
            Charlotte
          </h2>
          <p>
            I am a professional Web Developer, Brand Management, and instructor
            dedicated to helping you master design <br />
            principles and create impactful digital experiences.
          </p>
          <br />

          <button className="w-[120px] h-[30px] bg-[#003372] text-white rounded-md mb-14">
            <NavLink to="/contact" className="no-underline text-white ">
              Contact Now
            </NavLink>
          </button>

          <table className="bg-white">
            <thead>
              <tr>
                <th className="px-4 ">4 Yrs</th>
                <th className="px-4">6</th>
                <th className="px-4">12</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4">Experience</td>
                <td className="px-4">Projects Completed</td>
                <td className="px-4">Students</td>
              </tr>
            </tbody>
          </table>
        </div>

        <img
          src={Charlotte}
          alt="Charlotte"
          className="w-[220px] h-[320px] object-cover rounded-[40px] border-4 border-yellow-400"
        />
      </div>

      {/* ABOUT */}
      <div className="bg-[#01295C] p-10 flex gap-[180px] text-white justify-between ">
        <div className="relative" >
          <img
            src={Charlotte}
            alt="Charlotte"
            className="w-[600px] h-[300px] object-cover rounded-[40px] border-4 border-yellow-400 relative top-5"
          />
          <div className="flex justify-center gap-5 absolute bg-[#000000B8] border-2 border-black text-yellow-400 w-[100px] h-[30px] items-center ml-[60px]">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        <div className="mt-2">
          <h2 className="mt-6 text-xl font-semibold text-center">About Me</h2>
          <p className="p-4 mt-5 mb-20 text-justify">
            As a professional Web Developer, Brand Management, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs
          </p>
          <button className="w-30 h-7 bg-yellow-400 text-blue-700 ml-5 rounded-md font-medium">
            My Projects
          </button>
        </div>
      </div>

      {/* COURSES */}
      <div className="bg-[#e1e1e1] text-center p-10 ">
        <h2 className="text-xl font-semibold">My Courses</h2>
        <p>
          Explore the courses I teach, designed to enhance your skills and
          knowledge step by step.
        </p>
        <br />

        <div className="flex ml-[420px] gap-15 p-4">
          {[ 
            { img: Web, title: "Web Development | 2.5 Months", instructor: "Charlotte ", pic: Charlotte ,link:"/charweb" },
            { img: Brand, title: "Brand Management | 1.5 Months", instructor: "Charlotte ", pic: Charlotte ,link:"/charbrand" },
          ].map((course, i) => (
            <div
              key={i}
              className="w-[250px] bg-white border rounded-xl shadow-md"
            >
              <img src={course.img} alt="" className="w-full h-[140px] object-cover" />

              <div className="p-3">
                <div className="flex justify-between items-center">
                  <span className="bg-yellow-300 px-3 py-1 rounded-md font-semibold">
                    Rs. 10,000
                  </span>
                  <span className="text-sm text-gray-500">REVIEWS</span>
                </div>

                <h3 className="text-[15px] font-semibold my-2">
                  {course.title}
                </h3>

                <div className="flex items-center text-sm mb-3">
                  <img
                    src={course.pic}
                    alt=""
                    className="w-6 h-6 rounded-full mr-2 object-cover"
                  />
                  By {course.instructor}
                </div>

                <div className="flex justify-between items-center">
                  <button onClick={() => addToCart({ id: course.link.replace('/',''), title: course.title, price: 10000 })} className="bg-yellow-300 px-4 py-1 rounded-md font-semibold">
                    Add to cart
                  </button>
                  <button onClick={() => (isWish(course.link.replace('/','')) ? removeFromWishlist(course.link.replace('/','')) : addToWishlist({ id: course.link.replace('/',''), title: course.title, price: 10000 }))}>
                    <FaHeart className={`${isWish(course.link.replace('/','')) ? 'text-red-500' : 'text-gray-400'}`} />
                  </button>
                </div>
              <NavLink to={course.link}>
                <button className="w-full border mt-2 py-1 rounded-md font-semibold">
                  View Course
                </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div className="bg-[#01295C] text-white text-center p-10 leading-relaxed">
        <h2 className="text-xl font-semibold">Contact Me</h2>
        <br />

        <div className="flex justify-center gap-20">
          <div className="bg-[#DADADA] text-black w-62 h-30 p-4 rounded-tl-4xl rounded-br-4xl">
            <MdCall className="text-[#01295C] size-8 m-auto " />
            <p className="font-medium">Phone Number</p>
            <p>+977 9841604286</p>
          </div>

          <div className="bg-[#DADADA] text-black w-62 h-30 p-4 rounded-tl-4xl rounded-br-4xl">
            <IoIosMail className="text-[#01295C] size-8 m-auto" />
            <p className="font-medium">Email</p>
            <p>Charlotte@gmail.com</p>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="bg-[#E4E4E4] text-center py-16">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <p className="max-w-[800px] mx-auto mt-4 text-gray-600">
          “Hear from our students! Discover how our courses have empowered learners
          to achieve their goals and unlock new opportunities. Real stories, real
          success!”
        </p>
      
        <div className="flex items-center justify-center gap-8 mt-16">
          {/* Left Arrow */}
          <FaChevronCircleLeft className="text-3xl text-gray-500 cursor-pointer" />
      
          {/* Card 1 */}
          <div className="bg-white w-[260px] h-[300px] rounded-[20px] p-6 shadow relative">
            <img
              src={Nancysmith}
              alt="Nancy Smith"
              className="w-[110px] h-[110px] object-cover rounded-full mx-auto border-4 border-gray-300 absolute bottom-60 left-18"
            />
            <div className="mt-16">
              <img src={Stars} className="mx-auto w-[100px]" />
              <h3 className="text-blue-700 font-semibold mt-2">
                Nancy Smith
              </h3>
              <p className="text-sm text-gray-500">Student</p>
              <p className="text-sm mt-3">
                “The courses are well-structured and easy to follow. I learned so much!”
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white w-[260px] h-[300px] rounded-[20px] p-6 shadow relative">
            <img
              src={Jameswhite}
              alt="James White"
              className="w-[110px] h-[110px] object-cover rounded-full mx-auto border-4 border-gray-300 absolute bottom-60 left-18"
            />
            <div className="mt-16">
              <img src={Stars} className="mx-auto w-[100px]" />
              <h3 className="text-blue-700 font-semibold mt-2">
                James White
              </h3>
              <p className="text-sm text-gray-500">Student</p>
              <p className="text-sm mt-3">
                “The course exceeded my expectations. I can’t wait to take another one!”
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-white w-[260px] h-[300px] rounded-[20px] p-6 shadow relative">
            <img
              src={Jamessmith}
              alt="James Smith"
              className="w-[110px] h-[110px] object-cover rounded-full mx-auto border-4 border-gray-300 absolute bottom-60 left-18"
            />
            <div className="mt-16">
              <img src={Stars} className="mx-auto w-[100px]" />
              <h3 className="text-blue-700 font-semibold mt-2">
                James Smith
              </h3>
              <p className="text-sm text-gray-500">Student</p>
              <p className="text-sm mt-3">
                “Amazing platform! The lessons are clear, and the instructors are
                top-notch.”
              </p>
            </div>
          </div>
      
          
          
      
          {/* Right Arrow */}
          <FaChevronCircleRight className="text-3xl text-gray-500 cursor-pointer" />
        </div>
      </div>
    </>
  )
}

export default Charlotteinstructor