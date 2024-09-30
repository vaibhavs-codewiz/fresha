import "../styles/AllAppointments.css";
import SidebarComponent from "../Sidebars/SidebarComponent";
import axios from "axios";
import { useState, useEffect } from "react";
import { VITE_BASEURL } from "../config";
function AllAppointments() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${VITE_BASEURL}/appointment/getAllAppointments`,
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

  return (
    <div className="Paid-appoint-container">
      <SidebarComponent active={{ currentActive: "appointments" }} />

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
            {appointments.map((service, index) => (
              <div className="detailsCard" key={index}>
                <div className="Paid-map">
                  <div className="Paid-mapChilds"> {service.service_id.name} </div>
                  <div className="Paid-mapChilds"> {service.user_id.name} </div>
                  <div className="Paid-mapChilds"> {service.user_id.phone} </div>
                  <div className="Paid-mapChilds"> {service.appointment_time} </div>
                  <div className="Paid-mapChilds">
                    {" "}
                    {service.worker_id.name}{" "}
                  </div>
                  <div className="Paid-mapChilds"> {service.service_id.duration} </div>
                  <div className="All-pay-Paid-btn"> {service.status} </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllAppointments;
