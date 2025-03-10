import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    < div>
      <section className="home-wrapper-1 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div>
                <div className="main-banner position-relative mb-1">
                  <img
                    src="images/main-banner-1.jpg"
                    className="img-fluid rounded-3 main-banner-img"
                    alt="main banner"
                  />
                  <div className="main-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5> iPad S13+ Pro</h5>
                    <p>From ksh. 99,000</p>
                    <Link className="button">BUY NOW</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 mx-0">
              <div className="d-flex flex-wrap gap-1">
                {[
                  {
                    img: "catbanner-01.jpg",
                    title: "Laptop Max",
                    price: "From ksh. 12,000",
                  },
                  {
                    img: "catbanner-02.jpg",
                    title: "Smart Watch",
                    price: "From ksh. 1000",
                  },
                  {
                    img: "catbanner-03.jpg",
                    title: "Tablet",
                    price: "From ksh. 20,000",
                  },
                  {
                    img: "catbanner-04.jpg",
                    title: "Headphones",
                    price: "From ksh. 600",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="small-banner-content position-relative"
                  >
                    <img
                      src={`images/${item.img}`}
                      className="img-fluid rounded-3 small-banner-img"
                      alt={item.title}
                    />
                    <div className="small-banner-content position-absolute text-center">
                      <h4>BEST SALE</h4>
                      <h5>{item.title}</h5>
                      <p>{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between mb-0">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div className="service-texts">
                    <h6>Free shipping </h6>
                    <p className="mb-0">From all oders over 5$</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div className="service-texts">
                    <h6> Daily suprice offers </h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div className="service-texts">
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div className="service-texts">
                    <h6>Affordable Prices </h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div className="service-texts">
                    <h6>Secure payments</h6>
                    <p className="mb-0">100% protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center body-container">
                  <div>
                    <h4>Camera </h4>
                    <p>10 items</p>
                  </div>
                  <img
                    className="img-body"
                    src="images/camera.jpg"
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center body-container">
                  <div>
                    <h4>Smart Tv </h4>
                    <p>10 items</p>
                  </div>
                  <img className="img-body" src=" images/tv.jpg" alt="tv " />
                </div>
                <div className="d-flex gap-30 align-items-center body-container">
                  <div>
                    <h4>Smart Watch</h4>
                    <p>10 items</p>
                  </div>
                  <img
                    className="img-body"
                    src="images/watch.jpg"
                    alt="watch "
                  />
                </div>

                <div className="d-flex gap-30 align-items-center body-container">
                  <div>
                    <h4>Headphones </h4>
                    <p>10 items</p>
                  </div>
                  <img
                    className="img-body"
                    src="images/headphone.jpg"
                    alt=" "
                  />
                </div>
                <div className="d-flex gap-30 align-items-center body-container">
                  <div>
                    <h4>Camera </h4>
                    <p>10 items</p>
                  </div>
                  <img
                    className="img-body"
                    src="images/camera.jpg"
                    alt="camera"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center body-container">
                  <div>
                    <h4>Smart Tv </h4>
                    <p>10 items</p>
                  </div>
                  <img className="img-body" src=" images/tv.jpg" alt="tv " />
                </div>
                <div className="d-flex gap-30 align-items-center body-container">
                  <div>
                    <h4>Smart Watch</h4>
                    <p>10 items</p>
                  </div>
                  <img
                    className="img-body"
                    src="images/watch.jpg"
                    alt="watch "
                  />
                </div>

                <div className="d-flex gap-30 align-items-center body-container">
                  <div>
                    <h4>Headphones </h4>
                    <p>10 items</p>
                  </div>
                  <img
                    className="img-body"
                    src="images/headphone.jpg"
                    alt=" "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <h3 className="section-heading p-3" >Famous Products</h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center justify-content-between gap-3 mb-0">
              {[
                {
                  img: "images/famous-1.jpeg",
                  title: "Big boyz touch",
                  subtitle: "Smart watch series",
                  price: "From $399 or 16.62/mo for 24 mo.*",
                },
                {
                  img: "images/famous-2.jpeg",
                  title: "iPad",
                  subtitle: "iPad Pro 13 Inch M4",
                  price: "From KSH. 169,999",
                },
                {
                  img: "images/famous-3.jpeg",
                  title: "iPhone",
                  subtitle: "iPhone 16 Pro 128GB",
                  price: "From KSH. 130,000",
                },
                {
                  img: "images/famous-4.jpeg",
                  title: "Home sounds",
                  subtitle: "Bluetooth speakers",
                  price: "From KSH. 1000",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="famous-card position-relative col-lg-3 col-md-6 col-sm-12"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="famous-content position-absolute">
                    <h5>{item.title}</h5>
                    <h6>{item.subtitle}</h6>
                    <p>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper bg-white p-1">
                <Marquee className="marque-inner-wrapper card-wrapper">
                  {[
                    "brand-01.png",
                    "brand-02.png",
                    "brand-03.png",
                    "brand-04.png",
                    "brand-05.png",
                    "brand-06.png",
                    "brand-07.png",
                    "brand-08.png",
                  ].map((brand, index) => (
                    <div key={index} className="mx-4 w-25">
                      <img src={`images/${brand}`} alt={`brand ${index + 1}`} />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
