import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Hero = ({ siteTitle }) => (
  <div
    className="hero-banner-custom"
  >
    <section className="hero">
      <div className="hero-body">
        <div className="columns is-centered">
          <div className="column">
            <h1 className="title hero-custom-text is-spaced is-size-1-desktop is-size-2-tablet is-size-2-mobile">
              Hello world. I’m Simon Lim, 
              a <span className="hero-highlight">front-end web developer</span> and <span className="hero-highlight">designer</span>. 
            </h1>
          </div>
        </div>
      </div>
    </section>

  </div>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
