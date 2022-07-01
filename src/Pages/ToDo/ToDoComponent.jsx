import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";

const ToDoComponent = ({ singleData, completedTask, handleUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [editStatus, setEditStatus] = useState(false);

  const data = {
    taskTitle: singleData?.taskTitle,
    taskDetails: singleData?.taskDetails,
  };

  const handleChange = (event) => {
    if (event.target.checked) {
      completedTask(data, singleData?._id);
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
    // setIsSubscribed(current => !current);
  };

  const onSubmit = (data) => {
    handleUpdate(singleData?._id, data, ()=>setEditStatus(!editStatus));
    
    
  };

  return (
    <div className="font-[500] w-full bg-gray-200 px-3 py-3 rounded-md ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex items-center justify-between">
          <div className="flex items-center ">
            <input
              onChange={handleChange}
              type="checkbox"
              class="w-4 h-4 mr-2 text-gray-700 bg-gray-100 border-blue-600 ring-offset-gray-800 focus:ring-2"
            />
            {editStatus ? (
              <input
                type="text"
                defaultValue={singleData?.taskTitle}
                {...register("taskTitle")}
                name="taskTitle"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-1 md:p-2.5"
              />
            ) : (
              <span>{singleData?.taskTitle}</span>
            )}
          </div>
          {!editStatus && (
            <button
              onClick={() => setEditStatus(!editStatus)}
              className="text-blue-600 flex items-center"
            >
              Edit <BiEditAlt className="ml-1 w-5 h-5" />
            </button>
          )}
        </div>
        <div>
          <h6 className="mt-2">Details</h6>
          {editStatus ? (
            <>
              <textarea
                defaultValue={singleData?.taskDetails}
                name="taskDetails"
                {...register("taskDetails")}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-20 pl-2 p-1 md:p-2.5"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-2 py-1 bg-blue-500 rounded-lg text-white mt-3 "
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-700 font-normal">
              {singleData?.taskDetails}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ToDoComponent;
