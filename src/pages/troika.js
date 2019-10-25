import React from "react"
import SEO from "../components/seo"

import Presentation from "../components/Presentation"
import CenterText from "../components/CenterText"
import Suggestions from "../components/Suggestions"
import Studies from "../components/Studies"
import DiscussSection from "../components/DiscussSection"
import GallerySec from "../components/GallerySec"
import FinalOutput from "../components/FinalOutput"

import TroikaBanner from "../images/troika/banner2.jpg"
import TroikaStudy0 from "../images/troika/study-0.jpg"
import TroikaStudy1 from "../images/troika/study-1.jpg"
import TroikaStudy2 from "../images/troika/study-2.jpg"
import TroikaStudy3 from "../images/troika/study-3.jpg"
import TroikaStudy4 from "../images/troika/study-4.jpg"
import TroikaStudy5 from "../images/troika/study-5.jpg"
import TroikaStudy6 from "../images/troika/study-6.jpg"
import TroikaStudy7 from "../images/troika/study-7.jpg"
import TroikaFinal from "../images/troika/final-logo.jpg"

import "../styles/site.scss"


const TroikaStudies =
[{
    name: "Study 0",
    image: TroikaStudy0
},
{
    name: "Study 1",
    image: TroikaStudy1
},
{
    name: "Study 2",
    image: TroikaStudy2
},
{
    name: "Study 3",
    image: TroikaStudy3
},
{
    name: "Study 4",
    image: TroikaStudy4
},
{
    name: "Study 5",
    image: TroikaStudy5
},
{
    name: "Study 6",
    image: TroikaStudy6
},
{
    name: "Study 7",
    image: TroikaStudy7
}]



const Troika = () => (
  <React.Fragment>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="clear-both" />

    <div className="container-max-width">

      <Presentation presentationName="Troika" 
                    presentationType="Brand Design"
                    presentationDescription="A local shoe collection that focuses on boat shoes and various other leather shoes for men." 
                    presentationImage={TroikaBanner} 
      />

    </div>

    <div className="clear-both" />

    <div className="inner-studies-fullwidth">
      <CenterText centerHeading="Design Goal: Create branding that identifies well with the product's style"
                  centerContent={`Upon the initial meeting with the client, I facilitated a simple interview to get to know them, and to help them express what they wanted in the design. The client would also share previous designs and collaterals they had, that would serve as the style guides for the logo that we're about to create.`}
                  centerContent2={``}
      />
    </div>

    <Studies studiesList={TroikaStudies}
    />

    <div className="container-max-width">

      <FinalOutput finalHeading="Final Output"
                      finalContent="With some discussion with the client about which elements and designs they liked best, we were able to finalize with this design."
                      finalImage={TroikaFinal}
      />

      <Suggestions />
      
    </div>

  </React.Fragment>

)


export default Troika
