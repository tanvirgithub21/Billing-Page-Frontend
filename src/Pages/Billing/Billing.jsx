import React from "react";

const Billing = () => {
  return (
    <div className="">
      <div className="container py-3 md:py-5">
        <div className="flex justify-between sm:items-center bg-gray-200 py-3 px-4 rounded-md">
          <div className="flex sm:items-center flex-col sm:flex-row">
            <h2 className="pr-4 text-gray-500 font-semibold mb-2 sm:mb-0 text-left">
              Billing
            </h2>
            <input
              className="p-1 rounded-md w-[95%] sm:w-full"
              type="text"
              name="search"
              placeholder="Search"
            />
          </div>
          <button className="bg-[#12ab84] text-sm px-2 py-1 max-h-7 sm:max-h-9 rounded-md text-white whitespace-nowrap">
            Add New Bill
          </button>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2 md:mt-5 mb-24">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Billing ID
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Full Name
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Phone
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Paid Amount
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap text-right">
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                <th class="px-4 py-4">56455</th>
                <td class="px-4 py-4">Tanvir Ahmed</td>
                <td class="px-4 py-4">tanvir.bd.global@gmail.com</td>
                <td class="px-4 py-4">+8801797021366</td>
                <td class="px-4 py-4">$299</td>
                <td class="px-4 py-4 text-right text-sky-500">
                  <button className="mr-3">Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;
