import SidebarComponent from "../Sidebars/SidebarComponent"
import "../styles/AdminSetting.css";
import Header from "../Sidebars/Header";

function AdminSettings() {
  return (
    <>
    <div className="Admin-setting">
        <SidebarComponent active={{ currentActive: "" }} />
        <div className="Admin-setting-main">
           <Header />

        </div>

    </div>
    </>
  )
}

export default AdminSettings