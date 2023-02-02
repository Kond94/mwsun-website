import React, { Fragment } from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <Fragment>
      {/* ========== FOOTER ========== */}
      <footer>
        <div className='inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-sm-6 widget'>
                <div className='about'>
                  {/* <Link to='/'>
                    <img
                      alt=''
                      className='logo'
                      src='assets/images/logo.svg'
                      height='96'
                    />
                  </Link> */}
                  <p>
                    Boasting a shared lounge and a garden, Malawi Sun Hotel is
                    situated in Blantyre, 4.9 km from Kamuzu Stadium and 10 km
                    from Limbe Country Club.
                  </p>
                  <p>
                    Among the facilities of this property are a restaurant, a
                    24-hour front desk and room service, along with free WiFi
                    throughout the property. The hotel has family rooms.
                  </p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6 widget'></div>
              <div className='col-md-3 col-sm-6 widget'>
                <h5>Useful Links</h5>
                <ul className='useful_links'>
                  <li>
                    <Link to='/accomodation'>Accomodation</Link>
                  </li>
                  <li>
                    <Link to='/restaurant'>Restaurant</Link>
                  </li>

                  <li>
                    <Link to='/about'>About Us</Link>
                  </li>
                </ul>
              </div>
              <div className='col-md-3 col-sm-6 widget'>
                <h5>Contact Us</h5>
                <address>
                  <ul className='address_details'>
                    <li>
                      <i className='glyphicon glyphicon-map-marker'></i> 5
                      Robins Road, Blantyre
                    </li>
                    <li>
                      <i className='glyphicon glyphicon-phone-alt'></i> Phone:
                      <br />
                      +265 (1) 824-808
                      <br />
                      +265 (1) 822-969
                    </li>

                    <li>
                      <i className='fa fa-envelope'></i> Email:{" "}
                      <a href='mailto:info@malawisunhotel.com'>
                        info@malawisunhotel.com
                      </a>
                    </li>
                  </ul>
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className='subfooter'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-sm-6'>
                <div className='copyrights'>
                  Copyright {new Date().getFullYear()} Malawi Sun Hotel All
                  Rights Reserved. Created By{" "}
                  <a href='https://kond94.github.io/#/'>Kondwerani Kamsesa</a>
                </div>
              </div>
              <div className='col-md-6 col-sm-6'>
                <div className='social_media'>
                  <a
                    className='facebook'
                    data-original-title='Facebook'
                    data-toggle='tooltip'
                    href='https://web.facebook.com/malawisunhotel'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-facebook'></i>
                  </a>
                  <a
                    className='twitter'
                    data-original-title='Twitter'
                    data-toggle='tooltip'
                    href='https://twitter.com/malawisun'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-twitter'></i>
                  </a>

                  <a
                    className='instagram'
                    data-original-title='Instagram'
                    data-toggle='tooltip'
                    href='https://www.instagram.com/malawi_sun_hotel'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-instagram'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
