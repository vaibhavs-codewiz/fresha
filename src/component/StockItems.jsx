import './StockItems.css'; 
import { useParams } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";

const stockItems = [
    {id:"1",  image: 'image1.jpg', name: 'Hair Wash Shampoo', price: 690, quantity: 63 },
    {id:"2", image: 'image2.jpg', name: 'Nail Polish', price: 190, quantity: 13 },
    {id:"3", image: 'image3.jpg', name: 'Spa Cream', price: 640, quantity: 635 },
    {id:"4", image: 'image2.jpg', name: 'Nail Polish', price: 190, quantity: 13 },
    {id:"5", image: 'image3.jpg', name: 'Spa Cream', price: 640, quantity: 635 },
 
    {id:"1",  image: 'image1.jpg', name: 'Hair Wash Shampoo', price: 690, quantity: 63 },
    {id:"2", image: 'image2.jpg', name: 'Nail Polish', price: 190, quantity: 13 },
    {id:"3", image: 'image3.jpg', name: 'Spa Cream', price: 640, quantity: 635 },
    {id:"4", image: 'image2.jpg', name: 'Nail Polish', price: 190, quantity: 13 },
    {id:"5", image: 'image3.jpg', name: 'Spa Cream', price: 640, quantity: 635 }
 
    
];

const StockManagement = () => {
    let {paramid} = useParams();
    console.log(paramid);
    return (
        <div className="stock-management-container">
            <aside className="sidebar">
                <div >
                    <div className="logo">
                        <div className="circle"></div>
                    </div>
                    <div className="logo2">
                        <div className="circle"></div>
                    </div>
                </div>
                <div className="sidebar2">
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
            <div className="main">
                <div className="header">
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

                <div className="appointments-section">
                    <h2>Your Appointment</h2>
                
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stockItems.filter((item)=> item.id === paramid).map((item, index) => (
                                <tr className="Stock-card" key={index}>
                                    <td><img src={item.image} alt={item.name} className="product-image" /></td>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td className="quantity">
                                        <button className="quantity-btn">-</button>
                                        <span>{item.quantity}</span>
                                        <button className="quantity-btn">+</button>
                                    </td>
                                    <td className="actions">
                                    </td>
                                    <td>
                                        <button className="edit-btn"><span><CiEdit></CiEdit></span></button>
                                        <button className="delete-btn"><span><MdOutlineDeleteForever /></span></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="content">
                <h1>Stock Management</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stockItems.map((item, index) => (
                            <tr key={index}>
                                <td><img src={item.image} alt={item.name} className="product-image" /></td>
                                <td>{item.name}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td className="quantity">
                                    <button className="quantity-btn">-</button>
                                    <span>{item.quantity}</span>
                                    <button className="quantity-btn">+</button>
                                </td>
                                <td className="actions">
                                    <button className="edit-btn">✏️</button>
                                    <button className="delete-btn">🗑️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
        </div>
    );
};

export default StockManagement;
