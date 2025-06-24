import MessageForm from "../components/MessageForm";

import MessageData from "../components/MessageData";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const messages = [
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
];

const Message = () => {
  const [show, setShow] = useState(false);
   const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  };
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/messages") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [show]);

  return (
    <>
      <MessageData message={messages} />
      {show && <MessageForm onSend={addMessage}/>}
    </>
  );
};

export default Message;
