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

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <div class="banner-animation">

          <BannerAnimation />

          <Hero />

        </div>

    <div className="container-max-width">

      <div className="container-max-width py30">
        <HeroText chosenText="Here are my latest works." />
        <FeaturedWork workName="UnPhone" 
                      workType="App Design"
                      workDescription="A startup I co-founded that gives rewards to students for locking their phones in class. All designs, from mockup to UX, is by me."
                      workImage={UnphoneMockup}
                      workLogo="/images/jobs/job-unphone.png"
                      workLink="unphone"
        />
        <FeaturedWork workName="Learntalk" 
                      workType="UI Dev. & Design"
                      workDescription="My work with an English learning platform startup that provides English lessons from professional native-speaking teachers all over the world." 
                      workImage="/images/learntalk/featured-learntalk.jpg"
                      workLogo="/images/jobs/job-learntalk.png"
                      workLink="learntalk"

        />
      </div>

      <Resume />

      <Suggestions currentPage="Here are some of my other works." />

    </div>
    
  </React.Fragment>
)

export default IndexPage
