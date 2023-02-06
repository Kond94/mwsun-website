import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About";
import Accomodation from "./pages/accomodation/Accomodation";
import Booking from "./pages/Booking";
import Conferencing from "./pages/Conferencing";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Restaurant from "./pages/restaurant/Restaurant";
import Room from "./pages/accomodation/Room";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div id='smoothpage' className='App font-link wrapper'>
      {/* ========== PRELOADER ========== */}
      <div id='loading'>
        <div className='inner'>
          <div className='loading_effect'>
            <div className='object' id='object_one'></div>
            <div className='object' id='object_two'></div>
            <div className='object' id='object_three'></div>
          </div>
        </div>
      </div>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/accomodation' element={<Accomodation />} />
          <Route path='/accomodation/room' element={<Room />} />
          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='/conferencing' element={<Conferencing />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
      {/* <About /> */}
    </div>
  );
}

export default App;
