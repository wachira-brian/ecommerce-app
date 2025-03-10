import React from 'react';

const Contacts = () => {
  return (
    <section className="contact-wrapper py-5">
      <div className="container">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-6">
            <h4>Contact Details</h4>
            <p><strong>Address:</strong> Nairobi, Kenya</p>
            <p><strong>Phone:</strong> <a href="tel:+254798962254">+254 798 962 254</a></p>
            <p><strong>Email:</strong> <a href="mailto:support@wacchyelectronics.com">support@wacchyelectronics.com</a></p>
            <p><strong>Business Hours:</strong> Mon - Fri, 9 AM - 6 PM</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <h4>Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-4">
          <h5>Follow Us</h5>
          <a href="#" className="mx-2">Facebook</a> | 
          <a href="#" className="mx-2">Twitter</a> | 
          <a href="#" className="mx-2">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
