import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const FeaturedWork = ({ workName, workType, workDescription, workImage, workLogo, workLink }) => (
  <Link to={workLink}>
    <div className="featured-work">

      <div className="featured-work-info">
        <div className="featured-work-title">

          <div className="featured-work-icon">
            <img src={workLogo} />
          </div>

          <div className="featured-work-name">
            <h4>{workName}</h4>
            <h5>{workType}</h5>
          </div>

        </div>

        <div className="featured-work-space"></div>

        <div className="featured-work-description">
           <h5>{workDescription}</h5>
        </div>

        <div className="featured-work-link">
          <h4>
            View Designs&nbsp; 
            <span className="link-arrow"> > </span>  
          </h4>
        </div>

      </div>

      <div class="clear-both"></div>

      <div className="featured-work-display">
        <img src={workImage} />
      </div>

    </div>
  </Link>
)


export default FeaturedWork
