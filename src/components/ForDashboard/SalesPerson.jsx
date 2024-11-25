import React from "react";
import { FiChevronRight } from "react-icons/fi";
// import { TfiArrowTopRight } from "react-icons/tfi";

const salespersondata = [
  { name: "John Doe", email: "info@example.com", Status: "Active" },
  { name: "Penaldo Gurung", email: "info@example.com", Status: "Active" },
  { name: "Chamling Rai", email: "info@example.com", Status: "Inactive" },
  { name: "Sam Jack", email: "info@example.com", Status: "Active" },
];

const SalesPerson = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-semibold text-xl">Sales Person</h2>
          </div>
          <div>
            <button className="border rounded-3xl p-1 px-3 border-gray-400 flex items-center gap-2 text-sm">
              See All <FiChevronRight />
            </button>
          </div>
        </div>

        <table className="min-w-full bg-white border border-gray-300 shadow rounded-xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left font-semibold">Profile</th>
              <th className="py-2 px-4 border-b text-center font-semibold">Email</th>
              <th className="py-2 px-4 border-b text-center font-semibold">Status</th>
            </tr>
          </thead> 
          
          <tbody>
            {salespersondata.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b flex items-center">
                  <div><img
                    src="/images/userprofile.jpg"
                    alt="User Profile"
                    className="w-10 rounded-full"
                  /></div>
                <div><p className="py-2 px-4 border-b">{item?.name}</p></div>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  info@example.com
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <span className="p-1 px-2 border border-gray-300 rounded-full">
                    {item?.Status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SalesPerson;
