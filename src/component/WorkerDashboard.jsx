import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/WorkerDashboard.css"
import WorkerSidebar from "../Sidebars/WorkerSidebar";
import "../styles/Details.css"
import Header from "../Sidebars/Header";





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
  <WorkerSidebar active = {{CurrentActive: ""}}/>  
      <div className="main">
         <Header />
      

        <div className="worker-mainDetail">
          <div className="worker-inner-container">
            <div className="worker-item1">
              <h2>Your Appointment</h2>
              <div className="inner-header">
                <div className="services">Service</div>
                <div className="services"> Client Name</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkerDashboard;
