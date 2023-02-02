import { Link, useLocation } from "react-router-dom";
import React, { Fragment } from "react";

function Header() {
  const location = useLocation();
  return (
    <Fragment>
      <header
        className={`fixed ${location.pathname === "/" ? "transparent" : ""}`}
      >
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle mobile_menu_btn'
              data-toggle='collapse'
              data-target='.mobile_menu'
              aria-expanded='false'
            >
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link className='navbar-brand light' to='/'>
              <img alt='' src='assets/images/mwsun_logo.png' height='40' />
            </Link>
            <Link className='navbar-brand dark nodisplay' to='/'>
              <img alt='' src='assets/images/mwsun_logo.jpg' height='40' />
            </Link>
          </div>
          <nav id='main_menu' className='mobile_menu navbar-collapse font-link'>
            <ul className='nav navbar-nav'>
              <li className='mobile_menu_title' style={{ display: "none" }}>
                MENU
              </li>
              <li className='active'>
                <Link to='/' className='menu_button'>
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to='/accomodation'
                  className='menu_button'
                  data-toggle='dropdown'
                >
                  Accomodation
                </Link>
              </li>
              <li>
                <Link
                  to='/restaurant'
                  className='menu_button'
                  data-toggle='dropdown'
                >
                  Restaurant
                </Link>
              </li>
              {/* <li>
                <Link
                  to='/conferencing'
                  className='menu_button'
                  data-toggle='dropdown'
                >
                  CONFERENCING
                </Link>
              </li> */}
              <li>
                <Link
                  to='/contact'
                  className='menu_button'
                  data-toggle='dropdown'
                >
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='menu_button'
                  data-toggle='dropdown'
                >
                  ABOUT US
                </Link>
              </li>
              <li className='menu_button'>
                <Link to='/booking' className='button  btn_yellow'>
                  <i className='fa fa-calendar'></i>BOOK ONLINE
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
