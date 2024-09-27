import "../styles/Confirm_Appointments.css";
import { useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaUserClockSolid } from "react-icons/lia";

function Confirm_Appointments() {
    const [clientName, setClientName] = useState("");
    const [appointmentId, setAppointmentId] = useState("");
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleConfirm = () => {
        console.log("Confirming:", clientName, appointmentId);
    };

    const handlePopup = (clientName) => {
        setClientName(clientName);  // Set the clicked client's name
        setIsPopupVisible(true);
    };

    const handleCancel = () => {
        setIsPopupVisible(false);
    };

    const pendingServices = [
        {
            serviceName: "Haircut",
            clientName: "John Doe",
            contact: "+1-202-555-0167",
            dateTime: "2024-09-28 14:30",
            preferredWorker: "Alice Johnson",
            duration: "45 mins",
            assignEmp: "David Smith",
            cancel: false,
        },
        {
            serviceName: "Massage Therapy",
            clientName: "Emma Williams",
            contact: "+1-303-555-0123",
            dateTime: "2024-09-28 16:00",
            preferredWorker: "James Anderson",
            duration: "1 hour",
            assignEmp: "Sarah Brown",
            cancel: false,
        },
        {
            serviceName: "Manicure",
            clientName: "Sophia Martinez",
            contact: "+1-408-555-0198",
            dateTime: "2024-09-29 11:00",
            preferredWorker: "Olivia Garcia",
            duration: "30 mins",
            assignEmp: "Ethan Taylor",
            cancel: true,
        },
        {
            serviceName: "Facial Treatment",
            clientName: "Michael Johnson",
            contact: "+1-212-555-0143",
            dateTime: "2024-09-30 13:45",
            preferredWorker: "Liam Davis",
            duration: "1 hour 30 mins",
            assignEmp: "Mia White",
            cancel: false,
        },
        {
            serviceName: "Pedicure",
            clientName: "Isabella Wilson",
            contact: "+1-415-555-0175",
            dateTime: "2024-09-30 15:30",
            preferredWorker: "Charlotte Moore",
            duration: "1 hour",
            assignEmp: "Noah Green",
            cancel: false,
        }
    ];

    return (
        <div className="pending-appoint-container">
            <div className="pending-sidebar">
                <div className="pending-sidebar-top">
                    <div className="logo">
                        <div className="circle"></div>
                    </div>
                    <div className="dashboard-icon">
                        <RiHome2Line width={"45px"} />
                        <p className="small-font">Dashboard</p>
                    </div>
                    <div className="dashboard-icon">
                        <IoCalendarOutline />
                        <p className="small-font">Calendar</p>
                    </div>
                    <div className="dashboard-icon">
                        <LiaUserClockSolid />
                        <p className="small-font">Appointment</p>
                    </div>
                </div>
                <div className="sidebar2">
                    <nav className="navigation">
                        <ul>
                            <li className="active small-font">Appointments</li>
                            <li className="small-font">confirm appointment</li>
                            <li className="small-font">checked appointment</li>
                            <li className="small-font">paid appointment</li>
                        </ul>
                    </nav>
                    <div className="pending-bottom">
                        <button className="small-font">Settings</button>
                        <button className="small-font">Logout</button>
                    </div>
                </div>
            </div>
            <div className="pending-appoint-main">
                <div className="pending-header">
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="profile">
                        <span className="notification">
                            <i className="fa fa-bell"></i>
                            <span className="badge">2</span>
                        </span>
                        <div className="user-info">
                            <img src="https://via.placeholder.com/50" alt="User" />
                            <div>
                                <p>Pavitra Gupta<br /></p>
                                <p className="role">Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pending-item1">
                    <h2 className="">Confirm Appointments</h2>
                    <div className="pending-item-header">
                        <div className="pending-services">ServiceName</div>
                        <div className="pending-services">Client Name</div>
                        <div className="pending-services">Contact</div>
                        <div className="pending-services">Date-Time</div>
                        <div className="pending-services">Worker Assigned</div>
                        <div className="pending-services">Duration</div>
                        <div className="pending-services">Check In</div>
                    </div>

                    <div className="stock-item-parent">
                        {pendingServices.map((service, index) => (
                            <div className="detailsCard" key={index}>
                                <div className="pending-map">
                                    <div className="pending-mapChilds"> {service.serviceName} </div>
                                    <div className="pending-mapChilds"> {service.clientName} </div>
                                    <div className="pending-mapChilds"> {service.contact} </div>
                                    <div className="pending-mapChilds"> {service.dateTime} </div>
                                    <div className="pending-mapChilds"> {service.preferredWorker} </div>
                                    <div className="pending-mapChilds"> {service.duration} </div>
                                    <div className="checkin-btn" onClick={() => handlePopup(service.clientName)}>check in</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isPopupVisible ? (
                <div className="popup-overlay">
                    <div className="popup-container">
                        <div className="popup-header">
                            <div className="checkmark-circle">
                                <i className="fa fa-check-circle"></i>
                            </div>
                            <button className="close-popup" onClick={handleCancel}>&times;</button>
                        </div>

                        <h2>Check In</h2>

                        <div className="popup-body">
                            <label>Client Name</label>
                            <input
                                type="text"
                                value={clientName}  // Input field now contains the client's name
                                onChange={(e) => setClientName(e.target.value)}
                            />
                            <label>Appointment I.D</label>
                            <input
                                type="text"
                                placeholder="Appointment ID"
                                value={appointmentId}
                                onChange={(e) => setAppointmentId(e.target.value)}
                            />
                        </div>

                        <div className="popup-footer">
                            <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                            <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Confirm_Appointments;
