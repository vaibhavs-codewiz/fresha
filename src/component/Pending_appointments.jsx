import "../styles/Pending_appointments.css"
import SidebarComponent from "../Sidebars/SidebarComponent";

function Pending_appointments() {
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
        },
    ];

    return (
        <div className="pending-appoint-container">
            <SidebarComponent active={{ currentActive: "PendingAppointments" }} />

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
                    <h2 className="">Services</h2>
                    <div className="pending-item-header">
                        <div className="pending-services">ServiceName </div>
                        <div className="pending-services">client name</div>
                        <div className="pending-services">contact</div>
                        <div className="pending-services">Date-Time</div>
                        <div className="pending-services">preferred-worker</div>
                        <div className="pending-services">Duration</div>
                        <div className="pending-services">assign emp</div>
                        <div className="pending-services">cancel</div>
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
                                    <div className="pending-mapChilds assign-pending-btn">
                                        <div>
                                            <label htmlFor={`worker-${index}`}></label> {/* Use unique ID for each select */}
                                            <select name="assign" id={`worker-${index}`} onClick={(e) => e.stopPropagation()}>
                                                <option value="" disabled selected hidden>Assign</option>
                                                <option value="rahul">Rahul</option>
                                                <option value="mudit">Mudit</option>
                                                <option value="yash">Yash</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className=" cancel-pending-btn">cancel</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pending_appointments