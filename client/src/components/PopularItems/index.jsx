import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
const PopularItems = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const getAllItems = async () => {
    const resp = await axios("http://localhost:3000/");
    setItems(resp.data);
    setLoading(false);
  };
  useEffect(() => {
    getAllItems();
  }, []);
  const {
    basket,
    addToBasket,
    isInBasket,
    removeFromBasket,
    total,
    UpdateCountOfBasket,
  } = useContext(BasketContext);

  const {
    wishlist,
    addToWishlist,
    isInWishlist
} = useContext(WishlistContext)
  return (
    <section id="PopularItems">
      <div className="container">
        <div className="sectionHeading">
          <h2>Popular Items</h2>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida.
          </p>
        </div>
        <div className="products">
          <div className="row">
            {items &&
              items.map((item) => (
                <div
                  key={item._id}
                  className="col-lg-4 col-md-6 col-12 product"
                >
                  <div className="image">
                    <img
                      src={item.image}
                      alt=""
                    />
                    <div className="icons">
                    <button onClick={()=>addToWishlist(item)}>
                          <i className={` ${isInWishlist(item)? "fa-solid fa-heart" : "fa-regular fa-heart"}`}></i>
                        </button>
                    <button onClick={()=>addToBasket(item)}><i className="fa-solid fa-basket-shopping"></i></button>
                    </div>
                  </div>
                  <div className="title">
                    <Link className="link" to={`/Detail/${item._id}`}><h3>{item.title}</h3></Link>
                  </div>
                  <div className="price">
                    <p>${item.price}</p>
                  </div>
                </div>
              ))}

           
          </div>
          <button className="button">VIEW MORE PRODUCTS</button>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
