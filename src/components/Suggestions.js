import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SuggestionCard from "../components/SuggestionCard"
import HeroText from "../components/HeroText"

import categDev from "../images/categ-dev.png"
import categDesign from "../images/categ-design.png"
import categVideo from "../images/categ-video.png"
import categPhoto from "../images/categ-photo.png"
import Mockup from "../images/phone-mockup.jpg"
import Screen from "../images/unphone-screen-3.jpg"


const Suggestions = ({ currentPage }) => (
  <div>

    <HeroText chosenText={ currentPage } />

    <div className="suggestions">
      <SuggestionCard cardName="Learntalk"
                      cardType="UI Dev. & Design"
                      cardImage={categDev}
                      cardLink="learntalk"
      />
      <SuggestionCard cardName="UNITAN" 
                      cardType="Corporate Identity"
                      cardImage={categDesign}
                      cardLink="unitan" 
      />
      <SuggestionCard cardName="UnPhone" 
                      cardType="App Design"
                      cardImage={categDev}
                      cardLink="unphone" 
      />
      <SuggestionCard cardName="KinmoPW" 
                      cardType="Graphic Design"
                      cardImage={categDesign}
                      cardLink="kinmopw" 
      />
      <SuggestionCard cardName="Troika" 
                      cardType="Brand Design"
                      cardImage={categDesign}
                      cardLink="troika"
      />
      <SuggestionCard cardName="Tongeats" 
                      cardType="Logo Design"
                      cardImage={categDesign}
                      cardLink="tongeats" 
      />
    </div>
  </div>
)

Suggestions.propTypes = {
  currentPage: PropTypes.string,
}

Suggestions.defaultProps = {
  currentPage: `Thank you! Check out my other works:`,
}

export default Suggestions
