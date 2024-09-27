import "../styles/Appointment.css";
import "../styles/User_profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

function User_profile() {
    function dropDown() {
        let target = document.querySelector(".absolute-div");
        if (target.style.display == "none") {
            target.style.display = "flex";
        }
        else {
            target.style.display = "none";
        }
    }
    function dropDown1() {
        let target = document.querySelector(".absolute-nav");
        if (target.style.display == "none") {
            target.style.display = "flex";
        }
        else {
            target.style.display = "none";
        }
    }
    function dropDown2() {
        let target = document.querySelector(".absolute-nav2");
        if (target.style.display == "none") {
            target.style.display = "flex";
        }
        else {
            target.style.display = "none";
        }
    }
    function dropDown3() {
        let target = document.querySelector(".absolute-nav3");
        if (target.style.display == "none") {
            target.style.display = "flex";
        }
        else {
            target.style.display = "none";
        }
    }
    function dropDown4() {
        let target = document.querySelector(".absolute-nav4");
        if (target.style.display == "none") {
            target.style.display = "flex";
        }
        else {
            target.style.display = "none";
        }
    }
    // let date = new Date();
    // let year = date.getFullYear();
    // let month = date.getMonth();

    // const day = document.querySelector(".calendar-dates");

    // const currdate = document
    //     .querySelector(".calendar-current-date");

    // const prenexIcons = document
    //     .querySelectorAll(".calendar-navigation span");

    // // Array of month names
    // const months = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October",
    //     "November",
    //     "December"
    // ];

    // // Function to generate the calendar
    // const manipulate = () => {

    //     // Get the first day of the month
    //     let dayone = new Date(year, month, 1).getDay();

    //     // Get the last date of the month
    //     let lastdate = new Date(year, month + 1, 0).getDate();

    //     // Get the day of the last date of the month
    //     let dayend = new Date(year, month, lastdate).getDay();

    //     // Get the last date of the previous month
    //     let monthlastdate = new Date(year, month, 0).getDate();

    //     // Variable to store the generated calendar HTML
    //     let lit = "";

    //     // Loop to add the last dates of the previous month
    //     for (let i = dayone; i > 0; i--) {
    //         lit +=
    //             `<li class="inactive">${monthlastdate - i + 1}</li>`;
    //     }

    //     // Loop to add the dates of the current month
    //     for (let i = 1; i <= lastdate; i++) {

    //         // Check if the current date is today
    //         let isToday = i === date.getDate()
    //             && month === new Date().getMonth()
    //             && year === new Date().getFullYear()
    //             : "";
    //         lit += `<li class="${isToday}">${i}</li>`;
    //     }

    //     // Loop to add the first dates of the next month
    //     for (let i = dayend; i < 6; i++) {
    //         lit += `<li class="inactive">${i - dayend + 1}</li>`
    //     }

    //     // Update the text of the current date element 
    //     // with the formatted current month and year
    //     currdate.innerText = `${months[month]} ${year}`;

    //     // update the HTML of the dates element 
    //     // with the generated calendar
    //     day.innerHTML = lit;
    // }

    // useEffect(() => {
    //     manipulate();

    //     const prenexIcons = document.querySelectorAll(".calendar-navigation span");
    //     prenexIcons.forEach(icon => {
    //         icon.addEventListener("click", () => {
    //             month = icon.id === "calendar-prev" ? month - 1 : month + 1;

    //             if (month < 0 || month > 11) {
    //                 date = new Date(year, month, new Date().getDate());
    //                 year = date.getFullYear();
    //                 month = date.getMonth();
    //             } else {
    //                 date = new Date();
    //             }
    //             manipulate();
    //         });
    //     });
    // }, []);


    return (
        <>
            <div className="user-profile-wrapper">
                <div className="nav">
                    <a href="#"></a>
                    <div className="form-div">
                        <form>
                            <input type="text" className="inp" value="Any treatment" onClick={dropDown1} />
                            <input type="text" className="inp " value="current location" onClick={dropDown2} />
                            <input type="text" className="inp" value="Any date" onClick={dropDown3} />
                            <input type="text" className="inp border-none" value="Any Time" onClick={dropDown4} />
                            <input type="submit" value="search" className="search-btn" />
                        </form>
                    </div>
                    <div className="dropdown pl-8 pt-2" onClick={dropDown}>
                        <FontAwesomeIcon icon={faCircleChevronDown} size="2x" color="blue" />                      </div>
                </div>

                <div className="main-my-profile">
                    
                    <div className="content-myprofile">
                        <div className="left-my-profile">
                            <div className="profile-container">
                                <div className="profile-header">
                                    <div className="profile-image">
                                        <img src="default-profile-icon.png" alt="Profile" />
                                            <div className="edit-icon">
                                                <img src="edit-icon.png" alt="Edit" />
                                            </div>
                                    </div>
                                    <div className="profile-name">
                                        <h2 className="font-extrabold text-4xl">qeew qwdd</h2>
                                        <a href="#" className="edit-link">Edit</a>
                                    </div>
                                </div>

                                <div className="profile-details">
                                    <div className="profile-detail">
                                        <span className="font-bold">First name</span>
                                        <p>qeew</p>
                                    </div>
                                    <div className="profile-detail">
                                        <span className="font-bold">Last name</span>
                                        <p>qwdd</p>
                                    </div>
                                    <div className="profile-detail">
                                        <span className="font-bold">Mobile number</span>
                                        <p>+91 1481 687 958</p>
                                    </div>
                                    <div className="profile-detail">
                                        <span className="font-bold">Email</span>
                                        <p>iuiuiu@gmai.com</p>
                                    </div>
                                    <div className="profile-detail">
                                        <span className="font-bold">Date of birth</span>
                                        <p>–</p>
                                    </div>
                                    <div className="profile-detail">
                                        <span className="font-bold">Gender</span>
                                        <p>–</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ======== right profile container ======== */}

                        <div className="right-profile-container">
                            <div className="right-my-profile">
                                <p className="w-full font-bold text-2xl">My address</p>
                                <div className="border rounded-lg w-full p-4">
                                    <div className="first">
                                        <div className="svg-div"></div>
                                        <p>
                                            <b>Add to calendar </b><br />
                                            <span>Set yourself a reminder.</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="border rounded-lg w-full p-4">
                                    <div className="first">
                                        <div className="svg-div"></div>
                                        <p>
                                            <b>Add to calendar </b><br />
                                            <span>Set yourself a reminder.</span>
                                        </p>
                                        <hr />
                                    </div>
                                </div>
                                <div className="add-btn border rounded-xl w-16 font-bold">
                                    <button>+ Add</button>
                                </div>
                            </div>
                            <div className="right-my-profile" id="debit-card">
                                <p className="w-full font-bold text-2xl">Cards</p>
                                <div className="border rounded-lg w-full p-4">
                                    <div className="first">
                                        <div className="svg-div"></div>
                                        <p>
                                            <b>Add to debit/credit card </b>

                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="right-my-profile">
                                <p className="w-full font-bold text-2xl">My Social logins.
                                    <br /><p className="mt-2 font-light text-sm text-gray-400">Link social profiles for easier access to your Fresha account</p>
                                </p>
                                <div className="w-full p-4">
                                    <div className="first" id="facebook-div">
                                        <div className=""> Facebook</div>
                                        <div className="add-btn border rounded-xl w-24 text-center font-bold">
                                            <button>Connect</button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className=" w-full p-4">
                                    <div className="first" id="facebook-div">
                                        <div className=""> Google</div>
                                        <div className="add-btn border rounded-xl w-24 font-bold text-center">
                                            <button>Connect</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="right-my-profile">
                                <p className="w-full font-bold text-2xl">My Social logins.
                                    <br /><p className="mt-2 font-light text-sm text-gray-400">Link social profiles for easier access to your Fresha account</p>
                                </p>
                                <div className="w-full p-4">
                                    <div className="first" id="facebook-div">
                                        <div className=""><p>Text message appointment notifications
                                            <br />
                                            Receive texts based on your senders settings</p></div>
                                        <div className="add-btn border rounded-xl w-24 text-center font-bold">
                                            <button>Connect</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-4">
                                    <div className="first" id="facebook-div">
                                        <div className=""><p>Text message appointment notifications
                                            <br />
                                            Receive texts based on your senders settings</p></div>
                                        <div className="add-btn border rounded-xl w-24 text-center font-bold">
                                            <button>Connect</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-my-profile">
                                <p className="w-full font-bold text-2xl">Delete Account<br />
                                    <span className="font-light text-sm"> Lorem ipsum dolor, sit amet consectetur adipisicing.</span></p>
                                    <div className="border p-4 rounded-xl">
                                        <div className="delete-btn font-bold text-red-700">delete my account</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default User_profile;
