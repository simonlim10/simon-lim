import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const FinalOutput = ({ finalHeading, finalContent, finalImage }) => (
  <div className="inner-final">

    <div className="inner-final-header">
      <h3>{finalHeading}</h3>
      <h5>{finalContent}</h5>
    </div>

    <div className="inner-final-container">
      <img src={finalImage} />
    </div>

  </div>
)

FinalOutput.propTypes = {
  cardName: PropTypes.string,
}

FinalOutput.defaultProps = {
  cardName: ``,
}

export default FinalOutput
