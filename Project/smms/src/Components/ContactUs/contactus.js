// ContactUs.js
import React from 'react';
import './contactus.css';

const ContactUs = () => {
  return (
    <div>
      <section className="contactus-bannerss">
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230822131732/images.png" alt="Welcome to our Contact Us page" />
      </section>

      <section className="contactus-contact-form">
        <div className="contactus-form-container">
          <h2>YOUR DETAILS</h2>
          <form action="#" method="POST">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone: </label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" className="contactus-submit-button">Submit</button>
          </form>
        </div>
      </section>

      <footer className="contactus-blah">
        <p>© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
