import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Gallery = ({ discussHeading, discussContent, discussImage }) => (
  <div className="inner-gallery-section">

    <div className="inner-gallery-text">
      <h3>{discussHeading}</h3>
      <h5>{discussContent}</h5>
    </div>

    <div className="inner-gallery-images">
      <img src={discussImage} />
      <img src={discussImage} />
      <img src={discussImage} />
    </div>

  </div>
)

Gallery.propTypes = {
  cardName: PropTypes.string,
}

Gallery.defaultProps = {
  cardName: ``,
}

export default Gallery
