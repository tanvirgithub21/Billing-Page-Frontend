import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const AddModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // custom style
  const customStyles = {
    content: {
      backgroundColor: "#eaeaeacc",
      color: "#666",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      marginTop: "2rem",
      maxWidth: "500px",
      minWidth: "300px",
      width: "100%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* modal start  */}
        <div className="">
          <div className="flex justify-center">
            {/* close button  */}
            <button className="" onClick={closeModal}>
              <svg
                class="w-7 h-7 absolute top-0 right-0 mt-3 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            {/* title  */}
            <div className="font-semibold text-base md:text-xl">
              Add New Bill
            </div>
          </div>

          {/* modal body  */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3 md:mb-6">
              <label
                for="base-input"
                class="block mb-2 text-xs md:text-sm font-medium text-gray-900"
              >
                Full Name
              </label>
              <input
                type="text"
                {...register("fullName")}
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-1 md:p-2.5 selection:"
              />
            </div>

            <div class="mb-3 md:mb-6">
              <label
                for="base-input"
                class="block mb-2 text-xs md:text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-1 md:p-2.5 "
              />
            </div>

            <div class="mb-3 md:mb-6">
              <label
                for="base-input"
                class="block mb-2 text-xs md:text-sm font-medium text-gray-900"
              >
                Phone
              </label>
              <input
                type="number"
                {...register("phone")}
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-1 md:p-2.5 "
              />
            </div>

            <div class="mb-3 md:mb-6">
              <label
                for="base-input"
                class="block mb-2 text-xs md:text-sm font-medium text-gray-900"
              >
                Paid Amount
              </label>
              <input
                type="number"
                {...register("paidAmount")}
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-1 md:p-2.5 "
              />
            </div>

            <button
              type="submit"
              class="bg-[#12ab84] text-white border border-gray-300 text-sm rounded-lg block w-full pl-2 p-1 md:p-2.5 font-semibold"
            >
              Add Bill
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddModal;
