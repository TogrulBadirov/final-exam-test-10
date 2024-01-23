import "./index.scss";

const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 content">
            <h1>Select Your New Perfect Style</h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure.
            </p>
            <button>SHOP NOW</button>
          </div>
          <div className="col-lg-4 image">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
