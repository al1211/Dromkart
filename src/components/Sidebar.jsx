import { NavLink } from 'react-router-dom';
import Modal from './Modal';
import { useState } from 'react';

const Sidebar = () => {
  const [show,setShow]=useState(false);
  const menu = [
    {name:"Dashboard",path:"/dashboard"},
    { name: "Analytics", path: "/analytics" },
    { name: "Messages", path: "/messages" },
    { name: "Products", path: "/products" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  const  handleClick=()=>{
   setShow(!show)
  }
  return (
    <aside className="w-full sm:w-64 shadow-2xl  text-white h-full m-0 row-span-full">
      <div className="p-4 border-b  text-black flex gap-2">
        <img src='https://i.pravatar.cc/40?img=2' alt='User' className="w-10 h-10 rounded-full"/>
         <div>
          <h1 className='font-bold text-xl'>Anil Kumar</h1>
          <p>+91 7417802350</p>
         </div>
      </div>
      <ul className="p-4 space-y-2">
        {menu.map(item => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block p-2 text-black rounded hover:bg-gray-200 ${isActive ? 'bg-gray-200' : ''}`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
       <button onClick={handleClick} className="w-full mt-10 border border-gray-300 bg-red-white shadow-2xl text-black  py-2 rounded hover:bg-green-400">Add project</button>
        {show && <Modal show={setShow}/>}
        <button className="w-full mt-10 border border-gray-300 bg-red-white shadow-2xl text-black  py-2 rounded hover:bg-gray-200">
         <span><NavLink  to="/login">Log out</NavLink></span>
        </button>
      </ul>
    </aside>
  );
};

export default Sidebar;

