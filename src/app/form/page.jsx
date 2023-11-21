'use client'
import React, { useState } from 'react';
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <div className='max-w-md mx-auto   p-4 border rounded-lg shadow-lg '>
      <h2 className='text-2xl font-semibold mb-4'>User Information</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-600'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='age'
            className='block text-sm font-medium text-gray-600'
          >
            Age
          </label>
          <input
            type='number'
            id='age'
            name='age'
            value={formData.age}
            onChange={handleChange}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-600'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
