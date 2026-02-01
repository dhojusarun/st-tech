
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Pages
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import InstructorProfile from "./pages/Instructorprofile";

// Instructor pages
import HenryInstructor from "./pages/Henryinstructor";
import CharlotteInstructor from "./pages/Charlotteinstructor";
import EthanInstructor from "./pages/Ethaninstructor";
import JordanInstructor from "./pages/Jordaninstructor";

// Course pages
import Courses from "./pages/Courses";
import NancyCourse from "./pages/NancyCourse";
import NancyGraphic from "./pages/NancyGraphic";
import NancyDigital from "./pages/NancyDigital";
import HenryMern from "./pages/HenryMern";
import HenryData from "./pages/HenryData";
import CharWeb from "./pages/CharWeb";
import CharBrand from "./pages/CharBrand";
import Ethan3D from "./pages/Ethan3D";
import EthanBusiness from "./pages/EthanBusiness";
import JordanProject from "./pages/JordanProject";
import JordanPublic from "./pages/JordanPublic";

// Auth pages
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Register from "./pages/Register";

// Info pages
import About from "./pages/About";
import Contact from "./pages/Contact";

// Payment pages
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Failure from "./pages/Failure";

// Dashboard & ProtectedRoute
import ProtectedRoute from "./Components/ProtectedRoute";
import DashboardLayout from "./pages/dashboard/student/Dashboard";

// Student Dashboard
import DashboardHome from "./pages/dashboard/student/DashboardHome";
import DashProfile from "./pages/dashboard/student/Dashprofile";
import DashCourses from "./pages/dashboard/student/Dashcourses";
import Dashtask from "./pages/dashboard/student/Dashtask";
import DashWishlist from "./pages/dashboard/student/Dashwishlist";
import DashFeedback from "./pages/dashboard/student/Dashfeedback";
import DashMessages from "./pages/dashboard/student/Dashmessages";
import DashSetting from "./pages/dashboard/student/Dashsetting";
import Enrolled from "./pages/dashboard/student/Enrolled";
import Active from "./pages/dashboard/student/Active";
import Completed from "./pages/dashboard/student/Completed";
import Assignments from "./pages/dashboard/student/Assignments";
import Quizzes from "./pages/dashboard/student/Quizzes";
import Tests from "./pages/dashboard/student/Tests";
import DashResource from "./pages/dashboard/student/Dashresource";
import StudentDashboardLayout from "./pages/dashboard/student/Dashboard";
import InstructorDashboardLayout from "./pages/dashboard/instructor/InstructorDashboardLayout";
import AdminDashboardLayout from "./pages/dashboard/admin/AdminDashboardLayout";

import {
  DashboardHome as InstructorDashboardHome,
  Dashprofile as InstructorProfilePage,
  Dashcourses as InstructorCoursesPage,
  Dashtask as InstructorTasksPage,
  Assignments as InstructorAssignmentPage,
  Quizzes as InstructorQuizzesPage,
  Tests as InstructorTestPage,
  // Dashstudents as InstructorStudents,
} from "./pages/dashboard/instructor";
import UserProfile from "./pages/UserProfile";

import {
  DashboardHome as AdminDashboardHome,
  Dashprofile as AdminDashProfile,
  ManageButton as AdminManageButton,
  ManageCourse as AdminManageCourse,
} from "./pages/dashboard/admin";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/henryinstructor" element={<HenryInstructor />} />
        <Route path="/charlotteinstructor" element={<CharlotteInstructor />} />
        <Route path="/ethaninstructor" element={<EthanInstructor />} />
        <Route path="/jordaninstructor" element={<JordanInstructor />} />
        <Route path="/instructorprofile" element={<InstructorProfile />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:category" element={<Courses />} />
        <Route path="/nancycourse" element={<NancyCourse />} />
        <Route path="/nancygraphic" element={<NancyGraphic />} />
        <Route path="/nancydigital" element={<NancyDigital />} />
        <Route path="/henrymern" element={<HenryMern />} />
        <Route path="/henrydata" element={<HenryData />} />
        <Route path="/charweb" element={<CharWeb />} />
        <Route path="/charbrand" element={<CharBrand />} />
        <Route path="/ethan3d" element={<Ethan3D />} />
        <Route path="/ethanbusiness" element={<EthanBusiness />} />
        <Route path="/jordanproject" element={<JordanProject />} />
        <Route path="/jordanpublic" element={<JordanPublic />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/userprofile" element={<UserProfile />} />
        {/* Student Dashboard */}
        <Route
          path="/dashboard/student"
          element={
            <ProtectedRoute>
              <StudentDashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<DashProfile />} />
          <Route path="courses" element={<DashCourses />}>
            <Route index element={<Enrolled />} />
            <Route path="enrolled" element={<Enrolled />} />
            <Route path="active" element={<Active />} />
            <Route path="completed" element={<Completed />} />
          </Route>
          <Route path="tasks" element={<Dashtask />}>
            <Route index element={<Assignments />} />
            <Route path="assignment" element={<Assignments />} />
            <Route path="quizzes" element={<Quizzes />} />
            <Route path="test" element={<Tests />} />
          </Route>
          <Route path="resource" element={<DashResource />} />
          <Route path="wishlist" element={<DashWishlist />} />
          <Route path="feedback" element={<DashFeedback />} />
          <Route path="messages" element={<DashMessages />} />
          <Route path="settings" element={<DashSetting />} />
        </Route>

        {/* Instructor Dashboard */}
      <Route
  path="/dashboard/instructor"
  element={
    <ProtectedRoute>
      <InstructorDashboardLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<InstructorDashboardHome />} />
  <Route path="profile" element={<InstructorProfilePage />} />
  <Route path="courses" element={<InstructorCoursesPage />} />
  <Route path="tasks" element={<InstructorTasksPage />}>
   <Route index element={<InstructorAssignmentPage />} />
     <Route path="assignment" element={<InstructorAssignmentPage />} />
     <Route path="quizzes" element={<InstructorQuizzesPage />} />
     <Route path="test" element={<InstructorTestPage />} />
  </Route>
  <Route path="messages" element={<DashMessages />} />
  <Route path="settings" element={<DashSetting />} />
</Route>

        {/* Admin Dashboard */}
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute>
              <AdminDashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboardHome />} />
          <Route path="profile" element={<AdminDashProfile />} />
          <Route path="manage" element={<AdminManageButton />} />
          <Route path="managecourse" element={<AdminManageCourse />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
