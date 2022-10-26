import { useEffect, useState } from "react";
import classes from "./MarketplaceItemsList.module.css";
import MarketplaceItem from "../marketplaceItem/MarketplaceItem";
import axios from "axios";
import { useParams } from "react-router";
import CircularIndeterminate from "../circularProgress/CircularProgress";
import { Link } from "react-router-dom";
const MarketplaceItemsList = () => {
  const params = useParams();
  let category = params.category;
  let subCategory = params.subCategory;
  console.log(category);
  console.log(subCategory);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  let marketplaceItems = [];
  let categoryLink = `/marketplace/${category}`;
  let subCategoryLink = `/marketplace/${subCategory}`;

  useEffect(() => {
    if (!subCategory) {
      setLoading(true);
      axios
        .get("http://localhost:5000/api/products", {
          params: {
            category: category,
          },
        })
        .then((res) => {
          setItems(res.data);
          console.log(res.data);
          setLoading(false);
        });
    } else if (subCategory) {
      setLoading(true);
      axios
        .get("http://localhost:5000/api/products", {
          params: {
            subCategory: subCategory,
          },
        })
        .then((res) => {
          setItems(res.data);
          console.log(res.data);
          setLoading(false);
        });
    }
  }, [subCategory]);
  

  marketplaceItems = items.map((item) => {
   
    return (
      <MarketplaceItem
        category={item.category}
        subCategory={item.subCategory}
        id={item._id}
        image={item.image}
        price={item.price}
        creator={item.creator}
        key={Math.random()}
        name={item.name}
        description={item.description}
      />
    );
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.category}>
        <h3>
          {" "}
          <Link to={categoryLink}>{category}</Link>{" "}
          {subCategory}
        </h3>
      </div>
      {loading && <CircularIndeterminate />}
      <div className={classes.grid}>{marketplaceItems}</div>
    </div>
  );
};

export default MarketplaceItemsList;
