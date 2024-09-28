import "../styles/CheckinAppointments.css"
import SidebarComponent from "../Sidebars/SidebarComponent";

import { useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaUserClockSolid } from "react-icons/lia";

function checkinAppointments() {

    const [clientName, setClientName] = useState("");
    const [appointmentId, setAppointmentId] = useState("");
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleConfirm = () => {
        console.log("Confirming:", clientName, appointmentId);
    }
    const handlePopup = () => {
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
        <div className="checkin-appoint-container">
            <SidebarComponent active={{ currentActive: "CheckedAppointments" }} />

            <div className="checkin-appoint-main">
                <div className="checkin-header">
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
                    <h2 className="">Checked in Appointments</h2>
                    <div className="checkin-item-header">
                        <div className="checkin-services">ServiceName </div>
                        <div className="checkin-services">client name</div>
                        <div className="checkin-services">contact</div>
                        <div className="checkin-services">Date-Time</div>
                        <div className="checkin-services">preffered-assigned</div>
                        <div className="checkin-services">Duration</div>
                        <div className="checkin-services">check in</div>
                        <div className="checkin-services">payment</div>
                    </div>

                    <div className="stock-item-parent">
                        {pendingServices.map((service, index) => (
                            <div className="detailsCard" key={index}>
                                <div className="checkin-map">
                                    <div className="checkin-mapChilds"> {service.serviceName} </div>
                                    <div className="checkin-mapChilds"> {service.clientName} </div>
                                    <div className="checkin-mapChilds"> {service.contact} </div>
                                    <div className="checkin-mapChilds"> {service.dateTime} </div>
                                    <div className="checkin-mapChilds"> {service.preferredWorker} </div>
                                    <div className="checkin-mapChilds"> {service.duration} </div>
                                    <div className="checkin-btn">checked in</div>
                                    <div className="pay-checkin-btn" onClick={handlePopup}>pay</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isPopupVisible ? (
                <div className="checkin-popup-overlay">
                    <div className="checkin-popup-container">
                        <div className="checkin-popup-inner">
                            <div className="checkin-popup-header">
                                <div className="checkmark-circ">
                                    Payment Window
                                </div>
                            </div>


                            <div className="checkin-popup-body">

                                <label>payment-method</label>
                                <form action="">
                                    cash{" "}<input type="checkbox" name="payment" id="" value="cash" /><br />
                                    upi{" "}<input type="checkbox" name="payment" id="" value="upi" /><br />
                                    card{" "}<input type="checkbox" name="payment" id="" value="card" /><br />
                                </form>

                                <h1>Amount: <p>total</p></h1>
                                <h1>Transaction id: <p>id</p></h1>
                            </div>
                            <div className="checkin-footer">
                                <div className="checkin-total">
                                    Total amount
                                </div>
                                <div className="markas-paid">
                                    mark as paid
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default checkinAppointments