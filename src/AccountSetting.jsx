// App.js
import React from 'react';

export default function AccountSetting() {
  return (
    <div className='flex flex-col lg:flex-row bg-gray-100 p-6'>
      {/* User Profile Section */}
      <div className='bg-gray-600 shadow-md rounded-lg p-6 w-full lg:w-1/3 mb-6 lg:mb-0 flex flex-col items-center'>
        <img
          className='w-24 h-24 rounded-full shadow-lg mb-4'
          alt="User Avatar"
        />
        <h3 className="text-center text-lg font-semibold mb-2 text-white">Reynaldo</h3>
        <p className="text-center text-gray-300">Procurement Head</p>
        <div className="mt-4 flex space-x-4">
          <a href="#">
            <img src="#" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="#" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="#" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* User Information Section */}
      
      <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-2/3">
        {/* Basic Information */}
        <h3 className="text-xl font-bold mb-4 px-15">Accounts</h3>
        <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1">Username</label>
            <input className="border rounded p-2" defaultValue="jonassmith" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Birth Date</label>
            <input className="border rounded p-2" defaultValue="Nov 20, 1988" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">First Name</label>
            <input className="border rounded p-2" defaultValue="Reynaldo" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Last Name</label>
            <input className="border rounded p-2" defaultValue="Danganan" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Gender</label>
            <input className="border rounded p-2" defaultValue="Male" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Website</label>
            <input className="border rounded p-2" defaultValue="www.reynaldo.com" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Last Login</label>
            <input className="border rounded p-2 bg-gray-100" defaultValue="2 hours ago" readOnly />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Date Joined</label>
            <input className="border rounded p-2 bg-gray-100" defaultValue="Feb 22, 2012" readOnly />
          </div>
        </div>

        {/* Contact Information */}
        <h3 className="text-xl font-semibold mt-6 mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1">Email</label>
            <input className="border rounded p-2" defaultValue="reynaldo@slsu.edu.ph" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Phone</label>
            <input className="border rounded p-2" defaultValue="(1800) 221 - 876543" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Department/Unit</label>
            <input className="border rounded p-2" defaultValue="CIT" />
          </div>
        </div>

        {/* Change Password */}
        <h3 className="text-xl font-semibold mt-6 mb-4">Change Password</h3>
        <h4 className="text-sm font-semibold mt-2 mb-1">Modify your current password</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1">Current Password</label>
            <input type="password" className="border rounded p-2" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">New Password</label>
            <input type="password" className="border rounded p-2" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Repeat Password</label>
            <input type="password" className="border rounded p-2" />
          </div>
        </div>

        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Save Changes
        </button>
        <button className="mt-6 ml-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Log out
        </button>
      </div>
    </div>
  );
}
