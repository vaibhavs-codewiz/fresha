import "./Appointment.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Appointment() {
   let navigate = useNavigate();

   function navigateProfile(){
     navigate("\User_profile")
   }

    function dropDown(){
        let target = document.querySelector(".absolute-div");
        if(target.style.display == "none"){
            target.style.display = "flex";
        }
        else {
            target.style.display = "none";
        }
    }
    function dropDown1(){
        let target = document.querySelector(".absolute-nav");
        if(target.style.display == "none"){
            target.style.display = "flex";
        }
        else {
            target.style.display = "none";
        }
    }
    function dropDown2(){
        let target = document.querySelector(".absolute-nav2");
        if(target.style.display == "none"){
            target.style.display = "flex";
        }
        else {
            target.style.display = "none";
        }
    }
    function dropDown3(){
        let target = document.querySelector(".absolute-nav3");
        if(target.style.display == "none"){
            target.style.display = "flex";
        }
        else {
            target.style.display = "none";
        }
    }
    function dropDown4(){
        let target = document.querySelector(".absolute-nav4");
        if(target.style.display == "none"){
            target.style.display = "flex";
        }
        else {
            target.style.display = "none";
        }
    }


    return (
        <>
            <div className="wrapper">
                <div className="nav">
                    <a href="#"></a>
                    <div className="form-div">
                        <form>
                            <input type="text" className="inp" value="Any treatment"  onClick={dropDown1} />
                            <input type="text" className="inp " value="current location" onClick={dropDown2} />
                            <input type="text" className="inp" value="Any date" onClick={dropDown3} />
                            <input type="text" className="inp border-none" value="Any Time" onClick={dropDown4}/>
                            <input type="submit" value="search" className="search-btn" />
                        </form>
                    </div>
                    <div className="dropdown pl-8 pt-2" onClick={dropDown}>
                        <FontAwesomeIcon icon={faCircleChevronDown} size="2x" color="blue" />                      </div>
                    </div>

                <div className="main">
                    <div className="left mt-10">
                        <h1 className="m-4 font-bold text-3xl">Appointments</h1>
                        <h2 className="m-4 font-bold text-2xl">upcoming</h2>
                        <div className="first left-content">
                            <img src="https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg" className="h-full w-1/4 mr-3" alt="" />
                            <p>
                                <b>The Hair lounge</b><br />
                                Sun 22 sept,2024 at 5:00pm<br />
                                <p className="font-extralight">SGD 50 - 1 item</p>
                            </p>
                        </div>
                    </div>

                    <div className="right">
                        <img
                            src="https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg"
                            className="right-img"
                            alt="Appointment"
                        />
                        <div className="right-content">
                            <div className="right-confirm pt-4">Confirmed</div>
                            <p className="m-4 font-bold text-3xl">
                                Tomorrow 22 Sept 2024 at 5:00 pm
                                <br />
                                <p className="font-light text-lg">1-hour duration</p>
                            </p>

                            <div className="right-svg-div">
                                {/* Repeatable content for calendar reminder */}
                                {Array(5).fill(
                                    <div className="first">
                                        <div className="svg-div"></div>
                                        <p>
                                            <b>Add to calendar </b><br />
                                            <span>Set yourself a reminder.</span>
                                        </p>
                                        <hr />
                                    </div>
                                )}
                            </div>
                            <div className="overview-div">
                                <p className="m-4 font-bold text-2xl">Overview</p>
                                <div className="inner-overview">
                                    <p>Leading stylist <br />1 hr men</p>
                                    <p>SGD 50</p>
                                </div>
                                <div className="inner-overview">
                                    <b>Total</b>
                                    <b>SGD 50</b>
                                </div>
                            </div>
                            <div>
                                <p className="m-4 font-bold text-2xl mb-5">Cancellation Policy</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vel?</p>
                            </div>
                            <div>
                                <p className="m-4 font-bold text-2xl mb-5">Important Info</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vel?
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis commodi sint soluta sed odit nihil repellat, neque exercitationem, qui necessitatibus voluptatem, aliquam ut esse ullam tenetur quas cupiditate perferendis. Et veritatis pariatur obcaecati commodi atque ad dolor! Officia enim omnis, consequuntur necessitatibus possimus ad ex aliquid doloribus harum rem sunt accusantium soluta architecto laborum quidem beatae adipisci repellendus voluptas delectus.
                                </p>
                            </div>
                            <p className="mt-10">Booking ref: 30DD2B30</p>

                        </div>
                    </div>

                    <div className="absolute-nav">
                        <h1>Top categories</h1>
                        <ul className="hyperlinks-popup">
                            <li><a href="#">beauty</a></li>
                            <li><a href="#">beauty</a></li>
                            <li><a href="#">beauty</a></li>
                            <li><a href="#">beauty</a></li>
                            <li><a href="#">beauty</a></li>
                            <li><a href="#">beauty</a></li>
                            <li><a href="#">beauty</a></li>
                            <li><a href="#">beauty</a></li>
                            <li><a href="#">beauty</a></li>
                            <li><a href="#">beauty</a></li>
                        </ul>
                    </div>
                    <div className="absolute-nav2">
                        <div className="hyperlinks-popup">
                            <div>current location</div>
                            <div>saved</div>
                            <div>add Home</div>
                            <div>add work</div>
                        </div>
                    </div>
                    <div className="absolute-nav3">
                        <div className="calendar-container">
                            <header className="calendar-header">
                                <p className="calendar-current-date"></p>
                                <div className="calendar-navigation">
                                    <span id="calendar-prev"
                                        className="material-symbols-rounded">
                                        ←
                                    </span>
                                    <span id="calendar-next"
                                        className="material-symbols-rounded">
                                        →
                                    </span>
                                </div>
                            </header>

                            <div className="calendar-body">
                                <ul className="calendar-weekdays">
                                    <li>Sun</li>
                                    <li>Mon</li>
                                    <li>Tue</li>
                                    <li>Wed</li>
                                    <li>Thu</li>
                                    <li>Fri</li>
                                    <li>Sat</li>
                                </ul>
                                <ul className="calendar-dates"></ul>
                            </div>
                        </div>
                    </div>
                    <div className="absolute-nav4">
                        <h1>current location</h1>
                    </div>

                    <div className="absolute-div">
                        <ul className="hyperlinks-popup">
                            <li className="font-bold">fresha</li>
                            <li onClick={navigateProfile}>Profile</li>
                            <li>fresha</li>
                            <li>fresha</li>
                            <li>fresha</li>
                            <li>fresha</li>
                            <li>fresha</li>
                            <li>fresha</li>
                            <li>fresha</li>
                        </ul>
                        <hr />
                        <ul className="hyperlinks-popup">
                            <li>Download</li>
                            <li>Download</li>
                            <li>Download</li>
                            <li>Download</li>
                        </ul>
                        <hr />
                        <ul className="hyperlinks-popup">
                            <li className="font-bold">Fresha for business</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Appointment;
