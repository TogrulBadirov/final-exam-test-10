import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
import { Toaster } from "react-hot-toast";
const Detail = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getItem = async () => {
    const resp = await axios(`http://localhost:3000/${id}`);
    setItem(resp.data);
    setLoading(false);
  };
  useEffect(() => {
    getItem();
  }, []);
  const {
    addToBasket,
  } = useContext(BasketContext);

  const {  addToWishlist, isInWishlist } = useContext(WishlistContext);
  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <section id="detail">
        <div className="container">
          {loading ? (
            <>Loading...</>
          ) : (
            <div className="details">
              <img src={item.image} alt="" />
              <div className="content">
                <h3>{item.title}</h3>

                <p>{item.desc}</p>
                <p>Price: ${item.price}</p>
                <p className="icons">
                  <button onClick={() => addToWishlist(item)}>
                    <i
                      className={` ${
                        isInWishlist(item)
                          ? "fa-solid fa-heart"
                          : "fa-regular fa-heart"
                      }`}
                    ></i>
                  </button>
                  <button onClick={() => addToBasket(item)}>
                    <i className="fa-solid fa-basket-shopping"></i>
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Detail;
