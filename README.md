# Hospital Seat Availability Management System

This project is a Hospital Seat Availability Management System (HSAMS) designed to help patients find and book hospital seats based on their medical needs and location. The system provides features for both patients and doctors/admins to streamline the process of hospital seat management and virtual consultations.

## Features

### For Patients
- **Search Hospitals**: Patients can search for hospitals based on their medical condition (e.g., heart attack). The system will use the patient's location to find the nearest hospitals with available seats.
- **View Hospital Details**: Patients can view detailed information about hospitals, including ratings, costs, and distance from their location.
- **Rank Hospitals**: The system ranks hospitals based on various factors such as availability, rating, cost, and distance to help patients make informed decisions.
- **Book Appointments**: Patients can book online appointments with hospitals directly through the system.
- **Request Virtual Consultations**: Patients can request virtual consultation links for online appointments.

### For Doctors/Admins
- **Manage Appointment Requests**: Doctors and admins can receive and manage appointment requests from patients.
- **Allocate Virtual Links**: Admins can allocate virtual consultation links and notify doctors with appointment details.
- **Payment Management**: The system includes features to manage payment requirements for booking appointments and consultations.

## Technologies Used

- **Frontend**: React, Vite
- **Fast Refresh**: Babel/SWC
- **Linting**: ESLint

## Official Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository**: 
   ```sh
   git clone https://github.com/your-username/HSAMS.git
   cd HSAMS/Hospital
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Run the Development Server**:
   ```sh
   npm run dev
   ```

4. **Build for Production**:
   ```sh
   npm run build
   ```

5. **Preview the Production Build**:
   ```sh
   npm run serve
   ```

## Contributing

We welcome contributions to improve the system. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact us at [support@hsams.com](mailto:support@hsams.com).
