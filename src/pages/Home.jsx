import React, { useState } from "react";
import Homelogo from "../assets/Homeimage/Homelogo.png";
import Instructors from "../assets/Homeimage/Instructors.png";
import Coursesimg from "../assets/Homeimage/Courses.png";
import Certifications from "../assets/Homeimage/Certifications.png";
import Students from "../assets/Homeimage/Students.png";
import Elearning from "../assets/Homeimage/Elearning.png";
import { FaBook, FaCartShopping } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import Uiux from "../assets/Homeimage/Uiux.png";
import Nancy from "../assets/Homeimage/Nancy.png";
import Graphics from "../assets/Homeimage/Graphics.png";
import Datascience from "../assets/Homeimage/Datascience.png";
import Henry from "../assets/Homeimage/Henry.png";
import Mern from "../assets/Homeimage/Mern.png";
import Charlotte from "../assets/Homeimage/Charlotte.png";
import Web from "../assets/Homeimage/Web.png";
import Jordan from "../assets/Homeimage/Jordan.png";
import Project from "../assets/Homeimage/Project.png";
import Digital from "../assets/Homeimage/Digital.png";
import Ethan from "../assets/Homeimage/Ethan.png";
import Business from "../assets/Homeimage/Business.png";
import Brand from "../assets/Homeimage/Brand.png";
import Public from "../assets/Homeimage/Public.png";
import Modeling from "../assets/Homeimage/Modeling.png";
import Henry6 from "../assets/Homeimage/Henry6.png";
import Henry61 from "../assets/Homeimage/Henry61.png";
import Nancy6 from "../assets/Homeimage/Nancy6.png";
import Nancy61 from "../assets/Homeimage/Nancy61.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Jamessmith from "../assets/Homeimage/Jamessmith.png";
import Jameswhite from "../assets/Homeimage/Jameswhite.png";
import Nancysmith from "../assets/Homeimage/Nancysmith.png";
import Stars from "../assets/Homeimage/Stars.png";
import { NavLink } from "react-router-dom";
import { useCartWishlist } from "../context/CartWishlistContext";

