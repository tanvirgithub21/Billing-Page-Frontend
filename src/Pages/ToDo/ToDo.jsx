import React, { useEffect, useState } from "react";
import ToDoComponent from "./ToDoComponent";
import { toast } from "react-toastify";

const ToDo = () => {
  const [reFetch, setReFetch] = useState(true);
  const [task, setTask] = useState([]);
  // get method used get data
  useEffect(() => {
    fetch("https://tu-du-app.herokuapp.com/task")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [reFetch]);

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
          .then((data) => setReFetch(!reFetch))
          .catch((err) => toast.error("Something wrong"));
      })
      .catch((err) => toast.error("Something wrong"));
  };

  // update data
  const handleUpdate = (id, data, editStatus) => {
    fetch(`https://tu-du-app.herokuapp.com/task/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        setReFetch(!reFetch);
        toast.success("Update Successful");
        editStatus();
      })
      .catch((err) => toast.error("Something wrong"));
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center text-lg md:text-2xl my-2 md:my-4 text-gray-600 font-semibold">
          All Task
        </h1>

        <div className="max-w-[60rem]  min-h-[20rem] m-auto border-2 border-gray-300 rounded-md shadow-md mt-6 md:mt-10 p-3 mb-10">
          <h3 className="text-center text-base md:text-xl my-4 md:my-6 font-semibold">
            Total Task <span>{task.length}</span>
          </h3>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 first-line:gap-4 max-h-[20rem] overflow-y-auto">
            {task.map((singleData) => (
              <ToDoComponent
                key={singleData._id}
                singleData={singleData}
                completedTask={completedTask}
                handleUpdate={handleUpdate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
