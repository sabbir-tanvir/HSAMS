import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import './App.css'

function App() {
  const [bookingType, setBookingType] = useState(null)

  const hospitalInfo = {
    name: "City General Hospital",
    address: "123 Healthcare Avenue",
    phone: "(555) 123-4567",
    email: "info@citygeneralhospital.com",
    description: "Providing quality healthcare services since 1990. Our hospital is equipped with state-of-the-art facilities and experienced medical professionals.",
    services: [
      "24/7 Emergency Care",
      "General Surgery",
      "Cardiology",
      "Pediatrics",
      "Orthopedics"
    ]
  }

  const OfflineBookingForm = ({ toggleModal }) => (
    <div className="fixed inset-0 overflow-y-auto h-full w-full z-50 bg-black bg-opacity-50" onClick={toggleModal}>
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white"
        onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Offline Appointment Booking</h3>
          <button onClick={toggleModal} className="text-gray-400 hover:text-gray-600 transition">
            <FaTimes size={24} />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Patient Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input type="tel" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Date</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Department</label>
            <select className="w-full p-2 border rounded">
              <option>General Medicine</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  )

  const OnlineBookingForm = ({ toggleModal }) => (
    <div className="fixed inset-0 overflow-y-auto h-full w-full z-50 bg-black bg-opacity-50" onClick={toggleModal}>
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white"
        onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Online Consultation Booking</h3>
          <button onClick={toggleModal} className="text-gray-400 hover:text-gray-600 transition">
            <FaTimes size={24} />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Patient Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input type="tel" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Date & Time</label>
            <input type="datetime-local" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Department</label>
            <select className="w-full p-2 border rounded">
              <option>General Medicine</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
            </select>
          </div>
          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Payment Details</h4>
            <div>
              <label className="block text-sm font-medium mb-1">Card Number</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="**** **** **** ****" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <label className="block text-sm font-medium mb-1">Expiry Date</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="MM/YY" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="***" />
              </div>
            </div>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Pay and Book Consultation
          </button>
        </form>
      </div>
    </div>
  )

  const toggleModal = () => setBookingType(null)

  return (
    <div className={`min-h-screen bg-gray-100 p-8 ${bookingType ? 'overflow-hidden' : ''}`}>
      <div className="max-w-3xl mx-auto">
        {/* Modal Forms */}
        {bookingType === 'offline' && <OfflineBookingForm toggleModal={toggleModal} />}
        {bookingType === 'online' && <OnlineBookingForm toggleModal={toggleModal} />}

        {/* Hospital Info Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{hospitalInfo.name}</h2>
          <div className="space-y-4">
            <p className="text-gray-600">{hospitalInfo.description}</p>
            <div>
              <h3 className="font-bold mb-2">Contact Information:</h3>
              <p>Address: {hospitalInfo.address}</p>
              <p>Phone: {hospitalInfo.phone}</p>
              <p>Email: {hospitalInfo.email}</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Our Services:</h3>
              <ul className="list-disc pl-5">
                {hospitalInfo.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setBookingType('online')}
                className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Online Booking
              </button>
              <button
                onClick={() => setBookingType('offline')}
                className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Offline Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App