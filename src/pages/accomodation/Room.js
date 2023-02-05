import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Link, useLocation } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";

import { Carousel } from "react-responsive-carousel";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import useBreadcrumbs from "use-react-router-breadcrumbs";

function Room() {
  const location = useLocation();
  const { roomId } = location.state;

  const [error, setError] = useState(null);
  const [room, setRoom] = useState({
    attributes: { title: "", price: 0, description: "", images: [] },
  });

  const breadcrumbs = useBreadcrumbs();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${"6a5d48ccb58a2375824da5a06d309505b68e5dffadab817315d16463d70a9630b6b0a9dbd9bffb79990d6359c4f5fa6626f3242dcbb255e41ad0c85023a0dcda1c97bf0e1920a0bc3c20c1a87f94fcbe85cd3c58ca2baa5636be52c72b8d85377fadc66c3f2d3c7e5db8122025f6ca3c7f7916b36f84caa52202e785505970aa"}`,
      },
    };

    axios
      .get(
        "https://mwsun-strapi.onrender.com/api/rooms/" + roomId + "?populate=*",
        config
      )
      .then(({ data }) => {
        setRoom({
          ...data.data.attributes,
          images: data.data.attributes.images.data.map(
            (image) => image.attributes.url
          ),
        });
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);
  return (
    <Fragment>
      {/* =========== PAGE TITLE ========== */}

      <PageTitle
        title={room.title}
        breadcrumbs={breadcrumbs}
        lastCrumb={room.title}
        badge={"$ " + room.price}
      />

      {/* =========== MAIN ========== */}
      <main id='room_page'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <Carousel autoPlay infiniteLoop width='100%'>
                {room.images?.map((image) => (
                  <div key={image}>
                    <img
                      src={"https://mwsun-strapi.onrender.com" + image}
                      alt=''
                    />
                    <p className='legend'>Legend 1</p>
                  </div>
                ))}
              </Carousel>

              <div className='main_title t_style a_left s_title mt50'>
                <div className='c_inner'>
                  <h2 className='c_title'>ROOM SERVICES</h2>
                </div>
              </div>
              <div className='room_facilitys_list'>
                <div className='all_facility_list'>
                  <div className='col-sm-4 nopadding'>
                    <ul className='list-unstyled'>
                      <li>
                        <i className='fa fa-check'></i>Double Bed
                      </li>

                      <li>
                        <i className='fa fa-check'></i>Free Wi-Fi
                      </li>
                      <li>
                        <i className='fa fa-check'></i>Breakfast Included
                      </li>
                    </ul>
                  </div>
                  <div className='col-sm-4 nopadding'>
                    <ul className='list-unstyled'>
                      <li className='no'>
                        <i className='fa fa-times'></i>Flat Screen Tv
                      </li>
                      <li>
                        <i className='fa fa-check'></i>Private Balcony
                      </li>
                      <li>
                        <i className='fa fa-check'></i>Full Ac
                      </li>
                    </ul>
                  </div>
                  <div className='col-sm-4 nopadding_left'>
                    <ul className='list-unstyled'></ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='sidebar'>
                <aside className='widget'>
                  <div className='vbf'>
                    <h2 className='form_title'>
                      <i className='fa fa-calendar'></i> BOOK ONLINE
                    </h2>
                    <form id='booking-form' className='inner'>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          name='booking-name'
                          placeholder='Enter Your Name'
                          type='text'
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          name='booking-email'
                          placeholder='Enter Your Email Address'
                          type='email'
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          name='booking-phone'
                          placeholder='Enter Your Phone Number'
                          type='text'
                        />
                      </div>
                      <div className='form-group'>
                        <div className='form_select'>
                          <select
                            name='booking-roomtype'
                            className='form-control'
                            title='Select Room Type'
                            data-header='Room Type'
                            disabled
                          >
                            <option value='Single Room'>Single Room</option>
                            <option value='Double Room'>Double Room</option>
                            <option value='Deluxe Room'>Deluxe Room</option>
                          </select>
                        </div>
                      </div>
                      <div className='form-group col-md-6 col-sm-6 col-xs-12 nopadding'>
                        <div className='form_select'>
                          <select
                            name='booking-adults'
                            className='form-control md_noborder_right'
                            title='Adults'
                            data-header='Adults'
                          >
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                          </select>
                        </div>
                      </div>
                      <div className='form-group col-md-6 col-sm-6 col-xs-12 nopadding'>
                        <div className='form_select'>
                          <select
                            name='booking-children'
                            className='form-control'
                            title='Children'
                            data-header='Children'
                          >
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                          </select>
                        </div>
                      </div>
                      <div className='form-group col-md-6 col-sm-6 col-xs-12 nopadding'>
                        <div className='input-group'>
                          <div className='form_date'>
                            <input
                              type='text'
                              className='datepicker form-control md_noborder_right'
                              name='booking-checkin'
                              placeholder='Arrival Date'
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div className='form-group col-md-6 col-sm-6 col-xs-12 nopadding'>
                        <div className='input-group'>
                          <div className='form_date'>
                            <input
                              type='text'
                              className='datepicker form-control'
                              name='booking-checkout'
                              placeholder='Departure Date'
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className='button btn_lg btn_blue btn_full'
                        type='submit'
                      >
                        BOOK A ROOM NOW
                      </button>
                      <div className='a_center mt10'>
                        <a href='booking-form.html' className='a_b_f'>
                          Advanced Booking Form
                        </a>
                      </div>
                    </form>
                  </div>
                </aside>
                <aside className='widget'>
                  <h4>NEED HELP?</h4>
                  <div className='help'>
                    If you have any question please don't hesitate to contact us
                    <div className='phone'>
                      <i className='fa  fa-phone'></i>
                      <a href='tel:18475555555'> 1-888-123-4567 </a>
                    </div>
                    <div className='email'>
                      <i className='fa  fa-envelope-o '></i>
                      <a href='mailto:contact@site.com'>contact@site.com</a> or
                      use <a href='contact.html'> contact form</a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Room;
