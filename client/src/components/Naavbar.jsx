import React from "react";
import { Link, NavLink } from "react-router";

const Naavbar = () => {
  return (
    <div className="navbar container mx-auto">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/published-image"}>Published Images</NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="text-3xl text-secondary font-bold">
          Ai<span className="text-primary">Image</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/published-image"}>Published Images</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-3.5">
        <Link to={"/"} className="hidden sm:flex btn btn-primary">
          Generate New
        </Link>
      </div>
    </div>
  );
};

export default Naavbar;
