import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const SecondPage = () => (
  <p>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2.</p>
    <p>If everything worked right, a sequence of purple bars slid in and out of the screen briefly, and this page loaded correctly.</p>
    <p>To go back to the homepage with the animation, use the <b>Gatsby GSAP</b> button above.</p>
    <Link to="/">Go back to the homepage (without animating)</Link>
  </p>
)

export default SecondPage
