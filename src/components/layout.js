/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Hero from "./hero"
import Transition from './Transition';

import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'; 
import categDev from "../images/categ-dev.png"

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="laymain-container">
          <main>
            {children}
          </main>

          <footer>

            <div className="left-section">
              Let's make the complicated simple. 
            </div>

            <div className="space-between"></div>

            <div className="right-section">
              <a href="/" className="footer-logo">
                <img src={categDev} /> simon-lim
              </a>
            </div>

          </footer>

        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
