import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PageTitle = ({
  title,
  breadcrumbs,
  lastCrumb,
  badge,
  pageDescription,
}) => {
  return (
    <Fragment>
      <div className='page_title gradient_overlay'>
        <div className='container'>
          <div className='inner'>
            <div className='row'>
              <div className='col-md-6 col-sm-6'>
                <h1>{title}</h1>
                <ol className='breadcrumb'>
                  {breadcrumbs.map(({ breadcrumb }) => (
                    <li key={Math.floor(Math.random() * 100)}>
                      <Link to={"#"} className='disabled-link'>
                        {breadcrumb}
                      </Link>
                    </li>
                  ))}
                  {lastCrumb && (
                    <li>
                      <Link to='#' className='disabled-link'>
                        {lastCrumb}
                      </Link>
                    </li>
                  )}
                </ol>
              </div>
              <h5
                style={{
                  color: "#fff",
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                }}
              >
                {pageDescription}
              </h5>
              {badge && (
                <div className='col-md-6 col-sm-6'>
                  <div className='price'>
                    <div className='inner'>
                      {badge}
                      <span>per night</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PageTitle;
