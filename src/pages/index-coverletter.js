import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

import BannerAnimation from "../components/BannerAnimation"
import Category from "../components/Category"
import Hero from "../components/Hero"
import HeroText from "../components/HeroText"
import FeaturedWork from "../components/FeaturedWork"
import Suggestions from "../components/Suggestions"
import Resume from "../components/Resume"

import categDev from "../images/categ-dev.png"
import categDesign from "../images/categ-design.png"
import categVideo from "../images/categ-video.png"
import categPhoto from "../images/categ-photo.png"
import UnphoneMockup from "../images/unphone/unphone-mockup2.jpg"

import "../styles/site.scss"

const IndexCover = () => (
  <React.Fragment>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <BannerAnimation />

    <div className="container-max-width hero-banner-container">
      <Hero />
    </div>


  <div className="resume-container container-max-width">
    I've always been interested in digital marketing and all of its processes, from the creative to the more scientific parts of it. SEO is definitely both, and working with a tool that's on the forefront of SEO and pushing the envelope in this field is a challenge I'd be very excited to take on.<br/><br/>

    I see Nightwatch as a strong product, and as a developer who's had a varied background in design, I'd like to help find good improvements for it in different ways.<br/><br/>
    
    My background is mainly with design, and I pay attention to making design choices a lot to develop clear interfaces and well-designed web pages; which I think it’s a critical skill to have, in any area or specialisation you’re in.
    Making your work simple and easy for people to understand is something that deeply matters to me.<br/><br/>

    I look forward to have the opportunity of working with Nightwatch team.<br/><br/>

    Best regards,<br/>
    Simon<br/>
  </div>

    <div className="container-max-width content-after-animation-banner">


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

export default IndexCover
