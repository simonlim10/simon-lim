import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const DiscussSection = ({ discussHeading, discussContent, discussImage }) => (
  <div className="inner-discuss-section">

    <div className="inner-discuss-text">
      <h3>{discussHeading}</h3>
      <h5>{discussContent}</h5>
    </div>

    <div className="inner-discuss-image">
      <img src={discussImage} />
    </div>

  </div>
)

DiscussSection.propTypes = {
  cardName: PropTypes.string,
}

DiscussSection.defaultProps = {
  cardName: ``,
}

export default DiscussSection
