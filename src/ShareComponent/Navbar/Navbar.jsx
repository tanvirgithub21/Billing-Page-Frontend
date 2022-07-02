import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  //  navbar link active or deActive style
  const active =
    "block py-2 px-4 bg-[#007ced] md:bg-transparent text-white rounded md:text-blue-700 font-[500] md:p-0 whitespace-nowrap";
  const deActive =
    "block py-2 pr-4 pl-3 text-gray-700 rounded  font-[500] md:p-0 whitespace-nowrap";

  return (
    <nav  className="py-2.5 sticky top-0 left-0 z-30 bg-white shadow-lg">
      <div  className="container flex flex-wrap justify-between items-center mx-auto">
        {/* logo  */}
        <Link
          to="/home"
           className="self-center text-base md:text-xl font-semibold whitespace-nowrap flex items-center"
        >
          <img
            className=" w-6 md:w-10 h-6 md:h-10 mr-1"
            src={logo}
            alt="logo"
          />
          <h2 className="text-green-700">Task Management</h2>
        </Link>

        {/* responsive navbar open and close button  */}
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <button
              type="button"
              className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden"
            >
              <svg
                 className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          ) : (
            <button
              type="button"
               className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden"
            >
              <svg
                 className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          )}
        </div>

        {/* navbar link and total paid amount */}
        <div
           className={`w-full md:block md:w-auto ease-in-out duration-1000 ${
            open ? "mt-0" : "mt-[-600px]"
          }  md:mt-0 z-20`}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium items-center">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/toDo"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                To-Do
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/completedTasks"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                Completed Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calendar"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                Calendar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/billing"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                Billing
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
