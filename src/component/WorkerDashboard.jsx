import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./WorkerDashboard.css";
import "./Details.css";

function WorkerDashboard() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/appointment/getAllAppointments",
          {
            withCredentials: true, // For cookies, if needed
          }
        );

        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  let navigate = useNavigate();
  function handleNavigation() {
    navigate("/Booking");
  }
  return (
    <div className="worker-container">
      <aside className="sidebar">
        <div>
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
                <p>
                  Pavitra Gupta
                  <br />
                </p>
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
                {appointments.map((appointment, index) => (
                  <div className="detailsCard" key={index}>
                    <div className="map">
                      <div className="mapChilds">
                        {" "}
                        {appointment.service_id.name}{" "}
                      </div>
                      <div className="mapChilds">{appointment.user_id.name} </div>
                      <div className="mapChilds"> {appointment.price} </div>
                      <div className="mapChilds">
                        {appointment.appointment_time}
                      </div>
                      <div className="mapChilds">
                        {" "}
                        <button> {appointment.status} </button>{" "}
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
