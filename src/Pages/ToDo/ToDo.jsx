import React, { useEffect, useState } from "react";
import ToDoComponent from "./ToDoComponent";
import { toast } from "react-toastify";

const ToDo = () => {
  const [reFetch, setReFetch] = useState(true);
  const [task, setTask] = useState([]);
  // get method used get data
  useEffect(() => {
    fetch("http://localhost:5000/task")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [reFetch]);


  const completedTask = (data, id) =>{
    fetch("http://localhost:5000/completed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        toast.success("Completed Task");

        fetch(`http://localhost:5000/task/delete/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => setReFetch(!reFetch))
          .catch(err => console.log(err));





      })
      .catch((err) => toast.error("Something wrong"));


  }
  // http://localhost:5000/completed


  return (
    <div>
      <div className="container">
        <h1 className="text-center text-lg md:text-2xl my-2 md:my-4 text-gray-600 font-semibold">
          All Task
        </h1>

        <div className="max-w-[60rem]  min-h-[20rem] m-auto border-2 border-gray-300 rounded-md shadow-md mt-6 md:mt-10 p-3 mb-10">
          <h3 className="text-center text-base md:text-xl my-4 md:my-6 font-semibold">
            Total Task <span>50</span>
          </h3>

          <div className="w-full grid grid-cols-2 gap-5 first-line:gap-4 max-h-[20rem] overflow-y-auto">
            {task.map(( singleData ) => (
              <ToDoComponent key={singleData._id} singleData={singleData} completedTask={completedTask}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
