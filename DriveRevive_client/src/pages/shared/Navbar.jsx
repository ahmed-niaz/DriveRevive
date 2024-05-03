import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const {user,logOut} = useAuth()
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
          Home
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
          About
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
          Services
        </NavLink>
      </li>
      {
        user.email && (  <li>
        <NavLink
          to="/booking"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF3811] bg-none text-sm font-bold"
              : "text-sm font-bold"
          }
        >
          Booking
        </NavLink>
      </li>)
      }
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF3811] bg-none text-sm font-bold"
              : "text-sm font-bold"
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF3811] bg-none text-sm font-bold"
              : "text-sm font-bold"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <main className="container mx-auto mt-6">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-semibold shadow text-[#FF3811] rounded-box w-52"
            >
              {links}
            </ul>
          </div>
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
         {
          user?.email ?  <Link to='/login' onClick={logOut} className="btn btn-outline bg-white text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-none hover:text-white font-bold">
          Logout
        </Link> :  <Link to='/login' className="btn btn-outline bg-white text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-none hover:text-white font-bold">
            Appointment
          </Link>
         }
        </div>
      </div>
    </main>
  );
};

export default Navbar;
