import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ResumeJob = ({ children, jobYear, jobLogo, jobCompany, jobTitle }) => (

    <div className="resume-job">

      <span className="job-year">{jobYear}</span>

      <div className="job-heading">
        <img src={jobLogo} />
        <div className="job-names">
          <h5>{jobCompany}</h5>
          <h6>{jobTitle}</h6>
        </div>
      </div>

      <ul className="job-details">
        {children}
      </ul>

    </div>
)


export default ResumeJob
