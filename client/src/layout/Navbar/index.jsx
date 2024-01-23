import { NavLink } from "react-router-dom";
import "./index.scss"
import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const scrollNav = ()=>{
        const scroll = window.scrollY
        scroll > 60 ? setIsScrolled(true) : setIsScrolled(false)
    }
    useEffect(() => {
      window.addEventListener("scroll",scrollNav)
    
      return () => {
        window.removeEventListener("scroll",scrollNav)
      }
    }, [])
    const {
        basket,
      } = useContext(BasketContext);
    
      const {
        wishlist,
    } = useContext(WishlistContext)
  return (
    <nav className={`${isScrolled? "active": ""}`}>
      <div id="desktop-nav">
        <div className="container">
            <div className="logo">
            <NavLink to={"/"} className={"link"}> <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" /></NavLink>
            </div>
            <div className="pages">
                <ul className="pages-elems">
                    <li className="list">
                        <NavLink to={"/"} className={"link"}>
                            Home
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink to={"/AddPage"} className={"link"}>
                            AddPage
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink to={"/Basket"} className={"link"}>
                            Basket
                            <div className="count">
                                {basket.reduce((acc,current)=>acc+current.count,0)}
                            </div>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink to={"/Wishlist"} className={"link"}>
                            Wishlist
                            <div className="count">
                            {wishlist.length}
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-basket-shopping"></i>
            </div>
        </div>
      </div>
      <div id="mobile-nav">
      <div className="container">
            <div className="top-nav">
            <div className="logo">
               <NavLink to="/" className={"link"}> <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" /></NavLink>
            </div>
            <div className="burger-icon">
            <button onClick={()=>setIsNavOpen(!isNavOpen)}><i className="fa-solid fa-bars"></i></button>
            </div>
            </div>
            <div className={`pages ${isNavOpen ? "active" : ""}`} >
                <ul className="pages-elems">
                    <li className="list">
                        <NavLink to={"/"} className={"link"} onClick={()=>setIsNavOpen(!isNavOpen)}>
                            Home
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink to={"/AddPage"} className={"link"} onClick={()=>setIsNavOpen(!isNavOpen)}>
                            AddPage
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink to={"/Basket"} className={"link"} onClick={()=>setIsNavOpen(!isNavOpen)}>
                            Basket
                            <div className="count">
                            {basket.length}
                            </div>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink to={"/Wishlist"} className={"link"} onClick={()=>setIsNavOpen(!isNavOpen)}>
                            Wishlist
                            <div className="count">
                            {wishlist.length}
                            </div>
                        </NavLink >
                    </li>
                </ul>
                <div className="icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-basket-shopping"></i>
            </div>
            </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
