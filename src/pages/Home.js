import React, { Fragment, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Map from "../components/Map";
import axios from "axios";
import video from "../assets/msh.mp4";

function Home() {
  const [error, setError] = useState(null);
  const [promotionRooms, setPromotionRooms] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${"6a5d48ccb58a2375824da5a06d309505b68e5dffadab817315d16463d70a9630b6b0a9dbd9bffb79990d6359c4f5fa6626f3242dcbb255e41ad0c85023a0dcda1c97bf0e1920a0bc3c20c1a87f94fcbe85cd3c58ca2baa5636be52c72b8d85377fadc66c3f2d3c7e5db8122025f6ca3c7f7916b36f84caa52202e785505970aa"}`,
      },
    };

    axios
      .get(
        "https://mwsun-strapi.onrender.com/api/promotion-rooms" +
          "?populate[room][populate][0]=displayPhoto",
        config
      )
      .then(({ data }) => {
        setPromotionRooms(data.data);
      })
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <Fragment>
      <div className='wrapper'>
        {/* ========== REVOLUTION SLIDER ========== */}
        <div className='rev_slider_wrapper fullscreen-container'>
          <div
            id='fullscreen_hero_video'
            className='rev_slider fullscreenbanner gradient_slider'
            style={{ display: "none" }}
          >
            <ul>
              <li data-transition='fade'>
                {/* MAIN IMAGE */}
                <img
                  alt=''
                  src='assets/images/slider/video_fullscreen.jpg'
                  data-bgposition='center center'
                  data-bgfit='cover'
                  data-bgrepeat='no-repeat'
                  data-bgparallax='3'
                  className='rev-slidebg'
                  data-no-retina
                />

                <video
                  id='myVideo'
                  className='videoTag rs-background-video-layer'
                  autoPlay
                  loop
                  muted
                  width='100%'
                >
                  <source src={video} type='video/mp4' />
                </video>

                {/* LAYER NR. 1 */}
                <div
                  className='tp-caption gradient_overlay'
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width='full'
                  data-height='full'
                  data-whitespace='nowrap'
                  data-transform_idle='o:1;'
                  data-transform_in='opacity:0;s:1500;e:Power3.easeInOut;'
                  data-transform_out='opacity:0;s:500;s:500;'
                  data-start='0'
                  data-basealign='slide'
                  data-responsive_offset='off'
                  data-responsive='off'
                  style={{ zIndex: 7, borderColor: "#000" }}
                ></div>
                <a
                  className='tp-caption'
                  href='booking-form.html'
                  data-x='center'
                  data-hoffset=''
                  data-y='middle'
                  data-voffset='-110'
                  data-fontsize='24'
                  data-responsive_offset='on'
                  data-whitespace='nowrap'
                  data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                  style={{ zIndex: 11, color: "#ffff" }}
                >
                  Welcome To
                </a>
                <div
                  className='tp-caption tp-resizeme font-link'
                  data-x='center'
                  data-hoffset=''
                  data-y='middle'
                  data-voffset=''
                  data-fontsize="['100','90','70','60']"
                  data-lineheight="['100','90','70','60']"
                  data-whitespace='nowrap'
                  data-responsive_offset='on'
                  data-frames='[{"delay":1800,"speed":2500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                  style={{
                    zIndex: 99,
                    color: "#fff",
                    fontWeight: 900,
                    justifyItems: "center",
                    justifyContent: "center",
                    textJustify: "auto",
                  }}
                >
                  MALAWI SUN
                  <br />
                  HOTEL
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ========== ROOMS ========== */}
        <section className='white_bg' id='rooms'>
          <div className='container'>
            <div className='main_title mt_wave mt_blue a_center'>
              <h2>OUR FAVORITE ROOMS</h2>
            </div>
            <p className='main_description a_center'>
              Step into any of our 92 rooms and suites and immediately feel
              welcome with warm, neutral tones and comfortable furnishings.
              Along with breathtaking city views, guests enjoy conveniences such
              as in-room safes and tea and coffee facilities. For extended
              stays, we offer one, two and three bedroom suites complete with a
              sitting area, kitchen, and guest bathroom. Accessible and
              interconnecting rooms are available on request.
            </p>
            <div className='row'>
              {/* ITEM */}
              {promotionRooms.map((promotionRoom) => {
                const currentRoom = {
                  ...promotionRoom.attributes,
                  room: {
                    id: promotionRoom.attributes.room.data.id,
                    ...promotionRoom.attributes.room.data.attributes,
                  },
                };
                return (
                  <div key={currentRoom.promotionName} className='col-md-4'>
                    <article className='room'>
                      <figure>
                        {currentRoom.discount > 0 ? (
                          <div className='price'>
                            <span
                              style={{
                                textDecoration: "line-through",
                                color: "yellow",
                              }}
                            >
                              was ${currentRoom.room.price}
                            </span>
                            {"   NOW"} $
                            {currentRoom.room.price -
                              (currentRoom.discount / 100) *
                                currentRoom.room.price}
                            <span>/ night</span>
                          </div>
                        ) : (
                          <div className='price'>
                            <span> ${currentRoom.room.price}/ night</span>
                          </div>
                        )}
                        <Link
                          className='hover_effect h_blue h_link'
                          to='/accomodation/room'
                          state={{ roomId: currentRoom.room.id }}
                        >
                          <img
                            alt=''
                            src={
                              "https://mwsun-strapi.onrender.com" +
                              currentRoom.room.displayPhoto.data.attributes.url
                            }
                            className='img-responsive'
                          />
                        </Link>
                        <figcaption>
                          <h4>
                            <a href='room.html'>Single Room</a>
                          </h4>
                          <span className='f_right'>
                            <Link
                              to='/accomodation/room'
                              state={{ roomId: currentRoom.room.id }}
                              className='button btn_sm btn_blue'
                            >
                              VIEW DETAILS
                            </Link>
                          </span>
                        </figcaption>
                      </figure>
                    </article>
                  </div>
                );
              })}
            </div>
            <div className='mt40 a_center'>
              <Link className='button btn_sm btn_yellow' to='/accomodation'>
                VIEW ALL ROOMS
              </Link>
            </div>
          </div>
        </section>

        {/* ========== FEATURES ========== */}
        <section className='lightgrey_bg' id='features'>
          <div className='container'>
            <div className='main_title mt_wave mt_blue a_center'>
              <h2>OUR AWESOME SERVICES</h2>
            </div>
            <p className='main_description a_center'>
              Boasting a shared lounge and a garden, Malawi Sun Hotel is
              situated in Blantyre, 4.9 km from Kamuzu Stadium and 10 km from
              Limbe Country Club. Among the facilities of this property are a
              restaurant, a 24-hour front desk and room service, along with free
              WiFi throughout the property. The hotel has family rooms.
            </p>
            <div className='row'>
              <div className='col-md-7'>
                <div
                  data-slider-id='features'
                  id='features_slider'
                  className='owl-carousel'
                >
                  <div>
                    <img
                      src='assets/images/restaurant.jpg'
                      className='img-responsive'
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      src='assets/images/venus_ballroom.jpg'
                      className='img-responsive'
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      src='assets/images/venus_conference.jpg'
                      className='img-responsive'
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      src='assets/images/boardroom.jpg'
                      className='img-responsive'
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='owl-thumbs' data-slider-id='features'>
                  <div className='owl-thumb-item'>
                    <span className='media-left'>
                      <i className='flaticon-food'></i>
                    </span>
                    <div className='media-body'>
                      <h5>Restaurant</h5>
                      <p>
                        Let Aamari treat you to delicious international and
                        local cuisine.
                      </p>
                    </div>
                  </div>
                  <div className='owl-thumb-item'>
                    <span className='media-left'>
                      <i className='flaticon-person'></i>
                    </span>
                    <div className='media-body'>
                      <h5>Ballrooms</h5>
                      <p>
                        Looking to rent a venue for your next event? Our
                        ballroom is ideal for any special occasion or corporate
                        event.
                      </p>
                    </div>
                  </div>
                  <div className='owl-thumb-item'>
                    <span className='media-left'>
                      <i className='flaticon-business'></i>
                    </span>
                    <div className='media-body'>
                      <h5>Conference Room</h5>
                      <p>
                        Malawi Sun offers everything you need for a successful
                        corporate meeting or social affair..
                      </p>
                    </div>
                  </div>
                  <div className='owl-thumb-item'>
                    <span className='media-left'>
                      <i className='flaticon-beach'></i>
                    </span>
                    <div className='media-body'>
                      <h5>Board Room</h5>
                      <p>
                        The facility has three boardrooms with a maximum
                        capacity of 20 people...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== GALLERY ========== */}
        <section id='gallery_style_2' className='white_bg'>
          <div className='container'>
            <div className='main_title mt_wave mt_blue a_center'>
              <h2>AROUND THE HOTEL</h2>
            </div>
            <p className='main_description a_center'>
              From a scenic view of Ndirande mountain. To Classic Architecture.
              To Modern rooms. Malawi Sun Hotel provides the perfect blend for a
              calm relaxing stay.
            </p>
            <div className='row'>
              <div className='image-gallery'>
                {/* ITEM */}
                <div className='col-md-3 col-sm-4'>
                  <figure className='gs2_item'>
                    <a
                      href='assets/images/gallery/MSH1.jpg'
                      className='hover_effect h_lightbox h_blue'
                    >
                      <img
                        alt=''
                        src='assets/images/gallery/MSH1.jpg'
                        className='img-responsive'
                      />
                    </a>
                  </figure>
                </div>
                {/* ITEM */}
                <div className='col-md-3 col-sm-4'>
                  <figure className='gs2_item'>
                    <a
                      href='assets/images/gallery/MSH2.jpg'
                      className='hover_effect h_lightbox h_blue'
                    >
                      <img
                        alt=''
                        src='assets/images/gallery/MSH2.jpg'
                        className='img-responsive'
                      />
                    </a>
                  </figure>
                </div>
                {/* ITEM */}
                <div className='col-md-3 col-sm-4'>
                  <figure className='gs2_item'>
                    <a
                      href='assets/images/gallery/MSH3.jpg'
                      className='hover_effect h_lightbox h_blue'
                    >
                      <img
                        alt=''
                        src='assets/images/gallery/MSH3.jpg'
                        className='img-responsive'
                      />
                    </a>
                  </figure>
                </div>
                {/* ITEM */}
                <div className='col-md-3 col-sm-4'>
                  <figure className='gs2_item'>
                    <a
                      href='assets/images/gallery/MSH4.jpg'
                      className='hover_effect h_lightbox h_blue'
                    >
                      <img
                        alt=''
                        src='assets/images/gallery/MSH4.jpg'
                        className='img-responsive'
                      />
                    </a>
                  </figure>
                </div>
                {/* ITEM */}
                <div className='col-md-3 col-sm-4'>
                  <figure className='gs2_item'>
                    <a
                      href='assets/images/gallery/MSH5.jpg'
                      className='hover_effect h_lightbox h_blue'
                    >
                      <img
                        alt=''
                        src='assets/images/gallery/MSH5.jpg'
                        className='img-responsive'
                      />
                    </a>
                  </figure>
                </div>
                {/* ITEM */}
                <div className='col-md-3 col-sm-4'>
                  <figure className='gs2_item'>
                    <a
                      href='assets/images/gallery/MSH6.jpg'
                      className='hover_effect h_lightbox h_blue'
                    >
                      <img
                        alt=''
                        src='assets/images/gallery/MSH6.jpg'
                        className='img-responsive'
                      />
                    </a>
                  </figure>
                </div>
                {/* ITEM */}
                <div className='col-md-3 col-sm-4'>
                  <figure className='gs2_item'>
                    <a
                      href='assets/images/gallery/MSH7.jpg'
                      className='hover_effect h_lightbox h_blue'
                    >
                      <img
                        alt=''
                        src='assets/images/gallery/MSH7.jpg'
                        className='img-responsive'
                      />
                    </a>
                  </figure>
                </div>
                {/* ITEM */}
                <div className='col-md-3 col-sm-4'>
                  <figure className='gs2_item'>
                    <a
                      href='assets/images/gallery/MSH8.jpg'
                      className='hover_effect h_lightbox h_blue'
                    >
                      <img
                        alt=''
                        src='assets/images/gallery/MSH8.jpg'
                        className='img-responsive'
                      />
                    </a>
                  </figure>
                </div>
                {/* ITEM */}
                <div className='col-md-3 col-sm-4'>
                  <figure className='gs2_item'>
                    <a
                      href='assets/images/gallery/MSH9.jpg'
                      className='hover_effect h_lightbox h_blue'
                    >
                      <img
                        alt=''
                        src='assets/images/gallery/MSH9.jpg'
                        className='img-responsive'
                      />
                    </a>
                  </figure>
                </div>
                {/* ITEM */}
                <div className='col-md-3 col-sm-4'>
                  <figure className='gs2_item'>
                    <a
                      href='assets/images/gallery/MSH10.jpg'
                      className='hover_effect h_lightbox h_blue'
                    >
                      <img
                        alt=''
                        src='assets/images/gallery/MSH10.jpg'
                        className='img-responsive'
                      />
                    </a>
                  </figure>
                </div>
                {/* ITEM */}
                <div className='col-md-3 col-sm-4'>
                  <figure className='gs2_item'>
                    <a
                      href='assets/images/gallery/MSH11.jpg'
                      className='hover_effect h_lightbox h_blue'
                    >
                      <img
                        alt=''
                        src='assets/images/gallery/MSH11.jpg'
                        className='img-responsive'
                      />
                    </a>
                  </figure>
                </div>
                {/* ITEM */}
                <div className='col-md-3 col-sm-4'>
                  <figure className='gs2_item'>
                    <a
                      href='assets/images/gallery/MSH12.jpg'
                      className='hover_effect h_lightbox h_blue'
                    >
                      <img
                        alt=''
                        src='assets/images/gallery/MSH12.jpg'
                        className='img-responsive'
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CONTACT ========== */}
        <section className='white_bg' id='contact'>
          <div className='container'>
            <div className='main_title mt_wave mt_blue a_center'>
              <h2 className='c_title'>LOCATION - CONTACT US</h2>
            </div>
            <p className='main_description a_center'>
              You can contact us directly through this website using the form
              below. Or you can eamil or phone us. Either way be assured of a
              response within 15 minuites.
            </p>
            <div className='row'>
              <div className='col-md-6'>
                <Map />
              </div>
              <div className='col-md-6'>
                <div className='row'>
                  <div className='contact-items'>
                    <div className='col-md-4 col-sm-4'>
                      <div className='contact-item'>
                        <i className='glyphicon glyphicon-map-marker'></i>
                        <h6>5 Robins Road, Blantyre</h6>
                      </div>
                    </div>
                    <div className='col-md-3 col-sm-3'>
                      <div className='contact-item'>
                        <i className='glyphicon glyphicon-phone-alt'></i>
                        <h6>265-1-824-808</h6>
                      </div>
                    </div>
                    <div className='col-md-5 col-sm-5'>
                      <div className='contact-item'>
                        <i className='fa fa-envelope'></i>
                        <h6>info@malawisunhotel.com</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <form id='contact-form' name='contact-form'>
                  <div id='contact-result'></div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      name='name'
                      placeholder='Your Name'
                      type='text'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      name='email'
                      type='email'
                      placeholder='Your Email Address'
                    />
                  </div>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      name='message'
                      placeholder='Your Message'
                    ></textarea>
                  </div>
                  <button
                    className='button btn_lg btn_blue btn_full upper'
                    type='submit'
                  >
                    <i className='fa fa-location-arrow'></i>Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========== BACK TO TOP ========== */}
      <div id='back_to_top'>
        <i className='fa fa-angle-up' aria-hidden='true'></i>
      </div>

      {/* ========== NOTIFICATION ========== */}
      <div id='notification'></div>
    </Fragment>
  );
}

export default Home;
