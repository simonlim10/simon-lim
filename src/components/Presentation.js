import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import categDev from "../images/categ-dev.png"
import Mockup from "../images/phone-mockup.jpg"

const Presentation = ({ presentationName, presentationType, presentationDescription, presentationImage }) => (
  
  <div className="presentation">

    <div className="presentation-info">
      <div className="presentation-title">

        <div className="presentation-icon">
          <img src={categDev} />
        </div>

        <div className="presentation-name">
          <h4>{presentationName}</h4>
          <h5>{presentationType}</h5>
        </div>

      </div>

      <div className="presentation-space"></div>

      <div className="presentation-description">
         <h5>{presentationDescription}</h5>
      </div>

    </div>

    <div class="clear-both"></div>

    <div className="presentation-display">
      <img src={presentationImage} />
    </div>

  </div>
)


export default Presentation
