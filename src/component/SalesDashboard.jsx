import './SalesDashboard.css';

const SalesDashboard = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Sales Dashboard</h1>

            <div className="top-stats">
                <div className="stat-item">
                    <div className="svg-sales-dashboard">

                    </div>
                    <div>
                        <span>Today Bookings</span>
                        <h3>89</h3>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="svg-sales-dashboard">

                    </div>
                    <div>
                        <span>Today Bookings</span>
                        <h3>89</h3>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="svg-sales-dashboard">

                    </div>
                    <div>
                        <span>Today Bookings</span>
                        <h3>89</h3>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="svg-sales-dashboard">

                    </div>
                    <div>
                        <span>Today Bookings</span>
                        <h3>89</h3>
                    </div>
                </div>
            </div>

            <div className="appointment-amounts">
                <div className="amount-item pending">
                    <span>Pending Appointment<br /> Amount</span>
                    <h3>₹5000</h3>
                </div>
                <div className="amount-item confirm">
                    <span>Pending Appointment<br /> Amount</span>
                    <h3>₹5000</h3>
                </div>
                <div className="amount-item checked-in">
                    <span>Pending Appointment<br /> Amount</span>
                    <h3>₹5000</h3>
                </div>
                <div className="amount-item checked-out">
                    <span>Pending Appointment<br /> Amount</span>
                    <h3>₹5000</h3>
                </div>
            </div>

            <div className="sales-chart-section">
                <div className="sales-chart">
                    <h2>Sales ₹12.7k</h2>
                    <div className="chart"> {/* Chart would go here */}</div>
                </div>

                <div className="services">
                    <h3>Services</h3>
                    <ul>
                        <li>Hair Colour <span>45%</span></li>
                        <li>Nail Polish <span>29%</span></li>
                        <li>Hair Cutting <span>18%</span></li>
                        <li>Spa and Massage <span>25%</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SalesDashboard;
