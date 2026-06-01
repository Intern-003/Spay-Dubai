import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import logo from "../../assets/images/logo.png";
import { footerData } from "./footerData";

import "./footer.css";

const socialIcons = {
  LinkedIn: <FaLinkedinIn />,
  Facebook: <FaFacebookF />,
  Instagram: <FaInstagram />,
  X: <FaXTwitter />,
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP SECTION */}

        <div className="footer-top">

          {/* COMPANY */}

          <div className="footer-company">
<div className="footer-logo-wrapper">
  <img
    src={logo}
    alt="SPAY FINTECH"
    className="footer-logo"
  />
</div>

            {/* <p className="footer-description">
              {footerData.company.description}
            </p> */}

            <div className="footer-contact">

              <div className="footer-contact-item">
                <span className="footer-contact-label">
                  Address
                </span>

                <p>
                  {footerData.company.location}
                </p>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-label">
                  Email
                </span>

                <a href={`mailto:${footerData.company.email}`}>
                  {footerData.company.email}
                </a>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-label">
                  Phone
                </span>

                <a href={`tel:${footerData.company.phone}`}>
                  {footerData.company.phone}
                </a>
              </div>

            </div>
          </div>

          {/* PRODUCTS */}

          <div className="footer-column">
            <h4>Products</h4>

            <ul>
              {footerData.products.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTIONS */}

          <div className="footer-column">
            <h4>Solutions</h4>

            <ul>
              {footerData.solutions.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FEATURES */}

          <div className="footer-column">
            <h4>Features</h4>

            <ul>
              {footerData.features.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}

          <div className="footer-column">
            <h4>Resources</h4>

            <ul>
              {footerData.resources.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TRUST BAR */}

        <div className="footer-trust-bar">

          <div className="trust-item">
            PCI DSS Ready
          </div>

          <div className="trust-item">
            Enterprise Security
          </div>

          <div className="trust-item">
            24/7 Support
          </div>

          <div className="trust-item">
            Global Coverage
          </div>

          <div className="trust-item">
            Payment Infrastructure
          </div>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <div className="footer-bottom-left">

            <div className="footer-legal-links">
              {footerData.legal.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <p className="copyright">
              © {new Date().getFullYear()} SPAY FINTECH by{" "}
              {footerData.company.legalName}. All Rights Reserved.
            </p>

          </div>

          <div className="footer-bottom-right">

            <div className="footer-socials">
              {footerData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  {socialIcons[social.name]}
                </a>
              ))}
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}