import "../styles/NewAppointment.css"
import Sidebar from "../Sidebars/SidebarComponent"
import Header from "../Sidebars/Header"
function NewAppointment() {
    return (
        <>
            <div className="new-appoint-container">
                <Sidebar active={{ CurrentActive: "appointments" }} />
                <div className="new-appoint-main">
                    <Header />
                    <div className="new-appoint-content-wrapper">
                        <div className="new-appoint-heading">New Appointments</div>
                        <div className="new-appoint-content"></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewAppointment