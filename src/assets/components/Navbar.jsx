import { useState } from "react";
import { links, social } from "../../data";
import { FaBars } from "react-icons/fa";
import logo from "../../logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" />
          <button onClick={handleClick} className="toggle-button">
            <FaBars />
          </button>
        </div>
        <div
          className={
            showLinks ? "links-container show-container" : "links-container"
          }
        >
          {showLinks && (
            <ul>
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <a href={url} className="link">
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
