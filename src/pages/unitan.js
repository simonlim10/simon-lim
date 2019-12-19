import React from "react"
import SEO from "../components/seo"

import Presentation from "../components/Presentation"
import CenterText from "../components/CenterText"
import Suggestions from "../components/Suggestions"
import DiscussSection from "../components/DiscussSection"
import GallerySec from "../components/GallerySec"
import FinalOutput from "../components/FinalOutput"

import PresentationImage from "../images/unitan/presentation-image.jpg"
import CardFront from "../images/unitan/card-front.jpg"
import CardBack from "../images/unitan/card-back.jpg"
import UnitanFinal from "../images/unitan/final-logo.jpg"

import "../styles/site.scss"


const PreviewImages =
[{
    src: "/images/unitan/preview-alternate.jpg",
    thumbnail: "/images/unitan/thumb-preview-alternate.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UNITAN Construction - Alternate Study"
},
{
    src: "/images/unitan/preview-flat.jpg",
    thumbnail: "/images/unitan/thumb-preview-flat.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UNITAN Construction - Preview (Flat)"
},
{
    src: "/images/unitan/preview-angled.jpg",
    thumbnail: "/images/unitan/preview-angled.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UNITAN Construction - Preview (Angled)"

}]

const Unitan = () => (
  <React.Fragment>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="clear-both" />

    <div className="container-max-width">

      <Presentation presentationName="UNITAN" 
                    presentationType="Identity Design"
                    presentationDescription="A construction company based in Metro Manila, where I was commissioned to update their corporate branding's style and image to have a more modern and strong presence." 
                    presentationImage={PresentationImage} 
      />

    </div>

    <div className="clear-both" />

    <div className="inner-studies-fullwidth">
      <CenterText centerHeading="Design Goal: Update and modernize the branding"
                  centerContent={``}
                  centerContent2={`Upon having an initial meeting with the client, I facilitated a simple interview to get to know them, and to help them express what they wanted in the design. I would research for pegs of logos and design elements of how I visualize the logo should be. After some more discussions, I was then was able to create the initial look and feel.`}
      />
    </div>

    <div className="container-max-width">
      <FinalOutput finalHeading="Flattened + Realigned Logo"
                      finalContent={`While we had to retain the original logo's form and concept, we were allowed to update the style: Remove unnecessary gradients and shadows to allow the logo to take a more minimal and flat design, and make the lines of the logo's angles & alignments more proportional. 

                        With some discussion with the client about which elements and designs they liked best, we were able to finalize with this design.`}
                      finalImage={UnitanFinal}
      />
      <DiscussSection discussHeading="Back Design"
                      discussContent="For added effect, the back side was utilized as a space dedicated to the logo only. This gives more exposure to the logo and creates more impact for the company's identity."
                      discussImage={CardBack}
      />
      <DiscussSection discussHeading="Front Design"
                      discussContent="Since the client wanted a lot of information on the card, it was a challenge to fit it in the size of a business card. But it would still be possible with just some smart use of space."
                      discussImage={CardFront}
      />
      <GallerySec discussHeading="Preview Designs"
                  discussContent={`As an added study, previews were created for the client to properly visualize the design's entire aesthetic.`}
                  discussImage={PreviewImages}
                  ImageSide="left"
      />
      <Suggestions />
    </div>

  </React.Fragment>
)

export default Unitan
