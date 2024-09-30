import "../styles/SidebarComponent.css";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaUserClockSolid } from "react-icons/lia";
import { MdOutlinePendingActions } from "react-icons/md";
import { TiInputChecked } from "react-icons/ti";
import { FaRupeeSign } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

function SidebarComponent(prop) {
    const [activeAppointment, setActiveAppointment] = useState(prop.active.currentActive);

    const handleSetActive = (appointment) => {
        setActiveAppointment(appointment);
    };

    return (
        <div className="Paid-sidebar">
            <div>
                <ul className="Paid-sidebar-top">
                    <li>LOGO</li>
                    <div className="paid-sidebar-top-inner">
                        <li>
                            <div
                                className={`dashboard-icon ${activeAppointment === "Dashboard" ? "Paid-active" : ""}`}
                                onClick={() => handleSetActive("Dashboard")}
                            >
                                <RiHome2Line size={20} color="rgba(46, 45, 45, 0.858)" />
                                <p className="small-font">Dashboard</p>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`dashboard-icon ${activeAppointment === "Calendar" ? "Paid-active" : ""}`}
                                onClick={() => handleSetActive("Calendar")}
                            >
                                <IoCalendarOutline size={20} color="rgba(46, 45, 45, 0.858)" />
                                <p className="small-font">Calendar</p>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`dashboard-icon ${activeAppointment === "appointments" ? "Paid-active" : ""}`}
                                onClick={() => handleSetActive("appointments")}
                            >
                                <NavLink to="/AllAppointments" className="dashboard-icon">
                                    <LiaUserClockSolid size={20} color="rgba(46, 45, 45, 0.858)" />
                                    <p className="small-font">All Appointments</p>
                                </NavLink>
                            </div>
                        </li>
                    </div>
                </ul>
            </div >

            <div className="Paid-sidebar2">
                <nav className="Paid-navigation">
                    <ul>
                        <div className="Paid-navigation-inner">
                            <li
                                className={`dashboard-icon ${activeAppointment === "PendingAppointments" ? "Paid-active" : ""}`}
                                onClick={() => handleSetActive("PendingAppointments")}
                            >
                                <NavLink to="/Pending_appointments" className="dashboard-icon">
                                    <MdOutlinePendingActions size={25} color="rgba(46, 45, 45, 0.858)" />
                                    <p className="small-font">Pending Appointments</p>
                                </NavLink>
                            </li>
                            <li
                                id="padding-left2"
                                className={`dashboard-icon ${activeAppointment === "ConfirmedAppointments" ? "Paid-active" : ""}`}
                                onClick={() => handleSetActive("ConfirmedAppointments")}
                            >
                                <NavLink to="/Confirm_Appointments" className="dashboard-icon">
                                    <GiConfirmed size={25} color="rgba(46, 45, 45, 0.858)" />
                                    <p className="small-font">Confirmed Appointments</p>
                                </NavLink>
                            </li>
                            <li
                                className={`dashboard-icon ${activeAppointment === "CheckedAppointments" ? "Paid-active" : ""}`}
                                onClick={() => handleSetActive("CheckedAppointments")}
                            >
                                <NavLink to="/CheckinAppointments" className="dashboard-icon">
                                    <TiInputChecked size={25} color="rgba(46, 45, 45, 0.858)" />
                                    <p className="small-font">Checked Appointments</p>
                                </NavLink>
                            </li>
                            <li
                                id="padding-left4"
                                className={`dashboard-icon ${activeAppointment === "PaidAppointments" ? "Paid-active" : ""}`}
                                onClick={() => handleSetActive("PaidAppointments")}
                            >
                                <NavLink to="/PaidAppointment" className="dashboard-icon">
                                    <FaRupeeSign size={25} color="rgba(46, 45, 45, 0.858)" />
                                    <p className="small-font">Paid Appointments</p>
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </nav>

                <div className="Paid-bottom">
                    <li className={`dashboard-icon ${activeAppointment === "Settings" ? "Paid-active" : ""}`}
                        onClick={() => handleSetActive("Settings")}>
                        <button className="small-font" id="btn1"><MdOutlineSettings size={25} color="rgba(46, 45, 45, 0.858)" /> Settings</button>
                    </li>
                    <li className={`dashboard-icon ${activeAppointment === "Logout" ? "Paid-active" : ""}`}
                        onClick={() => handleSetActive("Logout")}>
                        <button className="small-font" id="btn2"><IoMdLogOut size={25} color="rgba(46, 45, 45, 0.858)" /> Logout</button>
                    </li>
                </div>
            </div>
        </div >
    );
}


export default SidebarComponent