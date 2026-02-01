import { Outlet, NavLink } from "react-router-dom";
import { MdWindow } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { HiTv } from "react-icons/hi2";
import { MdTask, MdVideoLibrary, MdFavoriteBorder } from "react-icons/md";
import { LuNotebookPen, LuMessageSquareMore } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { useAuth0 } from "@auth0/auth0-react";

const SidebarItem = ({ to, icon: Icon, label, onClick,end = false }) => {
  const classes = ({ isActive } = {}) =>
    `flex items-center gap-3 px-4 py-2 rounded-full transition
      ${
        isActive
          ? "bg-[#405E83] text-white"
          : "text-[#2F3E53] hover:bg-gray-100"
      }`;

  if (to) {
    return (
      <NavLink to={to} end= {end} className={classes} onClick={onClick}>
        <Icon size={18} />
        <span>{label}</span>
      </NavLink>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes()}>
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );
};

function Dashboard() {
  const { logout } = useAuth0();
  return (
    <div className="flex bg-gray-300 px-10 pt-10 gap-8 min-h-screen">
      <div className="bg-white p-6 rounded-2xl space-y-4 w-65">
        <SidebarItem to="/dashboard/student" icon={MdWindow} label="Dashboard" end />
        <SidebarItem to="/dashboard/student/profile" icon={FaUser} label="My Profile" />
        <SidebarItem to="/dashboard/student/tasks" icon={MdTask} label="Tasks" />
        <SidebarItem to="/dashboard/student/courses" icon={HiTv} label="My Courses" />
        <SidebarItem to="/dashboard/student/resource" icon={MdVideoLibrary} label="Resources" />
        <SidebarItem to="/dashboard/student/wishlist" icon={MdFavoriteBorder} label="Wishlist" />
        <SidebarItem to="/dashboard/student/feedback" icon={LuNotebookPen} label="Feedback" />
        <SidebarItem to="/dashboard/student/messages" icon={LuMessageSquareMore } label="Messages" />

        <hr />

        <SidebarItem to="/dashboard/student/settings" icon={IoMdSettings} label="Settings" />
        <SidebarItem
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          icon={TbLogout}
          label="Log Out"
        />
      </div>

      <div className="bg-white p-6 rounded-2xl w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;