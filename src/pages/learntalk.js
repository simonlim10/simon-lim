import React from "react"
import SEO from "../components/seo"

import Presentation from "../components/Presentation"
import CenterText from "../components/CenterText"
import Suggestions from "../components/Suggestions"
import DiscussSection from "../components/DiscussSection"
import GallerySec from "../components/GallerySec"
import ColorPalette from "../components/ColorPalette"
import FinalOutput from "../components/FinalOutput"
import VideoPresentation from "../components/VideoPresentation"

import LearntalkLogo from "../images/learntalk/learntalk-logo.jpg"
import WalkthroughVideo from "../images/learntalk/walkthrough.mp4"

import "../styles/site.scss"


const LearntalkColors = [
  {
    hex: "#1C3D49",
    name: "dark blue"
  },
  {
    hex: "#00ADF0",
    name: "learntalk blue"
  },
  {
    hex: "#41CED9",
    name: "bluegreen"
  },
  {
    hex: "#FD5C63",
    name: "red"
  },
  {
    hex: "#FCBF69",
    name: "orange"
  },
  {
    hex: "#BAD16E",
    name: "green"
  }
]

const IllustrationsImages =
[{
    src: "/images/learntalk/banner/banner-50offsale.jpg",
    thumbnail: "/images/learntalk/banner/thumb-banner-50offsale.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Banner - 50% Off Sale"
},
{
    src: "/images/learntalk/banner/banner-buy1get2.jpg",
    thumbnail: "/images/learntalk/banner/thumb-banner-buy1get2.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Banner - Buy 1 Get 2"
},
{
    src: "/images/learntalk/banner/banner-ielts.jpg",
    thumbnail: "/images/learntalk/banner/thumb-banner-ielts.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Banner - IELTS"
},
{
    src: "/images/learntalk/banner/banner-livelessons.jpg",
    thumbnail: "/images/learntalk/banner/thumb-banner-livelessons.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Banner - Live Lessons"
},
{
    src: "/images/learntalk/banner/banner-mobileapp.jpg",
    thumbnail: "/images/learntalk/banner/thumb-banner-mobileapp.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Banner - Mobile App"
},
{
    src: "/images/learntalk/banner/banner-press-forbes.jpg",
    thumbnail: "/images/learntalk/banner/thumb-banner-press-forbes.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Banner - We're in Forbes"
},
{
    src: "/images/learntalk/banner/banner-referafriend.jpg",
    thumbnail: "/images/learntalk/banner/thumb-banner-referafriend.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Banner - Refer a Friend"
}]

const UIImages =
[{
    src: "/images/learntalk/ui/webrtc.jpg",
    thumbnail: "/images/learntalk/ui/webrtc.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Custom WebRTC Checker for Video Room"
},
{
    src: "/images/learntalk/ui/teachers-list.png",
    thumbnail: "/images/learntalk/ui/thumb-teachers-list.png",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Teacher List"
},
{
    src: "/images/learntalk/ui/signup-1.jpg",
    thumbnail: "/images/learntalk/ui/signup-1-thumb.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Sign-up Flow, Step 1"
},
{
    src: "/images/learntalk/ui/signup-2.jpg",
    thumbnail: "/images/learntalk/ui/signup-2-thumb.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Sign-up Flow, Step 2"
},
{
    src: "/images/learntalk/ui/signup-3.jpg",
    thumbnail: "/images/learntalk/ui/signup-3-thumb.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Sign-up Flow, Step 3"
}]

const CorpImages =
[{
    src: "/images/learntalk/corporate/monthly-report.jpg",
    thumbnail: "/images/learntalk/corporate/thumb-monthly-report.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Corporate Dashboard - Monthly Report"
},
{
    src: "/images/learntalk/corporate/user-summary-page-modal.jpg",
    thumbnail: "/images/learntalk/corporate/thumb-user-summary-page-modal.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Corporate Dashboard - User Summary Modal"
},
{
    src: "/images/learntalk/corporate/add-students.jpg",
    thumbnail: "/images/learntalk/corporate/thumb-add-students.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Corporate Dashboard - Add Students"
}]

