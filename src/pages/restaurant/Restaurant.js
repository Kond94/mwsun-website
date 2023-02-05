import React, { Fragment, useEffect, useState } from "react";

import Categories from "./Categories";
import Menu from "./Menu";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import items from "./data";
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
        Authorization: `Bearer ${"6a5d48ccb58a2375824da5a06d309505b68e5dffadab817315d16463d70a9630b6b0a9dbd9bffb79990d6359c4f5fa6626f3242dcbb255e41ad0c85023a0dcda1c97bf0e1920a0bc3c20c1a87f94fcbe85cd3c58ca2baa5636be52c72b8d85377fadc66c3f2d3c7e5db8122025f6ca3c7f7916b36f84caa52202e785505970aa"}`,
      },
    };

    axios
      .get(
        "https://mwsun-strapi.onrender.com/api/meals" + "?populate=*",
        config
      )
      .then(({ data }) => {
        const allMeals = data.data.map((meal) => {
          return {
            id: meal.id,
            ...meal.attributes,
            image: meal.attributes.image.data.attributes.url,
          };
        });
        const categories = ["All", ...allMeals.map((meal) => meal.category)];

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
