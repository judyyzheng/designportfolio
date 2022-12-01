import React from 'react';
import {
    Link,
  } from "react-router-dom";
import './Navbar.scss';

function Navbar() {

  return (
    <>
    <div className="navigation">
        <Link to='/'>
            <button className="about">home</button>
        </Link>
        <Link to='/'>
            <button className="about">about</button>
        </Link>
        <Link to='/'>
            <button className="about">contact</button>
        </Link>
        <Link to='/'>
            <button className="about">resume</button>
        </Link>
    </div>
    </>
  )
}
export default Navbar;