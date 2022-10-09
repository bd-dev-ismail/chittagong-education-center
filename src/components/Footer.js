import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div>
        <footer className="footer p-10 bg-base-200 text-base-content mx-auto container">
          <div>
            <span className="footer-title">Services</span>
            <Link to="/" className="link link-hover">Branding</Link>
            <Link to="/" className="link link-hover">Design</Link>
            <Link to="/" className="link link-hover">Marketing</Link>
            <Link to="/" className="link link-hover">Advertisement</Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link to="/home" className="link link-hover">Home</Link>
            <Link to="/courses" className="link link-hover">Courses</Link>
            <Link to="/blogs" className="link link-hover">Blogs</Link>
            <Link to="/contact" className="link link-hover">Contact us</Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link to="/" className="link link-hover">Terms of use</Link>
            <Link to="/" className="link link-hover">Privacy policy</Link>
            <Link to="/" className="link link-hover">Cookie policy</Link>
          </div>
          <div>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;