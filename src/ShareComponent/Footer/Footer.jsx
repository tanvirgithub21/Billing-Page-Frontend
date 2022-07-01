import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import logo from "../../Images/logo.png";

const Footer = () => {
  return (
    <div className="container bg-slate-300">
      <div className="container border-t shadow-lg">
        <div className="md:flex justify-evenly items-center">
          <div className="flex justify-center flex-1">
            <img
              src={logo}
              alt="logo"
              className="w-[5rem] md:w-[8rem] h-[5rem] md:h-[8rem] m-4 md:m-16"
            />
          </div>
          <div className="flex-1 text-center md:text-left pb-6 md:pb-0">
            <h2 className="text-xl font-semibold mb-1">Contact Us</h2>
            <p className="  mb-1">Phone: 01797021366</p>
            <p className="  mb-1">Location: Barisal, Bangladesh</p>
            <p className="  mb-1">Email: tanvir.bd.global@gmail.com</p>
            <div className="flex mx-auto md:mx-0 w-32 justify-between items-center text-xl mt-5 text-gray-600 ">
              <a href="https://www.facebook.com/tanvirahmed6147/" target="_blank" className="hover:text-gray-800">
                <BsFacebook />
              </a>
              <a href="https://www.linkedin.com/in/tanvirahmed6174/" target="_blank"  className="hover:text-gray-800">
                <BsLinkedin />
              </a>
              <a href="https://github.com/tanvirgithub21" target="_blank"  className="hover:text-gray-800">
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
