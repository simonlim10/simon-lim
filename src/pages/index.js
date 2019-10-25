import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Category from "../components/Category"
import Hero from "../components/Hero"
import Suggestions from "../components/Suggestions"
import SuggestionCard from "../components/SuggestionCard"

import categDev from "../images/categ-dev.png"
import categDesign from "../images/categ-design.png"
import categVideo from "../images/categ-video.png"
import categPhoto from "../images/categ-photo.png"

import "../styles/site.scss"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <div className="container-max-width">
          
          <Hero />

          <div className="categories">
            <Category categoryName="Development" 
                      categoryLink="dev" 
                      categoryImage={categDev} 
            />
            <Category categoryName="Design & Identity" 
                      categoryLink="design" 
                      categoryImage={categDesign} 
            />
            <Category categoryName="Video & Animation" 
                      categoryLink="video" 
                      categoryImage={categVideo} 
            />
            <Category categoryName="Photography" 
                      categoryLink="photo" 
                      categoryImage={categPhoto} 
            />
          </div>

          <Suggestions currentPage="Here are some of my works." />

        </div>
        
      </React.Fragment>
    )
  }
}

export default IndexPage
