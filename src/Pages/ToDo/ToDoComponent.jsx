import React from 'react';
import { BiEditAlt } from 'react-icons/bi';

const ToDoComponent = ({ singleData, completedTask }) => {

  const data = { taskTitle: singleData?.taskTitle, taskDetails: singleData?.taskDetails}

  const handleChange = event => {
    if (event.target.checked) {
      completedTask( data, singleData?._id )
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
    // setIsSubscribed(current => !current);
  };


    return (
        <div className="font-[500] w-full bg-gray-200 px-3 py-1 rounded-md">
        <div className=" flex items-center justify-between">
          <div className="flex items-center ">
            <input
              onChange={handleChange}
              type="checkbox"
              class="w-4 h-4 mr-2 text-gray-700 bg-gray-100 border-blue-600 ring-offset-gray-800 focus:ring-2"
            />
            <span>{singleData?.taskTitle}</span>
          </div>
          <button className="text-blue-600 flex items-center">
            Edit <BiEditAlt className="ml-1 w-5 h-5" />
          </button>
        </div>
        <div>
          <h6 className="mt-2">Details</h6>
          <p className="text-gray-700 font-normal">{singleData?.taskDetails}</p>
        </div>
      </div>
    );
};

export default ToDoComponent;