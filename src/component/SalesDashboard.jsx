import './SalesDashboard.css';
import { Line } from 'react-chartjs-2';//Type of chart
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';//importing coponents and elements.

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend); //registering the components.


const SalesDashboard = () => {

    //defining the data and options is important.
    const data = {
        labels: ['01', '02', '03', '04', '05', '06', '07'], // X-axis labels (days of the week)
        datasets: [
            {
                label: 'Sales',
                data: [3000, 4000, 2000, 5000, 3500, 2500, 4500], // Data points
                borderColor: 'rgba(54, 162, 235, 1)', // Line color
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Fill below the line
                pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Color of points
                pointBorderColor: '#fff', // Border color of points
                pointHoverBackgroundColor: '#fff', // Point color on hover
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)', // Border color of points on hover
                fill: true, // Fill the area below the line
                tension: 0.4, // Smoothness of the line (optional)
                pointRadius: 5, // Size of points
                pointHoverRadius: 7, // Size of points on hover
            },
        ],
    };
    // Define the options for the chart
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false, // Remove grid lines on X-axis
                },
            },
            y: {
                beginAtZero: true, // Y-axis starts at 0
                grid: {
                    color: 'rgba(200, 200, 200, 0.2)', // Custom grid color
                },
            },
        },
        plugins: {
            legend: {
                display: true, // Hide the legend
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `₹${tooltipItem.formattedValue}`; // Custom label format
                    },
                },
            },
        },
    };
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Sales Dashboard</h1>

            <div className="top-stats">
                <div className="stat-item">
                    <div className="svg-sales-dashboard">

                    </div>
                    <div>
                        <span>Today Bookings<br /></span><b className="bold">89</b>

                    </div>
                </div>
                <div className="stat-item">
                    <div className="svg-sales-dashboard">

                    </div>
                    <div>
                        <span>Today Bookings<br /></span><b className="bold">89</b>

                    </div>
                </div>
                <div className="stat-item">
                    <div className="svg-sales-dashboard">

                    </div>
                    <div>
                        <span>Today Bookings<br /></span><b className="bold">89</b>

                    </div>
                </div>
                <div className="stat-item">
                    <div className="svg-sales-dashboard">

                    </div>
                    <div>
                        <span>Today Bookings<br /></span><b className="bold">89</b>

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
                    <div className="chart">
                        <div style={{ width: '100%',height: "220px", margin: '0 auto' }}>
                            <Line data={data} options={options} />
                        </div>
                    </div>
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
