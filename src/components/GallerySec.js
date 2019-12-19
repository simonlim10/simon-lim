import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Gallery from 'react-grid-gallery';


const GallerySec = ({ discussHeading, discussContent, discussContent2, discussImage, ImageSide }) => (
  <div className="inner-gallery-section">

    <div className="inner-gallery-text">
      <h3 className={ImageSide}>{discussHeading}</h3>
      <h5 className={ImageSide}>{discussContent}</h5>
      <div className="h5-space"></div>
      <h5 className={ImageSide}>{discussContent2}</h5>
    </div>

    <div className={"inner-gallery-images " + ImageSide}>

      <Gallery images={discussImage} 
                enableImageSelection={false} 
                showLightboxThumbnails={true} 
                rowHeight={120} 
                columnWidth={120} 
                margin={6} 
      />

    </div>

  </div>
)

GallerySec.propTypes = {
  cardName: PropTypes.string,
}

GallerySec.defaultProps = {
  cardName: ``,
}

export default GallerySec
