import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    console.log(data);
  };

  const handleEnterKeySubmit = (event) => {
    // console.log(click());
    event.preventDefault();

    if (event.code === "Enter" || event.code === "NumpadEnter") {
      console.log("Enter key was pressed. Run your function.");
    }
  };

  return (
    <div>
      <div className="container">
        {/* section header  */}
        <h1 className="text-center text-lg md:text-2xl my-2 md:my-4 font-semibold">
          Main Task Board
        </h1>

        {/* added task  */}
        <div className=" max-w-[30rem] bg-slate-200 px-3 py-1 mx-auto rounded-md shadow-md">
          <h3 className="text-center text-base md:text-xl my-2 md:my-4 text-gray-600 font-semibold">
            Add a Task
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyUp={handleEnterKeySubmit}
          >
            <div class="mb-3 md:mb-6">
              <input
                type="text"
                name="taskTitle"
                {...register("taskTitle")}
                placeholder="Task Title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-1 md:p-2.5"
              />
            </div>

            <div>
              <div class="mb-3 md:mb-6">
                <textarea
                  type="text"
                  {...register("taskDetails")}
                  name="taskDetails"
                  placeholder="Task Details"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-24 pl-2 p-1 md:p-2.5"
                />
              </div>
              <div class="mb-3 md:mb-6">
                <button
                  type="submit"
                  class="bg-[#12ab84] hover:bg-[#0bab83] border text-white font-semibold text-sm md:text-lg rounded-lg block w-full pl-2 p-1 md:p-2.5"
                >
                  Add Task
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* task list */}
        <div className="max-w-[60rem] m-auto border-2 border-gray-300 rounded-md shadow-md mt-6 md:mt-10 p-3 mb-10">
          <h3 className="text-center text-base md:text-xl my-4 md:my-6 font-semibold">
            Task List
          </h3>

          <div className="w-full grid grid-cols-2	gap-4 max-h-[20rem] overflow-y-auto">
            <div className="flex items-center font-[500] w-full bg-gray-200 px-3 py-1 rounded-md">
              <input
                type="checkbox"
                class="w-4 h-4 mr-2 text-gray-700 bg-gray-100 border-blue-600 ring-offset-gray-800 focus:ring-2"
              />
              <span>hello world</span>
            </div>

            <div className="flex items-center font-[500] w-full bg-gray-200 px-3 py-1 rounded-md">
              <input
                type="checkbox"
                class="w-4 h-4 mr-2 text-gray-700 bg-gray-100 border-blue-600 ring-offset-gray-800 focus:ring-2"
              />
              <span>hello worlsdf </span>
            </div>

            <div className="flex items-center font-[500] w-full bg-gray-200 px-3 py-1 rounded-md">
              <input
                type="checkbox"
                class="w-4 h-4 mr-2 text-gray-700 bg-gray-100 border-blue-600 ring-offset-gray-800 focus:ring-2"
              />
              <span>hello world</span>
            </div>

            <div className="flex items-center font-[500] w-full bg-gray-200 px-3 py-1 rounded-md">
              <input
                type="checkbox"
                class="w-4 h-4 mr-2 text-gray-700 bg-gray-100 border-blue-600 ring-offset-gray-800 focus:ring-2"
              />
              <span>hello world</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
