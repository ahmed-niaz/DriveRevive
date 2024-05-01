import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='about'>About</NavLink>
      </li>
      <li>
        <NavLink to='services'>Services</NavLink>
      </li>
      <li>
        <NavLink to='blog'>Blog</NavLink>
      </li>
      <li>
        <NavLink to='contact'>Contact</NavLink>
      </li>
     
    </>
  );
  return (
    <main className="container mx-auto mt-6">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to='/' className="text-xl flex flex-col items-center justify-center">
                <img className="w-3/4 items-center border bg-transparent border-none" src={logo} alt={logo} />
                <p className="font-extrabold text-sm">Drive Revive</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn border-2 bg-white text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-none hover:text-white font-bold">Appointment</a>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
