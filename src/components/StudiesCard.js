import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import categDev from "../images/categ-dev.png"

const StudiesCard = ({ cardName, cardType, cardImage, cardLink }) => (
  <div className="inner-studies-card">

    <h5>{cardName}</h5>

    <div className="inner-studies-icon">
      <img src={cardImage} />
    </div>

  </div>
)

StudiesCard.propTypes = {
  cardName: PropTypes.string,
  cardImage: PropTypes.string,
}

StudiesCard.defaultProps = {
  cardName: "-",
  cardImage: {categDev},
}

export default StudiesCard
