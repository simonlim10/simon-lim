import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Gallery from "react-grid-gallery";
// import GalleryPhone from "../../node_modules/react-grid-gallery/src/GalleryPhone";

import Screen from "../images/unphone-screen-3.jpg"
import iPhone from "../images/iphone-8.png"

const PhoneScreen = ({ discussImage }) => (
  <div className="iphonescreens">
    <img src={iPhone}/>
    <div className="screen"> 

      <div className="images">
        <Gallery images={discussImage} 
                      enableImageSelection={false} 
                      showLightboxThumbnails={true} 
                      rowHeight={200} 
                      columnWidth={140} 
                      margin={7} 
        />
      </div>

    </div>
  </div>
)

PhoneScreen.propTypes = {
  cardName: PropTypes.string,
}

PhoneScreen.defaultProps = {
  cardName: ``,
}

export default PhoneScreen
