import React from "react";
import { FcOk } from "react-icons/fc";

const CompletedTasks = () => {
  return (
    <div className="container">
      <div className="max-w-[60rem] min-h-[20rem] m-auto border-2 border-gray-300 rounded-md shadow-md mt-6 md:mt-10 p-3 mb-10">
        <h3 className="text-center text-base md:text-xl mt-4 md:mt-6 mb-2 md:mb-3 font-semibold">
          Completed Tasks List
        </h3>
        <h5 className="text-center text-sm md:text-lg mb-4 md:mb-6 font-semibold">
          Total Tasks <span>20</span>
        </h5>

        <div className="w-full grid grid-cols-2	gap-4 max-h-[20rem]">
          <div className="flex items-center font-[500] w-full bg-gray-200 px-3 py-1 rounded-md">
            <FcOk className="w-5 h-5 mr-2 " />
            <span>hello world</span>
          </div>

          <div className="flex items-center font-[500] w-full bg-gray-200 px-3 py-1 rounded-md">
            <FcOk className="w-5 h-5 mr-2 " />
            <span>hello world</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTasks;
