import "../styles/Details.css"
import "../styles/Time.css"
import "../styles/Booking.css"
import "../styles/First_visit_check.css"

import { useNavigate } from "react-router-dom";

function First_visit_check() {

    const navigate = useNavigate();

    function handleNavigate() {
        navigate("/Review_confirm");
    }

    function validateForm(event) {
        event.preventDefault();
        let variable = document.forms["myForm"]["Demail"].value;
        console.log(variable);
        if (variable === "") {
            alert("Please enter a valid email address");
        } else {
            // Show the next step of the form
            let popupdata = document.querySelector(".pop-up-data");
            let continuepopup = document.querySelector(".continue-pop-up");
            popupdata.style.display = "none";
            continuepopup.style.display = "flex";
        }
    }

    function validateAccountform(e) {
        e.preventDefault();
        let fname = document.forms["account-form"]["fname"].value;
        if (fname === "") {
            alert("enter your first name");
        }
        else {
            console.log("iuerfu");

        }
    }

    function removePopup() {
        let popUp = document.querySelector(".pop-up");
        let fullpopUp = document.querySelector(".full-pop-up");

        popUp.style.display = "none";
        fullpopUp.style.display = "none";

    }

    function increment() {
        let toggle = document.querySelector(".value");
        console.log(toggle.innerHTML);
        var current = toggle.innerHTML;
        if (current == 1) {
            let check = document.querySelector(".check");
            check.style.color = "green";
        }

    }
    function decrement() {
        let toggle = document.querySelector(".value2");
        console.log(toggle.innerHTML);
        var current2 = toggle.innerHTML;
        if (current2 == 1) {
            let check = document.querySelector(".check");
            check.style.color = "green";

        }

    }


    return (
        <>
            <div id="mainDetail">
                <div className="container" id="container">

                    <div className="item " id="check-div">
                        <div className="innercheck-div ">
                            <h2 className="">Is this your first visit to The Most
                                <br />
                                Hair Design Ladies Salon?
                            </h2>
                            
                            <div className="radio">
                                <label>
                                    <input type="radio" name="choice" />
                                    <span className="custom-radio">iuhiuh</span>
                                </label>
                                <label>
                                    <input type="radio" name="choice" />
                                    <span className="custom-radio">gvuy</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* ==============services=============== */}

                    <div className="selected-service">
                        <div className="selected-service-div">
                            <div className="top-part">
                                <div className="top-part1">
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <div>
                                        <p className="top-para">Arealyou Premium Salon</p>
                                        <p className="top-para">4.7 </p>
                                        <p>Hiran Magri, Siva Nagar, Udaipur</p>
                                    </div>
                                </div>
                                <div className="top-part2">No services selected</div>
                                <div></div>
                            </div>
                            <hr />
                            <div className="bottom-part">
                                <div className="top-bottom top-para">
                                    <p>Total</p>
                                    <p>free</p>
                                </div>
                                <div className="bottom-bottom">
                                    <button className="contactButton" onClick={handleNavigate}>
                                        Continue
                                        <div className="iconButton">
                                            <svg
                                                height="24"
                                                width="24"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </div >



        </>
    )
}

export default First_visit_check