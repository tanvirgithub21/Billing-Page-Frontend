import React from "react";
import { BiEditAlt } from "react-icons/bi";

const ToDo = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-center text-lg md:text-2xl my-2 md:my-4 text-gray-600 font-semibold">
          All Task
        </h1>

        <div className="max-w-[60rem] m-auto border-2 border-gray-300 rounded-md shadow-md mt-6 md:mt-10 p-3 mb-10">
          <h3 className="text-center text-base md:text-xl my-4 md:my-6 font-semibold">
            Total Task <span>50</span>
          </h3>

          <div className="w-full grid grid-cols-2 first-line:gap-4 max-h-[20rem] overflow-y-auto">
            <div className="font-[500] w-full bg-gray-200 px-3 py-1 rounded-md">
                <div className=" flex items-center justify-between">
                    <div className="flex items-center ">
                        <input
                            type="checkbox"
                            class="w-4 h-4 mr-2 text-gray-700 bg-gray-100 border-blue-600 ring-offset-gray-800 focus:ring-2"
                        />
                        <span>hello world</span>
                    </div>
                    <button className="text-blue-600 flex items-center">Edit <BiEditAlt className="ml-1 w-5 h-5" /></button>
                </div>
                <div>
                    <h6 className="mt-2">Details</h6>
                    <p className="text-gray-700 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab mollitia facilis fugiat culpa dolorum reiciendis, praesentium ullam at assumenda consectetur.</p>
                </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ToDo;
