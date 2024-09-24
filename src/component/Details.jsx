import "./Details.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Details() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/service/getAllServices", {
          withCredentials: true, // For cookies, if needed
        });

        setServices(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
 
  let navigate = useNavigate();
  function handleNavigation() {
    navigate("/Booking");
  }

  return (
    <>
      <div className="mainDetail">
        <div className="container">
          <div className="item1">
            <h2 className="">Services</h2>
            <div className="header">
              <div className="services">Image</div>
              <div className="services">Service </div>
              <div className="services">Price</div>
              <div className="services">Duration</div>
              <div className="services">Action </div>
            </div>
            <div className="parent">
              {services.map((service, index) => (
                <div className="detailsCard" key={index}>
                  <div className="map">
                    <div className="mapChilds mapImgDiv">
                      <img src={`http://localhost:3000/${service.image}`} alt="" />
                    </div>
                    <div className="mapChilds"> {service.name} </div>
                    <div className="mapChilds">{service.price} </div>
                    <div className="mapChilds"> {service.duration} </div>
                    <div className="mapChilds">
                      {" "}
                      <button onClick={handleNavigation}> Book </button>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="item2">
            <img
              src="https://images.architectureplusdesign.in/wp-content/uploads/2024/01/11070801/KB_81501_FinalFile_JPG-inside-image-576-x-720-vertical.jpg"
              alt="salon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
