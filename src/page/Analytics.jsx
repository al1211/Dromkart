// src/components/AnalyticsCards.jsx
import React, { useEffect, useState } from "react";
import Charts from "../components/Charts";
import { useLocation } from "react-router-dom";

const Analytics = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/analytics") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [show]);
  const cards = [
    {
      title: "Total Users",
      value: "12,345",
      change: "+8.2% from last week",
      color: "text-green-500",
    },
    {
      title: "Total Sales",
      value: "₹1,23,000",
      change: "-3.4% this month",
      color: "text-red-500",
    },
    {
      title: "Revenue",
      value: "₹87,500",
      change: "+12.5% from last week",
      color: "text-green-500",
    },
    {
      title: "Conversion Rate",
      value: "5.7%",
      change: "+1.2% improvement",
      color: "text-green-500",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-5">
            <h4 className="text-gray-600 text-sm font-semibold">
              {card.title}
            </h4>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {card.value}
            </p>
            <p className={`text-sm mt-1 ${card.color}`}>{card.change}</p>
          </div>
        ))}

        {show && (
          <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 min-w-[80vw]">
            <Charts />:
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
