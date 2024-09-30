import "./Header.css"
import { FaBell } from "react-icons/fa";
function Header() {
    return (
        <div className="worker-header">
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="profile">
                <span className="notification">
                    <FaBell size={25} color="#4A90E2" />                   
                </span>
                <div className="user-info">
                    <img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User" />
                    <div>
                        <p>Pavitra Gupta<br /></p>
                        <p className="role">Admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header