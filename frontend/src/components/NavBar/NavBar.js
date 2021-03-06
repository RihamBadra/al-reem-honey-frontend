import React, { Component } from "react";
import { menuItems } from "./MenuItems";
import "./NavBar.css";
import icon from "./beeLogo.svg";

import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = {
    clicked: false,
  };
  handleClick = () => {
    document.getElementsByTagName("html")[0].style.overflow = !this.state
      .clicked
      ? "hidden"
      : "auto";
    this.setState({ clicked: !this.state.clicked }); //set click to the oppsoite value whenever clicked
  };
  render() {
    return (
      <nav className="navBarItems">
        <h1 className="navBarLogo">
          عسل الريم
          <img src={icon} alt="logo"></img>
        </h1>

        <div className="menuIconHamburger" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
          {menuItems.map((item, index) => {
            //mapping menuItems = [] form MenuItems.js
            return (
              <li key={index} className=" navLinks">
                <Link
                  className={item.cName}
                  onClick={this.handleClick}
                  to={item.url}
                >
                  {/* <Link to="/"> (works with routing) when clicking links on the navbar it will not refresh the whole page */}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <Button> Sign Up</Button> */}
      </nav>
    );
  }
}
