import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const AppointedNavbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF3811] bg-none text-sm font-bold"
              : "text-sm font-bold"
          }
        >
          Order
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF3811] bg-none text-sm font-bold"
              : "text-sm font-bold"
          }
        >
          Order Review
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF3811] bg-none text-sm font-bold"
              : "text-sm font-bold"
          }
        >
          Manage Inventory
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF3811] bg-none text-sm font-bold"
              : "text-sm font-bold"
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <main className="container mx-auto mt-6">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link
            to="/"
            className="text-xl flex flex-col items-center justify-center"
          >
            <img
              className="w-3/4 items-center border bg-transparent border-none"
              src={logo}
              alt={logo}
            />
            <p className="font-extrabold text-sm">Drive Revive</p>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </main>
  );
};

export default AppointedNavbar;
