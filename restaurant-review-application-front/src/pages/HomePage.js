import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Category from "../components/Category";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

// Define categories for the list
const categories = [
  { name: "Pizza", image: "/images/pizza.jpg" },
  { name: "Burger", image: "/images/burger.jpg" },
  { name: "Sweets", image: "/images/sweets.jpg" },
  { name: "Fast Food", image: "/images/fastfood.jpg" },
  { name: "Home Made", image: "/images/homemade.jpg" },
  { name: "Traditional Food", image: "/images/traditional.jpg" },
];

// Define a featured category for the large section at the top
const featuredCategory = { name: "Featured", image: "/images/featured.jpg" };

const HomePage = ({ userName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
  };

  const handleCategoryClick = (category) => {
    navigate("/restaurants/${category}");
  };

  return (
    <div className="home-page index-page">
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link
            to="index.html"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            <h1 className="sitename">YUMMY</h1>
            <span>.</span>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul className="list-unstyled d-flex flex-column flex-md-row">
              <li>
                <Link to="/hero" className="active">
                  Home
                  <br />
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/about">Restaurants </Link>
              </li>
              {/* <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li> */}
              {/* <li>
                <Link to="/chefs">Chefs</Link>
              </li> */}
              {/* <li>
                <Link to="/gallery">Gallery</Link>
              </li> */}
              <li className="dropdown">
                <Link to="/">
                  <span>Dropdown</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Dropdown 1</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="/">
                      <span>Deep Dropdown</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </Link>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/">Deep Dropdown 1</Link>
                      </li>
                      <li>
                        <Link to="/">Deep Dropdown 2</Link>
                      </li>
                      <li>
                        <Link to="/">Deep Dropdown 3</Link>
                      </li>
                      <li>
                        <Link to="/">Deep Dropdown 4</Link>
                      </li>
                      <li>
                        <Link to="/">Deep Dropdown 5</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">Dropdown 2</Link>
                  </li>
                  <li>
                    <Link to="/">Dropdown 3</Link>
                  </li>
                  <li>
                    <Link to="/">Dropdown 4</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <Link
            to="btn-getstarted"
            href="index.html#book-a-table"
            className="btn btn-primary"
          >
            Book a Table
          </Link>
        </div>
      </header>
      <main>
        <Hero />
        <Stats />
        <Category />
        <AboutUs />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <footer id="footer" className="footer dark-background">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-geo-alt icon"></i>
              <div className="address">
                <h4>Address</h4>
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-telephone icon"></i>
              <div>
                <h4>Contact</h4>
                <p>
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                  <br />
                  <strong>Email:</strong> <span>info@example.com</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-clock icon"></i>
              <div>
                <h4>Opening Hours</h4>
                <p>
                  <strong>Mon-Sat:</strong> <span>11AM - 23PM</span>
                  <br />
                  <strong>Sunday</strong>: <span>Closed</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>
            <strong className="px-1 sitename">Yummy</strong>
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
