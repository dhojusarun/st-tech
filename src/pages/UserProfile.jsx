import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
function UserProfile() {
  const { user, logout, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return (
      <div className="w-96 m-auto mt-10 font-bold text-2xl">Loading....</div>
    );
  }
  return (
    <div>
      {isAuthenticated && user ? (
        <div className=" min-h-[80vh] flex gap-5 p-10 ">
          <div className="border-r-2  pr-4 h-72 p-2">
            <div className="w-60 h-60">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={user?.picture}
                alt="user_image"
              />
            </div>
          </div>
          <div className="h-52 mt-10 space-y-3 font-Noto">
            <h1 className="capitalize">
              Name :{" "}
              <span className="text-orange-600 font-bold">{user?.name}</span>
            </h1>
            <h1>
              Email :{" "}
              <span className="text-orange-600 font-bold">{user?.email}</span>
            </h1>
            <h1>
              Email Verified :{" "}
              <span className="text-orange-600 font-bold">
                {user?.email_verified && "true"}
              </span>
            </h1>
            <div className="border-t-2 pt-4 w-40 mt-10 cursor-pointer">
              <button
                onClick={() => {
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  });
                }}
                className="bg-orange-600 font-Noto font-bold p-3 w-40 text-white"
              >
                LogOut
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default UserProfile;