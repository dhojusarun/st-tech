import React from "react";
import bgcourseinfo from "../assets/Homeimage/bgcourseinfo.png";
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import { useCartWishlist } from "../context/CartWishlistContext";
import Uiux from "../assets/Homeimage/Uiux.png";
import Nancy from "../assets/Homeimage/Nancy.png"
import Graphics from "../assets/Homeimage/Graphics.png";
import Stars from "../assets/Homeimage/Stars.png";
import info from "../assets/Homeimage/info.png";
import review from "../assets/Homeimage/review.png";
import { RiShareForwardLine } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import { TbCalendarClock } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { IoMdLock } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin ,} from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
function NancyGraphic() {
  const { addToCart, addToWishlist, wishlist, removeFromWishlist } = useCartWishlist();
  const isWish = (id) => wishlist.some((i) => i.id === id);

   const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "UI/UX Design Course",
          text: "Check out this UI/UX Design course by Nancy White!",
          url,
        });
        toast.success("Course shared successfully!");
      } catch {
        toast.error("Share cancelled");
      }
    } else {
      await navigator.clipboard.writeText(url);
      toast.success("Course link copied to clipboard!");
    }
  };
  return (
    <div className="bg-[#E4E4E4] p-8">
      <div className="max-w-8xl bg-white rounded-4xl  overflow-hidden">

        {/* HERO SECTION */}
        <div
          className="relative bg-no-repeat bg-cover rounded-t-3xl"
          style={{ backgroundImage: `url(${bgcourseinfo})` }}
        >
          <div className="grid md:grid-cols-2 gap-8 p-10 text-white">
            {/* LEFT CONTENT */}
            <div className="space-y-4 ">
              <h1 className="text-3xl font-semibold">Graphic Design Course</h1>

              <div className="flex items-center gap-2">
                <img src={Nancy} alt="" className="w-8 h-8 object-cover rounded-full" />
                <p>By Nancy White</p>
              </div>

              <p className="text-lg">
                Hey I am Nancy White. I am a professional
                Graphic Designer, and instructor dedicated to helping you
                master design principles and create impactful digital
                experiences.
              </p>

              <div className="flex items-center gap-2">
                <img src={Stars} alt="" />
                <p>(10 Reviews)</p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img src={Graphics} alt="" className="w-70 mb-20 ml-50 -mt-10" />
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-3 gap-8 p-4">

          {/* COURSE INFO */}
          <div className="lg:col-span-2 space-y-4 ">
            <h2 className="text-xl font-semibold border-b p-2 border-gray-400">Course Info</h2>
          

            <h3 className="text-lg font-semibold text-center">
              About the course
            </h3>

            <p className="text-gray-600 font-medium text-justify pl-10">
              Graphic design courses  offer a versatile blend of creative theory and technical proficiency, ranging from foundational certifications to advanced professional diplomas. Beginner programs typically focus on core principles like typography, color theory, and layout composition, while simultaneously providing hands-on training in industry-standard software such as Adobe Photoshop, Illustrator, and InDesign. Leading platforms like Coursera and LinkedIn Learning now integrate 2025 updates, including AI-assisted design tools like Adobe Firefly, ensuring students stay competitive in a rapidly evolving digital landscape.For those pursuing a career transition or specialization, advanced courses delve into UI/UX design, motion graphics, and brand identity development. These programs are often project-based, requiring students to build a professional portfolio that showcases real-world applications of their skills. 
            </p>

            <select name="show" className="text-[#003372] font-medium pl-10">
              <option value="show">Show More</option>
            </select>

            <h1 className="text-center font-medium text-2xl">
              Course Content
            </h1>

            {/* ===== COURSE CONTENT ACCORDION ===== */}
            <div className="bg-white rounded-xl shadow shadow-black">

              {/* INTRODUCTION */}
              <details open className="group border-b ">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-[#003372]">
                  <span className="flex items-center gap-2">
                    <IoChevronDown className="transition group-open:rotate-180" />
                    Introduction to Graphic Design
                  </span>
                </summary>

                <div className="px-6 pb-4 space-y-3">
                  {[
                    "Definition of Graphic Design",
                    "Importance of Graphic Design",
                    "Overview of Graphic Design Design Process",
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-gray-700">
                      <div className="flex items-center gap-2">
                        <PiYoutubeLogoDuotone className="text-gray-500" />
                        {item}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>00:00</span>
                        <IoMdLock />
                      </div>
                    </div>
                  ))}
                </div>
              </details>

              {/* DESIGN TOOLS */}
              <details open className="group border-b">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-[#003372]">
                  <span className="flex items-center gap-2">
                    <IoChevronDown className="transition group-open:rotate-180" />
                    Design Tools
                  </span>
                </summary>

                <div className="px-6 pb-4 space-y-3">
                  {[
                    "Overview of Popular Design Tools (E.g. Figma,Canva)",
                    "Adobe Photoshop and Adobe Illustrator",
                    "CorelDRAW",
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-gray-700">
                      <div className="flex items-center gap-2">
                        <PiYoutubeLogoDuotone className="text-gray-500" />
                        {item}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>00:00</span>
                        <IoMdLock />
                      </div>
                    </div>
                  ))}
                </div>
              </details>

              {/* COLLAPSED SECTIONS */}
              {[
                "Adobe Photoshop",
                "Principles of Graphics Design",
                "Design Fundamentals",
                "Portfolio Development",
                "Freelancing & Career Guidance",
                "Color Theory",
                "Branding and Logo Design",
              ].map((title, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-6 py-4 border-b font-medium"
                >
                  <span className="flex items-center gap-2">
                    <IoChevronDown />
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          

          {/* PRICE CARD */}
          <div className="bg-white shadow-lg relative -mt-25 rounded-xl p-4 h-fit">
            <img src={info} alt="" className="rounded-lg" />

            <p className="text-gray-500 mt-3">Course price</p>

            <div className="flex justify-between items-center">
              <p className="text-[#003372] text-2xl font-bold">Rs. 10,000</p>
              <div className="flex gap-3">
                <button onClick={() => (isWish('nancygraphic') ? removeFromWishlist('nancygraphic') : addToWishlist({ id: 'nancygraphic', title: 'Graphic Design', price: 10000 }))}>
                  <FaHeart className={`${isWish('nancygraphic') ? 'text-red-500' : 'text-gray-400'} text-lg`} />
                </button>
                <RiShareForwardLine
                  className="text-gray-500 text-lg cursor-pointer hover:text-[#003372]"
                  onClick={handleShare}
                />
              </div>
            </div>

            <div className=" mt-4">
              <button onClick={() => addToCart({ id: 'nancygraphic', title: 'Graphic Design', price: 10000 })} className="flex items-center gap-2 bg-[#003372] text-white px-4 py-2 rounded-xl w-full justify-center">
                <FaCartShopping /> Add to cart
              </button>
            </div>

            <div className="mt-4 space-y-2 text-gray-600">
              <div className="flex items-center gap-2"><GoClock /> 1.5 hours</div>
              <div className="flex items-center gap-2"><TbCalendarClock /> 2.5 Months</div>
              <div className="flex items-center gap-2"><FaRegCalendarAlt /> Sunday - Friday</div>
              <div className="flex items-center gap-2"><GrCertificate /> Certificate</div>
            </div>
          </div>

          {/* REQUIREMENTS */}
          <div className="bg-white relative left-243 -top-170 rounded-xl shadow-lg  p-4 mt-4 h-fit">
            <h3 className="font-semibold text-lg border-b-2 p-1.5">Requirements</h3>
            <p className="text-gray-600 text-sm p-4 text-justify leading-6">
              To participate in a graphic design course, students should have a basic understanding of computers and an interest in creativity and visual arts. Knowledge of using a computer, mouse, keyboard, and basic file handling is important. Students should also have a willingness to learn design software such as Adobe Photoshop and Illustrator. No prior professional experience is required, but basic drawing skills and a sense of color, shape, and layout will be helpful.
            </p>
          </div> 

          <div className=" relative left-124 -top-82 p-4 border-t h-fit space-y-2">
            <h1 className="font-medium">Share this course with a friend</h1> 
            <div className="flex gap-3 text-[#003372]">  
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook size={25} />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={25} className="rounded-full bg-[#003372] text-white p-0.5"/>
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={25}/>
  </a>
  <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
    <TbBrandGmail size={25} className="rounded-full bg-[#003372] text-white p-0.5"/>
  </a>
</div>
          </div>
        </div>  
         {/* INSTRUCTOR SECTION  */}
<div className="-mt-80 px-6">
  <h2 className="text-2xl font-medium text-center mb-6">Instructor</h2>

  <div className="flex justify-between items-center gap-6">
    {/* Instructor Card */}
    <div className="flex items-center gap-4 bg-white shadow rounded-xl p-4 w-full max-w-xl">
      <img
        src={Nancy}
        alt="Instructor"
        className="w-16 h-16 rounded-full object-cover"
      />

      <div className="space-y-1 flex gap-15 items-center">
        <div>
<h3 className="font-semibold text-2xl">Nancy White</h3>
        <p className="text-xl text-gray-500">Graphics Designer</p>
        </div>
        

        <div className="text-xl text-gray-600 mt-2">
          <span className="flex items-center gap-2"><FaBook /> 3 Courses</span>
          <span className="flex items-center gap-2"><PiStudent /> 35 Students</span>
          <span className="flex items-center gap-2"><FaRegStar /> 5 Reviews</span>
        </div>
      </div>
    </div>

    {/* Other Courses */}
    <div className="w-full md:w-1/3 text-xl">
      <h4 className="font-semibold mb-2">Other Courses from this instructor</h4>
      <ul className="text-[#003372] space-y-1">
        <li><NavLink to="/nancycourse">• UI/UX Designing</NavLink></li>
        <li><NavLink to="/nancydigital">• Digital Marketing</NavLink></li>
      </ul>
    </div>
  </div>
</div> <br />
<hr />
 {/* REVIEWS SECTION  */}
<div className="mt-6 px-6 pb-10">
  <h2 className="text-2xl font-bold text-center mb-6">Reviews</h2>
  <div className="flex flex-col items-center justify-center text-gray-400">
    <img
      src={review}
      alt="No reviews"
    />
    <p className="mt-4 text-xl">No reviews yet</p>
  </div>
</div>

      </div>
      
    </div>
  );
}

export default NancyGraphic;