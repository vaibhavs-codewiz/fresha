import '../styles/StockItems.css';

import { useParams } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";

const stockItems = [
    { image: 'image1.jpg', name: 'Hair Wash Shampoo', price: 690, quantity: 63 },
    { image: 'image2.jpg', name: 'Nail Polish', price: 190, quantity: 13 },
    { image: 'image3.jpg', name: 'Spa Cream', price: 640, quantity: 635 },
    { image: 'image2.jpg', name: 'Nail Polish', price: 190, quantity: 13 },
    { image: 'image3.jpg', name: 'Spa Cream', price: 640, quantity: 635 },

    { image: 'image1.jpg', name: 'Hair Wash Shampoo', price: 690, quantity: 63 },
    { image: 'image2.jpg', name: 'Nail Polish', price: 190, quantity: 13 },
    { image: 'image3.jpg', name: 'Spa Cream', price: 640, quantity: 635 },
    { image: 'image2.jpg', name: 'Nail Polish', price: 190, quantity: 13 },
    { image: 'image3.jpg', name: 'Spa Cream', price: 640, quantity: 635 },
    { image: 'image1.jpg', name: 'Hair Wash Shampoo', price: 690, quantity: 63 },
    { image: 'image2.jpg', name: 'Nail Polish', price: 190, quantity: 13 },
    { image: 'image3.jpg', name: 'Spa Cream', price: 640, quantity: 635 },
    { image: 'image2.jpg', name: 'Nail Polish', price: 190, quantity: 13 },
    { image: 'image3.jpg', name: 'Spa Cream', price: 640, quantity: 635 }


];

const StockManagement = () => {
    let { paramid } = useParams();
    console.log(paramid);
    return (
        <div className="stock-management-container">
            <aside className="stock-sidebar">
                <div >
                   LOGO
                </div>
                <div className="stock-sidebar2">
                    <nav className="navigation">
                        <ul>
                            <li className="active">Appointments</li>
                            <li>Stock Management</li>
                        </ul>
                    </nav>
                    <div className="bottom">
                        <button>Settings</button>
                        <button>Logout</button>
                    </div>
                </div>
            </aside>
            <div className="stock-item-main">
                <div className="stock-header">
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
                <div className="stock-item1">
                    <h2 className="">Services</h2>
                    <div className="stock-item-header">
                        <div className="services">Image</div>
                        <div className="services">ServiceName </div>
                        <div className="services">Price</div>
                        <div className="services">quantity</div>
                    </div>
                    <div className="stock-item-parent">
                        {stockItems.map((service, index) => (
                            <div className="detailsCard" key={index}>
                                <div className="stock-item-map">
                                    <div className="mapChilds mapImgDiv">
                                        <img src="" alt="img" />
                                    </div>
                                    <div className="mapChilds"> {service.name} </div>
                                    <div className="mapChilds stock-price">{service.price} </div>
                                    <div className="btn-div">
                                    <button className="edit-btn"><CiEdit></CiEdit></button>
                                    <button className="delete-btn"><MdOutlineDeleteForever /></button>
                                </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default StockManagement;
