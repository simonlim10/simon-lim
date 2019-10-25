import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const SuggestionCard = ({ cardName, cardType, cardImage, cardLink }) => (
  <Link to={cardLink} className="suggestion-card">

    <div className="suggestion-icon">
      <img src={cardImage} />
    </div>

    <h4>
        {cardName}
    </h4>

    <h5>
        {cardType}
    </h5>

  </Link>
)

SuggestionCard.propTypes = {
  cardName: PropTypes.string,
}

SuggestionCard.defaultProps = {
  cardName: ``,
}

export default SuggestionCard
