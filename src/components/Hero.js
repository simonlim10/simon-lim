import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Hero = ({ siteTitle }) => (
  <React.Fragment>

    <div className="hero-banner-custom">
      
      <section className="hero">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title hero-custom-text is-spaced is-size-1-desktop is-size-2-tablet is-size-2-mobile">
                <span className="hero-highlight">Hello world!</span> I’m Simon Lim, 
                a front-end web developer and designer.  
              </h1>
            </div>
          </div>
        </div>
      </section>

    </div>

    <i className="scroll-indicator fas fa-chevron-down"></i>

  </React.Fragment>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
