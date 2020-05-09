/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import TransitionLink from "gatsby-plugin-transition-link"
import gsap from 'gsap'

// Transition Link Component
export const ListTLink = props => (
  //<li style={{ display: `flex`, flexDirection:`row`, flexWrap:`wrap`, marginRight: `10rem`, padding:`0`}}>
    <TransitionLink style={{color:`white`, textDecoration:`none`}}
    to={props.to}
    entry={props.entry}
    exit={props.exit}
    trigger={props.trigger}
    >
    {props.children}
    </TransitionLink>
  //</li>
)

// hidden object animation
export function animateObjects() {
  var tl = gsap.timeline();
  tl.to('ul.transition li', {duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
  tl.to('ul.transition li', {duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
}

// new content to be faded in after animation
export function newContent(node) {
  return gsap.from(node.querySelectorAll('h1, h2, h3, h4, p, a, img, table, ul, pre'),
  {
    opacity: 0,
    delay: 1,
    duration: 2,
    stagger: 0.08,
  })
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}/>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <ul className="transition">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
