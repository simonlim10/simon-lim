import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SuggestionCard from "../components/SuggestionCard"
import HeroText from "../components/HeroText"

const Suggestions = ({ currentPage }) => (
  <React.Fragment>

    <HeroText chosenText={ currentPage } />

    <div className="suggestions">
      <SuggestionCard cardName="Learntalk"
                      cardType="UI Dev. & Design"
                      cardImage="/images/jobs/job-learntalk.png"
                      cardLink="learntalk"
      />
      <SuggestionCard cardName="UnPhone" 
                      cardType="App Design"
                      cardImage="/images/jobs/job-unphone.png"
                      cardLink="unphone" 
      />
      <SuggestionCard cardName="UNITAN" 
                      cardType="Corporate Identity"
                      cardImage="/images/jobs/job-unitan.png"
                      cardLink="unitan" 
      />
      <SuggestionCard cardName="KinmoPW" 
                      cardType="Graphic Design"
                      cardImage="/images/jobs/job-kinmopw.png"
                      cardLink="kinmopw" 
      />
      <SuggestionCard cardName="Troika" 
                      cardType="Brand Design"
                      cardImage="/images/jobs/job-troika.png"
                      cardLink="troika"
      />
      <SuggestionCard cardName="Tongeats" 
                      cardType="Logo Design"
                      cardImage="/images/jobs/job-tongeats.png"
                      cardLink="tongeats" 
      />
    </div>
  </React.Fragment>
)

Suggestions.propTypes = {
  currentPage: PropTypes.string,
}

Suggestions.defaultProps = {
  currentPage: `Thank you! Check out my other works:`,
}

export default Suggestions
