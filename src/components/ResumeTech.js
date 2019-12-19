import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ResumeTech = ({ techName, techIcon }) => (

  <div className="resume-tech-item">

    <img className="resume-tech-icon" src={techIcon} />

    <h4 className="resume-tech-name">
      {techName}
    </h4>

  </div>
)

export default ResumeTech
