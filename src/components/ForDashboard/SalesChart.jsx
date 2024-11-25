import React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const SalesChart = () => {
  return (
    <div className="p-4 bg-white border border-gray-300 shadow rounded-xl">
     <div>
          <h2 className="font-semibold text-xl pb-4">Recent Sales</h2>
     </div>
     <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <Bar dataKey="desktop" fill="#2563eb" radius={4} />
            <Bar dataKey="mobile" fill="#60a5fa" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;