function Home() {
  const { addToCart } = useCartWishlist();
  const testimonials = [
    {
      name: "James Smith",
      role: "Student",
      image: Jamessmith,
      quote: "Amazing platform! The lessons are clear, and the instructors are top-notch.",
    },
    {
      name: "James White",
      role: "Student",
      image: Jameswhite,
      quote: "The course exceeded my expectations. I can’t wait to take another one!",
    },
    {
      name: "Nancy Smith",
      role: "Student",
      image: Nancysmith,
      quote: "The courses are well-structured and easy to follow. I learned so much!",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 2;
  return (
    <>
      {/* home1 */}
      <div className="flex gap-[100px] bg-[#013271] text-white pt-[25px] justify-around">
        <div className="m-[50px] p-[10px]">
          <h1 className="text-[32px] font-bold">
            Empower Your Future with New Skills <br /> – Learn Anytime,
            Anywhere!
          </h1>
          <br />
          <p>
            Unlock your potential with our diverse courses! Learn at your own
            pace with expert-led <br /> lessons, and gain the skills you need to
            excel in your chosen field. Start today!
          </p>
          <br />
          <button className="bg-yellow-400 text-[#013271] font-bold rounded-md h-[30px] w-[100px]">
            <NavLink to="/courses">
              Join Now
            </NavLink>
          </button>
        </div>
        <img src={Homelogo} alt="Homelogo" className="w-[424px]" />
      </div>

      {/* home2 */}
      <div className="flex justify-around border">
        {[Instructors, Coursesimg, Certifications, Students].map((img, i) => (
          <div
            key={i}
            className="flex items-center text-bold text-xl
            bg-gradient-to-b from-[#6ea8d2] via-[#619ac3] to-[#21557b]
            rounded-[16px] w-[500px] py-[15px] m-[55px]
            shadow-[6px_6px_4px_#00000040]"
          >
            <img src={img} alt="" className="w-[150px]" />
            <div>
              <h1>{["100+", "500+", "Free", "1000+"][i]}</h1>
              <p>
                {["Instructors", "Courses", "Certifications", "Students"][i]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* home3 */}
      <div className="text-center bg-[#E4E4E4] py-[40px]">
        <h1 className="text-[28px] font-semibold">Why Choose Us</h1>
        <br />
        <p className="text-lg">
          We offer high-quality courses, expert instructors, and flexible
          learning, empowering you to learn at your own pace and achieve your
          goals.
        </p>
      </div>

      {/* home4 */}
      <div className="flex justify-around items-center flex-wrap gap-[40px] p-[20px]">
        <img src={Elearning} alt="elearning" className="w-[500px]" />

        <div className="grid grid-cols-2 gap-[30px]">
          {[
            { icon: <FaBook />, title: "Diverse Course Options" },
            { icon: <IoNewspaper />, title: "Affordable Pricing" },
            { icon: <HiOutlineLightBulb />, title: "Flexible Learning" },
            {
              icon: <RiVerifiedBadgeLine />,
              title: "Certification of Completion",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-[#01295C] text-white w-66 p-4 rounded-[10px]
              shadow-[6px_6px_4px_#00000040] leading-[1.6]
              ${i >= 2 ? "ml-[-60px] mt-[20px]" : ""}`}
            >
              <h3 className="flex gap-2 items-center">
                {item.icon} {item.title}
              </h3>
              <p className="mt-2">
                Something for everyone, from beginners to advanced learners.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* home5 */}
      {/* Explore Our Courses */}
      <div className="bg-gray-200 py-14 text-center">
        <p className="text-gray-500">Some of our most popular courses</p>
        <h2 className="text-2xl font-semibold mt-1">Explore Our Courses</h2>

        <div className="grid grid-cols-4 gap-8 max-w-[1200px] mx-auto mt-10">
          {/* Card 1: UI/UX */}
          <div className="bg-white rounded-xl w-[250px] shadow p-4">
            <img src={Uiux} className="w-full h-[140px] object-contain" />
            <div className="flex justify-between mt-2">
              <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
                Rs. 10,000
              </span>
              <span className="text-xs text-gray-400">REVIEWS</span>
            </div>
            <h3 className="font-semibold mt-4">UI/UX Design | <br />  2.5 Months</h3>
            <p className="text-sm text-gray-500 flex mt-2 items-center gap-2"><img src={Nancy} alt="" className="rounded-full object-cover w-8 h-8" />By Nancy White</p>
            <div className="flex items-center justify-between mb-4 h-[38px]">
              <button
                onClick={() => addToCart({ id: "uiux", title: "UI/UX Design", price: 10000, img: Uiux })}
                className="bg-yellow-300 w-32 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex text-sm"
              >
                <FaCartShopping className="text-[#003372] size-4" /> Add to cart
              </button>
            </div>
            <hr />
            <NavLink to="/nancycourse">
              <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded ml-7">
                View Course
              </button>
            </NavLink>
          </div>

          {/* Card 2: Data Science */}
          <div className="bg-white w-[250px] rounded-xl shadow p-4">
            <img src={Datascience} className="w-full h-[140px] object-contain" />
            <div className="flex justify-between mt-2">
              <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
                Rs. 10,000
              </span>
              <span className="text-xs text-gray-400">REVIEWS</span>
            </div>
            <h3 className="font-semibold mt-4">
              Data Science|<br /> 3 Months
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-2 mt-2"><img src={Henry} alt="" className="rounded-full object-cover     w-8 h-8" />By Henry Smith</p>
            <div className="flex items-center justify-between mb-4 h-[38px]">
              <button
                onClick={() => addToCart({ id: "datascience", title: "Data Science", price: 10000, img: Datascience })}
                className="bg-yellow-300 w-32 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex text-sm"
              >
                <FaCartShopping className="text-[#003372] size-4" /> Add to cart
              </button>
            </div>
            <hr />
            <NavLink to="/henrydata">
              <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded ml-7">
                View Course
              </button>
            </NavLink>
          </div>

          {/* Card 3: Mern Stack */}
          <div className="bg-white w-[250px] rounded-xl shadow p-4">
            <img src={Mern} className="w-full h-[140px] object-contain" />
            <div className="flex justify-between mt-2">
              <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
                Rs. 10,000
              </span>
              <span className="text-xs text-gray-400">REVIEWS</span>
            </div>
            <h3 className="font-semibold mt-4">
              Mern Stack Development |  <br /> 3 Months
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-2 mt-2"><img src={Henry} alt="" className="rounded-full object-cover     w-8 h-8" />By Henry Smith</p>
            <div className="flex items-center justify-between mb-4 h-[38px]">
              <button
                onClick={() => addToCart({ id: "mern", title: "Mern Stack Development", price: 10000, img: Mern })}
                className="bg-yellow-300 w-32 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex text-sm"
              >
                <FaCartShopping className="text-[#003372] size-4" /> Add to cart
              </button>
            </div>
            <hr />
            <NavLink to="/henrymern">
              <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded ml-7">
                View Course
              </button>
            </NavLink>
          </div>

          {/* Card 4: Web Development */}
          <div className="bg-white w-[250px] rounded-xl shadow p-4">
            <img src={Web} className="w-full h-[140px] object-contain" />
            <div className="flex justify-between mt-2">
              <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
                Rs. 10,000
              </span>
              <span className="text-xs text-gray-400">REVIEWS</span>
            </div>
            <h3 className="font-semibold mt-4">
              Web Development| 2.5 Months
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-2 mt-2"><img src={Charlotte} alt="" className="rounded-full object-cover     w-8 h-8" />By Charlotte</p>
            <div className="flex items-center justify-between mb-4 h-[38px]">
              <button
                onClick={() => addToCart({ id: "web", title: "Web Development", price: 10000, img: Web })}
                className="bg-yellow-300 w-32 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex text-sm"
              >
                <FaCartShopping className="text-[#003372] size-4" /> Add to cart
              </button>
            </div>
            <hr />
            <NavLink to="/charweb">
              <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded ml-7">
                View Course
              </button>
            </NavLink>
          </div>

          {/* Card 5: Graphic Design */}
          <div className="bg-white w-[250px] rounded-xl shadow p-4">
            <img src={Graphics} className="w-full h-[140px] object-contain" />
            <div className="flex justify-between mt-2">
              <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
                Rs. 10,000
              </span>
              <span className="text-xs text-gray-400">REVIEWS</span>
            </div>
            <h3 className="font-semibold mt-4">
              Graphic Design |<br /> 2.5 Months
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-2 mt-2"><img src={Nancy} alt="" className="rounded-full object-cover     w-8 h-8" />By Nancy White</p>
            <div className="flex items-center justify-between mb-4 h-[38px]">
              <button
                onClick={() => addToCart({ id: "graphic", title: "Graphic Design", price: 10000, img: Graphics })}
                className="bg-yellow-300 w-32 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex text-sm"
              >
                <FaCartShopping className="text-[#003372] size-4" /> Add to cart
              </button>
            </div>
            <hr />
            <NavLink to="/nancygraphic">
              <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded ml-7">
                View Course
              </button>
            </NavLink>
          </div>

          {/* Card 6: Digital Marketing */}
          <div className="bg-white w-[250px] rounded-xl shadow p-4">
            <img src={Digital} className="w-full h-[140px] object-contain" />
            <div className="flex justify-between mt-2">
              <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
                Rs. 10,000
              </span>
              <span className="text-xs text-gray-400">REVIEWS</span>
            </div>
            <h3 className="font-semibold mt-4">
              Digital Marketing  | <br />
              3 Months
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-2 mt-2"><img src={Nancy} alt="" className="rounded-full object-cover     w-8 h-8" />By Nancy White</p>
            <div className="flex items-center justify-between mb-4 h-[38px]">
              <button
                onClick={() => addToCart({ id: "digital", title: "Digital Marketing", price: 10000, img: Digital })}
                className="bg-yellow-300 w-32 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex text-sm"
              >
                <FaCartShopping className="text-[#003372] size-4" /> Add to cart
              </button>
            </div>
            <hr />
            <NavLink to="/nancydigital">
              <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded ml-7">
                View Course
              </button>
            </NavLink>
          </div>

          {/* Card 7: Brand Management */}
          <div className="bg-white w-[250px] rounded-xl shadow p-4">
            <img src={Brand} className="w-full h-[140px] object-contain" />
            <div className="flex justify-between mt-2">
              <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
                Free
              </span>
              <span className="text-xs text-gray-400">REVIEWS</span>
            </div>
            <h3 className="font-semibold mt-4">
              Brand Management | 1.5 Months
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-2 mt-2"><img src={Charlotte} alt="" className="rounded-full object-cover     w-8 h-8" />By Charlotte</p>
            <div className="flex items-center justify-between mb-4 h-[38px]">
            </div>
            <hr />
            <NavLink to="/charbrand">
              <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded ml-7">
                View Course
              </button>
            </NavLink>
          </div>

          {/* Card 8: Project Management */}
          <div className="bg-white w-[250px] rounded-xl shadow p-4">
            <img src={Project} className="w-full h-[140px] object-contain" />
            <div className="flex justify-between mt-2">
              <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
                Rs. 10,000
              </span>
              <span className="text-xs text-gray-400">REVIEWS</span>
            </div>
            <h3 className="font-semibold mt-4">
              Project Management| 2.5 Months
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-2 mt-2"><img src={Jordan} alt="" className="rounded-full object-cover     w-8 h-8" />By Jordan</p>
            <div className="flex items-center justify-between mb-4 h-[38px]">
              <button
                onClick={() => addToCart({ id: "project", title: "Project Management", price: 10000, img: Project })}
                className="bg-yellow-300 w-32 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex text-sm"
              >
                <FaCartShopping className="text-[#003372] size-4" /> Add to cart
              </button>
            </div>
            <hr />
            <NavLink to="/jordanproject">
              <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded ml-7">
                View Course
              </button>
            </NavLink>
          </div>

          {/* Card 9: Business Analytics */}
          <div className="bg-white w-[250px] rounded-xl shadow p-4">
            <img src={Business} className="w-full h-[140px] object-contain" />
            <div className="flex justify-between mt-2">
              <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
                Rs. 10,000
              </span>
              <span className="text-xs text-gray-400">REVIEWS</span>
            </div>
            <h3 className="font-semibold mt-4">
              Business Analytics |<br /> 3 Months
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-2 mt-2"><img src={Ethan} alt="" className="rounded-full object-cover     w-8 h-8" />By Ethan </p>
            <div className="flex items-center justify-between mb-4 h-[38px]">
              <button
                onClick={() => addToCart({ id: "business", title: "Business Analytics", price: 10000, img: Business })}
                className="bg-yellow-300 w-32 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex text-sm"
              >
                <FaCartShopping className="text-[#003372] size-4" /> Add to cart
              </button>
            </div>
            <hr />
            <NavLink to="/ethanbusiness">
              <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded ml-7">
                View Course
              </button>
            </NavLink>
          </div>

          {/* Card 10: Public Speaking */}
          <div className="bg-white w-[250px] rounded-xl shadow p-4">
            <img src={Public} className="w-full  h-[140px] object-cover" />
            <div className="flex justify-between mt-2">
              <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
                Free
              </span>
              <span className="text-xs text-gray-400">REVIEWS</span>
            </div>
            <h3 className="font-semibold mt-4">
              Public Speaking & Presentation Skills | 1 Month
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-2 mt-2"><img src={Jordan} alt="" className="rounded-full object-cover w-8 h-8" />By Jordan</p>
            <div className="flex items-center justify-between mb-4 h-[38px]">
            </div>
            <hr />
            <NavLink to="/jordanpublic">
              <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded ml-7">
                View Course
              </button>
            </NavLink>
          </div>

          {/* Card 11: 3D Modeling */}
          <div className="bg-white w-[250px] rounded-xl shadow p-4">
            <img src={Modeling} className="w-full h-[140px] object-contain" />
            <div className="flex justify-between mt-2">
              <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
                Rs. 10,000
              </span>
              <span className="text-xs text-gray-400">REVIEWS</span>
            </div>
            <h3 className="font-semibold mt-4">
              3D Modeling and Animation | 3 Months
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-2 mt-2"><img src={Ethan} alt="" className="rounded-full object-cover     w-8 h-8" />By Ethan</p>
            <div className="flex items-center justify-between mb-4 h-[38px]">
              <button
                onClick={() => addToCart({ id: "modeling", title: "3D Modeling and Animation", price: 10000, img: Modeling })}
                className="bg-yellow-300 w-32 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex text-sm"
              >
                <FaCartShopping className="text-[#003372] size-4" /> Add to cart
              </button>
            </div>
            <hr />
            <NavLink to="/ethan3d">
              <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2  py-1  rounded ml-7">
                View Course
              </button>
            </NavLink>
          </div>
        </div>
      </div>


      {/* home6 */}
      {/* Our Team */}
      <div className="bg-gray-200 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-10">Our Team</h2>

        <div className="flex justify-center gap-20">
          {/* Member 1 */}
          <div className="bg-gradient-to-b from-blue-300 to-blue-900 text-white w-[220px] h-[280px] rounded-xl p-4">
            <img
              src={Henry6}
              className="w-[120px] h-[120px] object-cover rounded-full mx-auto border-4 border-[#1841E6]"
            />
            <h3 className="mt-4 font-bold text-xl">Henry Smith</h3>
            <p className="text-sm text-gray-300">Founder</p>
            <div className="flex justify-center gap-4 mt-4 text-yellow-400">
              <a href="https://www.facebook.com"> <FaFacebook size={25} /></a>
              <a href="https://www.instagram.com"> <FaInstagram size={25} /></a>
              <a href="https://www.linkedin.com"><FaLinkedin size={25} /></a>
            </div>
          </div>

          {/* Member 2 */}
          <div className="bg-gradient-to-b from-blue-300 to-blue-900 text-white w-[220px] h-[280px] rounded-xl p-4">
            <img
              src={Nancy6}
              className="w-[120px] h-[120px] object-cover rounded-full mx-auto border-4 border-[#1841E6]"
            />
            <h3 className="mt-4 font-bold text-xl">Nancy White</h3>
            <p className="text-sm text-gray-300">Manager</p>
            <div className="flex justify-center gap-4 mt-4 text-yellow-400">
              <a href="https://www.facebook.com"> <FaFacebook size={25} /></a>
              <a href="https://www.instagram.com"> <FaInstagram size={25} /></a>
              <a href="https://www.linkedin.com"><FaLinkedin size={25} /></a>
            </div>
          </div>

          {/* Member 3 */}
          <div className="bg-gradient-to-b from-blue-300 to-blue-900 text-white w-[220px] h-[280px] rounded-xl p-4">
            <img
              src={Henry61}
              className="w-[120px] h-[120px] object-cover rounded-full mx-auto border-4 border-[#1841E6]"
            />
            <h3 className="mt-4 font-bold text-xl">Henry Smith</h3>
            <p className="text-sm text-gray-300">Marketing Head</p>
            <div className="flex justify-center gap-4 mt-4 text-yellow-400">
              <a href="https://www.facebook.com"> <FaFacebook size={25} /></a>
              <a href="https://www.instagram.com"> <FaInstagram size={25} /></a>
              <a href="https://www.linkedin.com"><FaLinkedin size={25} /></a>
            </div>
          </div>

          {/* Member 4 */}
          <div className="bg-gradient-to-b from-blue-300 to-blue-900 text-white w-[220px] h-[280px] rounded-xl p-4">
            <img
              src={Nancy61}
              className="w-[120px] h-[120px] object-cover rounded-full mx-auto border-4 border-[#1841E6]"
            />
            <h3 className="mt-4 font-bold text-xl">Nancy White</h3>
            <p className="text-sm text-gray-300">Designer</p>
            <div className="flex justify-center gap-4 mt-4 text-yellow-400">
              <a href="https://www.facebook.com"> <FaFacebook size={25} /></a>
              <a href="https://www.instagram.com"> <FaInstagram size={25} /></a>
              <a href="https://www.linkedin.com"><FaLinkedin size={25} /></a>
            </div>
          </div>
        </div>
      </div>


      {/* home7 */}
      <div className="bg-[#E4E4E4] text-center py-16">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <p className="max-w-[800px] mx-auto mt-4 text-gray-600">
          “Hear from our students! Discover how our courses have empowered learners
          to achieve their goals and unlock new opportunities.”
        </p>

        <div className="relative w-full flex gap-10 justify-center items-center mt-16 h-[340px]">
          {/* Left Arrow */}
          <FaChevronCircleLeft
            onClick={() =>
              setCurrentIndex(
                (prev) =>
                  (prev - 1 + testimonials.length) % testimonials.length
              )
            }
            className="absolute left-10 text-3xl text-gray-500 cursor-pointer z-20"
          />

          {/* Cards */}
          {testimonials.map((testimonial, index) => {
            const isVisible =
              index === currentIndex ||
              index === (currentIndex + 1) % testimonials.length;

            return (
              <div
                key={index}
                className={`bg-white w-[260px] h-[300px] rounded-[20px] p-6 shadow
                  transition-all duration-700
                  ${isVisible
                    ? "opacity-100 scale-100 relative"
                    : "opacity-0 scale-95 absolute pointer-events-none"
                  }
                `}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[110px] h-[110px] object-cover rounded-full mx-auto
                  border-4 border-gray-300 absolute -top-14 left-1/2 -translate-x-1/2"
                />

                <div className="mt-16 text-center">
                  <img src={Stars} className="mx-auto w-[100px]" />
                  <h3 className="text-blue-700 font-semibold mt-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm mt-3">{testimonial.quote}</p>
                </div>
              </div>
            );
          })}

          {/* Right Arrow */}
          <FaChevronCircleRight
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev + 1) % testimonials.length
              )
            }
            className="absolute right-10 text-3xl text-gray-500 cursor-pointer z-20"
          />
        </div>
      </div>
    </>
  );
}

export default Home;