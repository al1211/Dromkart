import React from "react";


import Reports from "./Reports";
import Products from "./Products";
import Message from "./Messages";
import Analytics from "./Analytics";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full">
      {/* <Header /> */}
      <main className="p-6 space-y-6 bg-gray-100 min-h-screen">
        <Analytics />
        <Message />
        <Products />
        <Reports />
      </main>
    </div>
  );
};

export default Dashboard;
