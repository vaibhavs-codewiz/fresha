import "../styles/WorkerDashboard.css"
import "../styles/Details.css"
import WorkerSidebar from "../Sidebars/WorkerSidebar";
import Header from "../Sidebars/Header";
const appointments = [
    { serviceName: "Haircut", clientName: "Amanda", contact: "9026671648", dateTime: "12.09.2024 - 12.53 PM", duration: "1h 15min" },
    { serviceName: "Spa, ", clientName: "Arjun", contact: "9026671648", dateTime: "03.05.2024 - 10.53 PM", duration: "45min" },
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
            <WorkerSidebar active = {{CurrentActive: ""}}/>

            <div className="main">
                <Header />
                {/* <div className="worker-header">
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
                </div> */}

                <div className="worker-mainDetail">
                    <div className="worker-inner-container">
                        <div className="worker-item1">
                            <h2>Your Appointment</h2>
                            <div className="inner-header">
                                <div className="services" style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }}>
                                    service name
                                </div>

                                <div className="services">client name</div>
                                <div className="services">contact</div>
                                <div className="services">Date-Time</div>
                                <div className="services">Duration</div>
                                <div className="services" style={{ borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>status</div>
                            </div>
                            <div className="worker-dashboard-parent">
                                {appointments.map((service, index) => (
                                    <div className="worker-dashboard-detailsCard" key={index}>
                                        <div className="worker-dashboard-map">
                                            <div className="worker-dashboard-mapChilds"> {service.serviceName} </div>
                                            <div className="worker-dashboard-mapChilds">{service.clientName} </div>
                                            <div className="worker-dashboard-mapChilds"> {service.contact} </div>
                                            <div className="worker-dashboard-mapChilds">{service.dateTime}</div>
                                            <div className="worker-dashboard-mapChilds">{service.duration}</div>
                                            <div className="worker-dashboard-mapChilds">
                                                {" "}
                                                <button > status </button>{" "}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkerDashboard;
