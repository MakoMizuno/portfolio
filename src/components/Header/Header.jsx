import React, { Component, Fragment } from 'react'
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import './Header.scss';

export default class Header extends Component {
  state = {
    showDropdown: false,
  }

  handleClick = () => {
   this.setState((prevState)=>({
     showDropdown: !prevState.showDropdown,
   }));
  }
  render() {
    return (
      <div className="Header">
        <div className="Header-inner">
          <NavLink to="/" className="Header-logo">Ayako Sayama</NavLink>
          <Media query="(min-width: 540px)">
            {(matches) => (
              matches ? (
              <div className="Header-nav">
                <Nav smallSize={false} />
              </div>
              ) : (
              <div className="Header-dropdown">
                <button onClick={this.handleClick}>
                  <img
                  width={20}
                  alt="Menu Icon"
                  src={require("./../../assets/icons/menuIcon.svg")}
                />
                </button>
                {
                  this.state.showDropdown &&
                  <div className="Header-dropdown-menu">
                    <Nav smallSize={true} />
                  </div>
                }
              </div>
              )
            )}
          </Media>
        </div>
      </div>
    )
  }
}

function Nav({ smallSize }) {
  return (
    <Fragment>
      <NavLink
      to="/"
      className={cx("Header-nav-item", { 'Header-nav-item--dropdown' : smallSize })}
      activeClassName="Header-nav-item--active">My Works</NavLink>
      <NavLink
      to="/about/"
      className={cx("Header-nav-item", { 'Header-nav-item--dropdown' : smallSize })}
      activeClassName="Header-nav-item--active"
      >About Me</NavLink>
      <NavLink
      to="/contact/"
      className={cx("Header-nav-item", { 'Header-nav-item--dropdown' : smallSize })}
      activeClassName="Header-nav-item--active"
      >Contact</NavLink>
    </Fragment>
  )
}