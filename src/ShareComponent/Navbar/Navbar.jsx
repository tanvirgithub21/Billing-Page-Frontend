import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  //  navbar link active or deActive style
  const active =
    "block py-2 px-4 bg-[#007ced] md:bg-transparent text-white rounded md:text-blue-700 font-[500] md:p-0";
  const deActive =
    "block py-2 pr-4 pl-3 text-gray-700 rounded  font-[500] md:p-0";

  return (
    <nav class="px-2 sm:px-4 py-2.5 sticky top-0 left-0 z-50  bg-white shadow-b">
      <div class="container flex flex-wrap justify-between items-center mx-auto">

        {/* logo  */}
        <div class="self-center text-xl font-semibold whitespace-nowrap flex items-center">
          <img className="w-10 h-10 mr-1" src={logo} alt="logo" />
          <h2 className="text-green-700">TANVIR STORE</h2>
        </div>


        {/* responsive navbar open and close button  */}
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <button
              type="button"
              className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden"
            >
              <svg
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          ) : (
            <button
              type="button"
              class="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden"
            >
              <svg
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          )}
        </div>

        {/* navbar link and total paid amount */}
        <div
          class={`w-full md:block md:w-auto ease-in-out duration-1000 ${
            open ? "mt-0" : "mt-[-300px]"
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
                to="/billing"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                Billing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                Logout
              </NavLink>
            </li>

            {/* paid amount  */}
            <div className="bg-[#1c92da] py-1 px-2 rounded-md text-white mt-2 md:mt-0">
              <div className="flex items-center text-base">
                <span>Total Paid</span>
                <span className="bg-white text-gray-700 p-1 rounded-full text-xs ml-1">
                  25
                </span>
              </div>

              <span className="text-md text-gray-100 font-base">$5000</span>
            </div>
            
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;