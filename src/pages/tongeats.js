import React from "react"
import SEO from "../components/seo"

import Presentation from "../components/Presentation"
import CenterText from "../components/CenterText"
import Suggestions from "../components/Suggestions"
import Studies from "../components/Studies"
import DiscussSection from "../components/DiscussSection"
import GallerySec from "../components/GallerySec"
import FinalOutput from "../components/FinalOutput"

import TongeatsCollage from "../images/tongeats/collage2.jpg"
import TongeatsStudy1 from "../images/tongeats/study-1.png"
import TongeatsStudy2 from "../images/tongeats/study-2.png"
import TongeatsStudy3 from "../images/tongeats/study-3.png"
import TongeatsStudy4 from "../images/tongeats/study-4.png"
import TongeatsFinal from "../images/tongeats/final-logo.jpg"

import "../styles/site.scss"


const TongeatsStudies =
[{
    name: "Study 1",
    image: TongeatsStudy1
},
{
    name: "Study 2",
    image: TongeatsStudy2
},
{
    name: "Study 3",
    image: TongeatsStudy3
},
{
    name: "Study 4",
    image: TongeatsStudy4
}]


const Tongeats = () => (
  <React.Fragment>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="clear-both" />

    <div className="container-max-width">

      <Presentation presentationName="Tongeats" 
                    presentationType="Logo Design"
                    presentationDescription="Designing a logo with a food and travel photoblog based in Manila." 
                    presentationImage={TongeatsCollage} 
      />

    </div>

    <div className="clear-both" />

    <div className="inner-studies-fullwidth">
      <CenterText centerHeading="Design Goal: Asian elements, with a fun modern feel"
                  centerContent={`The main design goal is to make a logo that's representative of the client's personality, and present it with a fun vibe to appeal to like minded people who also like food blogs.`}
                  centerContent2={`Upon the initial meeting with the client, I facilitated a simple interview to get to know them, and to help them express what they wanted in the design. I would research for pegs of logos and design elements of how I visualize the logo should be. After some more discussions, I was then was able to create the initial look and feel.`}
      />
    </div>

    <Studies studiesList={TongeatsStudies}
    />

    <div className="container-max-width">

      <FinalOutput finalHeading="Final Output"
                      finalContent="With some discussion with the client about which elements and designs they liked best, we were able to finalize with this design."
                      finalImage={TongeatsFinal}
      />

      <Suggestions />
      
    </div>

  </React.Fragment>
)


export default Tongeats
