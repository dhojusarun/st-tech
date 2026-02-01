import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";
import Log from "../assets/Homeimage/Log.png";
import Logo from "../assets/Homeimage/Logo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loginWithRedirect } = useAuth0();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please fill all required fields", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    // Here you can handle your custom login logic (mocked for now)
    toast.success(`Logged in as ${username}`, {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
      transition: Bounce,
    });

    setUsername("");
    setPassword("");
    setShowPassword(false);
  };

  const handleGoogleLogin = () => {
    loginWithRedirect({
      connection: "google-oauth2", // Use Auth0 Google connection
    });
  };

  return (
    <div className="min-h-screen flex">
      <ToastContainer />

      {/* LEFT */}
      <div className="w-1/2 bg-white px-16 py-14 flex flex-col justify-between">
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">Welcome Back!</h2>
            <p className="text-gray-500 mt-2">
              Log in to access your account and continue <br />
              your journey with us.
            </p>
          </div>

          <form className="max-w-md mx-auto" onSubmit={handleLogin}>
            <label className="font-medium">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mt-1 mb-4 outline-none"
            />

            <label className="font-medium">Password</label>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-md px-3 py-2 outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <label className="flex gap-2 items-center">
                <input type="checkbox" /> Remember Me
              </label>
              <p className="cursor-pointer">Forgot password?</p>
            </div>

            <button className="bg-yellow-400 w-28 py-2 rounded-md font-semibold block mx-auto">
              Log in
            </button>

            <p className="text-center text-gray-400 my-3">or</p>
          </form>

          <button
            onClick={handleGoogleLogin}
            className="flex justify-center items-center gap-3 border rounded-md py-2 w-full"
          >
            <FaGoogle /> Continue with Google
          </button>
        </div>

        <p className="text-center">
          New user?{" "}
          <NavLink
            to="/signup"
            className="text-yellow-500 font-semibold hover:underline"
          >
            Sign up
          </NavLink>
        </p>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 bg-gradient-to-br from-blue-900 to-blue-600 text-white flex flex-col justify-center items-center relative">
        <div className="absolute top-4 right-6 flex items-center gap-2 italic">
          <img src={Logo} className="w-10" />
          <h2>S.T.Tech</h2>
        </div>

        <div className="text-center">
          <h3 className="text-xl">Empower Your Learning Journey –</h3>
          <h3 className="text-xl font-semibold">Welcome to S.T. Tech!</h3>
          <img src={Log} className="w-[70%] mx-auto mt-6" />
        </div>
      </div>
    </div>
  );
}

export default Login;