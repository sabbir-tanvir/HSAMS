import React, { useState } from "react";
import heroImage from "../assets/m.png";
import GradientText from "./GradientText";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Lucide icons and UI components
import {
  X,
  Calendar,
  Phone,
  Mail,
  User,
  Building2,
  Stethoscope,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

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

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card
        className="w-full max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-lg">
          <h2 className="text-2xl font-bold text-white">
            Schedule Your Consultation
          </h2>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-blue-500/20 text-white"
            onClick={toggleModal}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="name"
                      className="pl-10 bg-white"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="relative">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      className="pl-10 bg-white"
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
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Contact & Schedule
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      className="pl-10 bg-white"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="relative">
                  <Label
                    htmlFor="datetime"
                    className="text-sm font-medium text-gray-700"
                  >
                    Preferred Date & Time
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="datetime"
                      type="datetime-local"
                      className="pl-10 bg-white"
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
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Medical Preferences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Label
                    htmlFor="department"
                    className="text-sm font-medium text-gray-700"
                  >
                    Department
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <Select
                      value={formData.department}
                      onValueChange={(value) =>
                        setFormData({ ...formData, department: value })
                      }
                    >
                      <SelectTrigger className="pl-10 bg-white">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept.id} value={dept.name}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="relative">
                  <Label
                    htmlFor="doctor"
                    className="text-sm font-medium text-gray-700"
                  >
                    Select Doctor
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Stethoscope className="h-5 w-5 text-gray-400" />
                    </div>
                    <Select
                      value={formData.doctor}
                      onValueChange={(value) =>
                        setFormData({ ...formData, doctor: value })
                      }
                    >
                      <SelectTrigger className="pl-10 bg-white">
                        <SelectValue placeholder="Choose your doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doc) => (
                          <SelectItem key={doc.id} value={doc.name}>
                            {doc.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Book Consultation
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
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
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card
        className="w-full max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-lg">
          <h2 className="text-2xl font-bold text-white">
            Schedule Your Appointment
          </h2>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-blue-500/20 text-white"
            onClick={toggleModal}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Personal Information
              </h3>
              <div className="relative">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </Label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="name"
                    className="pl-10 bg-white"
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
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Contact & Schedule
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      className="pl-10 bg-white"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="relative">
                  <Label
                    htmlFor="date"
                    className="text-sm font-medium text-gray-700"
                  >
                    Preferred Date
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="date"
                      type="date"
                      className="pl-10 bg-white"
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
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Medical Preferences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Label
                    htmlFor="department"
                    className="text-sm font-medium text-gray-700"
                  >
                    Department
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <Select
                      value={formData.department}
                      onValueChange={(value) =>
                        setFormData({ ...formData, department: value })
                      }
                    >
                      <SelectTrigger className="pl-10 bg-white">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept.id} value={dept.name}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="relative">
                  <Label
                    htmlFor="doctor"
                    className="text-sm font-medium text-gray-700"
                  >
                    Select Doctor
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Stethoscope className="h-5 w-5 text-gray-400" />
                    </div>
                    <Select
                      value={formData.doctor}
                      onValueChange={(value) =>
                        setFormData({ ...formData, doctor: value })
                      }
                    >
                      <SelectTrigger className="pl-10 bg-white">
                        <SelectValue placeholder="Choose your doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doc) => (
                          <SelectItem key={doc.id} value={doc.name}>
                            {doc.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Book Appointment
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
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
    <main className="relative z-10 pt-24">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ml-4 px-4 md:px-8">
        {/* Left Column: Text & Controls */}
        <div className="flex flex-col w-5/6 text-center justify-center">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Find a Best Hospital <br className="hidden sm:block" /> That
              changes life.
            </h1>
          </GradientText>
          <p className="text-gray-700 mb-6 sm:mb-8">
            Find a Best Hospital that changes life. Explore our listings to find
            specialized treatments, patient reviews, and more near you.
          </p>
          {/* Search Bar */}
          <form className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
            <input
              type="text"
              placeholder="Symptoms"
              className="w-full sm:w-auto flex-1 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Hospital Location"
              className="w-full sm:w-auto flex-1 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition-colors w-full sm:w-auto"
            >
              Search
            </button>
          </form>

          <div className={`${bookingType ? "overflow-hidden" : ""}`}>
            <div className="mx-auto">
              {/* Modal Forms */}
              {bookingType === "offline" && (
                <OfflineBookingForm toggleModal={toggleModal} />
              )}
              {bookingType === "online" && (
                <OnlineBookingForm toggleModal={toggleModal} />
              )}

              {/* Simplified Hospital Info with two Booking Buttons */}
              <div className="bg-white p-4 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-1">
                  {hospitalInfo.name}
                </h2>
                <p className="text-gray-700 mb-4">{hospitalInfo.address}</p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setBookingType("online")}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                  >
                    Online Booking
                  </button>
                  <button
                    onClick={() => setBookingType("offline")}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                  >
                    Offline Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="flex justify-center items-center md:mt-0">
          <img src={heroImage} alt="Hero" className="w-[600px] h-auto" />
        </div>
      </section>
    </main>
  );
}

export default Hero;
