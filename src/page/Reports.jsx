// src/components/ReportTable.jsx
import React from "react";

const reports = [
  {
    id: 1,
    title: "User Signups",
    date: "2025-06-08",
    status: "Completed",
  },
  {
    id: 2,
    title: "Monthly Revenue",
    date: "2025-06-07",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Bug Reports",
    date: "2025-06-06",
    status: "Pending",
  },
  {
    id: 4,
    title: "Sales Overview",
    date: "2025-06-05",
    status: "Completed",
  },
  {
    id: 5,
    title: "User Feedback",
    date: "2025-06-04",
    status: "Completed",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";
    case "In Progress":
      return "bg-yellow-100 text-yellow-700";
    case "Pending":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const Reports = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Reports</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="p-3">id</th>
              <th className="p-3">Report Title</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={report.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{report.title}</td>
                <td className="p-3">{report.date}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                      report.status
                    )}`}
                  >
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
