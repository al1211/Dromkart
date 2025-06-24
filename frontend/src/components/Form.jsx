import React, { useState } from 'react';

const Form = ({show}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    startDate: '',
    endDate: '',
  });

  const handleofMoada=()=>{
    show(false);
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow p-6 rounded-lg opacity-100">
        <div className='flex items-center justify-between'>

      <h2 className="text-2xl font-semibold mb-4 text-black">Add New Project</h2>
      <button onClick={handleofMoada} className='text-black font-bold'>X</button>
        </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-medium text-black">Project Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 p-2 rounded text-black"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-black">Category</label>
          <select
            name="category"
            className="w-full border border-gray-300 p-2 rounded text-black"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Web">Web</option>
            <option value="Mobile">Mobile</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium text-black">Description</label>
          <textarea
            name="description"
            rows="4"
            className="w-full border border-gray-300 p-2 rounded text-black"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium text-black">Start Date</label>
          <input
            type="date"
            name="startDate"
            className="w-full border border-gray-300 p-2 rounded text-black"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-black">End Date</label>
          <input
            type="date"
            name="endDate"
            className="w-full border border-gray-300 p-2 rounded text-black"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>

        <div className="md:col-span-2 text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
