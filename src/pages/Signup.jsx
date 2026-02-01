import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Log from "../assets/Homeimage/Log.png";
import Logo from "../assets/Homeimage/Logo.png";
import { useAuth0 } from "@auth0/auth0-react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithRedirect } = useAuth0();
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!fullName || !username || !email || !password || !confirmPassword) {
      toast.error("Please fill all required fields", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    toast.success("Signup Successfully", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
      transition: Bounce,
    });

    // Clear inputs
    setFullName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirm(false);
  };
   const handleGoogleLogin = () => {
    loginWithRedirect({
      connection: "google-oauth2", // Use Auth0 Google connection
    });
  };
  return (
    <div className="min-h-screen flex">
      <ToastContainer />

      {/* RIGHT */}
      <div className="w-1/2 bg-gradient-to-b from-[#002859] to-[#0056BF] text-white flex flex-col justify-center items-center relative">
        <div className="absolute top-4 left-6 flex items-center gap-2 italic">
          <img src={Logo} className="w-10" />
          <h2>S.T.Tech</h2>
        </div>

        <div className="text-center mt-20">
          <h3 className="text-xl">Empower Your Learning Journey –</h3>
          <h3 className="text-xl font-semibold">Welcome to S.T. Tech!</h3>
          <img src={Log} className="w-[70%] mx-auto mt-6" />
        </div>
      </div>

      {/* LEFT */}
      <div className="w-1/2 px-20 py-14">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Sign up to S.T. Tech
        </h2>

          <button
                    onClick={handleGoogleLogin}
                    className="flex justify-center items-center gap-3 border rounded-md py-2 w-full"
                  >
                    <FaGoogle /> Continue with Google
                  </button>

        <p className="text-center text-gray-400 my-4">or</p>

        <form className="max-w-md mx-auto" onSubmit={handleSignup}>
          <div className="flex gap-6 mb-4">
            <div className="w-1/2">
              <label className="font-medium">Full Name</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-gray-200 rounded-md px-3 py-2 mt-1 outline-none"
              />
            </div>

            <div className="w-1/2">
              <label className="font-medium">Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-200 rounded-md px-3 py-2 mt-1 outline-none"
              />
            </div>
          </div>

          <label className="font-medium">Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-200 rounded-md px-3 py-2 mt-1 mb-4 outline-none"
          />

          <label className="font-medium">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-200 rounded-md px-3 py-2 outline-none"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer"
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>

          <label className="font-medium">Confirm Password</label>
          <div className="relative mb-6">
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-gray-200 rounded-md px-3 py-2 outline-none"
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-3 cursor-pointer"
            >
              {showConfirm ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>

          <button className="bg-yellow-400 w-28 py-2 rounded-md font-semibold block mx-auto">
            Sign up
          </button>
        </form>

        <p className="text-right mt-6">
          Already signed in?{" "}
          <NavLink
            to="/login"
            className="text-yellow-500 font-semibold hover:underline"
          >
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;