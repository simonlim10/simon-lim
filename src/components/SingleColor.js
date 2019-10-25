import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const SingleColor = ({ colorHex, colorName }) => (
  <div className="inner-palette-item">

    <div className="inner-palette-color"
          style={{
            backgroundColor: colorHex
          }}
          >
      
    </div>

    <div className="inner-palette-label">
      <h5>
        <span class="hex-tag">{colorHex}</span>
        {colorName}
      </h5>
    </div>

  </div>
)

SingleColor.propTypes = {
  cardName: PropTypes.string,
}

SingleColor.defaultProps = {
  cardName: ``,
}

export default SingleColor
