import Sidebar from "../Sidebars/SidebarComponent"
import Header from "../Sidebars/Header"
import "../styles/AppointmentWorker.css"

function AppointmentWorker() {
    const workers = [
        {
            id: 1,
            name: 'Emma Smith',
            service: 'Hair Styling',
            image: 'https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
        },
        {
            id: 2,
            name: 'Liam Johnson',
            service: 'Manicure & Pedicure',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 3,
            name: 'Olivia Brown',
            service: 'Facial & Skin Care',
            image: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];
    return (
        <div className="new-appoint-worker">
            <Sidebar active={{ currentActive: "appointments" }} />
            <div className="new-appoint-worker-main">
                <Header />
                <div className="new-appoint-worker-wrapper">
                    <div className="new-appoint-worker-heading">New Appointments</div>
                    <div className="new-appoint-worker-container">
                        <div className="new-appoint-worker-heading2">Worker available</div>
                        <div className="img-card-parent">
                            {
                                workers.map((data) => {
                                    return (
                                        <>
                                            <div className="img-card" key={data.id}>
                                                <img src={data.image} alt="" />
                                                <h2>{data.name}</h2>
                                                <p>{data.service}</p>
                                            </div>
                                        </>)
                                })
                            }
                        </div>
                        <div className="create-appointment-btn">create appointment</div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AppointmentWorker