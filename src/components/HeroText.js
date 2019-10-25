import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HeroText = ({ chosenText }) => (
  <div
    className="herotext-banner-custom"
  >
    <section className="hero">
      <div className="hero-body">
        <div className="columns is-centered">
          <div className="column">
            <h2 className="title herotext-custom-size is-spaced is-size-1-desktop is-size-2-tablet is-size-2-mobile">
              {chosenText}
            </h2>
          </div>
        </div>
      </div>
    </section>

  </div>
)

export default HeroText
