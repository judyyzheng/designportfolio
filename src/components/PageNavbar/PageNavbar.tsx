import React from "react";
import "./PageNavbar.scss";
import { NavHashLink } from "react-router-hash-link";

export interface PageNavbarProps {
  project: string; // name of project
  links: string[]; // name of section
}
const PageNavbar = (props: PageNavbarProps) => {
  return (
      <div id="fixed-navbar">
        <nav id="navbar">
          {props.links.map((link, index) => {
              return (
                <NavHashLink
                  key={index}
                  smooth={true}
                  to={"/" + props.project + "/#" + link.toLowerCase()}
                  exact
                >
                  <li> {link} </li>
                </NavHashLink>
              );
            })}
        </nav>
      </div>
  );
};

export default PageNavbar;
