import React, { useState } from "react";

const MessageForm = ({onSend}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name.trim()){
      onSend(formData);
    }
    console.log("Message sent:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white max-w-xl mx-auto mt-10 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      
        

       
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
