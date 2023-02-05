import React, { Fragment } from "react";

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, image, description, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img
              src={"https://mwsun-strapi.onrender.com" + image}
              alt={title}
              className='photo'
            />
            <div className='item-info'>
              <div>
                <h5>{title}</h5>
                <h4 className='price'>${price}</h4>
              </div>
              <p className='item-text'>{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
