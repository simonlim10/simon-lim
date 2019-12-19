import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Category from "../components/Category"
import Hero from "../components/Hero"
import HeroText from "../components/HeroText"
import FeaturedWork from "../components/FeaturedWork"
import Suggestions from "../components/Suggestions"
import SuggestionCard from "../components/SuggestionCard"
import Resume from "../components/Resume"

import categDev from "../images/categ-dev.png"
import categDesign from "../images/categ-design.png"
import categVideo from "../images/categ-video.png"
import categPhoto from "../images/categ-photo.png"
import UnphoneMockup from "../images/unphone/unphone-mockup2.jpg"
import LearntalkLogo from "../images/learntalk/learntalk-logo.jpg"

import "../styles/site.scss"

const IndexResume = () => (
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

      <Resume />

      <div className="container-max-width page-fill py30">
        <FeaturedWork workName="simon-lim.com" 
                      workDescription="Please visit my portfolio site to see various samples of my work." 
                      workImage="/images/learntalk/featured-learntalk.jpg"
                      workLogo={categDev}
                      workLink="http://www.simon-lim.com"
        />
      </div>

    </div>
    
  </React.Fragment>
)


export default IndexResume
