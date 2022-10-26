import React from "react";
import classes from "./MarketplaceCategories.module.css";
import CategoryItem from "./helpers/CategoryItem";
import { Link } from "react-router-dom";

const MarketplaceCategories = () => {
  return (
    <div className={classes.main}>
      <section className={classes.categoriesList}>
        <h6>Categories</h6>
        <ul>
          <li>
            <div className={classes.arrow}> </div>
            <Link to="tech">Tech</Link>
          </li>

          <li>
            <div className={classes.arrow}> </div>
            <Link to="games">Games</Link>
          </li>
          <li>
            <div className={classes.arrow}> </div>
            <Link to="miniatures">Miniatures</Link>
          </li>
        </ul>
      </section>
      <section className={classes.content}>
        <div className={classes.title}>
          <h2>Factory L 3D Printing Marketplace</h2>
        </div>
        <div className={classes.categoriesWithImages}>
          <CategoryItem
            item1="Cars"
            item2="Cameras"
            item3="Drones"
            link1="tech/cars"
            link2="tech/cameras"
            link3="tech/drones"
            title="Tech"
            link="tech"
            image="https://static1.sw-cdn.net/cdn-cgi/image/quality=85,gravity=auto,format=auto,fit=scale-down,width=1920/files/cms/homepage/tech-categoryheader-rc-cars3.jpg"
          />

          <CategoryItem
            item1="Dice"
            item2="Toys"
            item3="Board Games"
            link1="games/dice"
            link2="games/toys"
            link3="games/board-games"
            title="Games"
            link="games"
            image="https://images1.sw-cdn.net/cdn-cgi/image/quality=85,gravity=auto,format=auto,fit=scale-down,width=1920/product/picture/625x465_11550233_2738927_1459344027.jpg"
          />
          <CategoryItem
            item1="Figurines"
            item2="Vehicles"
            item3="Ships"
            link1="miniatures/figurines"
            link2="miniatures/vehicles"
            link3="miniatures/ships"
            title="Miniatures"
            link="miniatures"
            image="https://images1.sw-cdn.net/cdn-cgi/image/quality=85,gravity=auto,format=auto,fit=scale-down,width=1920/product/picture/625x465_13553413_8232332_1462019511.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default MarketplaceCategories;
