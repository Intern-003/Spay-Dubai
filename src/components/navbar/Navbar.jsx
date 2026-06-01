import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import MegaMenu from "./MegaMenu";
import { menuData } from "./menuData";
import "./navbar.css";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      key: "product",
      label: "Product",
    },
    {
      key: "useCases",
      label: "Use Cases",
    },
    {
      key: "features",
      label: "Features",
    },
    {
      key: "resources",
      label: "Resources",
    },
  ];

  return (
    <>
      {/* Announcement Bar */}

      <div className="top-strip">
        <div className="ticker">
          <span>
            Future-Proofing Payment Businesses Worldwide • White Label Payment
            Gateway • Payment Orchestration Platform • Global Acquiring •
            Merchant Management • Smart Routing • Fraud Prevention • SPAY
            FINTECH •
          </span>
        </div>
      </div>

      {/* Navbar */}

      <header className="navbar" onMouseLeave={() => setActiveMenu(null)}>
        <div className="container">
          {/* Logo */}

          <Link to="/" className="logo" aria-label="SPAY Fintech Home">
            <img src={logo} alt="SPAY FINTECH" />
          </Link>

          {/* Navigation */}

          <nav>
            {menuItems.map((item) => (
              <button
                key={item.key}
                type="button"
                className={`nav-link ${
                  activeMenu === item.key ? "active-link" : ""
                }`}
                onMouseEnter={() => setActiveMenu(item.key)}
                aria-expanded={activeMenu === item.key}
              >
                {item.label}
              </button>
            ))}

            <Link to="/connectors" className="nav-link">
              Connectors
            </Link>

            <Link to="/about" className="nav-link">
              About Us
            </Link>

            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </nav>

          {/* CTA */}

          <Link to="/contact" className="demo-btn">
            Request a Demo
          </Link>
        </div>

        {/* Mega Menu */}

        <div className={`mega-wrapper ${activeMenu ? "mega-open" : ""}`}>
          {activeMenu && (
            <MegaMenu
              data={menuData[activeMenu]}
              closeMenu={() => setActiveMenu(null)}
            />
          )}
        </div>
      </header>
    </>
  );
}
