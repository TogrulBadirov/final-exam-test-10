import { Helmet } from "react-helmet-async";
import { BasketContext } from "../../context/BasketContext";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import "./index.scss"
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Wishlist = () => {
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
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <section id="Wishlist">
        <div className="container">
          <div className="sectionHeading">
            <h2>Wishlist</h2>
 
          </div>
          <div className="products">
            <div className="row">
            {wishlist.length < 1 && "Wishlist Is Empty!"}
              {wishlist &&
                wishlist.map((item) => (
                  <div
                    key={item._id}
                    className="col-lg-4 col-md-6 col-12 product"
                  >
                    <div className="image">
                      <img src={item.image} alt="" />
                      <div className="icons">
                        
                        <button onClick={()=>addToWishlist(item)}>
                          <i className={` ${isInWishlist(item)? "fa-solid fa-heart" : "fa-regular fa-heart"}`}></i>
                        </button>
                        <button onClick={()=>addToBasket(item)}>
                          <i className="fa-solid fa-basket-shopping"></i>
                        </button>
                      </div>
                    </div>
                    <div className="title">
                    <Link className="link" to={`/Detail/${item._id}`}><h3>{item.title}</h3></Link>
                    </div>
                    <div className="price">
                      <p>${item.price}</p>
                    </div>
                    <div className="remove">
                      <button onClick={()=>addToWishlist(item)}>Remove From Wishlist</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
