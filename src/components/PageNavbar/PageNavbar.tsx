import { useState } from "react";
import React from "react";
import "./PageNavbar.scss";
import { NavHashLink } from "react-router-hash-link";

export interface PageNavbarProps {
  project: string; // name of project
  links: string[]; // name of section
}
const PageNavbar = (props: PageNavbarProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  let pathname = window.location.href.split("#")[1];

  return (
    <>
      <div
        id="fixed-navbar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <li>/</li>
        <nav id="navbar">
          {isDropdownVisible &&
            props.links.map((link, index) => {
              return (
                <NavHashLink
                  key={index}
                  smooth
                  to={"/" + props.project + "/#" + link.toLowerCase()}
                  exact
                >
                  <li> /{link} </li>
                </NavHashLink>
              );
            })}
        </nav>
      </div>
    </>
  );
};

export default PageNavbar;
