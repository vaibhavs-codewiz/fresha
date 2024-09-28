import axios from "axios";
import { useEffect, useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaUserClockSolid } from "react-icons/lia";
import { RiHome2Line } from "react-icons/ri";
import "../styles/CheckinAppointments.css";

function checkinAppointments() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/appointment/getCompletedAppointments",
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

  const handleConfirm = () => {
    console.log("Confirming:", clientName, appointmentId);
  };
  const handlePopup = () => {
    setIsPopupVisible(true);
    console.log("heyy");
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="checkin-appoint-container">
      <div className="checkin-sidebar">
        <div className="checkin-sidebar-top">
          <div className="">LOGO</div>
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
        <div className="checkin-sidebar2">
          <nav className="checkin-navigation">
            <ul>
              <li className="active small-font">Appointments</li>
              <li className="small-font">confirm appointment</li>
              <li className="small-font">checked appointment</li>
              <li className="small-font">paid appointment</li>
            </ul>
          </nav>
          <div className="checkin-bottom">
            <button className="small-font">Settings</button>
            <button className="small-font">Logout</button>
          </div>
        </div>
      </div>
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
            {appointments.map((service, index) => (
              <div className="detailsCard" key={index}>
                <div className="checkin-map">
                  <div className="checkin-mapChilds">
                    {" "}
                    {service.service_id.name}{" "}
                  </div>
                  <div className="checkin-mapChilds">
                    {" "}
                    {service.user_id.name}{" "}
                  </div>
                  <div className="checkin-mapChilds">
                    {" "}
                    {service.user_id.phone}{" "}
                  </div>
                  <div className="checkin-mapChilds">
                    {" "}
                    {service.appointment_time}{" "}
                  </div>
                  <div className="checkin-mapChilds">
                    {" "}
                    {service.worker_id.name}{" "}
                  </div>
                  <div className="checkin-mapChilds">
                    {" "}
                    {service.service_id.duration}{" "}
                  </div>
                  <div className="checkin-btn">checked in</div>
                  <div className="pay-checkin-btn" onClick={handlePopup}>
                    pay
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
                <label>payment-method</label>
                <form action="">
                  cash{" "}
                  <input type="checkbox" name="payment" id="" value="cash" />
                  <br />
                  upi <input type="checkbox" name="payment" id="" value="upi" />
                  <br />
                  card{" "}
                  <input type="checkbox" name="payment" id="" value="card" />
                  <br />
                </form>

                <h1>
                  Amount: <p>total</p>
                </h1>
                <h1>
                  Transaction id: <p>id</p>
                </h1>
              </div>
              <div className="checkin-footer">
                <div className="checkin-total">Total amount</div>
                <div className="markas-paid">mark as paid</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default checkinAppointments;
