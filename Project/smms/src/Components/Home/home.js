// Home.js
import './home.css';
import React from 'react';
import fav from './fandv.png';
import cos from './cosmetics.png';
import ele from './electronics.png'
import clo from './clothes.png';
import { Link } from 'react-router-dom'; 

export default function Home() {
  return (
    <body>
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home">Home</a>
        <a><Link to='/aboutus'>About Us</Link></a>
        <a><Link to='/contactus'>Contact Us</Link></a>
        <a><Link to='/' className='links'>Log Out</Link></a>
      </nav>

      {/* Banner */}
      <section
        className="banner"
        id="home"
      >
        <div className="content">
          <h3>
          FROM STOCKING TO SHOPPING,<br/><span>WE 'VE GOT YOU COVERED</span>
          </h3>
          <br/>
          <button type="button" className="btn">
            <Link to='/products'> Shop Now </Link>
          </button>
        </div>
      </section>

    <body>
      {/* Categories */}
      <section className="categories" id="categories">
        <h1 className="heading">
          PRODUCT <span>CATEGORIES</span>
        </h1>
        <div class="category-container">
            <div class="category-card">
                <img src={fav} alt=''/>
                <h3>Fruits & Vegetables</h3>
                <p>Upto 45% Off</p>
            </div>

            <div class="category-card">
                <img src={cos} alt=''/>
                <h3>Cosmetics</h3>
                <p>Buy 1 Get 1 Free</p>
            </div>

            <div class="category-card">
                <img src={ele} alt=''/>
                <h3>Electronics</h3>
                <p>Latest Arrivals</p>
            </div>

            <div class="category-card">
                <img src={clo} alt=''/>
                <h3>Clothes</h3>
                <p>Few Stocks Left</p>
            </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews" id="reviews">
        <h1 className="heading">
          CUSTOMER <span>REVIEWS</span>
        </h1>

        <div class="review-container">
    <div class="review-card">
        <h3>John Doe</h3>
        <p>I love shopping at SuperMart! The aisles are well-organized, and the staff is always ready to assist. The checkout process is quick, and I appreciate the cleanliness of the store. Highly recommended!.</p>
        <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
    </div>

    <div class="review-card">
        <h3>Jane Smith</h3>
        <p>The products at SuperMart is always fresh, and I can trust the quality of their products. The variety of organic options is impressive. It's my one-stop-shop for all my grocery needs.</p>
        <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
    </div>

    <div class="review-card">
        <h3>Alice Johnson</h3>
        <p>The staff at SuperMart are so friendly and helpful. They go above and beyond to assist customers, and it creates a positive shopping environment. Kudos to the SuperMart team for their excellent service!</p>
        <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
        </div>
    </div>
</div>
      </section>
      </body>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>Your Supermart is dedicated to providing high-quality products and excellent customer service.</p>
          </div>

          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: info@yoursupermarket.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/contactus">Contact Us</a></li>
            </ul>
          </div>

          <div class="footer-section followus">
            <h2>Follow Us</h2>
            <ul>
              <li><a href="">FaceBook</a></li>
              <li><a href="">Instagram</a></li>
              <li><a href="">X</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Your Supermarket. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </body>
  );
}
