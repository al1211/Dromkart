import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Analytics", path: "/analytics" },
    { name: "Messages", path: "/messages" },
    { name: "Products", path: "/products" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
    {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-4 fixed top-2 left-2 z-50 text-black"
      >
        {isOpen ? "" : <Menu/>}
      </button>

      <aside className={`fixed md:relative top-0 left-0 h-full w-64 bg-white   shadow-2xl  transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:row-span-full`}>
        <div className="p-4 border-b  text-black flex gap-2">
          <img
            src="https://i.pravatar.cc/40?img=2"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="font-bold text-xl">Anil Kumar</h1>
            <p>+91 7417802350</p>
          </div>
          <button className="flex font-black " onClick={()=>setIsOpen(false)}>{isOpen && "X"}</button>
        </div>
        <ul className="p-4 space-y-2">
          {menu.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block p-2 text-black rounded hover:bg-gray-200 ${
                    isActive ? "bg-gray-200" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <button
            onClick={handleClick}
            className="w-full mt-10 border border-gray-300 bg-red-white shadow-2xl text-black  py-2 rounded hover:bg-green-400"
          >
            Add project
          </button>
          {show && <Modal show={setShow} />}
          <button className="w-full mt-10 border border-gray-300 bg-red-white shadow-2xl text-black  py-2 rounded hover:bg-gray-200">
            <span>
              <NavLink to="/login">Log out</NavLink>
            </span>
          </button>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
