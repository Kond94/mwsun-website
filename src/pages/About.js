import React, { Fragment } from "react";

function About() {
  return (
    <Fragment>
      {/* ========== PAGE TITLE ========== */}
      {/* <div
        className='page_title gradient_overlay'
        style={{ background: "/assets/images/page_title_bg.jpg" }}
      >
        <div className='container'>
          <div className='inner'>
            <h1>ABOUT HOTEL ZANTE</h1>
            <ol className='breadcrumb'>
              <li>
                <a href='index.html'>Home</a>
              </li>
              <li>ABOUT HOTEL ZANTE</li>
            </ol>
          </div>
        </div>
      </div> */}

      {/* ========== MAIN SECTION ========== */}
      <main id='about_us_page'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <h1 className='mb30'>Hotel Zante - Since 1989</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Nam liber
                tempor cum soluta nobis eleifend option congue nihil imperdiet
                doming id quod mazim placerat facer possim assum. Typi non
                habent claritatem insitam; est usus legentis in iis qui facit
                eorum claritatem. Investigationes demonstraverunt lectores
                legere me lius quod ii legunt saepius. Claritas est etiam
                processus dynamicus, qui sequitur mutationem consuetudium
                lectorum. Mirum est notare quam littera gothica, quam nunc
                putamus parum claram, anteposuerit litterarum formas humanitatis
                per seacula quarta decima et quinta decima. Eodem modo typi, qui
                nunc nobis videntur parum clari, fiant sollemnes in futurum.{" "}
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Nam liber
                tempor cum soluta nobis eleifend option congue nihil imperdiet
                doming id quod mazim placerat facer possim assum. Typi non
                habent claritatem insitam; est usus legentis in iis qui facit
                eorum claritatem. Investigationes demonstraverunt lectores
                legere me lius quod ii legunt.{" "}
              </p>
            </div>
            <div className='col-md-5'>
              <div className='about_img'>
                <img
                  src='images/about.jpg'
                  className='img1 img-responsive'
                  alt=''
                />
                <img
                  src='images/about.jpg'
                  className='img2 img-responsive'
                  alt=''
                />
              </div>
              <div className='row'>
                <div className='col-md-3 col-sm-3 col-xs-6'>
                  <div className='countup_box'>
                    <div className='inner'>
                      <div className='countup number' data-count='150'></div>
                      <div className='text'>Rooms</div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-3 col-xs-6'>
                  <div className='countup_box'>
                    <div className='inner'>
                      <div className='countup number' data-count='50'></div>
                      <div className='text'>staffs</div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-3 col-xs-6'>
                  <div className='countup_box'>
                    <div className='inner'>
                      <div className='countup number' data-count='4'></div>
                      <div className='text'>restaurant</div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-3 col-xs-6'>
                  <div className='countup_box'>
                    <div className='inner'>
                      <div className='countup number' data-count='3'></div>
                      <div className='text'>pools</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row image-gallery'>
            <div className='col-md-3 col-sm-6 mt20 mb20 br2'>
              <a
                href='images/restaurant.jpg'
                className='hover_effect h_lightbox h_blue'
              >
                <img
                  src='images/restaurant.jpg'
                  className='img-responsive full_width br2'
                  alt=''
                />
              </a>
            </div>
            <div className='col-md-3 col-sm-6 mt20 mb20 br2'>
              <a
                href='images/spa.jpg'
                className='hover_effect h_lightbox h_blue'
              >
                <img
                  src='images/spa.jpg'
                  className='img-responsive full_width br2'
                  alt=''
                />
              </a>
            </div>
            <div className='col-md-3 col-sm-6 mt20 mb20 br2'>
              <a
                href='images/conference.jpg'
                className='hover_effect h_lightbox h_blue'
              >
                <img
                  src='images/conference.jpg'
                  className='img-responsive full_width br2'
                  alt=''
                />
              </a>
            </div>
            <div className='col-md-3 col-sm-6 mt20 mb20 br2'>
              <a
                href='images/swimming.jpg'
                className='hover_effect h_lightbox h_blue'
              >
                <img
                  src='images/swimming.jpg'
                  className='img-responsive full_width br2'
                  alt=''
                />
              </a>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.{" "}
          </p>
          <ul className='list_menu'>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy
            </li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit..</li>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <p>
            per seacula quarta decima et quinta decima. Eodem modo typi, qui
            nunc nobis videntur parum clari, fiant sollemnes in futurum.Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim
            assum. Typi non habent claritatem insitam; est usus legentis in iis
            qui facit eorum claritatem. Investigationes demonstraverunt lectores
            legere me lius quod ii legunt saepius. Claritas est etiam processus
            dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
            notare quam littera gothica, quam nunc putamus parum claram,
            anteposuerit litterarum formas humanitatis per seacula quarta decima
            et quinta decima. Eodem modo typi, qui nunc nobis videntur parum
            clari, fiant sollemnes in futurum.{" "}
          </p>
        </div>
      </main>
    </Fragment>
  );
}

export default About;
