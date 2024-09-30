import "../styles/NewAppointment.css"
import Sidebar from "../Sidebars/SidebarComponent"
import Header from "../Sidebars/Header"

import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { GrServices } from "react-icons/gr";

function NewAppointment() {
    return (
        <>
            <div className="new-appoint-container">
                <Sidebar active={{ currentActive: "appointments" }} />
                <div className="new-appoint-main">
                    <Header />
                    <div className="new-appoint-content-wrapper">
                        <div className="new-appoint-heading">New Appointments</div>
                        <div className="new-appoint-content">
                            {/* =====formcontainr===== */}
                            <div className="form-container">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Client Name</label>
                                        <div className="input-container">
                                            
                                            <i ><FaUser color="#4A4A4B" /></i>
                                            <input type="text" placeholder="Enter Service name" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <div className="input-container">
                                            <i ><MdEmail size={25} color="#4A4A4B" /></i>
                                            <input type="email" placeholder="Enter Email" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Phone No</label>
                                        <div className="input-container">
                                            <i ><MdPhone color="#4A4A4B" /></i>
                                            <input type="text" placeholder="Enter Phone No." />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Pincode</label>
                                        <div className="input-container">
                                            <i ><FaLocationDot color="#4A4A4B" /></i>
                                            <input type="text" placeholder="Enter Pincode" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Date</label>
                                        <div className="input-container">
                                            <i ><FaCalendar color="#4A4A4B" /></i>
                                            <input type="date" placeholder="Enter Date" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Time Slot</label>
                                        <div className="input-container">
                                            <i ><BsClockFill color="#4A4A4B" /></i>
                                            <input type="text" placeholder="Enter Time Slot" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Services</label>
                                        <div className="input-container">
                                            <i ><GrServices color="#4A4A4B" /></i>
                                            <input type="text" placeholder="Enter Services" />
                                            <i className="fas fa-chevron-down dropdown-icon"></i>
                                        </div>
                                    </div>
                                </div>

                                <button className="select-worker-btn">Select Worker</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewAppointment