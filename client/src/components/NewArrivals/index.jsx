import React from 'react'
import "./index.scss"
const NewArrivals = () => {
  return (
    <section id='NewArrivals'>
        <div className="container">
            <div className="sectionHeading">
                <h2>New Arrivals</h2>
            </div>
            <div className="products">
                <div className="row">

                    <div className="col-lg-4 col-md-6 col-12 product">
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" alt="" />
                        </div>
                        <div className="title">
                            <h3>Thermo Ball Etip Gloves</h3>
                        </div>
                        <div className="price">
                            <p>$45</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 product">
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" alt="" />
                        </div>
                        <div className="title">
                            <h3>Thermo Ball Etip Gloves</h3>
                        </div>
                        <div className="price">
                            <p>$45</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 product">
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png" alt="" />
                        </div>
                        <div className="title">
                            <h3>Thermo Ball Etip Gloves</h3>
                        </div>
                        <div className="price">
                            <p>$45</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default NewArrivals
