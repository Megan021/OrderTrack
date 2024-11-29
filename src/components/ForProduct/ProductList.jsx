import React from "react";
import product from "../../data/product.json";
import { Link } from "react-router-dom";
import { Eye, Pencil, Trash } from "lucide-react";

const ProductList = () => {
  return (
    <>
      <table className="w-full text-sm">
        <thead className=" text-center text-[#71717A] border-gray-100 border-b bg-gray-50 ">
          <tr className="divide-x-2 ">
            <th className="pl-4 p-3 text-left">Product Info</th>
            <th className="px-4">Code</th>
            <th className="px-4">Category</th>
            <th className="px-4">Unit</th>
            <th className="px-4">VAT%</th>
            <th className="px-4">Price</th>
            <th className="px-4">Max Dis. Allowed</th>
            <th className="px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="flex gap-3 p-3">
                <div>
                  <img
                    className="object-contain rounded-full size-14 border border-gray-300 shadow"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div>
                  <ul>
                    <li><span className="font-medium">Id:</span> {product.id}</li>
                    <li>Name : {product.name}</li>
                    <li className="flex items-center gap-1">Status : 
                      <div className={`p-0.5 px-2 rounded-full ${product.status === "active" ? "text-green-600 bg-green-200" : "text-red-600 bg-red-200"}`}>
                      {product.status}
                      </div>
                    </li>
                  </ul>
                </div>
              </td>
              <td className="text-center">{product.code}</td>
              <td className="text-center">{product.category}</td>
              <td className="text-center">{product.unit}</td>
              <td className="text-center">{product.vat}</td>
              <td className="text-center">{product.price}</td>
              <td className="text-center">{product.maxDiscountAllowed}</td>
              <td className="border-x p-3 px-4 w-[10%]">
                      <div className="flex gap-3 items-center w-full">
                        <Link to="/orderview">
                        <button className='hover:bg-gray-100 p-2 rounded-full shadow'><Eye size={17} strokeWidth={1.3} /></button>
                        </Link>
                        <Link to="/salesperson">
                        <button className='hover:bg-gray-100 p-2 rounded-full shadow'><Pencil size={17} strokeWidth={1.3} /></button>
                        </Link>
                        <Link to="/salesperson">
                        <button className='hover:bg-gray-100 p-2 rounded-full shadow'><Trash size={17} strokeWidth={1.3} /></button>
                        </Link>
                      </div>
                    </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
