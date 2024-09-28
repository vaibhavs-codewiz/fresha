import "./Header.css"
function Header() {
    return (
        <div className="worker-header">
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
    )
}

export default Header