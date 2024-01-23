import React from "react";
import "./index.scss";
const WatchOfChoice = () => {
  return (
    <section id="WatchOfChoice">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 content">
            <h3>Watch of Choice</h3>
            <p>
              Enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
            <button className='button'>VIEW MORE PRODUCTS</button>
          </div>
          <div className="col-lg-6 image">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchOfChoice;
