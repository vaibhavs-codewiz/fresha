import "../styles/WorkerSidebar.css";

import { PiShippingContainer } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { LiaUserClockSolid } from "react-icons/lia";
import { MdOutlineSettings } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

function WorkerSidebar(prop) {
    const [activeAppointment, setActiveAppointment] = useState(prop.active.currentActive);
    console.log(prop)
    const handleSetActive = (appointment) => {
        setActiveAppointment(appointment);
    };

    return (
        <div className="worker-sidebar">
            <div >
                <ul className="worker-sidebar-top">
                    <li>
                        <div className="">LOGO</div>
                    </li>
                    <li>
                        <div
                            className={`dashboard-icon ${activeAppointment === "appointments" ? "Paid-active" : ""}`}
                            onClick={() => handleSetActive("appointments")}
                        >
                            <NavLink to="/AllAppointments" className="dashboard-icon">
                                <LiaUserClockSolid size={25} color="rgba(46, 45, 45, 0.858)" />
                                <p className="small-font" letterSpacing={"2px"}>Appointments</p>
                            </NavLink>

                        </div>
                    </li>
                    <li>
                        <div
                            className={`dashboard-icon ${activeAppointment === "Calendar" ? "Paid-active" : ""}`}
                            onClick={() => handleSetActive("Calendar")}
                        >
                            <PiShippingContainer size={20} color="rgba(46, 45, 45, 0.858)" />
                            <p className="small-font">stock Management</p>
                        </div>
                    </li>

                </ul>

            </div>

            <div className="worker-sidebar2">


                <div className="worker-bottom">
                    <li className={`dashboard-icon ${activeAppointment === "Settings" ? "Paid-active" : ""}`}
                        onClick={() => handleSetActive("Settings")}>
                        <button className="small-font"><MdOutlineSettings size={25} color="rgba(46, 45, 45, 0.858)" /> Settings</button>
                    </li>
                    <li className={`dashboard-icon ${activeAppointment === "Logout" ? "Paid-active" : ""}`}
                        onClick={() => handleSetActive("Logout")}>
                        <button className="small-font"><IoMdLogOut size={25} color="rgba(46, 45, 45, 0.858)" /> Logout</button>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default WorkerSidebar