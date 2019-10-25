import React from "react"
import SEO from "../components/seo"

import Presentation from "../components/Presentation"
import CenterText from "../components/CenterText"
import Suggestions from "../components/Suggestions"
import DiscussSection from "../components/DiscussSection"
import GallerySec from "../components/GallerySec"
import FinalOutput from "../components/FinalOutput"

import KPWIllustration from "../images/kinmopw/illustration.jpg"
import KPWNewsletter from "../images/kinmopw/newsletter2.jpg"

import "../styles/site.scss"


const PackageImages =
[{
    src: "/images/kinmopw/package-1.jpg",
    thumbnail: "/images/kinmopw/thumb-package-1.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "KinmoPW Corporation - Package Design - Homesafe"
},
{
    src: "/images/kinmopw/package-2.jpg",
    thumbnail: "/images/kinmopw/thumb-package-2.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "KinmoPW Corporation - Package Design - Newstar"
}]


class KinmoPW extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <React.Fragment>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div className="clear-both" />

      <div className="container-max-width">

        <Presentation presentationName="KinmoPW" 
                      presentationType="Graphic Design"
                      presentationDescription="My work with a local electronics distributing company that supplies a wide variety of personal and technical electronics & applications to over hundreds of consumer hardware stores across the nation." 
                      presentationImage={KPWIllustration} 
        />

      </div>

      <div className="clear-both" />

      <div className="inner-studies-fullwidth">

        <CenterText centerHeading="Design Goal: User-friendly electronics"
                    centerContent={`Electrical tools and modern appliances can be complicated to use, but there can be many conveniences to be taken advantage of for any person.`}
                    centerContent2={`With the use of user-friendly graphics and easy to read instructions, the designs aim to make electronics much simpler for people to use them and be part of their daily lives.`}
        />

      </div>  

      <div className="container-max-width">

        <DiscussSection discussHeading="Vector Illustration"
                        discussContent="Creating intuitive and simple graphics to better explain how electronics operate and how to use them are important. The more users have a good understanding of the product, the more they will enjoy and maximize the use."
                        discussImage={KPWIllustration}
        />

        <GallerySec discussHeading="Package Design"
                    discussContent={`A few samples of package design, created for different branding and models.`}
                    discussImage={PackageImages}
                    ImageSide="left"
        />

        <FinalOutput finalHeading="Newsletter Design"
                        finalContent="From the photography down to the layout design, conceptualized is a piece that highlights the Halogen bulb type Emergency light."
                        finalImage={KPWNewsletter}
        />

        <Suggestions />
        
      </div>

    </React.Fragment>
    )
  }
}


export default KinmoPW
