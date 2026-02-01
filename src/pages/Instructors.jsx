import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Nancy from "../assets/Homeimage/Nancy.png";
import Henry from "../assets/Homeimage/Henry.png";
import Charlotte from "../assets/Homeimage/Charlotte.png";
import Jordan from "../assets/Homeimage/Jordan.png";
import Ethan from "../assets/Homeimage/Ethan.png";

function Instructors() {
  const [selectedCourse, setSelectedCourse] = useState("All");
  const instructorsData = [
    {
      id: 1,
      name: "NANCY WHITE",
      image: Nancy,
      courses: ["UI/UX", "Graphics", "Digital Marketing"],
      link: "/instructorprofile",
    },
    {
      id: 2,
      name: "HENRY SMITH",
      image: Henry,
      courses: ["DataScience", "Mern"],
      link: "/henryinstructor",
    },
    {
      id: 3,
      name: "CHARLOTTE",
      image: Charlotte,
      courses: ["Web Development", "Brand Management"],
      link: "/charlotteinstructor",
    },
    {
      id: 4,
      name: "JORDAN",
      image: Jordan,
      courses: ["Project Management", "Public Speaking"],
      link: "/jordaninstructor",
    },
    {
      id: 5,
      name: "ETHAN",
      image: Ethan,
      courses: ["Business Analytics", "3D Modeling"],
      link: "/ethaninstructor",
    },
  ];

  const filteredInstructors =
    selectedCourse === "All"
      ? instructorsData
      : instructorsData.filter((instructor) =>
          instructor.courses.includes(selectedCourse)
        );

  return (
    <>
      <div className="flex justify-around p-8">
        <h1 className="text-2xl font-medium">Instructors</h1>

        <select
          className="border rounded-xl bg-[#939393] text-white p-2"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="All">All Courses</option>
          <option value="UI/UX">UI/UX</option>
          <option value="Graphics">Graphics</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="DataScience">DataScience</option>
          <option value="Mern">Mern</option>
          <option value="Web Development">Web Development</option>
          <option value="Brand Management">Brand Management</option>
          <option value="Project Management">Project Management</option>
          <option value="Public Speaking">Public Speaking</option>
          <option value="Business Analytics">Business Analytics</option>
          <option value="3D Modeling">3D Modeling</option>
        </select>
      </div>

      {filteredInstructors.map((instructor) => (
        <div
          key={instructor.id}
          className="flex justify-between items-center p-5 bg-white shadow-md w-[850px] h-[90px] rounded-sm ml-[330px] m-10"
        >
          <div className="flex items-center gap-3">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-[80px] h-[80px] rounded-full object-cover border-[3px] border-dotted border-[#003372]"
            />
            <div>
              <p className="font-semibold">{instructor.name}</p>
              <p>Courses: {instructor.courses.join(", ")}</p>
            </div>
          </div>

          <button className="bg-[#003372] text-white w-[110px] h-[29px] rounded-lg">
            <NavLink to={instructor.link} className="no-underline text-white">
              Visit Profile
            </NavLink>
          </button>
        </div>
      ))}
    </>
  );
}

export default Instructors;