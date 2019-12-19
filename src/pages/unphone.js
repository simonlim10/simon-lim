import React from "react"
import SEO from "../components/seo"

import Presentation from "../components/Presentation"
import CenterText from "../components/CenterText"
import Suggestions from "../components/Suggestions"
import GallerySec from "../components/GallerySec"
import ColorPalette from "../components/ColorPalette"
import FinalOutput from "../components/FinalOutput"

import UnphoneMockup from "../images/unphone/unphone-mockup2.jpg"
import UnphoneUX from "../images/unphone/earning-ux2.jpg"
import UnphoneLogo from "../images/unphone/final-logo2.jpg"

import "../styles/site.scss"


const UnphoneColors =
[{
    hex: "#ff7417",
    name: "unphone orange"
},
{
    hex: "#ff9525",
    name: "light orange"
},
{
    hex: "#ffca12",
    name: "orange yellow"
}]

const DigitalImages =
[{
    src: "/images/unphone/digital/digital-launching.jpg",
    thumbnail: "/images/unphone/digital/thumb-digital-launching.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone - Digital Marketing - Launching"
},
{
    src: "/images/unphone/digital/digital-discount.jpg",
    thumbnail: "/images/unphone/digital/thumb-digital-discount.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone - Digital Marketing - Discount Promo"
},
{
    src: "/images/unphone/digital/digital-free.png",
    thumbnail: "/images/unphone/digital/thumb-digital-free.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone - Digital Marketing - Free Promo"
}]

const CollateralsImages =
[{
    src: "/images/unphone/collaterals/card-cover.jpg",
    thumbnail: "/images/unphone/collaterals/thumb-card-cover.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone - Business Card (Cover)"
},
{
    src: "/images/unphone/collaterals/card-back.jpg",
    thumbnail: "/images/unphone/collaterals/thumb-card-back.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone - Business Card (Cover)"
},
{
    src: "/images/unphone/collaterals/door-sticker.jpg",
    thumbnail: "/images/unphone/collaterals/thumb-door-sticker.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone - Door Sticker"
},
{
    src: "/images/unphone/collaterals/how-to-steps.jpg",
    thumbnail: "/images/unphone/collaterals/thumb-how-to-steps.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone - How-to Steps"
}]

const ScreenImages =
[{
    src: "/images/unphone/screens/screen-reminders.jpg",
    thumbnail: "/images/unphone/screens/thumb-screen-reminders.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone App - Earning page - Session reminders"
},
{
    src: "/images/unphone/screens/screen-coupons.jpg",
    thumbnail: "/images/unphone/screens/screen-coupons.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone App - Coupons"
},
{
    src: "/images/unphone/screens/screen-claimed.jpg",
    thumbnail: "/images/unphone/screens/thumb-screen-claimed.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone App - Coupon Details - Claimed"
},
{
    src: "/images/unphone/screens/screen-unpaid.jpg",
    thumbnail: "/images/unphone/screens/thumb-screen-unpaid.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone App - Coupon Details - Unpaid"
},
{
    src: "/images/unphone/screens/screen-unclaimed.jpg",
    thumbnail: "/images/unphone/screens/thumb-screen-unclaimed.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone App - 4 Coupon Details - Unclaimed"
},
{
    src: "/images/unphone/screens/screen-points.jpg",
    thumbnail: "/images/unphone/screens/thumb-screen-points.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone App - Purchase Details - Points"
},
{
    src: "/images/unphone/screens/screen-buy-large.jpg",
    thumbnail: "/images/unphone/screens/thumb-screen-buy-large.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone App - Buy (Large View)"
},
{
    src: "/images/unphone/screens/screen-buy-list.jpg",
    thumbnail: "/images/unphone/screens/thumb-screen-buy-list.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone App - Buy (List View)"
},
{
    src: "/images/unphone/screens/screen-buy-merchants.jpg",
    thumbnail: "/images/unphone/screens/thumb-screen-buy-merchants.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "UnPhone App - Buy (Merchants View)"
}]

const Unphone = () => (
  <React.Fragment>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="clear-both" />

    <div className="container-max-width">

      <Presentation presentationName="UnPhone" 
                    presentationType="App Design"
                    presentationDescription="A small company I co-founded that gives rewards to students for locking their phones to focus in class. All the designs from mockup to UX is by me." 
                    presentationImage={UnphoneMockup} 
      />

    </div>

    <div className="clear-both" />

    <div className="inner-studies-fullwidth">

      <CenterText centerHeading="Design Goal: Fun, playful &  active community"
                  centerContent={`To create an identity for the UnPhone app that's target marketed towards college students.`}
                  centerContent2={`The main design goal is to present UnPhone as a fun and friendly app, and create a strong sense of community within the app to let users feel it's a lively and active system for them to enjoy and benefit from.`}
      />

    </div>  

    <div className="container-max-width">

      <ColorPalette colorList={UnphoneColors} />

    </div>

    <div className="container-max-width">

      <FinalOutput finalHeading="Final Output"
                      finalContent="We went through a short design study to create this logo, which would also dictate and influence the designs that we will create, following a specific look and feel that would shape the identity of UnPhone."
                      finalImage={UnphoneLogo}
      />

      <GallerySec discussHeading="App Design"
                  discussContent={`We designed some elements to intentionally go beyond the typical structured appearance of an app.`}
                  discussContent2={`While we aimed to make the design more playful, we also maintained the alignments and proportions of a well designed app.`}
                  discussImage={ScreenImages}
                  ImageSide="left"
      />

      <FinalOutput finalHeading="UX Design"
                      finalContent="An insight on how the UnPhone App was designed to behave. A prime example of which is the very main page- where students will spend most of their time on screen. The ease and convenience of the user is in mind in each outcome and step."
                      finalImage={UnphoneUX}
      />

      <GallerySec discussHeading="Collateral Designs"
                  discussContent={`From prints, such as flyers and in-store posters, we made sure the message of the graphics is in line with the design goal.`}
                  discussImage={CollateralsImages}
                  ImageSide="right"
      />

      <GallerySec discussHeading="Digital Marketing"
                  discussContent={`These are a selection of the digital graphics that we produced for social media marketing & other content.`}
                  discussImage={DigitalImages}
                  ImageSide="left"
      />

      <Suggestions />
      
    </div>

  </React.Fragment>
)


export default Unphone
