import "../styles/CheckinAppointments.css";
import SidebarComponent from "../Sidebars/SidebarComponent";

import axios from "axios";
import { useEffect, useState } from "react";

import { IoCalendarOutline } from "react-icons/io5";
import { LiaUserClockSolid } from "react-icons/lia";
import { RiHome2Line } from "react-icons/ri";
import "../styles/CheckinAppointments.css";
import { VITE_BASEURL } from "../config";

function CheckinAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(""); // Track payment method
  const [totalAmount, setTotalAmount] = useState(""); // Track total amount
  const [transactionId, setTransactionId] = useState(""); // Track transaction ID
  const [appointmentId, setAppointmentId] = useState(""); // Track current appointment ID

  const handlePopup = (appointment) => {
    setIsPopupVisible(true);
    setPaymentMethod(appointment.payment_method || ""); // Assume there's a method in the appointment
    setTotalAmount(appointment.amount || ""); // Assume amount is provided in appointment
    setTransactionId(appointment.transaction_id || ""); // Assume transaction id exists
    setAppointmentId(appointment._id); // Capture the ID of the appointment to pay
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${VITE_BASEURL}/appointment/getCompletedAppointments`,
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
                <p>
                  Pavitra Gupta
                  <br />
                </p>
                <p className="role">Admin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pending-item1">
          <h2 className="">Checked in Appointments</h2>
          <div className="checkin-item-header">
            <div className="checkin-services">Service Name</div>
            <div className="checkin-services">Client Name</div>
            <div className="checkin-services">Contact</div>
            <div className="checkin-services">Date-Time</div>
            <div className="checkin-services">Preferred-Assigned</div>
            <div className="checkin-services">Duration</div>
            <div className="checkin-services">Check in</div>
            <div className="checkin-services">Payment</div>
          </div>

          <div className="stock-item-parent">
            {appointments.map((service, index) => (
              <div className="detailsCard" key={index}>
                <div className="checkin-map">
                  <div className="checkin-mapChilds">
                    {service.service_id.name}
                  </div>
                  <div className="checkin-mapChilds">
                    {service.user_id.name}
                  </div>
                  <div className="checkin-mapChilds">
                    {service.user_id.phone}
                  </div>
                  <div className="checkin-mapChilds">
                    {service.appointment_time}
                  </div>
                  <div className="checkin-mapChilds">
                    {service.worker_id.name}
                  </div>
                  <div className="checkin-mapChilds">
                    {service.service_id.duration}
                  </div>
                  <div className="checkin-btn">Checked in</div>
                  <div
                    className="pay-checkin-btn"
                    onClick={() => handlePopup(service)}
                  >
                    Pay
                  </div>
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
                <div className="checkmark-circ">Payment Window</div>
              </div>

              <div className="checkin-popup-body">
                <label>Payment Method</label>
                <select id="cars">
                  <option value="volvo">UPI</option>
                  <option value="saab">Cash</option>
                  <option value="opel">Card</option>
                </select>
                <div>
                  <p>{paymentMethod}</p>
                </div>

                <h1>
                  Amount: <p>{totalAmount}</p>
                </h1>
                <h1>
                  Transaction ID: <p>{transactionId}</p>
                </h1>
              </div>

              <div className="checkin-footer">
                <div className="checkin-total">Total amount: {totalAmount}</div>
                <button
                  className="markaspaid"
                  onClick={async () => {
                    try {
                      console.log(appointmentId);
                      const response = await axios.put(
                        `${VITE_BASEURL}/appointment/payAppointment/${appointmentId}`,
                        {
                          paymentMethod,
                          amount: totalAmount,
                          transactionId,
                        }
                      );
                      if (response.data.success) {
                        alert("Appointment marked as paid");
                        window.location.reload();
                        setIsPopupVisible(false); // Close the popup after successful payment
                      }
                    } catch (error) {
                      console.error("Error updating payment status:", error);
                    }
                  }}
                >
                  Mark as Paid
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CheckinAppointments;
