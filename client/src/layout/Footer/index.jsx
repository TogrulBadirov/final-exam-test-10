import { Link } from "react-router-dom";
import "./index.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 footerElem">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo2_footer.png"
              alt=""
            />
            <p>
              Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf
              sed do eiusmod tem.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 footerElem">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link className="link">About</Link>
              </li>
              <li>
                <Link className="link">Offers & Discounts</Link>
              </li>
              <li>
                <Link className="link">Get Coupon</Link>
              </li>
              <li>
                <Link className="link">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 footerElem">
            <h4>New Products</h4>
            <ul>
              <li>
                <Link className="link">About</Link>
              </li>
              <li>
                <Link className="link">Offers & Discounts</Link>
              </li>
              <li>
                <Link className="link">Get Coupon</Link>
              </li>
              <li>
                <Link className="link">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 footerElem">
            <h4>Support</h4>
            <ul>
              <li>
                <Link className="link">About</Link>
              </li>
              <li>
                <Link className="link">Offers & Discounts</Link>
              </li>
              <li>
                <Link className="link">Get Coupon</Link>
              </li>
              <li>
                <Link className="link">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
       <div className="container">
       <p>Copyright ©2024 All rights reserved | This template is made with <span><i className="fa-solid fa-heart"></i></span> by <span>Colorlib</span></p>
        <div className="icons">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-behance"></i>
        <i className="fa-solid fa-globe"></i>
        </div>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
