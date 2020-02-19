import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import categDev from "../images/categ-dev.png"
import categDesign from "../images/categ-design.png"
import categVideo from "../images/categ-video.png"
import categPhoto from "../images/categ-photo.png"


const NavbarBurger = props => (
  <div
    onClick={props.toggleMenu}
    className={`navbar-burger ${props.active ? 'is-active' : ''}`}
  >
    <span />
    <span />
    <span />
  </div>
);

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: false,
    };
  }

  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };

  render() {
    return (

<header className="nav">

  <div className="container">
    <nav className="navbar is-fixed-top" role="navigation">

      <div className="left-background" />
      <div className="right-background" />

      <div className="container nav-section-container">

        <div className="navbar-brand">
          <div className="left-section">
            <a href="/" className="navbar-item logo-wrapper">
              <img src={categDev} /> 
              <div className="name-text">simon-lim</div>
            </a>
          </div>
        </div>

        <div className={`navbar-menu right-section ${this.state.activeMenu ? 'is-active' : ''}`}>

          <div className="navbar-start">
          </div>

          <div className="navbar-end">

            <div className="navbar-group">
              <a className="navbar-item" href="https://www.linkedin.com/in/simon-lim-92ab16136/">
                <span className="icon">
                  <i className="fab fa-linkedin-in"></i>
                </span>
              </a>
              <a className="navbar-item" href="https://github.com/simonlim10">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
              </a>
            <hr className="navbar-divider" />
            </div>


           <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Portfolio
              </a>

              <div className="navbar-dropdown is-hoverable">
                <a href="/learntalk" className="navbar-item">
                  Learntalk - UI Dev. & Design
                </a>
                <a href="/unphone" className="navbar-item">
                  Unphone - App Design
                </a>
                <a href="/unitan" className="navbar-item">
                  UNITAN
                </a>
                <a href="/kinmopw" className="navbar-item">
                  KinmoPW
                </a>
                <a href="/troika" className="navbar-item">
                  Troika
                </a>
                <a href="/tongeats" className="navbar-item">
                  Tongeats
                </a>
              </div>

            </div>

          </div>

        </div>


        <NavbarBurger
          active={this.state.activeMenu}
          toggleMenu={this.toggleMenu}
        />



      </div>

    </nav>
  </div>

</header>

    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
