import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const messagess = [
  {
    id: 1,
    name: "John Doe",
    time: "2 mins ago",
    message: "Hey! Just wanted to check in.",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    time: "10 mins ago",
    message: "The report looks good. Thanks!",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Alice Brown",
    time: "1 hour ago",
    message: "Can we schedule a meeting tomorrow?",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
   {
    id: 3,
    name: "Vishal Brown",
    time: "1 hour ago",
    message: "Can we schedule a meeting tomorrow?",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
   {
    id: 3,
    name: "AlicDev Brown",
    time: "1 hour ago",
    message: "Can we schedule a meeting tomorrow?",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
   {
    id: 3,
    name: "Sagar Brown",
    time: "1 hour ago",
    message: "Can we schedule a meeting tomorrow?",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];
const MessageData = ({message}) => {
    console.log(message);
     const [show,setShow]=useState(false);
    const location=useLocation();

   useEffect(()=>{
    if(location.pathname==="/messages"){
      setShow(true);
    }else{
      setShow(false);
    }
   },[show])
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
     

        <h2 className="text-xl font-semibold mb-4 text-gray-800">Messages</h2>

        <div className="space-y-4">
          {messagess.map((msg) => (
            <div key={msg.id} className="flex items-start gap-4">
              <img
                src={msg.avatar}
                alt={msg.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800">{msg.name}</h4>
                  <span className="text-xs text-gray-500">{msg.time}</span>
                </div>
                <p className="text-gray-600 text-sm">{msg.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default MessageData