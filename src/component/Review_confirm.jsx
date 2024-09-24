import "./Details.css"
import "./Time.css"
import "./Booking.css"
import "./First_visit_check.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Review_confirm() {

    const navigate = useNavigate();

    function handleNavigate() {
        navigate("/First_visit_check");
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

    return (
        <>
            <div id="mainDetail">
                <div className="container" id="container">

                    <div className="item " id="check-div">
                        <div className="innercheck-div ">
                            <h2 className="">Review and Confirm.
                            </h2>
                            <form name="myform" method="post" className="review-form">
                                <div className="form-children">
                                    <label htmlFor="payment" className="font-bold ml-3">Payment method</label>
                                    <select name="Pay at venue" className="check">
                                        <option value="pay at venue">pay at venue</option>
                                        <option value="online payment">online payment</option>
                                        <option value="card payment">card payment</option>
                                    </select>
                                </div>
                                <div className="form-children">
                                    <label htmlFor="payment" className="font-bold ml-3">Discount code</label>
                                    <input type="text" className="check" placeholder="Enter the discount code" />
                                </div>
                                <div className="form-children">
                                    <label htmlFor="booking note" className="font-bold ml-3">Booking notes</label>
                                    <textarea name="booking note" id="" cols="5" rows="5" placeholder="include comments and request" className="check"></textarea>
                                </div>
                            </form>
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

export default Review_confirm