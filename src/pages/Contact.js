import React, { Fragment } from "react";
import Map from "../components/Map";

function Contact() {
  return (
    <Fragment>
      <div id='smoothpage' className='wrapper'>
        {/* =========== GOOGLE MAP ========== */}
        <div id='map'>
          <br />
          <div className='main_title a_center'>
            <h2>FIND US HERE</h2>
          </div>
          <br />
          <div id='google-map'></div>
          <Map />
        </div>

        {/* ========== MAIN ========== */}
        <main id='contact_page'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
                <div className='main_title a_left'>
                  <h2>CONTACT US</h2>
                </div>
                <form id='contact-form-page'>
                  <div className='row'>
                    <div className='form-group col-md-6 col-sm-6'>
                      <label className='control-label'>Name</label>
                      <input
                        type='text'
                        className='form-control'
                        name='name'
                        placeholder='Your Name'
                      />
                    </div>
                    <div className='form-group col-md-6 col-sm-6'>
                      <label className='control-label'>Phone</label>
                      <input
                        type='text'
                        className='form-control'
                        name='phone'
                        placeholder='Phone'
                      />
                    </div>
                    <div className='form-group col-md-6 col-sm-6'>
                      <label className='control-label'>Email Address</label>
                      <input
                        type='email'
                        className='form-control'
                        name='email'
                        placeholder='Your Email Address'
                      />
                    </div>
                    <div className='form-group col-md-6 col-sm-6'>
                      <label className='control-label'>Subject</label>
                      <input
                        type='text'
                        className='form-control'
                        name='subject'
                        placeholder='Subject'
                      />
                    </div>
                    <div className='form-group col-md-12'>
                      <label className='control-label'>Message</label>
                      <textarea
                        className='form-control'
                        name='message'
                        placeholder='Your Message...'
                      ></textarea>
                    </div>
                    <div className='form-group col-md-12'>
                      <button
                        type='submit'
                        className='button  btn_blue mt40 upper pull-right'
                      >
                        <i
                          className='fa fa-paper-plane-o'
                          aria-hidden='true'
                        ></i>{" "}
                        Send Your Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className='col-md-4'>
                <div className='main_title a_center'>
                  <h2>GET IN TOUCH</h2>
                </div>
                <ul className='contact-info upper'>
                  <li>
                    <span>ADDRESS:</span> 5 Robins Road, Blantyre
                  </li>
                  <li>
                    <span>EMAIL:</span> info@malawisunhotel.com,
                    accomodation@malawisunhotel.com
                  </li>
                  <li>
                    <span>WEB:</span> www.malawisunhotel.com
                  </li>
                  <li>
                    <span>PHONE:</span>+265 (01) <strong>824-808</strong> , +265
                    (01) <strong>822-969</strong>
                  </li>
                </ul>
                <div className='social_media'>
                  <a className='facebook' href='http://localhost:3000'>
                    <i className='fa fa-facebook'></i>
                  </a>
                  <a className='twitter' href='http://localhost:3000'>
                    <i className='fa fa-twitter'></i>
                  </a>
                  <a className='googleplus' href='http://localhost:3000'>
                    <i className='fa fa-google-plus'></i>
                  </a>
                  <a className='pinterest' href='http://localhost:3000'>
                    <i className='fa fa-pinterest'></i>
                  </a>
                  <a className='linkedin' href='http://localhost:3000'>
                    <i className='fa fa-linkedin'></i>
                  </a>
                  <a className='youtube' href='http://localhost:3000'>
                    <i className='fa fa-youtube'></i>
                  </a>
                  <a className='instagram' href='http://localhost:3000'>
                    <i className='fa fa-instagram'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default Contact;
