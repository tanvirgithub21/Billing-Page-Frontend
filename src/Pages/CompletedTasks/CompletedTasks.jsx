import React, { useEffect, useState } from "react";
import { FcOk } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const CompletedTasks = () => {
  const [reFetch, setReRetch] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://tu-du-app.herokuapp.com/completedTask")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, [reFetch]);


  // handle delete completed task
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/completed/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Delete Successful")
        setReRetch(!reFetch)
      })
      .catch((err) => toast.success("Sumthing Wong"));
  };

  return (
    <div className="container">
      <div className="max-w-[60rem] min-h-[20rem] m-auto border-2 border-gray-300 rounded-md shadow-md mt-6 md:mt-10 p-3 mb-10">
        <h3 className="text-center text-base md:text-xl mt-4 md:mt-6 mb-2 md:mb-3 font-semibold">
          Completed Tasks List
        </h3>
        <h5 className="text-center text-sm md:text-lg mb-4 md:mb-6 font-semibold">
          Total Tasks <span>{data.length}</span>
        </h5>

        <div className="w-full grid grid-cols-2	gap-4 max-h-[20rem]">
          {data.map((singleData) => (
            <div
              key={singleData?._id}
              className="flex items-center justify-between font-[500] w-full bg-gray-200 px-3 py-1 rounded-md"
            >
              <div className="flex items-center">
                <FcOk className="w-5 h-5 mr-2 " />
                <span>{singleData?.taskTitle}</span>
              </div>
              <button onClick={() => handleDelete(singleData?._id)}>
                <MdDeleteForever className="w-6 h-6 text-red-600" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedTasks;
