import "../styles/AllAppointments.css";
import SidebarComponent from "../Sidebars/SidebarComponent";


function AllAppointments() {

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
            serviceName: "Haircut",
            clientName: "John Doe",
            contact: "+1-202-555-0167",
            dateTime: "2024-09-28 14:30",
            preferredWorker: "Alice Johnson",
            duration: "45 mins",
            assignEmp: "David Smith",
            cancel: false,
        },

    ];

    return (
        <div className="Paid-appoint-container">
           
            <SidebarComponent active={{currentActive: "appointments"}} />

            <div className="Paid-appoint-main">
                <div className="Paid-header">
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
                    <div className="Paid-item-header">
                        <div className="Paid-services">ServiceName</div>
                        <div className="Paid-services">Client Name</div>
                        <div className="Paid-services">Contact</div>
                        <div className="Paid-services">Date-Time</div>
                        <div className="Paid-services">worker Assigned</div>
                        <div className="Paid-services">Duration</div>
                        <div className="Paid-services">status</div>
                    </div>

                    <div className="stock-item-parent">
                        {pendingServices.map((service, index) => (
                            <div className="detailsCard" key={index}>
                                <div className="Paid-map">
                                    <div className="Paid-mapChilds"> {service.serviceName} </div>
                                    <div className="Paid-mapChilds"> {service.clientName} </div>
                                    <div className="Paid-mapChilds"> {service.contact} </div>
                                    <div className="Paid-mapChilds"> {service.dateTime} </div>
                                    <div className="Paid-mapChilds"> {service.preferredWorker} </div>
                                    <div className="Paid-mapChilds"> {service.duration} </div>
                                    <div className="All-pay-Paid-btn">status</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* {isPopupVisible ? (
                <div className="checkin-popup-overlay">
                    <div className="checkin-popup-container">
                        <div className="blue-div"></div>
                        <div className="checkin-popup-inner">
                            <div className="checkin-popup-header">
                                <div className="checkmark-circ">
                                    Payment information
                                </div>
                            </div>
                            <div className="checkin-popup-body">
                                <div className="payment-info-div">
                                    <p>Name</p>
                                    <p>Date and Time</p>
                                    <p>Total amount</p>
                                    <p>Payment method</p>
                                    <p>Transaction ID</p>
                                </div>
                                <div className="payment-info-div">
                                    <p>Amanda</p>
                                    <p>25/06/24</p>
                                    <p>869</p>
                                    <p>UPI</p>
                                    <p>adshguyy76</p>
                                </div>
                            </div>
                            <div className="info-circle"></div>
                            <div className="info-circle2"></div>
                            <div className="Paid-footer">
                                <div className="Paid-total">
                                    Paid amount
                                </div>
                                <div className="markas-paid">
                                    Send invoice
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null} */}
        </div>
    );
}

export default AllAppointments;
