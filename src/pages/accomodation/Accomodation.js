import React, { Fragment, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import useBreadcrumbs from "use-react-router-breadcrumbs";

function Accomodation() {
  const [error, setError] = useState(null);
  const [rooms, setRooms] = useState([]);
  const breadcrumbs = useBreadcrumbs();
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    };

    axios
      .get(process.env.REACT_APP_API_URL + "/api/rooms" + "?populate=*", config)
      .then(({ data }) => {
        setRooms(data.data);
      })
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <Fragment>
      <PageTitle
        title='Accomodation'
        breadcrumbs={breadcrumbs}
        pageDescription='Step into any of our 92 rooms and suites and immediately feel welcome with warm, neutral tones and comfortable furnishings.'
      />
      {/* ========== MAIN ========== */}
      <main id='rooms_block_view'>
        <div className='container'>
          <br />
          <div className='row'>
            {rooms !== [] &&
              rooms.map(({ id, attributes }) => (
                <div
                  key={Math.floor(Math.random() * 100)}
                  className='col-md-6 col-sm-6'
                >
                  <article className='room_block_item'>
                    <div className='row'>
                      <div className='col-lg-6 col-md-12'>
                        <Link
                          to='/accomodation/room'
                          state={{ roomId: id }}
                          className='hover_effect h_link h_blue'
                        >
                          <img
                            src={
                              process.env.REACT_APP_UPLOADS_URL +
                              "" +
                              attributes.displayPhoto.data.attributes.url
                            }
                            className='img-responsive'
                            alt=''
                          />
                        </Link>
                      </div>
                      <div className='col-lg-6 col-md-12'>
                        <div className='room_info'>
                          <h3>
                            <Link
                              to='/accomodation/room'
                              state={{ roomId: id }}
                            >
                              {attributes.title}
                            </Link>
                          </h3>
                          <span>${attributes.price} / night</span>
                          <p>{attributes.description}</p>
                          <div className='room_services'>
                            {attributes.amenities.data.map((amenity) => (
                              <i
                                key={Math.floor(Math.random() * 100)}
                                className={amenity.attributes.icon}
                                data-toggle='popover'
                                data-placement='top'
                                data-trigger='hover'
                                data-content={amenity.attributes.description}
                                data-original-title={amenity.attributes.name}
                              ></i>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Accomodation;
