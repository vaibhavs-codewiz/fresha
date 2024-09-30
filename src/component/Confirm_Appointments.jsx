import "../styles/Confirm_Appointments.css";
import SidebarComponent from "../Sidebars/SidebarComponent";
import { useState, useEffect } from "react";
import axios from "axios";
import { VITE_BASEURL } from "../config";

function Confirm_Appointments() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${VITE_BASEURL}:3000/appointment/getBookedAppointments`,
          {
            withCredentials: true, // For cookies, if needed
          }
        );

        setAppointments(response.data.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleConfirm = async () => {
    try {
      const selectedBookedAppointment = selectedAppointment._id;
      const response = await axios.put(
        `${VITE_BASEURL}appointment/checkInAppointment/${selectedBookedAppointment}`,
        {},
        {
          withCredentials: true, // Include credentials if necessary
        }
      );
      console.log("Appointment status updated:", response.data);
      // Optionally, update your UI to reflect the status change
    } catch (error) {
      console.error("Error updating appointment status:", error);
    }
  };
  
    const handlePopup = (appointment) => {
    setIsPopupVisible(true);
    setSelectedAppointment(appointment); // Set the appointment when popup is triggered
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };

    return (
        <div className="pending-appoint-container">
            <SidebarComponent active={{ currentActive: "ConfirmedAppointments" }} />

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
            {appointments.map((service, index) => (
              <div className="detailsCard" key={index}>
                <div className="pending-map">
                  <div className="pending-mapChilds">
                    {" "}
                    {service.service_id.name}{" "}
                  </div>
                  <div className="pending-mapChilds">
                    {" "}
                    {service.user_id.name}{" "}
                  </div>
                  <div className="pending-mapChilds">
                    {" "}
                    {service.user_id.phone}{" "}
                  </div>
                  <div className="pending-mapChilds">
                    {" "}
                    {service.appointment_time}{" "}
                  </div>
                  <div className="pending-mapChilds">
                    {" "}
                    {service.worker_id.name}{" "}
                  </div>
                  <div className="pending-mapChilds">
                    {" "}
                    {service.service_id.duration}{" "}
                  </div>
                  <div
                    className="checkin-btn"
                    onClick={() => handlePopup(service)}
                  >
                    check in
                  </div>
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
              <button className="close-popup" onClick={handleCancel}>
                &times;
              </button>
            </div>

            <h2>Check In</h2>

            <div className="popup-body">
              <h2> Client Name </h2>
              <p>{selectedAppointment.user_id.name}</p>

              <h2>User Check In Appointment I.D</h2>
              <p> {selectedAppointment._id} </p>
            </div>

            <div className="popup-footer">
              <button className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
              <button className="confirm-btn" onClick={handleConfirm}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Confirm_Appointments;
