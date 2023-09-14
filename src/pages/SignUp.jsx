import React, { useState } from 'react';
import {Link as Anchor} from 'react-router-dom'

const SignUp= () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    image: '',
    country: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <main className="container mx-auto rounded-3xl bg-gray-100 my-40">

        <div className="max-w-md mx-auto bg-gray-900 rounded-xl  p-12">
        <form onSubmit={handleSubmit} className="space-y-4 ">
            <div>
            <label htmlFor="name" className="block font-medium text-gray-100 ">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-100"
                required
            />
            </div>
            <div>
            <label htmlFor="lastName" className="block font-medium text-gray-100">Last Name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-100"
                required
            />
            </div>
            <div>
            <label htmlFor="email" className="block font-medium text-gray-100">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-100"
                required
            />
            </div>
            <div>
            <label htmlFor="password" className="block font-medium text-gray-100">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-100"
                required
            />
            </div>
            <div>
            <label htmlFor="image" className="block font-medium text-gray-100">image URL</label>
            <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-100"
                required
            />
            </div>
            <div>
            <label htmlFor="country" className="block font-medium text-gray-100">country</label>
            <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-100"
                required
            >
                <option value="">Select your country</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Peru">Peru</option>
                <option value="Mexico">Mexico</option>
                <option value="Ecuador">Ecuador</option>
                
            </select>
            </div>
            <div>
                <button
                type="submit"
                className="bg-green-600 text-white font-medium px-4 py-2 rounded-md hover:bg-green-500"
                >
                Sign Up
                </button>
            </div>
            </form>
            <Anchor to={`/signin`}>
                <p className="text-gray-100">Log in</p>    
            </Anchor>
        </div>
    </main>
  );
};

export default SignUp;
