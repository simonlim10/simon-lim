import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Player } from 'video-react';
import "video-react/dist/video-react.css";


const VideoPresentation = ({ videoHeading, videoContent, videoPoster, videoUrl }) => (
  <div className="inner-video">

    <div className="inner-video-header">
      <h3>{videoHeading}</h3>
      <h5>{videoContent}</h5>
    </div>

    <div className="inner-video-container">

      <Player poster={videoPoster}
              src={videoUrl}
      />

    </div>

  </div>
)

VideoPresentation.propTypes = {
  videoHeading: PropTypes.string,
}

VideoPresentation.defaultProps = {
  cardName: ``,
}

export default VideoPresentation
