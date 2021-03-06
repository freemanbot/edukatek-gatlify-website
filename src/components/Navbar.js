import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
// import edukatek from "../img/logo-image-only200.png";
import logo from "../img/logo-1.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="EdukaTek" style={{ width: "130px" }} />
            </Link>
            {/* Hamburger menu */}
            {/* eslint-disable-next-line */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              {/* <Link className="navbar-item" to="/about">
                A propos
              </Link> */}
              {/* <Link className="navbar-item" to="/products">
                E-Learning
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>*/}
              <Link className="navbar-item" to="/contact">
                Contactez-nous
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a
                    class="button is-primary"
                    href="https://learn.edukatek.com/login/index.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Commencer ici</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
