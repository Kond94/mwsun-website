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
        Authorization: `Bearer ${"6a5d48ccb58a2375824da5a06d309505b68e5dffadab817315d16463d70a9630b6b0a9dbd9bffb79990d6359c4f5fa6626f3242dcbb255e41ad0c85023a0dcda1c97bf0e1920a0bc3c20c1a87f94fcbe85cd3c58ca2baa5636be52c72b8d85377fadc66c3f2d3c7e5db8122025f6ca3c7f7916b36f84caa52202e785505970aa"}`,
      },
    };

    axios
      .get(
        "https://mwsun-strapi.onrender.com/api/rooms" + "?populate=*",
        config
      )
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
                <div key={id.toString()} className='col-md-6 col-sm-6'>
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
                              "https://mwsun-strapi.onrender.com" +
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
                            {attributes.anemities.data.map((anemity) => (
                              <i
                                key={Math.floor(Math.random() * 100)}
                                className={anemity.attributes.icon}
                                data-toggle='popover'
                                data-placement='top'
                                data-trigger='hover'
                                data-content={anemity.attributes.description}
                                data-original-title={anemity.attributes.name}
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
