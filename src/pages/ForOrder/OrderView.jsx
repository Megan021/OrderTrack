import React from "react";

const OrderView = () => {
  return (
    <>
      <div>
        <h1 className="font-semibold text-3xl mb-8">Order Invoice</h1>
        <div className="grid grid-cols-3">
          <div>
            <h2 className="font-semibold mb-2">Billed To:</h2>
            <ul className="leading-6 text-sm">
              <li>Mary Smith</li>
              <li>mary@gmail.com</li>
              <li>9801234567</li>
              <li>Kathmandu, Nepal</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Sales Person Info:</h2>
            <ul className="leading-6 text-sm">
              <li>Mary Smith</li>
              <li>mary@gmail.com</li>
              <li>Phone: 9801234657</li>
              <li>Kathmandu, Nepal</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Invoice Info:</h2>
            <ul className="leading-6 text-sm">
              <li>Invoice Id: 5413</li>
              <li>Placed Date: 2024, May 20</li>
              <li>Estimated Date: 2024, May 25</li>
              <li>
                Status:{" "}
                <span className="p-1 px-2.5 bg-green-200 rounded-xl text-green-600">
                  complete
                </span>
              </li>
              <li>Delivered</li>
            </ul>
          </div>
        </div>

        <table className="w-full border-b my-12 table-auto text-center divide-y">
          <thead className="bg-gray-50">
            <tr className="p-3">
              <th className="text-left p-3">Product Items</th>
              <th>Price</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Discount</th>
              <th>SubTotal</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="p-3">
              <td className="text-left p-3">Water</td>
              <td>Rs. 200</td>
              <td>01/01/2024</td>
              <td>5</td>
              <td>10%</td>
              <td>1000</td>
            </tr>
            <tr className="p-3">
              <td className="text-left p-3">Lays</td>
              <td>Rs. 200</td>
              <td>01/01/2024</td>
              <td>5</td>
              <td>10%</td>
              <td>1000</td>
            </tr>
            <tr className="p-3">
              <td className="text-left p-3">Pepsi</td>
              <td>Rs. 200</td>
              <td>01/01/2024</td>
              <td>5</td>
              <td>10%</td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>

        <div className="flex border-t pt-3 pr-14 items-end justify-end gap-12">
          <div>
               <button className="p-2 px-5 bg-black text-white rounded-lg">Print</button>
          </div>
          <div className="flex gap-8">
               <ul>
                    <li className="font-medium">Subtotal: </li>
                    <li className="font-medium">Discount: </li>
                    <li className="font-medium">Total: </li>
               </ul>
               <ul className="text-right">
                    <li>Rs. 2000</li>
                    <li>Rs. 500</li>
                    <li>Rs. 1500</li>
               </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default OrderView;
