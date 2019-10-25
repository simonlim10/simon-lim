import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const CenterText = ({ centerHeading, centerContent, centerContent2 }) => (
  <div className="inner-centertext">

    <div className="inner-centertext-content">
      <h3>{centerHeading}</h3>
      <h5>{centerContent}</h5>
      <div className="h5-space"></div>
      <h5>{centerContent2}</h5>
    </div>

  </div>
)

CenterText.propTypes = {
  cardName: PropTypes.string,
}

CenterText.defaultProps = {
  cardName: ``,
}

export default CenterText
