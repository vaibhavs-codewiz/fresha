import "./Confirm_Appointments.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { RiHome2Line } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaUserClockSolid } from "react-icons/lia";

function Confirm_Appointments() {
  const [clientName, setClientName] = useState("");
  const [appointmentId, setAppointmentId] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/appointment/getBookedAppointments",
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

  const handleConfirm = () => {
    console.log("Confirming:", clientName, appointmentId);
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
          <h2 className="">Confirm Appointments</h2>
          <div className="pending-item-header">
            <div className="pending-services">ServiceName </div>
            <div className="pending-services">client name</div>
            <div className="pending-services">contact</div>
            <div className="pending-services">Date-Time</div>
            <div className="pending-services">worker-assigned</div>
            <div className="pending-services">Duration</div>
            <div className="pending-services">check in</div>
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
                    Check In
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

export default Confirm_Appointments;
