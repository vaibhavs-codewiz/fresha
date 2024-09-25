import Details from './component/Details.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Booking from './component/Booking.jsx'
import Time from './component/Time.jsx'
import First_visit_check from "./component/First_visit_check.jsx"
import Review_confirm from './component/Review_confirm.jsx'
import Appointment from "./component/Appointment.jsx"
import User_profile from "./component/User_profile.jsx"
import Select_professional from './component/Select_professional.jsx'  
import Reschedule_appointments from './component/Reschedule_appointments.jsx'
import React from 'react'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Details />}></Route>
          <Route path="/Booking" element={<Booking />}></Route>
          <Route path="/Time" element={<Time />}></Route>
          <Route path="/First_visit_check" element={<First_visit_check />}></Route>
          <Route path="/Review_confirm" element={<Review_confirm />}></Route>
          <Route path="/Appointment/User_profile" element={<User_profile />}></Route>
          <Route path="/Appointment" element={<Appointment />}></Route>
          <Route path="/Select_professional" element={<Select_professional />}></Route>
          <Route path='/Reschedule_appointments' element={<Reschedule_appointments />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
