import "./WorkerDashboard.css"
import "./Details.css"
const appointments = [
    { serviceName: "Hair Cut, Spa, Nails", clientName: "Amanda", contact: "9026671648", dateTime: "12.09.2024 - 12.53 PM", duration: "1h 15min" },
    { serviceName: "Spa, Makeup", clientName: "Arjun", contact: "9026671648", dateTime: "03.05.2024 - 10.53 PM", duration: "45min" },
    { serviceName: "Nails", clientName: "Kresha", contact: "9026671648", dateTime: "25.05.2025 - 02.53 PM", duration: "15min" },
    { serviceName: "Nails", clientName: "Kresha", contact: "9026671648", dateTime: "25.05.2025 - 02.53 PM", duration: "15min" },
    { serviceName: "Nails", clientName: "Kresha", contact: "9026671648", dateTime: "25.05.2025 - 02.53 PM", duration: "15min" },
    { serviceName: "Nails", clientName: "Kresha", contact: "9026671648", dateTime: "25.05.2025 - 02.53 PM", duration: "15min" },
    { serviceName: "Nails", clientName: "Kresha", contact: "9026671648", dateTime: "25.05.2025 - 02.53 PM", duration: "15min" },
    { serviceName: "Nails", clientName: "Kresha", contact: "9026671648", dateTime: "25.05.2025 - 02.53 PM", duration: "15min" },
    { serviceName: "Nails", clientName: "Kresha", contact: "9026671648", dateTime: "25.05.2025 - 02.53 PM", duration: "15min" },
    { serviceName: "Nails", clientName: "Kresha", contact: "9026671648", dateTime: "25.05.2025 - 02.53 PM", duration: "15min" },
    { serviceName: "Nails", clientName: "Kresha", contact: "9026671648", dateTime: "25.05.2025 - 02.53 PM", duration: "15min" },
    { serviceName: "Nails", clientName: "Kresha", contact: "9026671648", dateTime: "25.05.2025 - 02.53 PM", duration: "15min" },
    { serviceName: "Nails", clientName: "Kresha", contact: "9026671648", dateTime: "25.05.2025 - 02.53 PM", duration: "15min" },
    { serviceName: "Nails", clientName: "Kresha", contact: "9026671648", dateTime: "25.05.2025 - 02.53 PM", duration: "15min" },
    { serviceName: "Nails", clientName: "Kresha", contact: "9026671648", dateTime: "25.05.2025 - 02.53 PM", duration: "15min" }
];

function WorkerDashboard() {
    return (
        <div className="worker-container">
            <aside className="sidebar">
                <div >
                    <div className="logo">
                        <div className="circle"></div>
                    </div>
                    <div className="logo2">
                        <div className="circle"></div>
                    </div>
                </div>
                <div className="sidebar2">
                    <nav className="navigation">
                        <ul>
                            <li className="active">Appointments</li>
                            <li>Stock Management</li>
                        </ul>
                    </nav>
                    <div className="bottom">
                        <button>Settings</button>
                        <button>Logout</button>
                    </div>
                </div>
            </aside>

            <div className="main">
                <div className="worker-header">
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

                <div className="worker-mainDetail">
                    <div className="worker-inner-container">
                        <div className="worker-item1">
                    <h2>Your Appointment</h2>
                    <div className="inner-header">
                        <div className="services">Image</div>
                        <div className="services">Service </div>
                        <div className="services">Price</div>
                        <div className="services">Duration</div>
                        <div className="services">Action </div>
                    </div>
                        <div className="parent">
                            {appointments.map((service, index) => (
                                <div className="detailsCard" key={index}>
                                    <div className="map">
                                        <div className="mapChilds"> {service.serviceName} </div>
                                        <div className="mapChilds">{service.clientName} </div>
                                        <div className="mapChilds"> {service.contact} </div>
                                        <div className="mapChilds">{service.dateTime}</div>
                                        <div className="mapChilds">
                                            {" "}
                                            <button > Book </button>{" "}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <tbody>
                            {appointments.map((appointment, index) => (
                                <>
                                    <tr key={index}>
                                        <td>{appointment.serviceName}</td>
                                        <td>{appointment.clientName}</td>
                                        <td>{appointment.contact}</td>
                                        <td>{appointment.dateTime}</td>
                                        <td>{appointment.duration}</td>
                                        <td><button className="status-btn">Status</button></td>
                                    </tr>

                                </>
                            ))}
                        </tbody> */}
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkerDashboard;
