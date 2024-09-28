import "../styles/CheckinAppointments.css"
import SidebarComponent from "../Sidebars/SidebarComponent";

import axios from "axios";
import { useEffect, useState } from "react";

import { IoCalendarOutline } from "react-icons/io5";
import { LiaUserClockSolid } from "react-icons/lia";
import { RiHome2Line } from "react-icons/ri";
import "../styles/CheckinAppointments.css";

function checkinAppointments() {

    const [appointments, setAppointments] = useState([]);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handlePopup = () => {
        setIsPopupVisible(true);
    
    };
  
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

  // some data that vaibhav bought 
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
