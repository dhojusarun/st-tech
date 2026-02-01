import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
function Register() {
  const { loginWithRedirect } = useAuth0();
  const handleGoogleLogin = () => {
    loginWithRedirect({
      connection: "google-oauth2", // Use Auth0 Google connection
    });
  };
  return (
    <div className="bg-white border mt-25 gap-4  w-[450px] p-4 m-auto flex flex-col items-center">
      <form action="" className="space-y-3">
        <div>
          <label htmlFor="email">
            Email:
            <br />
            <input
              className="border-2 mt-2 w-64 rounded-2xl outline-none p-2 text-center "
              type="text"
              placeholder="Enter your Email "
            />{" "}
          </label>
        </div>

        <br />
        <div>
          <label htmlFor="password">
            Password: <br />
            <input
              className="border-2 mt-2 w-64 rounded-2xl outline-none p-2 text-center "
              type="text"
              placeholder="Enter your Password"
            />{" "}
          </label>
        </div>

        <br />
        <button className="border p-3 w-64 bg-green-700 text-white">
          Login
        </button>
      </form>
      <p>or</p>
      <button
        onClick={handleGoogleLogin}
        className="flex justify-center items-center gap-2 border py-2 w-64"
      >
        <FaGoogle /> Login with Google
      </button>
    </div>
  );
}

export default Register;