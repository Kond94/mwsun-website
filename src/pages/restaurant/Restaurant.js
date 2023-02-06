import React, { Fragment, useEffect, useState } from "react";

import Categories from "./Categories";
import Menu from "./Menu";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import useBreadcrumbs from "use-react-router-breadcrumbs";

function Restaurant() {
  const [allMeals, setAllMeals] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const breadcrumbs = useBreadcrumbs();
  const [error, setError] = useState(null);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    };

    axios
      .get(process.env.REACT_APP_API_URL + "/api/meals" + "?populate=*", config)
      .then(({ data }) => {
        const allMeals = data.data.map((meal) => {
          console.log(meal.attributes);

          return {
            id: meal.id,
            ...meal.attributes,
            displayPhoto: meal.attributes.displayPhoto.data.attributes.url,
          };
        });
        const categories = [
          ...new Set(["All", ...allMeals.map((meal) => meal.category)]),
        ];

        setCategories(categories);
        setAllMeals(allMeals);
        setMenuItems(allMeals);
      })
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  const filterItems = (category) => {
    console.log("click", category);
    if (category === "All") {
      setMenuItems(allMeals);
      return;
    }
    const newItems = allMeals.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <Fragment>
      <PageTitle
        title='Aamari Restaurant'
        breadcrumbs={breadcrumbs}
        pageDescription='Aamari is scruptuos'
      />
      <section className='menu section'>
        <div className='title'>
          <h1>Our Menu</h1>
          <div className='underline' />
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </Fragment>
  );
}

export default Restaurant;
