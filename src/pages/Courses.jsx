import React, { useState, useEffect } from "react";
import { FaHeart, FaCartShopping, FaSearch } from "react-icons/fa6";
import { NavLink, useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useCartWishlist } from "../context/CartWishlistContext";
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

function Courses() {
  const { addToCart, addToWishlist, wishlist, removeFromWishlist } = useCartWishlist();
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = category ? decodeURIComponent(category) : "All Courses";
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const urlSearchTerm = searchParams.get("search") || "";
    setSearchTerm(urlSearchTerm);
  }, [searchParams]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Update URL parameter
    if (value) {
      setSearchParams({ ...Object.fromEntries(searchParams), search: value });
    } else {
      const newParams = Object.fromEntries(searchParams);
      delete newParams.search;
      setSearchParams(newParams);
    }
  };

  const courses = [
    { id: "uiux", title: "UI/UX Design", price: 10000, img: Uiux, category: "IT Courses", teacherImg: Nancy, teacherName: "Nancy White", duration: "2.5 Months", link: "/nancycourse" },
    { id: "graphic", title: "Graphic Design", price: 10000, img: Graphics, category: "Designing Courses", teacherImg: Nancy, teacherName: "Nancy White", duration: "2.5 Months", link: "/nancygraphic" },
    { id: "datascience", title: "Data Science", price: 10000, img: Datascience, category: "IT Courses", teacherImg: Henry, teacherName: "Henry Smith", duration: "3 Months", link: "/henrydata" },
    { id: "mern", title: "Mern Stack Development", price: 10000, img: Mern, category: "IT Courses", teacherImg: Henry, teacherName: "Henry Smith", duration: "3 Months", link: "/henrymern" },
    { id: "web", title: "Web Development", price: 10000, img: Web, category: "IT Courses", teacherImg: Charlotte, teacherName: "Charlotte", duration: "2.5 Months", link: "/charweb" },
    { id: "project", title: "Project Management", price: 10000, img: Project, category: "Business Courses", teacherImg: Jordan, teacherName: "Jordan", duration: "2.5 Months", link: "/jordanproject" },
    { id: "digital", title: "Digital Marketing", price: 10000, img: Digital, category: "Marketing Courses", teacherImg: Nancy, teacherName: "Nancy White", duration: "3 Months", link: "/nancydigital" },
    { id: "business", title: "Business Analytics", price: 10000, img: Business, category: "Business Courses", teacherImg: Ethan, teacherName: "Ethan", duration: "3 Months", link: "/ethanbusiness" },
    { id: "brand", title: "Brand Management", price: 0, img: Brand, category: "Marketing Courses", teacherImg: Charlotte, teacherName: "Charlotte", duration: "1.5 Months", link: "/charbrand" },
    { id: "public", title: "Public Speaking & Presentation Skills", price: 0, img: Public, category: "Public Development Courses", teacherImg: Jordan, teacherName: "Jordan", duration: "1 Month", link: "/jordanpublic" },
    { id: "modeling", title: "3D Modeling and Animation", price: 10000, img: Modeling, category: "Creative Arts Courses", teacherImg: Ethan, teacherName: "Ethan", duration: "3 Months", link: "/ethan3d" },
  ];

  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.teacherName.toLowerCase().includes(searchTerm.toLowerCase())
      )
      : courses.filter((course) =>
        (course.category === selectedCategory || (selectedCategory === "Free Courses" && course.price === 0)) &&
        (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.teacherName.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  const isWish = (id) => wishlist.some((i) => i.id === id);

  return (
    <div className="bg-gray-200">
      <h2 className="font-medium text-black p-6 ml-25 text-2xl">Our Courses</h2>

      {/* Search Bar */}
      <div className="flex justify-center px-4 mb-6">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search courses or instructors..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border-2 border-gray-300 p-2 pl-10 rounded-lg w-full outline-none focus:border-[#003372] shadow-sm"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="flex justify-around p-4">
        {/* Category Sidebar */}
        <div className="bg-white w-55 h-80 rounded-lg shadow-md p-5 ml-28">
          <h4 className="font-semibold border-b-2 border-gray-200 pb-1 mb-2 text-lg">Category</h4>
          <ul className="list-none p-0 m-0">
            {[
              "All Courses",
              "Free Courses",
              "IT Courses",
              "Designing Courses",
              "Marketing Courses",
              "Business Courses",
              "Public Development Courses",
              "Creative Arts Courses",
            ].map((cat) => (
              <li key={cat} className="flex gap-1 text-sm text-gray-800 mb-2">
                <input
                  type="radio"
                  checked={selectedCategory === cat}
                  onChange={() =>
                    cat === "All Courses"
                      ? navigate("/courses")
                      : navigate(`/courses/${encodeURIComponent(cat)}`)
                  }
                />
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-3 gap-20 mx-auto">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="bg-white w-[250px] rounded-xl shadow p-4">
                <img src={course.img} className="w-full h-[140px] object-contain" />
                <div className="flex justify-between mt-2">
                  <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">
                    {course.price === 0 ? "Free" : `Rs. ${course.price.toLocaleString()}`}
                  </span>
                  <span className="text-xs text-gray-400">REVIEWS</span>
                </div>
                <h3 className={`font-semibold mt-4 ${(course.id === "brand" || course.id === "public") ? "leading-relaxed mb-3" : ""}`}>
                  {course.title} | {course.duration}
                </h3>
                <p className={`text-sm text-gray-500 flex items-center gap-2 ${(course.id === "brand" || course.id === "public") ? "mt-5 mb-2" : "mt-2"}`}>
                  <img src={course.teacherImg} alt="" className="rounded-full object-cover w-8 h-8" />
                  By {course.teacherName}
                </p>
                <div className="flex items-center justify-between mb-4">
                  {!(course.id === "brand" || course.id === "public") && (
                    <button
                      onClick={() => addToCart({ id: course.id, title: course.title, price: course.price, img: course.img })}
                      className="bg-yellow-300 w-30 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex"
                    >
                      <FaCartShopping className="text-[#003372] size-4" /> Add to cart
                    </button>
                  )}
                  <button
                    onClick={() =>
                      isWish(course.id)
                        ? removeFromWishlist(course.id)
                        : addToWishlist({ id: course.id, title: course.title, price: course.price })
                    }
                  >
                    <FaHeart
                      className={`${isWish(course.id) ? "text-red-500" : "text-gray-400"} size-5 mt-2`}
                    />
                  </button>
                </div>
                <hr />
                <NavLink to={course.link}>
                  <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2 ml-7 py-1 rounded">
                    View Course
                  </button>
                </NavLink>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-500 text-lg">No courses or instructors found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;