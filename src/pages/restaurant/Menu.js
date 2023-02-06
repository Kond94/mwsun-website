import React from "react";

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, name, displayPhoto, description, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img
              src={process.env.REACT_APP_UPLOADS_URL + "" + displayPhoto}
              alt={name}
              className='photo'
            />
            <div className='item-info'>
              <div>
                <h5>{name}</h5>
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
