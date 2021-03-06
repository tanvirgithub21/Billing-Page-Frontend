import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [reFetch, setReRetch] = useState(true);
  const [task, setTask] = useState([]);
  // get method used get data
  useEffect(() => {
    fetch("https://tu-du-app.herokuapp.com/task")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [reFetch]);

  // post method used to add task
  const onSubmit = (data) => {
    fetch("https://tu-du-app.herokuapp.com/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        reset();
        setReRetch(!reFetch);
        toast.success("Add New Task");
      })
      .catch((err) => toast.error("Something wrong"));
  };

  // const handleEnterKeySubmit = (event) => {
  //   // console.log(click());
  //   event.preventDefault();

  //   if (event.code === "Enter" || event.code === "NumpadEnter") {
  //     console.log("Enter key was pressed. Run your function.");
  //   }
  // };


  
  // completed Task function
  const completedTask = (data, id) => {
    fetch("https://tu-du-app.herokuapp.com/completed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        toast.success("Completed Task");

        fetch(`https://tu-du-app.herokuapp.com/task/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => setReRetch(!reFetch))
          .catch((err) =>  toast.error("Something wrong") );
      })
      .catch((err) => toast.error("Something wrong"));
  };


    
  const handleChange = (event, data, id) => {
    if (event.target.checked) {
      completedTask(data, id);
    }
  };



  return (
    <div>
      <div className="container  min-h-[20rem]">
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
            // onKeyUp={handleEnterKeySubmit}
          >
            <div className="mb-3 md:mb-6">
              <input
                type="text"
                name="taskTitle"
                {...register("taskTitle")}
                placeholder="Task Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-1 md:p-2.5"
              />
            </div>

            <div>
              <div className="mb-3 md:mb-6">
                <textarea
                  type="text"
                  {...register("taskDetails")}
                  name="taskDetails"
                  placeholder="Task Details"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-24 pl-2 p-1 md:p-2.5"
                />
              </div>
              <div className="mb-3 md:mb-6">
                <button
                  type="submit"
                  className="bg-[#12ab84] hover:bg-[#0bab83] border text-white font-semibold text-sm md:text-lg rounded-lg block w-full pl-2 p-1 md:p-2.5"
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

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[20rem] overflow-y-auto">
            {
              task.map( singleData => (
               
                  <div key={singleData._id} className="flex items-center font-[500] w-full bg-gray-200 px-3 py-1 rounded-md ">
                    <input
                      onChange={ e => handleChange(e, {taskTitle: singleData?.taskTitle, taskDetails: singleData?.taskDetails}, singleData?._id)}
                      type="checkbox"
                      className="w-4 h-4 mr-2 text-gray-700 bg-gray-100 border-blue-600 ring-offset-gray-800 focus:ring-2"
                    />
                    <span>{singleData?.taskTitle}</span>
                  </div>
          
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
