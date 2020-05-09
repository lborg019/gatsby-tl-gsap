import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Gatsby + Transition Link + GSAP</h1>
    <p>This is a Gatsby starter project bundled with <a href="https://transitionlink.tylerbarnes.ca/">Transition Link</a> and <a href="https://greensock.com/gsap/">GSAP</a>.</p>
    <p>To test the animations, use the buttons on the header to navigate between <b>Page 2</b> and <b>Home</b></p>
    <p>This animation was <strike>copied</strike> inspired by <a href="https://www.youtube.com/watch?v=aMucZErEdZg">Gary Simon's</a> example, but massaged to work with The Great Gatsby.js (pun intended).</p>
    <p>You will also notice that the layout tags were removed from index.js and page-2.js. That is because adding the layout component with TransitionLinks will nest the layout inside itself, so gatsby-config.js is used instead. Reference: <a href="https://transitionlink.tylerbarnes.ca/docs/installation/">Link</a></p>
    <p>Feel free to modify this to your needs.</p>
    <p>Repo: <a href="https://github.com/lborg019/gatsby-tl-gsap">Github</a></p>
    <div style={{ maxWidth: `801px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2 (without animating)</Link>
  </>
)

export default IndexPage
