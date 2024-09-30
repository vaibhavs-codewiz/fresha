import "../styles/PaidAppointment.css";
import { useState, useEffect } from "react";
import SidebarComponent from "../Sidebars/SidebarComponent";
import axios from "axios";
import { VITE_BASEURL } from "../config";

function PaidAppointment() {
    // const [clientName, setClientName] = useState("");
    // const [appointmentId, setAppointmentId] = useState("");
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [appointments, setAppointments] = useState([]);

    const handlePopup = () => {
        setIsPopupVisible(true);
        console.log("Popup triggered");
    };

    // Function to handle setting the active appointment
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `${VITE_BASEURL}/appointment/getAllPaidAppointments`,
              {
                withCredentials: true, // For cookies, if needed
              }
            );
    
            setAppointments(response.data.data);
            console.log(response.data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
 

    return (
        <div className="Paid-appoint-container">
            <SidebarComponent active={{ currentActive: "PaidAppointments"}} />

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
                    <h2 className="">Paid Appointments</h2>
                    <div className="Paid-item-header">
                        <div className="Paid-services">ServiceName</div>
                        <div className="Paid-services">Client Name</div>
                        <div className="Paid-services">Contact</div>
                        <div className="Paid-services">Date-Time</div>
                        <div className="Paid-services">Preferred Assigned</div>
                        <div className="Paid-services">Duration</div>
                        <div className="Paid-services">Payment</div>
                    </div>

                    <div className="stock-item-parent">
                        {appointments.map((service, index) => (
                            <div className="detailsCard" key={index}>
                                <div className="Paid-map">
                                    <div className="Paid-mapChilds"> {service.service_id.name} </div>
                                    <div className="Paid-mapChilds"> {service.user_id.name} </div>
                                    <div className="Paid-mapChilds"> {service.user_id.phone} </div>
                                    <div className="Paid-mapChilds"> {service.appointment_time} </div>
                                    <div className="Paid-mapChilds"> {service.worker_id.name} </div>
                                    <div className="Paid-mapChilds"> {service.service_id.duration} </div>
                                    <div className="pay-Paid-btn" onClick={handlePopup}>Payment info</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isPopupVisible ? (
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
            ) : null}
        </div>
    );
}

export default PaidAppointment;
