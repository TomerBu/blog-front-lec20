import { NavLink } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between bg-slate-100 text-xl text-slate-900 dark:bg-slate-700 dark:text-white shadow-lg mb-1 p-4">
      <div className="flex flex-row gap-2">
        <NavLink to="/">
          <BsHouse />
        </NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <div className="flex flex-row gap-2">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <DarkModeToggle/>
      </div>
    </nav>
  );
};

export default Navbar;