const CheckoutImages =
[{
    src: "/images/learntalk/checkout/payment-failed.jpg",
    thumbnail: "/images/learntalk/checkout/thumb-payment-failed.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Checkout UI - Checkout Form"
},
{
    src: "/images/learntalk/checkout/payment-successful.jpg",
    thumbnail: "/images/learntalk/checkout/thumb-payment-successful.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Checkout UI - Payment Successful"
},
{
    src: "/images/learntalk/checkout/payment-unsuccessful.jpg",
    thumbnail: "/images/learntalk/checkout/thumb-payment-unsuccessful.jpg",
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    caption: "Learntalk - Checkout UI - Payment Unsuccessful"
}]

const PageImages =
[{
    src: "/images/learntalk/pages/courses.jpg",
    thumbnail: "/images/learntalk/pages/thumb-courses.jpg",
    thumbnailWidth: 180,
    thumbnailHeight: 180,
    caption: "Learntalk - Courses"
}]


const KidsImages =
[{
    src: "/images/learntalk/kids/progress-chart.jpg",
    thumbnail: "/images/learntalk/kids/thumb-progress-chart.jpg",
    thumbnailWidth: 180,
    thumbnailHeight: 180,
    caption: "Kids Progress Chart - Horizontal"
},
{
    src: "/images/learntalk/kids/progress-chart-vertical.png",
    thumbnail: "/images/learntalk/kids/thumb-progress-chart-vertical.jpg",
    thumbnailWidth: 180,
    thumbnailHeight: 180,
    caption: "Kids Progress Chart - Vertical"
}]



const Learntalk = () => (
  <React.Fragment>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="clear-both" />

    <div className="container-max-width">

      <Presentation presentationName="Learntalk" 
                    presentationType="Web UI / Design"
                    presentationDescription="My work with a startup online English learning platform that focuses on providing the best English lessons from professional native-speaking English teachers all over the world." 
                    presentationImage={LearntalkLogo} 
      />

    </div>

    <CenterText centerHeading="Design Goals: To make studying English a fun experience"
                centerContent={`Usually, studying is correlated with long hours of reading and learning that requires your full focus and energy, and can seem a tiring and gruelling task which may discourage people. We designed the core of the platform's approach to be fun and friendly, so to make users feel that studying English is enjoyable.`}
                centerContent2={``}
    />

    <div className="container-max-width">

      <ColorPalette colorList={LearntalkColors} />

      <VideoPresentation  videoHeading="Video Walkthrough"
                          videoContent="This is the main walkthrough, designed to give first time users a quick and sufficient idea what they can do in the dashboard."
                          videoPoster="images/learntalk/video-thumb.jpg"
                          videoUrl={WalkthroughVideo}
      />

      <GallerySec discussHeading="Corporate Dashboard"
                  discussContent={`Learntalk provides B2B services also to companies who need to bring English lessons to their workforce.`}
                  discussContent2={`With this, businesses need to see simple, easy-to-understand metrics to see the improvements of their people as they progress in learning English with Learntalk.`}
                  discussImage={CorpImages}
                  ImageSide="left"
      />

      <GallerySec discussHeading="Chart Design"
                  discussContent={`Due to how English can get very complex to teach, we wanted to simplify it into lesson steps for users. \n Turning info into visuals help people absorb it easier.`}
                  discussContent2={`In this case, we create designs to show how a True Beginner (like a child) would progress into English fluency.`}
                  discussImage={KidsImages}
                  ImageSide="right"
      />

      <GallerySec discussHeading="Checkout & Other Forms"
                  discussContent={`Incorporating friendly elements into the checkout form would help create less tension or nervousness around payment process. Also, we don't leave out the standard elements that are important, that users look out for.`}
                  discussImage={CheckoutImages}
                  ImageSide="left"
      />

      <GallerySec discussHeading="UI Elements"
                  discussContent={`Various elements that are designed to make a seamless experience across different features and user experiences.`}
                  discussImage={UIImages}
                  ImageSide="right"
      />

      <GallerySec discussHeading="Page Design"
                  discussContent={`As per usual in development process, we would design the pages first to quickly explore the content & ideas on how we would creatively present an idea or a product to users.`}
                  discussImage={PageImages}
                  ImageSide="left"
      />

      <GallerySec discussHeading="Illustrations"
                  discussContent={`Reusing existing elements and assets that we already had, we came up with new banners to use for several E-mail marketing campaigns. \n 
                    Credits: Some icons and vector illustrations reused were done by other designers in the Learntalk team.`}
                  discussImage={IllustrationsImages}
      />

      <FinalOutput 
      />

      <Suggestions />

    </div>

  </React.Fragment>
)

export default Learntalk
