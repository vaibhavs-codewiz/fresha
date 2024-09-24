import React from 'react';
import './Reschedule_appointments.css';

const Reschedule_appointments = () => {
    const appointmentsData = [
        {
            serviceName: "Nails",
            clientName: "Amanda",
            contact: "9026671648",
            dateTime: "12.09.2024 - 12:53 PM",
            preferredWorker: "Linda",
            duration: "1h 15min",
        },
        {
            serviceName: "Spa",
            clientName: "John",
            contact: "9026671649",
            dateTime: "15.09.2024 - 10:30 AM",
            preferredWorker: "Moore",
            duration: "45min",
        },
        {
            serviceName: "Spa",
            clientName: "John",
            contact: "9026671649",
            dateTime: "15.09.2024 - 10:30 AM",
            preferredWorker: "Moore",
            duration: "45min",
        },
        {
            serviceName: "Spa",
            clientName: "John",
            contact: "9026671649",
            dateTime: "15.09.2024 - 10:30 AM",
            preferredWorker: "Moore",
            duration: "45min",
        },
        {
            serviceName: "Makeup",
            clientName: "Sarah",
            contact: "9026671650",
            dateTime: "20.10.2024 - 02:00 PM",
            preferredWorker: "Nellie",
            duration: "30min",
        },
        {
            serviceName: "Massage",
            clientName: "Emily",
            contact: "9026671651",
            dateTime: "05.11.2024 - 04:15 PM",
            preferredWorker: "Linda",
            duration: "1h",
        },
        {
            serviceName: "Haircut",
            clientName: "Chris",
            contact: "9026671652",
            dateTime: "12.12.2024 - 09:45 AM",
            preferredWorker: "Moore",
            duration: "1h 30min",
        }
    ];

    return (
        <div className="appointments-container">
            <div className="header-section">
                <h2>Reschedule Appointments</h2>
                <button className="reappointment-btn">Reappointment Appointment +</button>
            </div>
            <table className="appointments-table">
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Client name</th>
                        <th>Contact</th>
                        <th>Date - Time</th>
                        <th>Preferred Worker</th>
                        <th>Duration</th>
                        <th>Assign Employee</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {appointmentsData.map((appointment, index) => (
                        <tr key={index}>
                            <td>{appointment.serviceName}</td>
                            <td>{appointment.clientName}</td>
                            <td>{appointment.contact}</td>
                            <td>{appointment.dateTime}</td>
                            <td>{appointment.preferredWorker}</td>
                            <td>{appointment.duration}</td>
                            <td><button className="assign-btn">Assign &#x25BE;</button></td>
                            <td><button className="cancel-btn">Cancel</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reschedule_appointments;
