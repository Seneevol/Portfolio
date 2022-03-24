import { FaBars } from "react-icons/fa";
import { links, social } from "./DataNavbar";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [showLink, setShowLink] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLink) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
    console.log(linksContainerRef.current.style.height);
  }, [showLink]);

  return (
    <nav className="nav-container">
      <div className="nav-center">
        <div className="nav-header">
          <img
            src="https://react-projects-11-navbar.netlify.app/static/media/logo.2bb7da65.svg"
            className="logo"
            alt="logo"
          />
          <button className="nav-toggle" onClick={() => setShowLink(!showLink)}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icon">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
