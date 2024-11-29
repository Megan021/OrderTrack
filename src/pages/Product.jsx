import { Plus } from "lucide-react";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import  product from "../data/product.json";

const Product = () => {
  return (
    <>
      <h1 className="font-semibold text-3xl">Parties</h1>

      <div className="my-8 mb-14 flex justify-between">
        <div className="flex items-center justify-between w-96 border border-gray-300 rounded-2xl px-4">
          <input
            type="search"
            placeholder="Search Company..."
            className="py-3 w-[90%] focus:outline-none"
          //   value={searchTerm}
          //   onChange={(e) => setSearchTerm(e.target.value)} // Update the searchTerm state
          />
          <button>
            <IoSearchOutline className="text-gray-600 text-xl" />
          </button>
        </div>

        <div>
          <button className="p-3 px-6 border border-gray-300 shadow-lg hover:shadow-sm duration-300 rounded-xl text-sm flex items-center gap-1">
            <Plus />
            Add New Product
          </button>
        </div>
      </div>
      <h2>Product List</h2>
      <table className="w-full">
        <thead className=" text-center text-[#71717A] border-gray-100 border-b bg-gray-50 w-full ">
          <tr className="divide-x-2">
            <th >Order Info</th>
            {/* <th>Created Date</th> */}
            <th>Code</th>
            <th>Price</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => (
            <tr key={product.roh} className="border-b border-gray-200  ">
               <td className="flex gap-3 ">
                <div>
                <img className="object-contain rounded-full size-16 border border-gray-300"
                  src={product.image}
                  alt={product.name}
                />
                </div>
                <div>
                  <ul>
                <li>Order ID: {product.id}</li>
                <li>Name : {product.name}</li>
                  </ul>
                </div>
              </td>
         
              {/* <td>Create Date: {product.Createdate}</td> */}
              <td>{product.code}</td>
              <td>{product.price}</td>
             <td>{product.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Product;
