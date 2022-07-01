import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container border-t shadow-lg">
      <div className="md:flex justify-evenly items-center">
        <div className="flex justify-center flex-1">
          <img
            src="https://cdn.dribbble.com/users/60166/screenshots/16953545/media/6046ed03ade41de8c2eac342c688a348.jpg"
            alt="logo"
            className="max-w-xs max-h-xs"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-1">Contact Us</h2>
          <p className="  mb-1">Phone: 01797021366</p>
          <p className="  mb-1">Location: Barisal, Bangladesh</p>
          <p className="  mb-1">Email: tanvir.bd.global@gmail.com</p>
          <div className="flex mx-auto md:mx-0 w-32 justify-between items-center text-xl mt-5 text-gray-600 hover:text-gray-800">
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <BsLinkedin />
            </a>
            <a href="#">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
