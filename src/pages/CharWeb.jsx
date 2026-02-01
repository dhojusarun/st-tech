import React from "react";
import bgcourseinfo from "../assets/Homeimage/bgcourseinfo.png";
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import { useCartWishlist } from "../context/CartWishlistContext";
import Web from "../assets/Homeimage/Web.png";
import Charlotte from "../assets/Homeimage/Charlotte.png";
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
function CharWeb() {
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
      <div className="max-w-8xl bg-white rounded-4xl overflow-hidden">

        {/* HERO SECTION */}
        <div
          className="relative bg-no-repeat bg-cover rounded-t-3xl"
          style={{ backgroundImage: `url(${bgcourseinfo})` }}
        >
          <div className="grid md:grid-cols-2 gap-8 p-10 text-white">
            <div className="space-y-4 ">
              <h1 className="text-3xl font-semibold">Web Development Course</h1>

              <div className="flex items-center gap-2">
                <img src={Charlotte} alt="" className="w-8 h-8 object-cover rounded-full" />
                <p>By Charlotte </p>
              </div>

              <p className="text-lg">
                Hey I am Charlotte. I am a Web Development professional 
                and instructor dedicated to helping you
                master design principles and create impactful real-life
                experiences.
              </p>

              <div className="flex items-center gap-2"> 
                <img src={Stars} alt="" />
                <p>(10 Reviews)</p>
              </div>
            </div>

            <div className="flex justify-center">
              <img src={Web} alt="" className="w-72 mb-20 ml-50 -mt-10" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 p-4">

          <div className="lg:col-span-2 space-y-4 ">
            <h2 className="text-xl font-semibold border-b p-2 border-gray-400">Course Info</h2>
          

            <h3 className="text-lg font-semibold text-center">
              About the course
            </h3>

            <p className="text-gray-600 font-medium text-justify pl-10">
              The Web Development program provides a practical foundation in creating responsive and dynamic websites. You will learn essential front-end and back-end technologies, including HTML, CSS, JavaScript, and server-side concepts. The course emphasizes usability, performance, and security fundamentals. By the end of the program, you will be able to build functional websites, deploy them online, and present a portfolio demonstrating your web development skills.
            </p>

            <select name="show" className="text-[#003372] font-medium pl-10">
              <option value="show">Show More</option>
            </select>

            <h1 className="text-center font-medium text-2xl">
              Course Content
            </h1>

          <div className="bg-white rounded-xl shadow shadow-black">

              {/* INTRODUCTION */}
              <details open className="group border-b ">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-[#003372]">
                  <span className="flex items-center gap-2">
                    <IoChevronDown className="transition group-open:rotate-180" />
                    Introduction to Web Development
                  </span>
                </summary>

                <div className="px-6 pb-4 space-y-3">
                  {[
                    "Definition of Web Development",
                    "Importance of Web Development",
                    "Overview of Web Development Process",
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
                    "HTML,CSS and JS",
                    "React",
                    "PHP",
                    "MYSQL",
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

              
              {[
                "Web Basics (HTML, CSS, JavaScript)",
                "Frontend Frameworks",
                "Responsive Design",
                "Backend Basics",
                "Database Concepts",
                "Hosting & Deployment",
                "Web Security Basics",
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
                <button onClick={() => (isWish('charweb') ? removeFromWishlist('charweb') : addToWishlist({ id: 'charweb', title: 'Web Development', price: 10000 }))}>
                  <FaHeart className={`${isWish('charweb') ? 'text-red-500' : 'text-gray-400'} text-lg`} />
                </button>
             <RiShareForwardLine
                  className="text-gray-500 text-lg cursor-pointer hover:text-[#003372]"
                  onClick={handleShare}
                />
              </div>
            </div>

            <div className="mt-4">
              <button onClick={() => addToCart({ id: 'charweb', title: 'Web Development', price: 10000 })} className="flex items-center gap-2 bg-[#003372] text-white px-4 py-2 rounded-xl w-full justify-center">
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
              To participate in the Web Development, Participants should have basic computer and internet usage skills and an interest in designing and developing websites. Creativity and attention to detail are helpful for creating user-friendly web pages. Basic understanding of how websites work is an advantage but not required. Willingness to practice coding and learn new technologies regularly is essential for success in this course.
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
        src={Charlotte}
        alt="Instructor"
        className="w-16 h-16 rounded-full object-cover"
      />

      <div className="space-y-1 flex gap-15 items-center">
        <div>
<h3 className="font-semibold text-2xl">Charlotte </h3>
        <p className="text-xl text-gray-500">Web Development</p>
        </div>
        

        <div className="text-xl text-gray-600 mt-2">
          <span className="flex items-center gap-2"><FaBook /> 2 Courses</span>
          <span className="flex items-center gap-2"><PiStudent /> 20 Students</span>
          <span className="flex items-center gap-2"><FaRegStar /> 5 Reviews</span>
        </div>
      </div>
    </div>

    {/* Other Courses */}
    <div className="w-full md:w-1/3 text-xl">
      <h4 className="font-semibold mb-2">Other Courses from this instructor</h4>
      <ul className="text-[#003372] space-y-1">
        <li><NavLink to="/charbrand">• Brand Management</NavLink></li>
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

export default CharWeb;