import { Link } from "react-router-dom";
import "./navbar.css";

const MegaMenu = ({ data, closeMenu }) => {
  return (
    <div className="mega-menu">
      <div className="mega-left">
        <h2>{data.title}</h2>

        <p>{data.description}</p>
      </div>

      <div className="mega-right">
        {data.items.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              key={index}
              to={item.path}
              className="mega-item"
              onClick={closeMenu}
            >
              <div className="icon-box">
                <Icon />
              </div>

              <div className="mega-content">
                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MegaMenu;