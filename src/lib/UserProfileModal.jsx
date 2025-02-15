import React, { useState } from 'react';
import { FaUser, FaBriefcase, FaBuilding, FaEdit, FaTimes } from 'react-icons/fa';

const UserProfileModal = ({ toggleModal }) => {
  const user = {
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    jobTitle: 'Senior Developer',
    company: 'Tech Innovations Inc.',
    activities: [
      { id: 1, action: 'Completed a project', timestamp: '2 hours ago' },
      { id: 2, action: 'Submitted a pull request', timestamp: '1 day ago' },
      { id: 3, action: 'Attended a meeting', timestamp: '3 days ago' },
    ],
  };

  return (
    <div className="font-sans">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" onClick={toggleModal}>
        <div
          className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">User Profile</h2>
            <button
              onClick={toggleModal}
              className="text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
              aria-label="Close modal"
            >
              <FaTimes size={24} />
            </button>
          </div>

          <div className="mt-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full border-4 border-blue-500 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                />
                <button
                  className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 text-white hover:bg-blue-600 transition duration-300 ease-in-out"
                  aria-label="Edit profile picture"
                >
                  <FaEdit size={16} />
                </button>
              </div>
              <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800">{user.name}</h3>
                <div className="flex items-center justify-center md:justify-start mt-2 text-gray-600">
                  <FaBriefcase className="mr-2" />
                  <span>{user.jobTitle}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start mt-1 text-gray-600">
                  <FaBuilding className="mr-2" />
                  <span>{user.company}</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out"
                  >
                    <p className="text-gray-800 font-medium">{activity.action}</p>
                    <p className="text-gray-600 text-sm mt-1">{activity.timestamp}</p>
                    <button className="mt-2 text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;
