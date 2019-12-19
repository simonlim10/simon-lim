import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ResumeTech from "../components/ResumeTech"
import ResumeJob from "../components/ResumeJob"

const Resume = ({ presentationName }) => (

  <div className="resume-container container-max-width">

    <div className="resume-heading">
      <img src="/images/image-simon.png" />
      <div>
        <h1>Simon Lim </h1>
        <h3 className="tagline">Let's make the complicated simple.</h3>
        <h3 className="tagline">Learns constantly to build  designs & interfaces that people will love.</h3>
        <p>
          Social, and thrives in a team setting.&nbsp;&nbsp; 
          Understands the importance of clear communication.&nbsp;&nbsp; 
          Maintains a positive attitude!&nbsp;&nbsp; 
          Based in Manila, Metro Manila.&nbsp;&nbsp; 
          Can solve a Rubik's cube in 10 seconds average.&nbsp;&nbsp; 
          Loves to watch films and casually does street & travel photography.&nbsp;&nbsp; 
        </p>
      </div>
    </div>

    <div className="resume-info">
      <div className="resume-tech">
        <div className="tech-category">
          <h3>Technologies used:</h3>
          <ResumeTech techIcon="/images/tech/tech-react.png"
                      techName="ReactJS"
          />
          <ResumeTech techIcon="/images/tech/tech-gatsby.png"
                      techName="GatsbyJS"
          />
          <ResumeTech techIcon="/images/tech/tech-npm.png"
                      techName="npm"
          />
          <ResumeTech techIcon="/images/tech/tech-rails.png"
                      techName="Ruby on Rails"
          />
          <ResumeTech techIcon="/images/tech/tech-sass.png"
                      techName="SCSS"
          />
          <ResumeTech techIcon="/images/tech/tech-haml.png"
                      techName="HAML"
          />
          <ResumeTech techIcon="/images/tech/tech-bootstrap.png"
                      techName="Bootstrap"
          />
          <ResumeTech techIcon="/images/tech/tech-wordpress.png"
                      techName="Wordpress"
          />
          <ResumeTech techIcon="/images/tech/tech-php.png"
                      techName="PHP"
          />
        </div>

        <div className="tech-category items-text-two-lines">
          <br/>
          <div className="category-space" />
          <h3>Design software:</h3>
          <ResumeTech techIcon="/images/tech/tech-ps.png"
                      techName="Adobe Photoshop"
          />
          <ResumeTech techIcon="/images/tech/tech-ai.png"
                      techName="Adobe Illustrator"
          />
          <ResumeTech techIcon="/images/tech/tech-pr.png"
                      techName="Adobe Premiere"
          />
          <ResumeTech techIcon="/images/tech/tech-ae.png"
                      techName="Adobe After Effects"
          />
          <ResumeTech techIcon="/images/tech/tech-lr.png"
                      techName="Adobe Lightroom"
          />
          <ResumeTech techIcon="/images/tech/tech-invision.png"
                      techName="Invision Prototyping"
          />
          <ResumeTech techIcon="/images/tech/tech-marvel.png"
                      techName="Marvel Prototyping"
          />
        </div>
      </div>

      <div className="resume-jobs">
        <ResumeJob jobCompany="Learntalk"
                    jobLogo="/images/jobs/job-learntalk.png"
                    jobTitle="UI / Front-end Web Developer & Designer"
                    jobYear="2017-2019"
        >
          <li><div className="bullet-point">></div> Creating high-fidelity mockups for new sections, features and pages, and facilitating discussions about product changes with the entire team</li>
          <li><div className="bullet-point">></div> Collaborated with other departments for needed features, and designed them with the best of usability, scalability and development efficiency in mind. Then relaying the plan to the development team</li>
          <li><div className="bullet-point">></div> Developed UI and some front-end features with HAML/SCSS/Bootstrap for most features, with all the UI modern standards for responsiveness and cross browser testing, encoding translations for elements and pages that need it </li>
          <li><div className="bullet-point">></div> Developed a few backend features and fixes with Ruby on Rails </li>
        </ResumeJob>
        <ResumeJob jobCompany="UnPhone"
                    jobLogo="/images/jobs/job-unphone.png"
                    jobTitle="Co-founder, Product & Design Manager"
                    jobYear="2016-2017"
        >
          <li><div className="bullet-point">></div> Conceptualized the entire app design and most of the features’ behaviors and uses, created high-fidelity mockups for all screens of the app </li>
          <li><div className="bullet-point">></div> Designed the logo and identity of the app, and determining how the brand is presented across different formats and presentations as we make them, making sure there is consistency in look, feel and direction </li>
          <li><div className="bullet-point">></div> Facilitated discussions with other partners to gather thoughts and ideas for the app </li>
          <li><div className="bullet-point">></div> Planning with the development team, and keeping track of our main objectives and priorities. Also communicated to ensure features were developed exactly as designed </li>
          <li><div className="bullet-point">></div> Created various graphic designs, collateral designs for social media marketing, printouts, and such </li>
        </ResumeJob>
        <ResumeJob jobCompany="Reality Box"
                    jobLogo="/images/jobs/job-rb.png"
                    jobTitle="Partner, Videographer & Post-Production Editor"
                    jobYear="2012-2016"
        >
          <li><div className="bullet-point">></div> Shot for various personal events, corporate events, and video productions as a Videographer </li>
          <li><div className="bullet-point">></div>  Did the editing for live footage videos in Highlights length and also Fully Authored length, and also handled post-processing graphics for projects that needed extra video effects, opening billboards </li>
          <li><div className="bullet-point">></div> Worked on storyboarding and scene planning with the team, discussing concepts on how to convey the messages or ideas for the project’s goals </li>
          <li><div className="bullet-point">></div> Helped bring in new clients by proposing video or graphics projects to companies </li>
        </ResumeJob>
        <ResumeJob jobCompany="KinmoPW Corporation"
                    jobLogo="/images/jobs/job-kinmopw.png"
                    jobTitle="Web Developer & Graphic Designer"
                    jobYear="2011-2014"
        >
          <li><div className="bullet-point">></div> Redesigned product packages to help improve product usability and user-friendliness; made product designs more relatable and understandable to consumers </li>
          <li><div className="bullet-point">></div> Created various graphic designs, brand designs and other collaterals that pushed forward old brands and shaped better identities for them </li>
          <li><div className="bullet-point">></div> Redesigned and redeveloped the company website </li>
          <li><div className="bullet-point">></div> Proposed and initially led an opportunity to expand online sales to a mainstream local shopping website </li>
          <li><div className="bullet-point">></div> Facilitated trainings for two other co-workers on how to do product photography and photo editing, what the workflow should be </li>
        </ResumeJob>
        <ResumeJob jobCompany="De La Salle-College of St. Benilde"
                    jobLogo="/images/jobs/job-benilde.png"
                    jobTitle="AB-Multimedia Arts, Majoring in Interactive Design"
                    jobYear="Class of 2011"
        >

        </ResumeJob>
      </div>
    </div>

  </div>
)


export default Resume
