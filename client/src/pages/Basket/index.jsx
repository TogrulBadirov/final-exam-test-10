import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { BasketContext } from "../../context/BasketContext";
import "./index.scss"
import { WishlistContext } from "../../context/WishlistContext";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const Basket = () => {
  const {
    basket,
    removeFromBasket,
    total,
    UpdateCountOfBasket,
  } = useContext(BasketContext);
  const {
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
        <title>Basket</title>
      </Helmet>
      <section id="Basket">
        <div className="container">
          <div className="sectionHeading">
            <h2>Basket</h2>
 
          </div>
          <div className="products">
            <div className="row">
              {basket.length < 1 && "Basket Is Empty!"}
              {basket &&
                basket.map((item) => (
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
                   
                      </div>
                    </div>
                    <div className="title">
                    <Link className="link" to={`/Detail/${item._id}`}><h3>{item.title}</h3></Link>
                    </div>
                    <div className="price">
                      <p>${item.price}</p>
                    </div>
                    <div className="count">
                      
                      <p>Count: <button className="updateCount" onClick={()=>UpdateCountOfBasket(item,-1)}>-</button> {item.count} <button className="updateCount" onClick={()=>UpdateCountOfBasket(item,1)}>+</button></p>
                    </div>
                    <div className="productTotal">
                      <p>Product Total: ${item.price * item.count}</p>
                    </div>
                    <div className="remove">
                      <button onClick={()=>removeFromBasket(item)}>Remove From Basket</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {basket.length  > 0 && <h2>Basket Total: ${total}</h2>}
         
        </div>
      </section>
    </>
  );
};

export default Basket;
