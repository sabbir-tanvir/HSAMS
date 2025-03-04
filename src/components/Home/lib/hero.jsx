import React, { useState } from "react";
import heroImage from "../../../assets/images/m.png";
import GradientText from "./GradientText";
import { useNavigate } from "react-router-dom";
import Canvas from './canvas'; // Correct import path
import { Progress, Typography } from "@material-tailwind/react";


// Heroicons for icons
import {
  XMarkIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserIcon,
  BuildingOffice2Icon,
  HeartIcon,
} from "@heroicons/react/24/outline";

// UI components (from your own or shadcn/ui library)


/* ----------------------- Online Booking Form ----------------------- */
const OnlineBookingForm = ({ toggleModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    datetime: "",
    department: "",
    doctor: "",
  });

  const departments = [
    { id: 1, name: "General Medicine" },
    { id: 2, name: "Cardiology" },
    { id: 3, name: "Orthopedics" },
    { id: 4, name: "Pediatrics" },
  ];

  const doctors = [
    { id: 1, name: "Dr. Sarah Johnson" },
    { id: 2, name: "Dr. Michael Chen" },
    { id: 3, name: "Dr. Emily Brooks" },
    { id: 4, name: "Dr. James Wilson" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Online booking submitted:", formData);
    // You can add navigation or further processing here
  };

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4" onClick={toggleModal}>
      <div
        className="w-full max-w-3xl rounded-2xl mx-auto bg-gradient-to-br from-white to-gray-50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 sm:p-6 bg-gradient-to-r from-red-700 to-red-700 rounded-t-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Schedule Your Consultation
          </h2>
          <button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-blue-500/20 text-white"
            onClick={toggleModal}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="mt-1 h-9 relative rounded-md shadow-sm">
                    <div className="absolute justify-center inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      className="pl-10 mt-1 w-3xs bg-white"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="mt-1 h-9 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      className="pl-10 mt-1 w-3xs bg-white"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Schedule */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-4">
                Contact & Schedule
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1 h-9 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PhoneIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      className="pl-10 mt-1 w-3xs bg-white"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="datetime"
                    className="text-sm font-medium text-gray-700"
                  >
                    Preferred Date & Time
                  </label>
                  <div className="mt-1 h-9 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <CalendarDaysIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="datetime"
                      type="datetime-local"
                      className="pl-10 mt-1 w-3xs bg-white"
                      value={formData.datetime}
                      onChange={(e) =>
                        setFormData({ ...formData, datetime: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Department & Doctor Selection */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-4">
                Medical Preferences
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label
                    htmlFor="department"
                    className="text-sm font-medium text-gray-700"
                  >
                    Department
                  </label>
                  <div className="mt-1 h-9 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BuildingOffice2Icon className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                      className="pl-10 mt-1 w-3xs bg-white"
                    >
                      <option value="" disabled>
                        Select department
                      </option>
                      {departments.map((dept) => (
                        <option key={dept.id} value={dept.name}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="doctor"
                    className="text-sm font-medium text-gray-700"
                  >
                    Select Doctor
                  </label>
                  <div className="mt-1 h-9 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HeartIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      value={formData.doctor}
                      onChange={(e) =>
                        setFormData({ ...formData, doctor: e.target.value })
                      }
                      className="pl-10  mt-1 w-3xs bg-white"
                    >
                      <option value="" disabled>
                        Choose your doctor
                      </option>
                      {doctors.map((doc) => (
                        <option key={doc.id} value={doc.name}>
                          {doc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                onClick={() => navigate('/payment')}
                className="w-full bg-gradient-to-r from-red-500 to-red-500 hover:from-red-700 hover:to-red-800 text-white py-6 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Pay to Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* ----------------------- Offline Booking Form ----------------------- */
const OfflineBookingForm = ({ toggleModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    department: "",
    doctor: "",
  });

  const departments = [
    { id: 1, name: "General Medicine" },
    { id: 2, name: "Cardiology" },
    { id: 3, name: "Orthopedics" },
    { id: 4, name: "Pediatrics" },
  ];

  const doctors = [
    { id: 1, name: "Dr. Sarah Johnson" },
    { id: 2, name: "Dr. Michael Chen" },
    { id: 3, name: "Dr. Emily Brooks" },
    { id: 4, name: "Dr. James Wilson" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Offline booking submitted:", formData);
    // Further processing can be done here
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4" onClick={toggleModal}>
      <div
        className="w-full max-w-3xl rounded-2xl mx-auto bg-gradient-to-br from-white to-gray-50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Schedule Your Appointment
          </h2>
          <button
            variant="ghost"
            size="icon"
            className="h-8 w-8 items-center justify-center rounded-full hover:bg-blue-500/20 text-white"
            onClick={toggleModal}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-4">
                Personal Information
              </h3>
              <div className="relative">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1 h-10 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    className="pl-24 mt-1.5 items-center justify-center self-center w-90  bg-white"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Contact & Schedule */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-4">
                Contact & Schedule
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1 h-10 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PhoneIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      className="pl-10 mt-1.5 w-3xs bg-white"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="date"
                    className="text-sm font-medium text-gray-700"
                  >
                    Preferred Date
                  </label>
                  <div className="mt-1 h-10 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <CalendarDaysIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="date"
                      type="date"
                      className="pl-10 mt-1.5 w-3xs bg-white"
                      placeholder="Select a date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Department & Doctor */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-4">
                Medical Preferences
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label
                    htmlFor="department"
                    className="text-sm font-medium text-gray-700"
                  >
                    Department
                  </label>
                  <div className="mt-1 h-10 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BuildingOffice2Icon className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                      className="pl-10 mt-1.5 w-3xs bg-white"
                    >
                      <option value="" disabled>
                        Select department
                      </option>
                      {departments.map((dept) => (
                        <option key={dept.id} value={dept.name}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="doctor"
                    className="text-sm font-medium text-gray-700"
                  >
                    Select Doctor
                  </label>
                  <div className="mt-1 h-10 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HeartIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      value={formData.doctor}
                      onChange={(e) =>
                        setFormData({ ...formData, doctor: e.target.value })
                      }
                      className="pl-10 mt-1.5 w-3xs bg-white"
                    >
                      <option value="" disabled>
                        Choose your doctor
                      </option>
                      {doctors.map((doc) => (
                        <option key={doc.id} value={doc.name}>
                          {doc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">



                <div className="w-full relative">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <Typography color="blue-gray" variant="h6">
                      Serial
                    </Typography>
                    <Typography color="blue-gray"  variant="h6">
                      10/50
                    </Typography>
                  </div>
                  <Progress className=" bg-gray-200" color="blue" value={10} />
                </div>



              </div>


            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* ----------------------- Main Hero Component ----------------------- */
export function Hero() {
  const [bookingType, setBookingType] = useState(null);
  const navigate = useNavigate();

  // Simplified hospital info with name and address only
  const hospitalInfo = {
    name: "City General Hospital",
    address: "123 Healthcare Avenue",
  };

  const toggleModal = () => setBookingType(null);

  return (
    <main className="relative z-10 min-h-screen shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] pt-6 sm:pt-12 md:pt-24 overflow-hidden">
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-8">
        {/* Left Column: Text & Controls */}
        <div className="flex flex-col w-full md:w-5/6 text-left sm:text-center justify-center order-2 lg:order-1 mt-4 sm:mt-0">
          <GradientText
            colors={[
              "#40ffaa",
              "#4079ff",
              "#40ffaa",
              "#4079ff",
              "#40ffaa",
            ]}
            animationSpeed={5}
            showBorder={false}
            className="custom-class"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Find a Best Hospital <br className="hidden sm:block" /> That
              changes life.
            </h1>
          </GradientText>
          <p className="text-gray-700 text-base mb-5 sm:mb-8 max-w-md">
            Find a Best Hospital that changes life. Explore our listings to find
            specialized treatments, patient reviews, and more near you.
          </p>
          {/* Search Bar */}
          <form className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-2 mb-6">
            <div className="w-full">
              <input
                type="text"
                placeholder="Symptoms"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Hospital Location"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="relative w-full sm:w-auto inline-block font-medium group py-3 px-6">
              <span className="absolute inset-0 w-full h-full transition duration-400 rounded-lg ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border rounded-lg border-indigo-600 group-hover:bg-indigo-50"></span>
              <span className="relative text-indigo-600 font-medium">Search</span>
            </button>
          </form>

          <div className={`${bookingType ? "overflow-hidden" : ""}`}>
            <div className="mx-auto w-full">
              {/* Modal Forms */}
              {bookingType === "offline" && (
                <OfflineBookingForm toggleModal={toggleModal} />
              )}
              {bookingType === "online" && (
                <OnlineBookingForm toggleModal={toggleModal} />
              )}

              {/* Simplified Hospital Info with two Booking Buttons */}
              <div className="bg-white p-5 rounded-xl shadow-xl border border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                  {hospitalInfo.name}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base mb-5">{hospitalInfo.address}</p>
                
                {/* Modified button layout for responsive design */}
                <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                  {/* Online Booking Option */}
                  <div className="flex items-center justify-between sm:block">
                    <div className="flex-1 mr-3 sm:hidden">
                      <h3 className="font-medium text-red-600">Online Booking</h3>
                      <p className="text-xs text-gray-500">Book from anywhere</p>
                    </div>
                    <button 
                      onClick={() => setBookingType("online")} 
                      className="relative inline-block font-medium group py-2 px-3 sm:py-3 sm:px-4 rounded-lg sm:w-full"
                    >
                      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-red-600 rounded-lg group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full bg-white border border-red-600 rounded-lg group-hover:bg-red-50"></span>
                      <span className="relative text-red-600 font-medium hidden sm:inline">Online Booking</span>
                      <span className="relative text-red-600 font-medium sm:hidden">Book</span>
                    </button>
                  </div>
                  
                  {/* Offline Booking Option */}
                  <div className="flex items-center justify-between sm:block">
                    <div className="flex-1 mr-3 sm:hidden">
                      <h3 className="font-medium text-indigo-600">Offline Booking</h3>
                      <p className="text-xs text-gray-500">Visit in-person</p>
                    </div>
                    <button 
                      onClick={() => setBookingType("offline")} 
                      className="relative inline-block font-medium group py-2 px-3 sm:py-3 sm:px-4 rounded-lg sm:w-full"
                    >
                      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 rounded-lg group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 rounded-lg group-hover:bg-indigo-50"></span>
                      <span className="relative text-indigo-600 font-medium hidden sm:inline">Offline Booking</span>
                      <span className="relative text-indigo-600 font-medium sm:hidden">Book</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="flex justify-center md:pt-15 items-center order-1 lg:order-2 relative">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
            <Canvas />
          </div>
          <img 
            src={heroImage} 
            alt="Hero" 
            className="w-full max-w-[250px] md:max-w-[450px] md:mt-15 lg:max-w-[600px] z-10 h-auto relative mx-auto mt-10" 
          />
        </div>
      </section>
    </main>
  );
}

export default Hero;
