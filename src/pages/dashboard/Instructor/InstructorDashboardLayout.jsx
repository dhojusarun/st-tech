import { Outlet, NavLink } from "react-router-dom";
import { MdWindow } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { HiTv } from "react-icons/hi2";
import { MdTask} from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { useAuth0 } from "@auth0/auth0-react";

const SidebarItem = ({ to, icon: Icon , label, onClick,end = false }) => {
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
        <SidebarItem to="/dashboard/instructor" icon={MdWindow} label="Dashboard" end />
        <SidebarItem to="/dashboard/instructor/profile" icon={FaUser} label="My Profile" />
        <SidebarItem to="/dashboard/instructor/tasks" icon={MdTask} label="Tasks" />
        <SidebarItem to="/dashboard/instructor/courses" icon={HiTv} label="My Courses" />
        <hr />
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