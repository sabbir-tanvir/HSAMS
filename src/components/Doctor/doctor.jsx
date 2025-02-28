import React, { useState, useEffect } from 'react';
import Dimage from '../../assets/images/p.jpg'
import { Button } from "@material-tailwind/react";
import { 
    CalendarDaysIcon,
    UserGroupIcon,
    ClockIcon,
    ChartBarIcon,
    DocumentTextIcon,
    ChatBubbleLeftRightIcon,
    PhoneIcon,
    EnvelopeIcon
} from "@heroicons/react/24/outline";

export function Doctor() {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('appointments');

    // Dummy data for patient requests
    const patientRequests = [
        {
            id: 1,
            patientName: "John Doe",
            appointmentTime: "10:00 AM",
            timeRemaining: 15, // minutes
            status: "Waiting",
            department: "Cardiology"
        },
        {
            id: 2,
            patientName: "Jane Smith",
            appointmentTime: "10:30 AM",
            timeRemaining: 45,
            status: "Upcoming",
            department: "General Medicine"
        },
        {
            id: 3,
            patientName: "Mike Johnson",
            appointmentTime: "11:00 AM",
            timeRemaining: 75,
            status: "Upcoming",
            department: "Cardiology"
        }
    ];

    // Dummy data for my patients
    const myPatients = [
        {
            id: 1,
            name: "Sarah Wilson",
            age: 45,
            condition: "Hypertension",
            lastVisit: "2024-03-15",
            nextVisit: "2024-04-15",
            contact: "+1234567890",
            email: "sarah@example.com",
            status: "Regular"
        },
        {
            id: 2,
            name: "Robert Brown",
            age: 62,
            condition: "Coronary Artery Disease",
            lastVisit: "2024-03-18",
            nextVisit: "2024-03-25",
            contact: "+1234567891",
            email: "robert@example.com",
            status: "Critical"
        },
        {
            id: 3,
            name: "Emily Davis",
            age: 35,
            condition: "Arrhythmia",
            lastVisit: "2024-03-10",
            nextVisit: "2024-04-10",
            contact: "+1234567892",
            email: "emily@example.com",
            status: "Stable"
        },
        {
            id: 4,
            name: "Emily Davis",
            age: 35,
            condition: "Arrhythmia",
            lastVisit: "2024-03-10",
            nextVisit: "2024-04-10",
            contact: "+1234567892",
            email: "emily@example.com",
            status: "Stable"
        }
    ];

    // Dummy data for schedule
    const mySchedule = [
        {
            id: 1,
            day: "Monday",
            slots: [
                { time: "09:00 AM - 12:00 PM", type: "Regular Consultations" },
                { time: "02:00 PM - 04:00 PM", type: "Surgery" },
                { time: "04:30 PM - 06:00 PM", type: "Follow-ups" }
            ]
        },
        {
            id: 2,
            day: "Tuesday",
            slots: [
                { time: "09:00 AM - 01:00 PM", type: "Online Consultations" },
                { time: "02:30 PM - 05:30 PM", type: "Regular Consultations" }
            ]
        },
        {
            id: 3,
            day: "Wednesday",
            slots: [
                { time: "10:00 AM - 12:00 PM", type: "Surgery" },
                { time: "02:00 PM - 06:00 PM", type: "Regular Consultations" }
            ]
        }
    ];

    // Dummy data for medical reports
    const medicalReports = [
        {
            id: 1,
            patientName: "Sarah Wilson",
            type: "Blood Test",
            date: "2024-03-18",
            status: "Pending Review",
            priority: "High"
        },
        {
            id: 2,
            patientName: "Robert Brown",
            type: "ECG Report",
            date: "2024-03-17",
            status: "Reviewed",
            priority: "Critical"
        },
        {
            id: 3,
            patientName: "Emily Davis",
            type: "Chest X-Ray",
            date: "2024-03-16",
            status: "Pending Review",
            priority: "Normal"
        }
    ];

    // Dummy data for analytics
    const analyticsData = {
        patientStats: {
            total: 124,
            new: 8,
            critical: 3,
            stable: 113
        },
        appointmentStats: {
            total: 45,
            completed: 32,
            cancelled: 5,
            noShow: 8
        },
        treatmentSuccess: {
            excellent: 75,
            good: 20,
            fair: 5
        }
    };

    // Navigation items
    const navItems = [
        {
            id: 'appointments',
            name: 'Patient Appointments',
            icon: CalendarDaysIcon,
            count: patientRequests.length
        },
        {
            id: 'patients',
            name: 'My Patients',
            icon: UserGroupIcon,
            count: myPatients.length
        },
        {
            id: 'schedule',
            name: 'My Schedule',
            icon: ClockIcon
        },
        {
            id: 'reports',
            name: 'Medical Reports',
            icon: DocumentTextIcon,
            count: medicalReports.filter(report => report.status === "Pending Review").length
        },
        {
            id: 'analytics',
            name: 'Analytics',
            icon: ChartBarIcon
        }
    ];

    // Function to format the time remaining
    const formatTimeRemaining = (minutes) => {
        if (minutes < 60) {
            return `${minutes} min`;
        }
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}m`;
    };

    // Function to get status color
    const getStatusColor = (status) => {
        switch (status) {
            case 'Waiting':
                return 'text-yellow-500';
            case 'Upcoming':
                return 'text-blue-500';
            default:
                return 'text-gray-500';
        }
    };

    // Function to render content based on active section
    const renderContent = () => {
        switch (activeSection) {
            case 'appointments':
                return (
                    <>
                        <h2 className="text-2xl font-semibold mb-4">Today's Patient Requests</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {patientRequests.map((request) => (
                                <div key={request.id} 
                                    className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-2">
                                            <h3 className="text-lg font-medium">{request.patientName}</h3>
                                            <span className="text-gray-500">•</span>
                                            <p className="text-gray-600">{request.department}</p>
                                        </div>
                                        <div className="flex gap-6 text-sm">
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-500">Appointment:</span>
                                                <span className="font-medium">{request.appointmentTime}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-500">Time Remaining:</span>
                                                <span className="font-medium">{formatTimeRemaining(request.timeRemaining)}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-500">Status:</span>
                                                <span className={`font-medium ${getStatusColor(request.status)}`}>
                                                    {request.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button 
                                            color="blue"
                                            className="flex items-center gap-2"
                                            onClick={() => {/* Handle join meeting */}}
                                        >
                                            Join Meeting
                                        </Button>
                                        <Button 
                                            color="green"
                                            className="flex items-center gap-2"
                                            onClick={() => {/* Handle go to room */}}
                                        >
                                            Go to Room
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                );

            case 'patients':
                return (
                    <>
                        <h2 className="text-2xl font-semibold mb-4">My Patients</h2>
                        <div className="grid grid-cols-1 pb-15 gap-4">
                            {myPatients.map((patient) => (
                                <div key={patient.id} className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-lg font-medium">{patient.name}</h3>
                                            <p className="text-gray-600">Age: {patient.age}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            patient.status === 'Critical' ? 'bg-red-100 text-red-700' :
                                            patient.status === 'Stable' ? 'bg-green-100 text-green-700' :
                                            'bg-blue-100 text-blue-700'
                                        }`}>
                                            {patient.status}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-gray-600">Condition</p>
                                            <p className="font-medium">{patient.condition}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Last Visit</p>
                                            <p className="font-medium">{patient.lastVisit}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Next Visit</p>
                                            <p className="font-medium">{patient.nextVisit}</p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <PhoneIcon className="w-4 h-4 text-gray-500" />
                                                <span>{patient.contact}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <EnvelopeIcon className="w-4 h-4 text-gray-500" />
                                                <span>{patient.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                );

            case 'schedule':
                return (
                    <>
                        <h2 className="text-2xl font-semibold mb-4">My Schedule</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {mySchedule.map((day) => (
                                <div key={day.id} className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-medium mb-4">{day.day}</h3>
                                    <div className="space-y-4">
                                        {day.slots.map((slot, index) => (
                                            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                                                <p className="font-medium">{slot.time}</p>
                                                <p className="text-gray-600">{slot.type}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                );

            case 'reports':
                return (
                    <>
                        <h2 className="text-2xl font-semibold mb-4">Medical Reports</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {medicalReports.map((report) => (
                                <div key={report.id} className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-lg font-medium">{report.patientName}</h3>
                                            <p className="text-gray-600">{report.type}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            report.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                                            report.priority === 'High' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-green-100 text-green-700'
                                        }`}>
                                            {report.priority}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-gray-600">Date</p>
                                            <p className="font-medium">{report.date}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Status</p>
                                            <p className={`font-medium ${
                                                report.status === 'Pending Review' ? 'text-yellow-600' : 'text-green-600'
                                            }`}>
                                                {report.status}
                                            </p>
                                        </div>
                                        <Button 
                                            color="blue"
                                            className="flex items-center gap-2"
                                        >
                                            View Report
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                );

            case 'analytics':
                return (
                    <>
                        <h2 className="text-2xl font-semibold mb-4">Analytics Overview</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-medium mb-4">Patient Statistics</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span>Total Patients</span>
                                        <span className="font-medium">{analyticsData.patientStats.total}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>New Patients</span>
                                        <span className="font-medium text-green-600">{analyticsData.patientStats.new}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Critical Cases</span>
                                        <span className="font-medium text-red-600">{analyticsData.patientStats.critical}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Stable Patients</span>
                                        <span className="font-medium text-blue-600">{analyticsData.patientStats.stable}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-medium mb-4">Appointment Analytics</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span>Total Appointments</span>
                                        <span className="font-medium">{analyticsData.appointmentStats.total}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Completed</span>
                                        <span className="font-medium text-green-600">{analyticsData.appointmentStats.completed}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Cancelled</span>
                                        <span className="font-medium text-red-600">{analyticsData.appointmentStats.cancelled}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>No Show</span>
                                        <span className="font-medium text-yellow-600">{analyticsData.appointmentStats.noShow}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
                                <h3 className="text-lg font-medium mb-4">Treatment Success Rate</h3>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-green-500" 
                                                style={{ width: `${analyticsData.treatmentSuccess.excellent}%` }}
                                            ></div>
                                        </div>
                                        <div className="mt-2 flex justify-between text-sm">
                                            <span>Excellent ({analyticsData.treatmentSuccess.excellent}%)</span>
                                            <span>Good ({analyticsData.treatmentSuccess.good}%)</span>
                                            <span>Fair ({analyticsData.treatmentSuccess.fair}%)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.querySelector('.profile-dropdown');
            const profileButton = document.querySelector('.profile-menu');

            if (showProfileMenu &&
                !dropdown?.contains(event.target) &&
                !profileButton?.contains(event.target)) {
                setShowProfileMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showProfileMenu]);

    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            {/* Top Navigation - Fixed */}
            <nav className='flex items-center justify-between w-full bg-white px-4 py-2 border-b fixed top-0 left-0 right-0 z-10'>
                <div className='flex items-center'>
                    <h1 className='text-2xl font-medium'>Doctor Dashboard</h1>
                </div>
                <div className='relative'>
                    <button
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className='w-10 h-10 rounded-full overflow-hidden hover:bg-gray-100 p-0.5 focus:outline-none profile-menu cursor-pointer'
                    >
                        <img
                            src={Dimage}
                            alt="Doctor"
                            className='w-full h-full rounded-full object-cover'
                        />
                    </button>

                    {/* Profile Dropdown Menu */}
                    {showProfileMenu && (
                        <div className='absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 py-4 profile-dropdown'>
                            <div className='flex flex-col items-center justify-center px-6 pb-4 border-b'>
                                <img
                                    src={Dimage}
                                    alt="Doctor"
                                    className='w-24 h-24 border rounded-full mb-4 cursor-pointer'
                                />
                                <h3 className='text-xl mb-1'>Hi, SABBIR!</h3>
                                <p className='text-sm text-gray-600'>Cardiologist</p>
                            </div>
                            <div className='flex justify-center items-center border-b'>
                                <button
                                    className='flex items-center justify-center gap-2 p-4 hover:bg-gray-50 transition-colors w-full cursor-pointer'
                                    onClick={() => {/* Handle sign out */}}
                                >
                                    Sign out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Main container below fixed navbar */}
            <div className='flex pt-[48px] h-full'>
                {/* Left Sidebar - Fixed */}
                <div className='w-64 bg-white h-full fixed left-0 border-r overflow-y-auto'>
                    <div className='space-y-1 p-4'>
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                                    activeSection === item.id 
                                    ? 'bg-blue-50 text-blue-700' 
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon className="w-5 h-5" />
                                    <span className="font-medium">{item.name}</span>
                                </div>
                                {item.count && (
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        activeSection === item.id
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'bg-gray-100 text-gray-600'
                                    }`}>
                                        {item.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Quick Stats */}
                    <div className="mx-4 p-4 bg-gray-50 rounded-lg">
                        <h3 className="text-sm font-medium text-gray-700 mb-3">Today's Overview</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Total Appointments</span>
                                <span className="font-medium">{patientRequests.length}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Completed</span>
                                <span className="font-medium text-green-600">0</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Pending</span>
                                <span className="font-medium text-yellow-600">{patientRequests.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Main Content - Scrollable */}
                <div className="flex-1 ml-64 bg-[#f1f3f4] overflow-y-auto min-h-screen">
                    <div className="p-6">
                        <div className="space-y-6">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doctor;