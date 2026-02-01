import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ManageCourse() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const course = state?.course;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 mb-4"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Manage Course</h1>

      {course ? (
        <div className="space-y-2">
          <p><strong>Name:</strong> {course.name}</p>
          <p><strong>Lessons:</strong> {course.lessons}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Timing:</strong> {course.timing}</p>
          <p><strong>Instructor:</strong> {course.instructor}</p>
        </div>
      ) : (
        <p>No course data found</p>
      )}
    </div>
  );
}

export default ManageCourse;