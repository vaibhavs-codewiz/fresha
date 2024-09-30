import "../styles/Pending_appointments.css"
import SidebarComponent from "../Sidebars/SidebarComponent";
import { useState, useEffect } from "react";
import axios from "axios";
import { VITE_BASEURL } from "../config";


function Pending_appointments() {
  const [appointments, setAppointments] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [selectedWorkers, setSelectedWorkers] = useState({}); // Store selected workers for each appointment

  useEffect(() => {
    // API to fetch Appointments
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${VITE_BASEURL}/appointment/getPendingAppointments`,
          {
            withCredentials: true,
          }
        );
        setAppointments(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // API to fetch Workers
    const fetchWorkers = async () => {
      try {
        const response = await axios.get(
         `${VITE_BASEURL}/worker/getAllWorkers`
        );
        setWorkers(response.data);
      } catch (error) {
        console.error("Error fetching workers:", error);
      }
    };

    fetchWorkers();
    fetchData();
  }, []);

  // Handle selecting a new worker for an appointment
  const handleSelectChange = (appointmentId, event) => {
    const newWorkerId = event.target.value;
    setSelectedWorkers((prevSelectedWorkers) => ({
      ...prevSelectedWorkers,
      [appointmentId]: newWorkerId,
    }));
  };

  // API to handle cancel appointment button click
  const handleCancel = async (appointmentId) => {
    try {
      const response = await axios.put(
        `${VITE_BASEURL}/appointment/cancelAppointment/${appointmentId}`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log("Appointment status updated:", response.data);
      // Optionally, update your UI to reflect the status change
      setAppointments((prevAppointments) =>
        prevAppointments.filter(
          (appointment) => appointment._id !== appointmentId
        )
      );
    } catch (error) {
      console.error("Error updating appointment status:", error);
    }
  };


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
          <h2 className="">Pending Appointments</h2>
          <div className="pending-item-header">
            <div className="pending-services">Service Name </div>
            <div className="pending-services">Client Name</div>
            <div className="pending-services">Contact</div>
            <div className="pending-services">Date and Time of Appointment</div>
            <div className="pending-services">Preferred Worker</div>
            <div className="pending-services">Duration</div>
            <div className="pending-services">Assign New Worker</div>
            <div className="pending-services">Cancel</div>
          </div>

          <div className="stock-item-parent">
            {appointments.map((service) => (
              <div className="detailsCard" key={service._id}>
                <div className="pending-map">
                  <div className="pending-mapChilds">
                    {service.service_id.name}
                  </div>
                  <div className="pending-mapChilds">
                    {service.user_id.name}
                  </div>
                  <div className="pending-mapChilds">
                    {service.user_id.phone}
                  </div>
                  <div className="pending-mapChilds">
                    {service.appointment_time}
                  </div>
                  <div className="pending-mapChilds">
                    {service.worker_id.name}
                  </div>
                  <div className="pending-mapChilds">
                    {service.service_id.duration}
                  </div>
                  <div className="pending-mapChilds assign-pending-btn">
                    <select
                      value={selectedWorkers[service._id] || ""}
                      onChange={(event) =>
                        handleSelectChange(service._id, event)
                      }
                    >
                      <option value="" disabled>
                        Select a worker
                      </option>
                      {workers.map((worker) => (
                        <option key={worker._id} value={worker._id}>
                          {worker.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="cancel-pending-btn"
                    onClick={() => handleCancel(service._id)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pending_appointments;
